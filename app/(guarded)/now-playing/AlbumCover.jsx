import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion as m } from 'framer-motion';

export default function AlbumCover({ src, width, height, classNames, uri }) {
  return (
    <AnimatePresence mode="wait">
      <m.div
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.1, ease: [0, 0.71, 0.2, 1.01] }}>
        <Link className="flex shrink-0" href={`/songs/${uri}`}>
          <Image
            alt="album-cover"
            className={`rounded-3xl cursor-pointer transition duration-200 ease-out hover:scale-105 drop-shadow-[0_0.2rem_0.3rem_rgb(0,0,0,0.6)] ${classNames}`}
            height={height}
            src={src}
            width={width}
          />
        </Link>
      </m.div>
    </AnimatePresence>
  );
}
