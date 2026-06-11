import WarningIcon from "@/assets/icons/WarningIcon";

function WarningNotification({ children, className }) {
    return (
        <div
            className={`inline-flex items-center gap-4 rounded-xl bg-[#f4c20d] px-5 py-4 shadow-[0_12px_28px_rgba(0,0,0,0.18)] ${className}`}
        >
            <div className="flex h-7 w-7 items-center justify-center">
                <WarningIcon />
            </div>

            <p className="text-[16px] font-semibold text-[#1f1f1f]">{children}</p>
        </div>
    );
}

export default WarningNotification;