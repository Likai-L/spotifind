export default function Container({ children, classNames }) {
  return (
    <div
      // can pass in class names to overwrite default styles
      className={`bg-container rounded-3xl w-[1000px] h-[280px] ${classNames}`}>
      {children}
    </div>
  );
}
