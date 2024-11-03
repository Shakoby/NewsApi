
//Sources
const Card2 = ({name, desc, img, url, country,language}) => {
    return ( 
        <div className="Card-news" >
            <img src={img} className="imgCard"/>
            <h2>{name}</h2>
            <h3>Country: {country} | Language: {language}</h3>
            <p>{desc}</p>
            <a href={url} target="_blank">Read More</a>
        </div>
     );
}
 
export default Card2;