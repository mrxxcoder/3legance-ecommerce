import { HiArrowRight } from "react-icons/hi2";
import Button from "../../ui/Button";
import { ICollection } from "../../interfaces";
interface IProps {
  collection: ICollection;
}

function CollectionCard({ collection }: IProps) {
  return (
    <div
      className={`bg-[#F3F5F7] p-4 [&:nth-child(1)]:lg:row-start-1 [&:nth-child(1)]:lg:row-end-3 [&:nth-child(2)]:lg:row-start-1 [&:nth-child(2)]:lg:row-end-2 [&:nth-child(3)]:lg:row-start-2 [&:nth-child(3)]:lg:row-end-3 relative`}
    >
      <img src={collection.image} alt="headphone collection image" />
      <div className="flex flex-col space-y-3 absolute left-8 bottom-8">
        <h3 className="text-2xl md:text-3xl font-semibold">
          {collection.title}
        </h3>
        <Button
          width="w-fit"
          variant="outline"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <span>Shop now</span>
          <span>
            <HiArrowRight size={16} />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default CollectionCard;
