"use client";
const SectionHeader = ({ id, label }: { id: string; label: string }) => {
  return (
    <h1 className="font-mono text-center md:text-start">
      <span className="text-xs font-mono text-blue-300 dark:text-blue-600">
        {id}.{" "}
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-pink-200 font-bold text-4xl">
        {label}
      </span>
    </h1>
  );
};

export default SectionHeader;
