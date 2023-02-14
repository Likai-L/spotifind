export default function ToolTip({ children, tooltip }) {
  return (
    <div className="shrink-0 group relative inline-block z-10 mb-4">
      {children}
      {tooltip ? (
        <span className="absolute font-semibold invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-secondary text-primary p-1 rounded-lg top-full mt-2 whitespace-nowrap text-center marker:overflow-show">
          {tooltip}
        </span>
      ) : null}
    </div>
  );
}
