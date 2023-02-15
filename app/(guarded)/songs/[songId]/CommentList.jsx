import Comment from './Comment';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function CommentList({ comments, getReplies }) {
  const [parent, enableAnimations] = useAutoAnimate();
  return (
    <div ref={parent}>
      {comments.map(comment => (
        <Comment {...comment} getReplies={getReplies} key={comment.id} />
      ))}
    </div>
  );
}
