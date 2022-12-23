import React from 'react'

export default function MyBtn(props) {
    
  return (
    <div>
      <button onClick={() => {console.log(props.parent)}} style={{backgroundColor:'green', color:'#fff', border:'none', borderRadius:'20px', padding:'10px 30px', marginLeft:'10px', cursor:'pointer', position:'absolute', bottom:'2.5rem', right:'25rem'}}>BUY</button>
    </div>
  )
}
