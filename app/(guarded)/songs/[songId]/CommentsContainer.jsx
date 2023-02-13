import Container from 'app/(container)/Container';
import Comment from './Comment';

export default function CommentsContainer(props) {
  return (
    <div className="h-3/4">
      <div className="text-3xl font-bold my-6">Comments</div>
      <Container classNames="bg-container-light max-w-[90%] min-h-[600px] overflow-auto scrollbar-hide">
        <Comment>Yes gurl you go slayyyy</Comment>
        <Comment>Yes gurl you go slayyyy</Comment>
        <Comment>Yes gurl you go slayyyy</Comment>
        <Comment>Yes gurl you go slayyyy</Comment>
      </Container>
    </div>
  );
}
