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
        <Button>Collection &rarr;</Button>
      </div>
    </div>
  );
}

export default CollectionCard;
