import Image from 'next/image';
import { useGlobalContext } from 'app/(context)';

export default function Profile() {
  const { profile } = useGlobalContext();
  return (
    <div className="text-center w-[200px]">
      <Image
        alt="pfp"
        src={profile.avatar}
        width={200}
        height={200}
        className="rounded-3xl"
      />
      <div className="text-2xl mt-4">{profile.name}</div>
      <div className="mt-1 opacity-30">@{profile.handle}</div>
    </div>
  );
}
