import Link from 'next/link';

export default function Button(props) {
  const { content, path } = props;

  return (
    <Link href={path} prefetch={false}>
      <button
        className="btn bg-button text-primary font-bold text-xl py-2 px-4 rounded-2xl hover:shadow-[0_0_8px_2px_rgba(90,79,116,0.8)]"
        type="button"
        {...props}>
        {content}
      </button>
    </Link>
  );
}
