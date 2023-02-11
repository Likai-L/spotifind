import Image from 'next/image';

export default function AlbumCover({ src, width, height, classNames }) {
  return (
    <Image
      alt="album-cover"
      className={`rounded-3xl  cursor-pointer transition duration-200 ease-out hover:scale-105 ${classNames}`}
      height={height}
      src={src}
      width={width}
    />
  );
}
