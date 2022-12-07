import React, { FC, ReactNode } from 'react';
import { useWallet } from "../../hooks/useWallet"
import logo from '../../../public/logo.svg'
import Link from "next/link"
import { BuildingStorefrontIcon, WalletIcon } from '@heroicons/react/24/outline'

import Image from "next/image"
import styles from './index.module.scss'
import Head from "next/head"

const links = [
  {
    href: '/staking',
    title: 'Staking'
  },
  {
    href: '/mint',
    title: 'Mint NFT'
  },
]
const Layout: FC<{ children: ReactNode }> = ({children}) => {
  const {isConnected, toggleConnection, connecting} = useWallet()
  return (
    <>
      <Head>
        <title>Exadel Monsters dApp</title>
        <meta name="description" content="Exadel Christmas nfts" />
        <meta name="appName" content="Exadel Christmas nfts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header
          className={`${styles.header}`}>
          <div>
            <Link href={'/'} className={'pl-[42px]'}>
              <Image src={logo} alt='logo' />
            </Link>
          </div>

          <div className={'flex flex-row  w-2/5 h-full'}>
            {links.map(({title, href}) => (
              <div
                key={href}
                className={
                  'flex flex-row items-center justify-center hover:bg-neutral-secondary active:bg-neutral-secondary h-full w-44'
                }>
                <Link className={'px-3 flex'} href={href}>
                  {title}
                </Link>
              </div>
            ))}
            <div
              className={
                'flex flex-row items-center justify-center hover:bg-neutral-secondary h-full w-44'
              }>
              {isConnected ? (
                <button disabled={connecting} onClick={() => {
                  console.log('wallet icon')
                  toggleConnection()
                }}>
                  <WalletIcon className={'h-6 w-6'} />
                </button>) : <button onClick={toggleConnection}>Connect</button>}

            </div>
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.container}>{children}</div>
        </main>

      </div>
    </>
  );
};

export default Layout;