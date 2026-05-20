import React from 'react'

function ConfirmModal({message,onCancel,onConfirm}) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white p-6 rounded-lg w-80'>
        <p className='mb-4'>{message}</p>
        <div className='flex justify-end gap-2 '>
           <button
           onClick={onCancel}
           className='bg-gray-400 text-white px-4 py-2 rounded'>
            Cancel
           </button>
           <button 
           onClick={onConfirm}
           className='bg-red-400 text-white px-4 py-2 rounded'>
            Delete
           </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal