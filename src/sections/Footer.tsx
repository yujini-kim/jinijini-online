import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            <a
              href="https://github.com/yujini-kim"
              className="inline-flex items-center gap-1.5"
            >
              <span className="font-semibold">GitHub</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
            <a
              href="https://www.notion.so/ad763a5caa3243e6abda98099904560b?source=copy_link"
              className="inline-flex items-center gap-1.5"
            >
              <span className="font-semibold">Notion</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
