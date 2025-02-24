import ArrowDown from "@assets/icons/arrow-down.svg";

export default function HeroBtn() {
  return (
    <div className="flex flex-col items-center justify-center mt-8 gap-4 md:flex-row ">
      <a
        href="#project"
        className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
      >
        <span className="font-semibold">Explore My Work</span>
        <ArrowDown className="size-4" />
      </a>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
      >
        <span>🖐️</span>
        <span className="font-semibold">Let&apos;s Connect</span>
      </a>
    </div>
  );
}
