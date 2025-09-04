import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className="h-[70px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-300 flex flex-row-reverse items-center">
      <Image
        src={"/img/logo.png"}
        className="h-full w-auto mr-[10px]"
        alt="logo"
        width={500}
        height={500}
        sizes="200vh"
      />
      <TopMenuItem title="booking" pageRef="/booking" />
    </div>
  );
}
