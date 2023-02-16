export default function IconButton({
  Icon,
  hidden,
  onClick,
  isActive,
  color,
  children,
  position,
  disabled,
  liked,
  ...props
}) {
  return (
    <button
      className={`flex justify-evenly items-center mr-4 ${position} ${
        liked ? 'text-pink-300' : ''
      } ${color ? `hover:${color}` : ''} ${isActive ? color : ''}`}
      disabled={disabled}
      onClick={onClick}
      type="button">
      <span className={`${children != null ? 'mr-[5px]' : ''} ${hidden}`}>
        <Icon />
      </span>
      {children}
    </button>
  );
}
