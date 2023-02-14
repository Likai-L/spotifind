export default function ToolTip({ children, tooltip }) {
  return (
    <div className="shrink-0 group relative inline-block z-10 mb-4">
      {children}
      {tooltip ? (
        <span className="absolute m-auto mt-2 font-semibold invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-secondary text-primary p-1 rounded-lg top-full whitespace-nowrap marker:overflow-show">
          {tooltip}
        </span>
      ) : null}
    </div>
  );
}
