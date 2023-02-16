export default function IconButton({
  Icon,
  hidden,
  onClick,
  isActive,
  color,
  children,
  position,
  disabled,
  ...props
}) {
  return (
    <button
      className={`flex justify-evenly items-center mr-4 ${position} ${
        color ? `hover:${color}` : ''
      } ${isActive ? color : ''}`}
      onClick={onClick}
      type="button"
      disabled={disabled}>
      <span className={`${children ? 'mr-1' : ''} ${hidden}`}>
        <Icon />
      </span>
      {children}
    </button>
  );
}
