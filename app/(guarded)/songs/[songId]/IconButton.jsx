export default function IconButton({
  Icon,
  isActive,
  hover,
  children,
  ...props
}) {
  return (
    <button
      className={`flex justify-evenly items-center mr-4 ${
        hover ? `${hover}` : ''
      }`}
      type="button">
      <span className={`${children ? 'mr-1' : ''}`}>
        <Icon />
      </span>
      {children}
    </button>
  );
}
