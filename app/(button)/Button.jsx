import Link from 'next/link';
import classNames from 'classnames';

export default function Button(props) {
  const { content, path, addedclasses, prefetch } = props;

  // Will take in addedClasses prop, overwriting any of the same class types set by default here.
  const buttonClasses = classNames(
    'btn bg-button text-primary font-primary font-bold rounded-2xl button-hover-pulse text-xl py-2 px-4',
    addedclasses
  );

  return (
    <Link href={path} prefetch={!!prefetch}>
      <button className={buttonClasses} type="button" {...props}>
        {content}
      </button>
    </Link>
  );
}
