import Container from 'app/(container)/Container';

export default function LyricsContainer(props) {
  const { songLyrics } = props;

  return (
    <div className="h-3/4">
      <div className="text-3xl font-semibold m-4">Lyrics</div>
      <Container classNames="bg-container-light max-w-[90%] min-h-[400px] overflow-auto scrollbar-hide">
        <div className="w-100 h-4/5 text-center text-xl font-semibold leading-loose py-4">
          <p className="whitespace-pre-line">
            {songLyrics || 'No lyrics available'}
          </p>
        </div>
      </Container>
    </div>
  );
}
