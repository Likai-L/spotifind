import Link from 'next/link';

export default function Button(props) {
  const { content, path, fontSize, padding } = props;
  const fontSizeClass = fontSize || 'text-xl';
  const paddingClass = padding || 'py-2 px-4';
  return (
    <Link href={path} prefetch={false}>
      <button
        className={`btn bg-button text-primary font-bold rounded-2xl ${fontSizeClass} ${paddingClass} button-hover-pulse`}
        type="button"
        {...props}>
        {content}
      </button>
    </Link>
  );
}
