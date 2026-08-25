import chocobo_gif from "../assets/chars/chocobo.gif";

export default function MyExperiences() {
  return (
    <div className="border-b border-[var(--border-color)] flex justify-center w-full px-4 sm:px-6">
      <div className="border-x border-[var(--border-color)] py-6 sm:py-10 px-4 sm:px-8 w-full flex justify-center">
        <div className="flex flex-col justify-center items-center min-[880px]:flex-row gap-6 md:gap-8 max-w-6xl cursor-default">
          <p className="font-bungee">Experience...</p>
          <img src={chocobo_gif.src} alt="" className="-scale-x-100 h-15" />
        </div>
      </div>
    </div>
  );
}
