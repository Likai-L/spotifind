export default function ToolTip({ children, tooltip }) {
  return (
    <div className="flex shrink-0 group relative inline-block z-10">
      {children}
      {tooltip ? (
        <span className="flex font-semibold invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-secondary text-primary p-1 rounded-lg absolute top-full mt-2 whitespace-nowrap text-center marker:overflow-auto">
          {tooltip}
        </span>
      ) : null}
    </div>
  );
}
