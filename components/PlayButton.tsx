import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  return (
    <button className="bg-white rounded-md py-1 px-2 lg:py-2 lg:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 ">
      <BsFillPlayFill size={25} className="mr-1" />
      Play
    </button>
  );
};

export default PlayButton;
