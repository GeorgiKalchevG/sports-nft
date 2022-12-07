import React from 'react';
import Button from "../../components/button"

const Staking = () => {
  return (
    <div className={'flex flex-col justify-around h-[30rem]'}>
      <div className='flex-row'>
        <h1>Staking Dashboard</h1>
      </div>
      <div className='flex flex-row justify-between'>
        <Button kind='primary'>Stake</Button>
        <Button kind='secondary'>Claim</Button>
      </div>
      <Modal />
    </div>

  );
};

export default Staking;

const Modal = () => {
  return <div className='w-[100vw] h-[100vh] z-50 bg-black/30 absolute top-0 left-0'>
    <div className='bg-white w-1/2 h-1/2 top-1/4  left-1/4 absolute flex flex-col p-10'>
      <h1>{'title'}</h1>
      <div>placeholder for the staked nft-s</div>
      <div className={'bg-gray-900/10 flex flex-row justify-between p-10'}>
        <div className='flex-col'>tesxtsada
          <div>dasdas</div>
        </div>
        <div className='flex-col'>
          <Button size={'small'}>Claim</Button>
        </div>
      </div>
    </div>
  </div>
}