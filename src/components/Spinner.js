import React from 'react'
// import loading from './loading.gif'

const Spinner = () => {
  return (
    <div className="text-center"> 
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    </div>
  )
}

export default Spinner
