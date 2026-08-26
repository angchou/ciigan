import chocobo from "../assets/chars/chocobo.gif";
import minecart from "../assets/chars/minecart.png";

export default function RunningChocobo() {
  return (
    <div className="w-full z-50 overflow-hidden bg-transparent border-x border-[var(--border-color)]">
      <div className="relative flex items-end w-fit animate-chocobo-run">
        <img src={minecart.src} className="xl:h-15 h-10" alt="" />
        <img src={chocobo.src} className="xl:h-20 h-15 -scale-x-100" alt="" />
        <div className="w-1/2 border-1 xl:border-2 border-[var(--background-reversed)] absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-3 xl:translate-y-5 -z-10"></div>
      </div>
    </div>
  );
}
