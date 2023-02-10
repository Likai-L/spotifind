import Container from 'app/(container)/Container';

export default function LyricsContainer(/* props */) {
  // const { songLyrics } = props;

  return (
    <div className="h-2/4">
      <div className="text-3xl font-bold m-4">Lyrics</div>
      <Container classNames="bg-container-light w-[100%] min-h-[300px] overflow-auto scrollbar-hide">
        <div className="w-[100%] text-center text-xl font-bold leading-loose py-4">
          <p>
            {/* songLyrics */}
            I was so tender
            <br />
            I was so tender
            <br />
            Now born the same
            <br />
            And born lost forever
            <br />
            I said; Born forever
            <br />
            I said; Born together again
            <br />
            I said
            <br />
            So sensitive
            <br />
            So tender
            <br />
            I’ll say
            <br />
            <br />
            She tranquilizes with tranquil eyes
            <br />
            <br />
            I’ll try not to lose you
            <br />
            Ill never lose heart again
            <br />
            (When can I go back)
            <br />
            <br />
            Where have you all gone anyway?
            <br />
            It’s not the scene without you
            <br />
            I’ll say
            <br />
            <br />
            God, what is this new place where my impulse can be found
            <br />
            Fall down the spiral staircase where my friends can be found
            <br />
            <br />
            How can I just stay home?
            <br />
            When can I go back to the broken city?
            <br />
            (When can I go back)
          </p>
        </div>
      </Container>
    </div>
  );
}
