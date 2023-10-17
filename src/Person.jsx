const Person=({image, nom,age})=>{
    return <article className="person">
        <img height="100" src={image} alt={nom} className='img'/>
        <div>
            <h4>{nom}</h4>
            <p>{age}</p>
        </div>
    </article>;
};
export default Person;