import React, { FC } from 'react';
import Image, { StaticImageData } from "next/image"

const NftExample:FC<{source: StaticImageData, width: number}> = ({source,width}) => {
  return (
    <div className={'nft-example'}>
      <Image src={source} alt='NFT image' loading={"eager"} className={'nft-holder'} width={width} priority />
    </div>
  );
};

export default NftExample;