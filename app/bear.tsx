'use client'

import { useBearStore } from '@/stores/bear.store'

export default function Bear() {
  const bears = useBearStore((state) => state.bears)
  const addBear = useBearStore((state) => state.increase)
  const removeBear = useBearStore((state) => state.decrease)
  const resetBear = useBearStore((state) => state.reset)
  return (
    <>
      <h3 className='text-lg font-bold'>Bear</h3>
      <p className='text-base font-normal'>Total: {bears}</p>
      <button
        className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-white'
        onClick={() => addBear()}
      >
        Add Bear
      </button>
      <button
        className='mt-4 rounded-md bg-red-500 px-4 py-2 text-white'
        onClick={() => removeBear()}
      >
        Remove Bear
      </button>
      <button
        className='mt-4 rounded-md bg-green-500 px-4 py-2 text-white'
        onClick={() => resetBear()}
      >
        Reset Bear
      </button>
    </>
  )
}
