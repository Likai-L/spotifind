import Image from 'next/image';
import Link from 'next/link';

export default function AlbumCover({ src, width, height, classNames, uri }) {
  return (
    <Link className="flex shrink-0" href={`/songs/${uri}`}>
      <Image
        alt="album-cover"
        className={`rounded-3xl cursor-pointer transition duration-200 ease-out hover:scale-105 ${classNames}`}
        height={height}
        src={src}
        width={width}
      />
    </Link>
  );
}
