export default function IconButton({
  Icon,
  isActive,
  color,
  children,
  ...props
}) {
  return (
    <button
      className={`flex justify-evenly items-center mr-4 ${
        color ? `text-${color}` : ''
      }`}
      type="button">
      <span className={`${children ? 'mr-1' : ''}`}>
        <Icon />
      </span>
      {children}
    </button>
  );
}
