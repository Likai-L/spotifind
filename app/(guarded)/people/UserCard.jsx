import Image from 'next/image';
import Button from 'app/(button)/Button';
import { MESSAGES } from 'public/constants/pathNames';

export default function UserCard(props) {
  const { alt, image, name, distance } = props;
  return (
    <div className="flex max-w-[250px] w-[20%] min-w-[12.5rem] m-5 flex-col justify-evenly bg-primary p-2 h-[95%] max-h-[25rem] rounded-2xl ">
      <div className="sticky aspect-square max-w-full w-auto min-h-[20%] h-[50%] self-center my-3">
        <Image
          alt={alt || 'cute cat'}
          className="rounded-3xl block m-auto aspect-square"
          fill
          src={
            image ||
            'https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg'
          }
        />
      </div>
      <h2 className="text-[1.8vh] text-center font-bold cursor-default">
        {name || 'elons musk'}
      </h2>
      <h2 className="text-[1.8vh] text-center text-secondary cursor-default">
        {distance || '5.6km away'}
      </h2>
      <div className="flex justify-center text-[1.8vh]">
        <Button addedclasses="text-sm" content="Send DM" path={MESSAGES} />
      </div>
    </div>
  );
}
