import React from 'react'
const MyButtons=({children})=>{
    return(
        <button
        type='submit'
        className='btn'
        >
            {children}
        </button>
    )
}
export default MyButtons;