import { useState } from 'react'
import React from 'react';
import data from "./Data.js";
import List from "./List.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

function App() {
    const [people, setPeople, ] = useState(data)
    console.log(people);

    return (
        <>
            <h2>Birthday reminder</h2>
            <div className="bg-lighten-md text-white">


                <section className="card bg-magenta">

                    <div className="card-body" style={{
                        width: 350}}>

                        <h5 className="card-title ">{people.length} birthdays today</h5>
                        <List people={people}/>
                        <button type="button" className="btn btn-info"
                                onClick={()=>setPeople([])}>Clear all</button>

                    </div>

                </section>


            </div>

        </>
    )
}
export default App
