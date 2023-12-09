/* eslint-disable react/prop-types */
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, refacen }) => {
  return (
    <motion.div drag dragConstraints={refacen} whileDrag={{scale:1.2}}>
      <div
        drag
        className="flex-shrink-0 relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white py-8 px-10 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
        <div className="footer w-full absolute bottom-0 left-0">
          <div className="flex items-center justify-between px-8 py-3 mb-3">
            <h5>{data.filesize}</h5>
            <span className="bg-zinc-600 w-7 h-7 flex justify-center items-center rounded-full cursor-pointer">
              {data.close ? <IoClose /> : <LuDownload color="#fff" />}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`flex items-center justify-center py-4 w-full ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              }`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
