import clsx from "clsx";

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-sm",
        {
          "bg-gray-100 text-gray-500": status === "pending",
          "bg-green-500 text-white": status === "paid",
          "bg-yellow-500 text-white": status === "overdue", // Add more statuses if needed
        }
      )}
    >
      {status === "pending" && "Pending"}
      {status === "paid" && "Paid"}
      {status === "overdue" && "Overdue"}
    </span>
  );
}
