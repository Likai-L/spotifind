import Container from 'app/(container)/Container';
import MusixMatch from 'app/(guarded)/now-playing/MusixmatchLogo';

export default function LyricsContainer(props) {
  const { songLyrics } = props;

  return (
    <div className="h-3/4 flex flex-col justify-evenly">
      <div className="flex justify-between">
        <div className="text-3xl font-bold my-6">Lyrics</div>{' '}
        <MusixMatch className="mr-32" width={150} />
      </div>
      <Container classNames="bg-container-light max-w-[90%] min-h-[400px] overflow-hidden">
        <div className="w-100 h-full text-center text-xl font-semibold leading-loose overflow-scroll scrollbar-hide py-[50px]">
          <p className="whitespace-pre-line">
            {songLyrics || 'No lyrics available'}
          </p>
        </div>
      </Container>
    </div>
  );
}
