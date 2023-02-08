import DefaultTags from './DefaultTags';

export default function Head() {
  return (
    <>
      <DefaultTags />
      <title>SpotiFind</title>
      <link
        precedence="default"
        rel="icon"
        type="image/png"
        href="/images/logo.png"></link>
    </>
  );
}
