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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Exadel Monsters dApp</title>
        <meta name="description" content="Exadel Christmas nfts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={'columns-2'}>
            <div className='col'>
              <h1>THE MONSTERS ARE BACK IN TOWN</h1>
              <p className={'text-2xl pt-10 pb-28 pr-72'}>Buy and sell NFTs from our top graphic designers</p>
              <Link href={'/mint'}>
                <button className={'primary-button'}>MINT NFT</button>
              </Link>
            </div>
            <div><NftExample width={600} source={nft2} /></div>
          </div>
          <SportsSection sources={[nft1, nft3, nft4]} width={600} title='Winter Sports' />
          <SportsSection sources={[nft11, nft9, nft10,]} width={600} title='Professional sports' />
          <SportsSection sources={[nft6, nft5, nft8,]} width={600} title='Water sports' />
          <SportsSection sources={[nft7]} width={400} title='' />

        </div>
        <div className={'py-36'}>
          allr
        </div>
      </main>
    </>
  );
};

export default Home;
