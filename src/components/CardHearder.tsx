import StarIcon from "@assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHearder = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className="flex flex-col pt-8 pb-4 px-3 md:px-10">
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-2xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2 pl-3 md:pl-0">
        {description}
      </p>
    </div>
  );
};
