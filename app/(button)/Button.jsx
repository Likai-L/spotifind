import Link from 'next/link';
import classNames from 'classnames';

export default function Button(props) {
  const { content, path, addedclasses, prefetch, disabled } = props;
  // Will take in addedClasses prop, overwriting any of the same class types set by default here.
  const buttonClasses = classNames(
    'btn bg-button text-primary font-primary font-bold rounded-2xl button-hover-pulse text-xl py-2 px-4',
    addedclasses,
    disabled ? 'opacity-40' : ''
  );

  if (path === '#') {
    return (
      <button
        className={buttonClasses}
        type="button"
        {...props}
        disabled={disabled}>
        {disabled ? 'loading' : content}
      </button>
    );
  }
  return (
    <Link href={path} prefetch={!!prefetch}>
      <button className={buttonClasses} type="button" {...props}>
        {disabled ? 'Loading' : content}
      </button>
    </Link>
  );
}
