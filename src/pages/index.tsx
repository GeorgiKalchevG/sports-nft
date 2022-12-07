import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import NftExample from "../components/NFTExample/NFTExample"
import nft1 from '../../public/1.png'
import nft2 from '../../public/2.png'
import nft3 from '../../public/3.png'
import nft4 from '../../public/4.png'
import nft5 from '../../public/5.png'
import nft6 from '../../public/6.png'
import nft7 from '../../public/7.png'
import nft8 from '../../public/8.png'
import nft9 from '../../public/9.png'
import nft10 from '../../public/10.png'
import nft11 from '../../public/11.png'
import Link from "next/link"
import SportsSection from "../components/sports-section/SportsSection"
import Button from "../components/button"

const Home: NextPage = () => {
  return (
    <>
      <div className={'main-content'}>
        <div className={'columns-2 z-10 gap-32'}>
          <div className='col'>
            <h1 className='pt-28'>THE MONSTERS ARE BACK IN TOWN</h1>
            <p className={'text-2xl pt-2 pb-28 pr-80'}>Buy and sell NFTs from our top graphic designers</p>
            <Link href={'/mint'}>
              <Button>MINT NFT</Button>
            </Link>
          </div>
          <div className='pt-6'><NftExample width={650} source={nft2} /></div>
        </div>
      </div>
      <div className='main-content pt-8'>
        <SportsSection sources={[nft1, nft3, nft4]} width={400} title='Winter Sports' />
      </div>

      <SportsSection sources={[nft11, nft9, nft10,]} width={600} title='Professional sports' />
      <SportsSection sources={[nft6, nft5, nft8,]} width={600} title='Water sports' />
      <SportsSection sources={[nft7]} width={400} title='' />

    </>
  );
};

export default Home;
