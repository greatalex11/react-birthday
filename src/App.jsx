import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
            <div className="bg-pink text-white">


                <section className="card ">

                    <div className="card-body" style={{
                        width: 350,
                        height: 600,}}>

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
