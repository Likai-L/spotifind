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
import { useGlobalContext } from 'app/(context)';
import CommentForm from './CommentForm';
import IconButton from './IconButton';
// eslint-disable-next-line import/no-cycle
import CommentList from './CommentList';
import {
  createComment,
  deleteComment,
  updateComment,
  toggleCommentLike
} from '@/helpers/comments';
import { useAsyncFn } from '@/hooks/useAsync';

export default function Comment({
  author,
  content,
  createdAt,
  id,
  getReplies,
  likeCount,
  likedByMe
}) {
  const childComments = getReplies(id);
  const { setComments, displayTrack, profile } = useGlobalContext();
  const [childrenHidden, setChildrenHidden] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const createCommentFn = useAsyncFn(createComment);
  const updateCommentFn = useAsyncFn(updateComment);
  const deleteCommentFn = useAsyncFn(deleteComment);
  const onReplyComment = replyContent => {
    return createCommentFn
      .execute({
        songUri: displayTrack.uri,
        authorUri: profile.uri,
        content: replyContent,
        parentId: id
      })
      .then(comment => {
        setIsReplying(false);
        setComments(prev => [comment, ...prev]);
      });
  };
  const onUpdateComment = updatedContent => {
    return updateCommentFn
      .execute({
        commentId: id,
        content: updatedContent
      })
      .then(({ content: newContent, id: newId }) => {
        setIsEditing(false);
        setComments(prev => {
          return prev.map(prevComment => {
            if (prevComment.id === newId) {
              return { ...prevComment, content: newContent };
            }
            return prevComment;
          });
        });
      });
  };
  const onDeleteComment = () => {
    return deleteCommentFn.execute({ id }).then(({ id: deletedCommentId }) => {
      console.log('deleted comment id', deletedCommentId);
      setComments(prev => {
        return prev.filter(prevComment => prevComment.id !== deletedCommentId);
      });
    });
  };

  const toggleLocalCommentLike = (commentId, addLike) => {
    setComments(prev => {
      return prev.map(comment => {
        if (comment.id !== commentId) return comment;
        if (addLike) {
          return {
            ...comment,
            likeCount: comment.likeCount + 1,
            likedByMe: true
          };
        }
        return {
          ...comment,
          likeCount: comment.likeCount - 1,
          likedByMe: false
        };
      });
    });
  };
  const toggleCommentLikeFn = useAsyncFn(toggleCommentLike);
  const onToggleCommentLike = () => {
    return toggleCommentLikeFn
      .execute({
        userUri: profile.uri,
        commentId: id
      })
      .then(({ addLike }) => {
        toggleLocalCommentLike(id, addLike);
      });
  };

  return (
    <>
      <div className=" w-[calc(100%-30px)] flex justify-center mt-[20px] mx-auto">
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
                Icon={FaHeart}
                liked={likedByMe}
                loading={toggleCommentLikeFn.loading}
                onClick={onToggleCommentLike}>
                {likeCount > 0 ? likeCount : 0}
              </IconButton>

              <IconButton
                aria-label={isReplying ? 'Cancel Replying' : 'Reply'}
                color="text-green-300"
                Icon={FaReply}
                isActive={isReplying}
                onClick={() => {
                  if (!isReplying) {
                    setIsEditing(false);
                  }
                  setIsReplying(prev => !prev);
                }}
              />
              {author.spotifyUserUri === profile.uri && (
                <>
                  <IconButton
                    aria-label={isEditing ? 'Cancel Editing' : 'Edit'}
                    color="text-blue-300"
                    Icon={FaEdit}
                    isActive={isEditing}
                    onClick={() => {
                      if (!isEditing) {
                        setIsReplying(false);
                      }
                      setIsEditing(prev => !prev);
                    }}
                  />
                  <IconButton
                    aria-label="Delete"
                    color="text-red-400"
                    disabled={deleteCommentFn.loading}
                    Icon={FaTrash}
                    onClick={onDeleteComment}
                  />
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
      {isEditing && (
        <div className="">
          <CommentForm
            autoFocus
            containerClasses="h-22 w-[calc(100%-30px)] bg-[#2b2133] mt-3 mx-auto"
            error={updateCommentFn.error}
            footerClasses="mt-3"
            initialValue={content}
            loading={updateCommentFn.loading}
            onSubmit={onUpdateComment}
            postButtonName="Update"
          />
        </div>
      )}

      {isReplying && (
        <div className="">
          <CommentForm
            postButtonName="Reply"
            autoFocus
            containerClasses="h-22 w-[calc(100%-30px)] bg-[#2b2133] mt-3 mx-auto"
            error={createCommentFn.error}
            footerClasses="mt-3"
            loading={createCommentFn.loading}
            onSubmit={onReplyComment}
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
