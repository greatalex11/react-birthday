
import Person from "./Person.jsx"


const List=({people})=>{
    return (
        <section className=".text-danger">

            {people.map((person)=>{
                return <Person key={person.id} {...person} />;
    })}
    </section>
)
};
export default List;