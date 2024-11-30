import React, { useState } from 'react';


function FourButtonField() {
    const flwr = ["Rose", "Lotus", "SunFlower", "Lavender"];
    const City = ["Surat", "Navsari", "Junaghadh", "Ahmedabad"];
    const Car = ["Mustang", "BMW", "Audi", "Fortuner"];
    const [all, setAll] = useState([]);

    
    // console.log(all);
    
    const handelAllBtn = () => {
        setAll([...flwr,...Car,...City]);
        console.log(setAll); 
    }
    const handelFlowerBtn = () => {
        setAll(flwr);
        console.log(setAll); 
    }
    const handelCityBtn = () => {
        setAll(City);
        console.log(setAll); 
    }
    const handelCarBtn = () => {
        setAll(Car);
        console.log(setAll); 
    }

    return (
        <div>
            <button onClick={handelAllBtn}>All</button>
            <button onClick={handelFlowerBtn}>City</button>
            <button onClick={handelCityBtn}>Flower</button>
            <button onClick={handelCarBtn}>Car</button>
            {
                all.map((item, i) => <p key={i}>{item}</p>)
            }
        </div>
    )
}

export default FourButtonField
