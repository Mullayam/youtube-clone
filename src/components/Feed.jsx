import React, { useContext, useEffect } from "react";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";
import { tags } from "../utils/constants";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="flex flex-row px-3 overflow-x-auto relative scrollbar-hide sm:hidden md:hidden lg:inline-flex mb-2">
          {tags.map((item, i) => (
            <h2
              className="text-white font-normal text-sm py-2 px-4 break-keep whitespace-nowrap bg-[#2d2c2c] mr-3 cursor-pointer rounded-lg hover:bg-[#1e1e1e]"
              key={i}
            >
              {item}
            </h2>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            searchResults.map((item,i) => {
              if (item.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId-i} video={item?.video} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
