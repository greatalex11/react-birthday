const Person=({image, nom,age})=>{
    return <article className="person">
        <img src={image} alt={nom} className='img'/>
        <div>
            <h4>{nom}</h4>
            <p>{age}</p>
        </div>
    </article>;
};
export default Person;