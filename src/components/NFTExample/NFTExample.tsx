import React from 'react';
import type { FC } from 'react';
import Image from "next/image"
import type { StaticImageData } from "next/image"

const NftExample: FC<{ source: StaticImageData, width: number }> = ({source, width}) => {
  return (
      <Image src={source} alt='NFT image' loading={"eager"} className={'nft-holder'} width={width} priority />
  );
};

export default NftExample;