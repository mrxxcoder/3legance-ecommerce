import CollectionCard from "./CollectionCard";
import { useCollections } from "./useCollections";

function CollectionsLayout() {
  const { collections, isLoading } = useCollections();
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="px-8 container mx-auto">
      <h2 className="font-semibold text-4xl mb-12">Shop Collection</h2>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:grid-rows-2 mb-32 ">
        {collections?.map((collection) => (
          <CollectionCard collection={collection} key={collection.id} />
        ))}
      </div>
    </div>
  );
}

export default CollectionsLayout;
