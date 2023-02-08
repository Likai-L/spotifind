import Link from 'next/link';

export default function Button(props) {
  const { content, path, fontSize } = props;
  const fontSizeClass = fontSize || 'text-xl';
  return (
    <Link href={path} prefetch={false}>
      <button
        className={`btn bg-button text-primary font-bold py-2 px-4 rounded-2xl ${fontSizeClass}`}
        type="button"
        {...props}>
        {content}
      </button>
    </Link>
  );
}
