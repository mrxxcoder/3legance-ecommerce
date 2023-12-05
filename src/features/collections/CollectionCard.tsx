import { HiArrowRight } from "react-icons/hi2";
import Button from "../../ui/Button";
interface IProps {
  classes?: string;
  image: string;
}

function CollectionCard({ classes, image }: IProps) {
  return (
    <div className={`bg-[#F3F5F7] p-4 ${classes} relative`}>
      <img src={image} alt="headphone collection image" />
      <div className="flex flex-col space-y-3 absolute left-8 bottom-8">
        <h3 className="text-2xl md:text-3xl font-semibold">Headphone</h3>
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
