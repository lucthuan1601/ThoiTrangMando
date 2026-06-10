import {
    createContext,
    useContext,
    useMemo,
    useState,
} from "react";

const CartContext = createContext(null);

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prev) => {
            const existed = prev.find(
                (x) =>
                    x.productId === item.productId &&
                    x.color === item.color &&
                    x.size === item.size
            );

            if (!existed) {
                return [...prev, item];
            }

            return prev.map((x) =>
                x.productId === item.productId &&
                x.color === item.color &&
                x.size === item.size
                    ? {
                          ...x,
                          quantity: x.quantity + item.quantity,
                      }
                    : x
            );
        });
    };

    const removeFromCart = (productId, color, size) => {
        setCartItems((prev) =>
            prev.filter(
                (item) =>
                    !(
                        item.productId === productId &&
                        item.color === color &&
                        item.size === size
                    )
            )
        );
    };

    const updateQuantity = (productId, color, size, quantity) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.productId === productId &&
                item.color === color &&
                item.size === size
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = useMemo(() => {
        return cartItems.reduce(
            (sum, item) => sum + item.quantity,
            0
        );
    }, [cartItems]);

    const cartTotal = useMemo(() => {
        return cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
    }, [cartItems]);

    const value = useMemo(
        () => ({
            cartItems,
            cartCount,
            cartTotal,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
        }),
        [cartItems, cartCount, cartTotal]
    );

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used within CartProvider"
        );
    }

    return context;
};

export { CartProvider, useCart };
export default CartContext;