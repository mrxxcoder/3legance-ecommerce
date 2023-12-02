import CollectionCard from "./CollectionCard";
import headphoneCollection from "../../assets/images/headphone-collection.png";
import earbudsCollection from "../../assets/images/earbuds-collection.png";
import accessoriesCollection from "../../assets/images/accessories-collection.png";

interface IProps {}

function CollectionsLayout({}: IProps) {
  return (
    <div className="px-8 container mx-auto">
      <h2 className="font-semibold text-4xl mb-12">Shop Collection</h2>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:grid-rows-2 mb-32 ">
        <CollectionCard
          classes="lg:row-start-1 lg:row-end-3"
          image={headphoneCollection}
        />
        <CollectionCard
          classes="lg:row-start-1 lg:row-end-2"
          image={earbudsCollection}
        />
        <CollectionCard
          classes="lg:row-start-2 lg:row-end-3"
          image={accessoriesCollection}
        />
      </div>
    </div>
  );
}

export default CollectionsLayout;
