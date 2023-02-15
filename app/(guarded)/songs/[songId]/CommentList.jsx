import { useAutoAnimate } from '@formkit/auto-animate/react';
// eslint-disable-next-line import/no-cycle
import Comment from './Comment';

export default function CommentList({ comments, getReplies }) {
  const [parent] = useAutoAnimate();
  return (
    <div ref={parent}>
      {comments.map(comment => (
        <Comment {...comment} getReplies={getReplies} key={comment.id} />
      ))}
    </div>
  );
}
