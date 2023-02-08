import Link from 'next/link';

export default function Button(props) {
  const { content, path } = props;

  return (
    <Link href={path} prefetch={false}>
      <button
        className="btn bg-button text-primary font-bold text-xl py-2 px-4 rounded-2xl button-hover-pulse"
        type="button"
        {...props}>
        {content}
      </button>
    </Link>
  );
}
