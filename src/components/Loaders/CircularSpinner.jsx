import React from 'react'
import Loader from "react-loader-spinner";

export default function CircularSpinner() {
    return (
        <div>
    <Loader
        type="ThreeDots"
        color="#446db9"
        height={100}
        width={100}
         
      />
        </div>
    )
}
