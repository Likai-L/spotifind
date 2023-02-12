import Container from 'app/(container)/Container';

export default function LyricsContainer(props) {
  const { songLyrics } = props;
  let formattedLyrics = [];

  if (songLyrics) {
    formattedLyrics = songLyrics.split('\n');
  }

  return (
    <div className="h-2/4">
      <div className="text-3xl font-bold m-4">Lyrics</div>
      <Container classNames="bg-container-light w-[100%] min-h-[300px] overflow-auto scrollbar-hide">
        <div className="w-[100%] text-center text-xl font-bold leading-loose py-4">
          <p>
            {formattedLyrics.length > 0
              ? formattedLyrics.map(p => <p>{p}</p>)
              : 'No lyrics available'}
          </p>
        </div>
      </Container>
    </div>
  );
}
