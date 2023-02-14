import Container from 'app/(container)/Container';
import { useGlobalContext } from 'app/(context)';
import Comment from './Comment';

export default function CommentsContainer() {
  const { comments } = useGlobalContext();
  const commentsArray = comments.map(comment => <Comment {...comment} />);
  return (
    <div className="h-3/4">
      <div className="text-3xl font-bold my-6">Comments</div>
      <Container classNames="bg-container-light max-w-[90%] min-h-[600px] overflow-auto scrollbar-hide">
        {commentsArray}
      </Container>
    </div>
  );
}
