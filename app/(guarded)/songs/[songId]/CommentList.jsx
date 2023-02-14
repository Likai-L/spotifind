import Comment from './Comment';

export default function CommentList({ comments, getReplies }) {
  return comments.map(comment => (
    <Comment {...comment} getReplies={getReplies} key={comment.id} />
  ));
}
