import Image from 'next/image';
import { FaTrash, FaEdit, FaHeart, FaReply } from 'react-icons/fa';
import formatDistance from 'date-fns/formatDistance';
import Container from 'app/(container)/Container';
import IconButton from './IconButton';
import CommentList from './CommentList';

export default function Comment({
  author,
  content,
  createdAt,
  id,
  getReplies
}) {
  const childComments = getReplies(id);
  const childrenHidden = false;
  return (
    <>
      <div className="h-[150px]] w-[calc(100%-60px)] flex justify-center mt-[20px] mx-auto">
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
        <Container classNames="bg-container px-[25px] py-[15px] w-[100%] h-[120px] overflow-auto scrollbar-hide flex flex-col justify-between shrink">
          <p>{content || ''}</p>
          <div className="flex justify-between">
            <p className="text-secondary text-base">
              {formatDistance(new Date(createdAt), new Date(), {
                addSuffix: true
              })}
            </p>
            <div className="flex justify-between">
              <IconButton
                aria-label="Like"
                hover="hover:text-pink-300"
                Icon={FaHeart}>
                2
              </IconButton>
              <IconButton
                aria-label="Reply"
                hover="hover:text-green-300"
                Icon={FaReply}
              />
              <IconButton
                aria-label="Edit"
                hover="hover:text-blue-300"
                Icon={FaEdit}
              />
              <IconButton
                aria-label="Delete"
                hover="hover:text-red-400"
                Icon={FaTrash}
              />
            </div>
          </div>
        </Container>
      </div>
      <div>
        {childComments?.length > 0 && (
          <div className="flex ">
            <button
              aria-label="Hide Replies"
              className="collapse-line  w-[30px]  relative"></button>
            <div className="grow">
              <CommentList
                comments={childComments}
                getReplies={getReplies}></CommentList>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
