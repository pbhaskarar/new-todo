import { bgcolor } from '@mui/system'
import React from 'react'
import Checkout from './SignUp/Checkout'
import SignUp from './SignUp/SignUp'


const Contact = () => {
  return (
    <>
     <div style={{bgcolor:"black"}}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <SignUp />
          </div>
          <div className='col-md-6'>
            <Checkout/>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Contact