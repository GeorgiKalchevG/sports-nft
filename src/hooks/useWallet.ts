import { useState } from 'react'
import { init, useConnectWallet } from '@web3-onboard/react'
import { injectedClientEntries } from "next/dist/build/webpack/plugins/flight-client-entry-plugin"
import injectedModule from '@web3-onboard/injected-wallets'

const rpcAPIKey = '<INFURA_KEY>' || '<ALCHEMY_KEY>'
const rpcUrl = `https://eth-mainnet.g.alchemy.com/v2/${rpcAPIKey}` || `https://mainnet.infura.io/v3/${rpcAPIKey}`
const injected = injectedModule()
init({
  wallets: [injected],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl
    }
  ]
})

export function useWallet() {
  const [{wallet, connecting}, connect, disconnect] = useConnectWallet()
  const toggleConnection = () => {
    if (wallet) {
      disconnect(wallet)
    } else {
      connect()
    }
  }
  return {isConnected: wallet, connecting, toggleConnection}
}