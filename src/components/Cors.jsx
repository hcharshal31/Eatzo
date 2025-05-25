import React from 'react'

function Cors() {
  return (
    <div className="pt-40 flex flex-col items-center">
      <h2 className="text-4xl text-red-500 text-center pb-8">⚠️ Live Data Not Loading</h2>
      <p className="text-3xl font-stretch-95% font-medium text-center pb-5">It seems the Swiggy live API is blocked due to browser CORS policy.</p>
      <p className="text-2xl/normal font-light text-center pb-5">To experience the full features of this app, please install and enable the <strong><u>Moesif Origin & CORS Changer</u></strong> Chrome extension.</p>
      <a href="https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc" 
         target="_blank" className="flex justify-center items-center w-50 h-12 text-center bg-orange-600 text-white font-semibold text-xl rounded-xl">
        Install Extension
      </a>
    </div>
  )
}

export default Cors;