import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="banner block p-[5px] m-0 w-screen h-[50vh] relative">
      <Image
        src={"/img/cover.jpg"}
        alt="cover"
        fill={true}
        priority
        objectFit="cover"
      />
      <div className="bannerText relative text-white top-[100px] z-20 text-center">
        <h1 className="text-4xl font-medium">
          where every event finds its venue
        </h1>
        <h3 className="text-xl font-serif">
          Finding the perfect venue has never been easier. Whether it's a
          wedding corporate event, or private party, we connecting people to the
          perfect place.
        </h3>
      </div>
    </div>
  );
}
