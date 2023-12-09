import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptas.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Downlaod Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptas.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Downlaod Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptas.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
  ];

  return (
    <div>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] h-full w-full flex gap-5 flex-wrap p-5"
      >
        {data.map((data, index) => (
          <Card data={data} key={index} refacen={ref} />
        ))}
      </div>
    </div>
  );
};

export default Foreground;
