import Button from "./Button";

function Header() {
  return (
    <div className="h-screen bg-no-repeat bg-cover bg-[url('assets/images/hero-mobile.png')] md:bg-[url('assets/images/hero.png')] px-8 py-12 md:flex items-center justify-end">
      <div className="flex flex-col space-y-4 items-center md:items-start justify-end md:w-[50%]">
        <h2 className="font-semibold text-5xl md:text-8xl text-[#121212] text-left md:text-left">
          Listen to the <span className="text-blue-600">amazing</span> music
          sound.
        </h2>
        <p className="text-xl">Experience music like never before</p>
        <Button width="w-fit" variant="primary">
          Shop now
        </Button>
      </div>
    </div>
  );
}

export default Header;
