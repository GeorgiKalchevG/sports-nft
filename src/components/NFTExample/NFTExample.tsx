import React from 'react';
import type { FC } from 'react';
import Image from "next/image"
import type { StaticImageData } from "next/image"

const NftExample: FC<{ source: StaticImageData, width: number }> = ({source, width}) => {
  return (
    <div className={'nft-example'}>
      <Image src={source} alt='NFT image' loading={"eager"} className={'nft-holder'} width={width} priority />
    </div>
  );
};

export default NftExample;