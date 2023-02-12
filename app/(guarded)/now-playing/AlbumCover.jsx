import Image from 'next/image';
import Link from 'next/link';

export default function AlbumCover({
  src,
  width,
  height,
  classNames,
  trackUri
}) {
  return (
    <Link href={`/songs/${trackUri}`}>
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
