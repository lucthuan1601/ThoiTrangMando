import SuccessIcon from "@/assets/icons/SuccessIcon";

function SuccessNotification({ children, className }) {
    return (
        <div
            className={`inline-flex items-center gap-4 rounded-xl bg-[#1abc6a] px-5 py-4 shadow-[0_12px_28px_rgba(0,0,0,0.18)] ${className}`}
        >
            <div className="flex h-7 w-7 items-center justify-center">
                <SuccessIcon />
            </div>

            <p className="text-[16px] font-semibold text-white">{children}</p>
        </div>
    );
}

export default SuccessNotification;