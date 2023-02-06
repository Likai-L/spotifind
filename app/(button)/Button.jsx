'use client';

import Link from 'next/link';

export default function Button(props) {
  const { text, path } = props;

  // const redirect = e => {
  //   e.preventDefault();
  //   e.stopPropagation();
  // };

  return (
    <Link href={path}>
      <div className="bg-button">
        <button
          className="text-primary w-auto h-15 rounded-2xl"
          // onClick={redirect}
          type="button">
          {text}
        </button>
      </div>
    </Link>
  );
}
