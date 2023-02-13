import Container from 'app/(container)/Container';
import Image from 'next/image';

export default function Comment(props) {
  return (
    <div className="h-[150px]] flex justify-center my-[20px]">
      <div className="flex flex-col justify-between mr-[20px]">
        <Image
          alt="user-pfp"
          className={
            'rounded-2xl cursor-pointer transition duration-200 ease-out hover:scale-105'
          }
          height={80}
          src="https://i.scdn.co/image/ab6775700000ee852dcd78968e2f994406a4160c"
          width={80}
        />
        <p className="text-lg text-center">Kai</p>
      </div>
      <Container classNames="bg-container p-[20px] w-[80%] h-[120px] overflow-auto scrollbar-hide">
        <p>{props.children}</p>
      </Container>
    </div>
  );
}
