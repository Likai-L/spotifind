import Image from 'next/image';
export default function Profile() {
  return (
    <div className="text-center w-[200px]">
      <Image
        alt="pfp"
        src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
        width={200}
        height={200}
        className="rounded-3xl"
      />
      <div className="text-2xl mt-4">Grimes</div>
      <div className="mt-1 opacity-30">@GrimesGurlll</div>
    </div>
  );
}
