import Container from 'app/(container)/Container';
import IconButton from './IconButton';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import formatDistance from 'date-fns/formatDistance';

export default function Comment(props) {
  const { author, content, createdAt } = props;
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
      <Container classNames="bg-container px-[25px] py-[15px] w-[80%] h-[120px] overflow-auto scrollbar-hide flex flex-col justify-between">
        <p>{content || ''}</p>
        <div className="flex justify-between">
          <p className="text-secondary text-base">
            {formatDistance(new Date(createdAt), new Date(), {
              addSuffix: true
            })}
          </p>
          <div className="flex justify-between">
            <IconButton Icon={FaHeart} aria-label="Like">
              2
            </IconButton>
            <IconButton Icon={FaHeart} aria-label="Like">
              2
            </IconButton>
            <IconButton Icon={FaHeart} aria-label="Like">
              2
            </IconButton>
            <IconButton Icon={FaHeart} aria-label="Like">
              2
            </IconButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
