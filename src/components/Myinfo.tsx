import CakeIcon from "@assets/icons/cake.svg";
import EmailIcon from "@assets/icons/email.svg";
import GithubIcon from "@assets/icons/github.svg";

export default function MyInfo() {
  return (
    <>
      <div className="flex flex-col pl-6">
        <div className="flex items-center gap-1 leading-none">
          <CakeIcon className="size-4" />
          <span className="text-xs mt-[6px]">1997.09.12</span>
        </div>
        <div className="flex items-center gap-1 leading-none">
          <EmailIcon className="size-4" />
          <span className="text-xs mt-[6px]">kingyujin56@gmail.com</span>
        </div>
        <div className="flex items-center gap-1 leading-none">
          <GithubIcon className="size-4" />
          <a
            href="https://github.com/yujini-kim"
            target="_blank"
            className="text-xs mt-[6px]"
          >
            github.com/yujini-kim
          </a>
        </div>
      </div>
    </>
  );
}
