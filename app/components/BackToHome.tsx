"use client";
import { usePathname, useRouter } from "next/navigation";
const BackToHome = () => {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === "/") return null;
  return (
    <button onClick={() => router.back()} className="text-gray-500 text-sm">
      Go back
    </button>
  );
};
export default BackToHome;
