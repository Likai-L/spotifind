import Button from 'app/(button)/Button';
import { useState } from 'react';
import Container from 'app/(container)/Container';

export default function CommentForm({ error, loading, formClasses }) {
  const [newComment, setNewComment] = useState('');
  return (
    <form className={formClasses}>
      <Container classNames="bg-container-light w-full h-[240px] mt-[50px] flex justify-center">
        <textarea
          onChange={e => setNewComment(e.target.value)}
          value={newComment}
          className="bg-[transparent] w-[90%] h-[80%%] border-[none]  resize-none  focus:outline-0 focus:border-0 mt-[30px] mx-auto shadow-[none] scrollbar-hide"
        />
      </Container>
      <div className="flex justify-between w-[85%] mx-auto mt-[30px]">
        <Button
          addedclasses="text-md rounded-2xl w-[100px]"
          content="Post"
          disabled={loading}
          path="#"
          prefetch="true"
        />

        <Button
          addedclasses="text-md rounded-2xl w-[100px]"
          content="Reset"
          path="#"
          prefetch="true"
        />
      </div>
      <div className="text-red-400 text-center mt-[20px]">{error}</div>
    </form>
  );
}
