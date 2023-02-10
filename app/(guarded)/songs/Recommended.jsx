import Container from 'app/(container)/Container';

export default function Recommended() {
  return (
    <Container classNames="flex flex-col justify-between w-full h-full font-primary rounded-3xl px-12 pt-4 cursor-default">
      <p className="text-4xl font-bold my-[30px]">Recommended</p>
    </Container>
  );
}
