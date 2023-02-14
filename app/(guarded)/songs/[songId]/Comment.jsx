import Container from 'app/(container)/Container';
import Image from 'next/image';

export default function Comment(props) {
  const { author, content } = props;
  return (
    <div className="h-[150px]] flex justify-center my-[20px]">
      <div className="flex flex-col justify-between mr-[20px] w-[80px]">
        <Image
          alt="user-pfp"
          className="rounded-2xl cursor-pointer transition duration-200 ease-out hover:scale-105"
          height={80}
          src={author?.profilePictureUrl || ''}
          width={80}
        />
        <p className="text-md text-center w-full truncate">
          {author?.username || ''}
        </p>
      </div>
      <Container classNames="bg-container p-[20px] w-[80%] h-[120px] overflow-auto scrollbar-hide">
        <p>{content || ''}</p>
      </Container>
    </div>
  );
}
