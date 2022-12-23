import React from 'react'

export default function BoxInfo(props) {
    
  return (
    <div style={{display: "flex", flexDirection:"row", width:'50%', backgroundColor:'white', marginBottom:'2rem'}}>
      <div className="img" style={{width:'50%'}}><img src={props.src} alt={props.id} /></div>
      <div id="content" style={{width:'50%'}}>
        <h1 id="title">{props.name}</h1>
        <p id="desc">{props.desc}</p>
        <div id="footer-content">
          <span id="price">{props.price}</span>
          <span id="btn"><button style={{backgroundColor:'green', color:'#fff', border:'none', borderRadius:'20px', padding:'10px 30px', marginLeft:'10px'}}>BUY</button></span>
        </div>
      </div>
    </div>
  )
}
