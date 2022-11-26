import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import NftExample from "../components/NFTExample/NFTExample"
import nft from '../../public/2.png'
import Link from "next/link"

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
          <div className={'pt-36'}>navigation</div>
          <div className={'columns-2'}>
            <div className='col'>
              <h1>THE MONSTERS ARE BACK IN TOWN</h1>
              <p className={'text-2xl pt-10 pb-28 pr-72'}>Buy and sell NFTs from our top graphic designers</p>
              <Link href={'/mint'}>
                <button className={'primary-button'}>MINT NFT</button>
              </Link>
            </div>
            <div><NftExample width={600} source={nft} /></div>
          </div>
          <div className={'flex flex-col justify-center items-center px-10 mt-96 pt-30 border'}>
            <h1 className={'light'}>WINTER SPORTS</h1>
            <div className='columns-3 gap-28 pt-36'>
              <NftExample width={600} source={nft} />
              <NftExample width={600} source={nft} />
              <NftExample width={600} source={nft} />
            </div>
          </div>
          <div className={'flex flex-col justify-center items-center px-10 mt-96 pt-30 border'}>
            <h1 className={'light'}>Professional sports</h1>
            <div className='columns-3 gap-28 pt-36'>
              <NftExample width={600} source={nft} />
              <NftExample width={600} source={nft} />
              <NftExample width={600} source={nft} />
            </div>
          </div>
          <div className={'flex flex-col justify-center items-center px-10 mt-96 pt-30 border'}>
            <h1 className={'light'}>Water sports</h1>
            <div className='columns-3 gap-28 pt-36'>
              <NftExample width={600} source={nft} />
              <NftExample width={600} source={nft} />
              <NftExample width={600} source={nft} />
            </div>
            <div className='columns-1 gap-28 pt-36'>
              <NftExample width={400} source={nft}/>
            </div>
          </div>
        </div>
        <div className={'py-36'}>
          allr
        </div>
      </main>
    </>
  );
};

export default Home;
