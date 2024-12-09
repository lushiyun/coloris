export default function CollectionPage({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}
