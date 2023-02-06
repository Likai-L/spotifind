import Link from 'next/link';

export default function Button(props) {
  const { content, path, target } = props;

  return (
    <Link href={path} target={target}>
      <button
        className="btn bg-button text-primary font-bold py-2 px-4 rounded-2xl"
        type="button"
        {...props}>
        {content}
      </button>
    </Link>
  );
}
