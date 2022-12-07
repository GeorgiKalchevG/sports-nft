import React from 'react';
import type { FC } from 'react';
import NftExample from "../NFTExample/NFTExample"
import type { StaticImageData } from "next/image"
import cx from "classnames"

const SportsSection: FC<{ width: number, title: string, sources: StaticImageData[] }> = ({sources, title, width}) => {
  return (
    <div className={cx('flex flex-col justify-center items-center', title && 'mt-96')}>
      <h1 className={'light'}>{title}</h1>
      <div className={cx(title && 'pt-36', 'flex row gap-28')}>
        {sources.map((source, index) => {
          return <div key={index}><NftExample width={width} source={source} /></div>
        })}
      </div>
    </div>
  );
};

export default SportsSection;