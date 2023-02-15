import Image from 'next/image';
import { useState } from 'react';
import {
  FaAngleDoubleDown,
  FaEdit,
  FaHeart,
  FaReply,
  FaTrash
} from 'react-icons/fa';
import formatDistance from 'date-fns/formatDistance';
import Container from 'app/(container)/Container';
import CommentForm from './CommentForm';
import IconButton from './IconButton';
// eslint-disable-next-line import/no-cycle
import CommentList from './CommentList';

export default function Comment({
  author,
  content,
  createdAt,
  id,
  getReplies
}) {
  const childComments = getReplies(id);
  const [childrenHidden, setChildrenHidden] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [isEditting, setIsEditting] = useState(false);

  return (
    <>
      <div className="h-[150px]] w-[calc(100%-30px)] flex justify-center mt-[20px] mx-auto">
        <div className="flex flex-col justify-evenly mr-[20px] w-[80px]">
          <Image
            alt="user-pfp"
            className="rounded-2xl cursor-pointer transition duration-200 ease-out hover:scale-105"
            height={80}
            src={author?.profilePictureUrl || ''}
            width={80}
          />
          <p className="text-md font-bold text-center w-full truncate">
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
                color="text-pink-300"
                Icon={FaHeart}>
                2
              </IconButton>
              <IconButton
                aria-label="Reply"
                color="text-green-300"
                onClick={() => setIsReplying(prev => !prev)}
                isActive={isReplying}
                Icon={FaReply}
              />
              <IconButton
                aria-label="Edit"
                color="text-blue-300"
                onClick={() => setIsEditting(prev => !prev)}
                isActive={isEditting}
                Icon={FaEdit}
              />
              <IconButton
                aria-label="Delete"
                color="text-red-400"
                Icon={FaTrash}
              />
            </div>
          </div>
        </Container>
      </div>
      {isReplying && (
        <div className="">
          <CommentForm
            autoFocus={true}
            containerClasses="h-[110px] w-[calc(100%-30px)] bg-[#2b2133] mt-[10px] mx-auto"
            footerClasses="mt-[10px]"
          />
        </div>
      )}
      <div>
        {childComments?.length > 0 && (
          <>
            <div className={`${childrenHidden ? 'hidden' : ''}`}>
              <div className="flex ">
                <div
                  className="border-r-2 border-[#ffffff18] border-solid w-[30px] hover:border-r-3 hover:border-[#ffffff87] hover:cursor-pointer"
                  onClick={() => setChildrenHidden(true)}></div>
                <div className="grow">
                  <CommentList
                    comments={childComments}
                    getReplies={getReplies}
                  />
                </div>
              </div>
            </div>

            <IconButton
              aria-label="Expand"
              hover="hover:text-blue-300"
              Icon={FaAngleDoubleDown}
              onClick={() => setChildrenHidden(false)}
              hidden={`${childrenHidden ? '' : 'hidden'}`}
              position="ml-[40px]"
            />
          </>
        )}
      </div>
    </>
  );
}
