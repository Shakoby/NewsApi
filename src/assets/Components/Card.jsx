

const Card = ({title, desc, img, url}) => {
    return ( 
        <div className="Card-news" >
            <img src={img} className="imgCard"/>
            <h2>{title}</h2>
            <p>{desc}</p>
            <a href={url} target="_blank">Read More</a>
        </div>
     );
}
 
export default Card;