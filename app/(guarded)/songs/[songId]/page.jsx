export default function Page({ params }) {
  const { songId } = params;

  return <div>{songId}</div>;
}
