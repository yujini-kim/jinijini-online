export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center">
      <p className="uppercase font-semibold text-4xl tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
        {title}
      </p>
    </div>
  );
};
