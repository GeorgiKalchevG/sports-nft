import React from 'react';
import type { FC } from 'react';
import NftExample from "../NFTExample/NFTExample"
import type { StaticImageData } from "next/image"

const SportsSection: FC<{ width: number, title: string, sources: StaticImageData[] }> = ({sources, title, width}) => {
  return (
    <div className={'flex flex-col justify-center items-center px-10 mt-96 pt-30 border'}>
      <h1 className={'light'}>{title}</h1>
      <div className={'pt-36'}>
      <div className={`columns-${sources.length} gap-28 `}>
        {sources.map((source, index) => {
          return <NftExample key={index} width={width} source={source} />
        })}
      </div>
      </div>
    </div>
  );
};

export default SportsSection;