import { createContext, useMemo, useState } from "react";

const CartContext = createContext(null);

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prev) => {
            const existed = prev.find(
                (x) =>
                    x.productId === item.productId &&
                    x.color === item.color &&
                    x.size === item.size,
            );

            if (!existed) {
                return [...prev, item];
            }

            return prev.map((x) =>
                x.productId === item.productId &&
                x.color === item.color &&
                x.size === item.size
                    ? { ...x, quantity: x.quantity + item.quantity }
                    : x,
            );
        });
    };

    const cartCount = useMemo(() => {
        return cartItems.reduce((sum, item) => sum + item.quantity, 0);
    }, [cartItems]);

    const value = useMemo(
        () => ({
            cartItems,
            cartCount,
            addToCart,
        }),
        [cartItems, cartCount],
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
export { CartProvider };
