
import './style.css'
export default function BoxInfo(props) {
    

  return (
    <div style={{display: "flex", flexDirection:"row", width:'50%', backgroundColor:'white', marginBottom:'2rem', padding: '20px'}}>
      <div className="img" style={{width:'50%'}}><img src={props.src} alt={props.id} /></div>
      <div id="content" style={{width:'50%'}}>
        <h1 id="title">{props.name}</h1>
        <p id="desc">{props.desc}</p>
        <div id="footer-content">
          <span id="price">{props.price}</span>
        </div>
      </div>
    </div>
  )
}
