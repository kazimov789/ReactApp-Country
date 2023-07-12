import React from 'react'
import HeaderItem from './HeaderItem'
import HeaderFilter from './HeaderFilter'

function header(params) {
  return (
    <div>
        <HeaderItem />
        <HeaderFilter search={params.search}/>
    </div>
  )
}

export default header