import Container from 'app/(container)/Container';
import { useGlobalContext } from 'app/(context)';
import Comment from './Comment';
import { useMemo } from 'react';

export default function CommentsContainer() {
  const { comments } = useGlobalContext();

  // return an object with arrays of comments under their parent ids
  // root comments would be in an array under key null
  const commentsByParentId = useMemo(() => {
    if (!comments || comments.length === 0) return {};
    const group = {};
    comments.forEach(comment => {
      group[comment.parentId] ||= [];
      group[comment.parentId].push(comment);
    });
    return group;
  }, [comments]);

  const getReplies = parentId => {
    return commentsByParentId[parentId];
  };
  console.log(commentsByParentId);
  const rootComments = getReplies(null)?.map(comment => (
    <Comment {...comment} key={comment.id} />
  ));
  return (
    <div className="h-3/4">
      <div className="text-3xl font-bold my-6">Comments</div>
      <Container classNames="bg-container-light max-w-[90%] min-h-[600px] overflow-auto scrollbar-hide">
        {rootComments && rootComments}
      </Container>
    </div>
  );
}
