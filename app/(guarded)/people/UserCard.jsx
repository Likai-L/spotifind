import Image from 'next/image';

export default function UserCard() {
  return (
    <div className="flex flex-col justify-evenly max-w-[250px] min-w-[10vw] w-[15vw] m-5 bg-primary p-2 h-2/3 min-h-[20rem] rounded-lg ">
      <div className="sticky aspect-square max-w-full min-h-2/5 h-2/4 self-center my-3">
        <Image
          alt="cute cat"
          className="rounded-lg block m-auto aspect-square"
          fill
          src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg"
        />
      </div>
      <h2 className="text-[1.8vh] text-center font-bold cursor-default">Elons' Musk</h2>
      <h2 className="text-[1.8vh] text-center text-secondary cursor-default">5.6km away</h2>
      <button type="submit">
        <h2 className="text-[1.8vh]">Send DM</h2>
      </button>
    </div>
  );
}
