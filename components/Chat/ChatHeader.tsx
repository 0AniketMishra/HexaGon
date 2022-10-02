import { PlusIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useRecoilState } from 'recoil'
import { chatModalState } from '../../atoms/chatModalAtoms'
import { modalState } from '../../atoms/modalAtom'

function ChatHeader() {
  const [Open, setOpen] = useRecoilState(chatModalState)

  return (
    <div className='ml-2  p-2 sticky top-0 bg-white'>
      <div className='flex'>
        <h1 className=' text-black font-bold justify-between'>Contacts - </h1>
        <h1 className="flex-1"></h1>
        <PlusIcon className="w-5 h-5 cursor-pointer" onClick={() => setOpen(true)} />
      </div>
      <div className='m-2 '>
        <input type="text" placeholder='Search Contacts' className='mr-4 bg-transparent w-full  outline-none' />
      </div>
    </div>
  )
}

export default ChatHeader