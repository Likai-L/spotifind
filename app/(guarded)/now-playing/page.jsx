import Container from 'app/(container)/Container';
import Profile from './Profile';
import AlbumCover from './AlbumCover';

export default function NowPlaying() {
  return (
    <div className="p-12 flex justify-center">
      <div>
        <Profile />
      </div>
      {/* TODO: make it a Netflix style carousel */}
      <Container classNames="lg:w-[500px] xl:w-[800px] 2xl:w-[1000px] 3xl:w-[1200px]  ml-[50px] flex items-center overflow-x-auto scrollbar-hide">
        <AlbumCover
          classNames="w-[200px] h-[200px] ml-[30px]"
          src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
        />
        <AlbumCover
          classNames="w-[200px] h-[200px] ml-[30px]"
          src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
        />
        <AlbumCover
          classNames="w-[200px] h-[200px] ml-[30px]"
          src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
        />
        <AlbumCover
          classNames="w-[200px] h-[200px] ml-[30px]"
          src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
        />
        <AlbumCover
          classNames="w-[200px] h-[200px] ml-[30px]"
          src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
        />
        <AlbumCover
          classNames="w-[200px] h-[200px] ml-[30px]"
          src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
        />
        <AlbumCover
          classNames="w-[200px] h-[200px] ml-[30px]"
          src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
        />
        <AlbumCover
          classNames="w-[200px] h-[200px] ml-[30px]"
          src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
        />
        <AlbumCover
          classNames="w-[200px] h-[200px] ml-[30px]"
          src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
        />
      </Container>
    </div>
  );
}
