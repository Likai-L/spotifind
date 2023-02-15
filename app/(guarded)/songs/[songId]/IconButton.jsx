export default function IconButton({
  Icon,
  hidden,
  onClick,
  isActive,
  hover,
  children,
  position,
  ...props
}) {
  return (
    <button
      className={`flex justify-evenly items-center mr-4 ${position} ${
        hover ? `${hover}` : ''
      }`}
      type="button"
      onClick={onClick}>
      <span className={`${children ? 'mr-1' : ''} ${hidden}`}>
        <Icon />
      </span>
      {children}
    </button>
  );
}
