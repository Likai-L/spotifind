export default function ToolTip({ children, tooltip }) {
  return (
    <div className="flex shrink-0 group relative inline-block">
      {children}
      <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-blue-500 text-primary p-1 rounded-xl absolute top-full mt-2 z-10 whitespace-nowrap">
        {tooltip}
      </span>
    </div>
  );
}
