import instagram1 from "../assets/images/instagram-1.png";
import instagram2 from "../assets/images/instagram-2.png";
import instagram3 from "../assets/images/instagram-3.png";
import instagram4 from "../assets/images/instagram-4.png";

function Feed() {
  return (
    <div className="container mx-auto mb-24">
      <div className="text-center space-y-4 mb-12">
        <span className="uppercase text-gray-700 text-lg font-bold">
          newsfeed
        </span>
        <h3 className="text-4xl font-semibold">Instagram</h3>
        <p className="text-xl">
          Follow us on social media for more discount & promotions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center gap-y-4">
        <img src={instagram1} alt="instagram" />
        <img src={instagram2} alt="instagram" />
        <img src={instagram3} alt="instagram" />
        <img src={instagram4} alt="instagram" />
      </div>
    </div>
  );
}

export default Feed;
