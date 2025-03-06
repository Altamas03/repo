import "./Card.css";


 const Card = ({children}) =>{
    return(
        <div id="container">
        <div id="card">
            
          {children}
        </div>
        </div>
    )

}
export default Card