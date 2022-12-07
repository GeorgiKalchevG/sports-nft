import type { Contract} from 'ethers';
import { ethers } from 'ethers'
import grooveNFT from '@contracts/GrooveNFT.json'
import { useEffect, useState } from 'react'
const grooveNFTAddress = '0x3896A0c6349F6eBa0dfb880cF739a5cd06dc72db'
export function useGrooveNFTContract(){
  const [contract, setContract] = useState<Contract>()
  useEffect(()=>{
    if (window && window?.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      setContract( new ethers.Contract(
        grooveNFTAddress,
        grooveNFT.abi,
        signer
      ))
    }
  },[])
  return contract

}