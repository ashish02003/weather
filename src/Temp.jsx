import React, { useEffect, useState } from "react";

import Myname from "./Myname";

const Temp = () => {

    const [city, setCity] = useState("");
    // const [mycity,setMycity]= useState();

    const [search, setSearch] = useState("");

    const [myData, setMyData] = useState("");

    const myinputData = (event) => {

        setSearch(event.target.value);

    }




    useEffect(() => {
        const fetchApi = async () => {


            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=da0edd4676d7ff048dca3f45e7242369`;





            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            // console.log(resJson)

            setMyData(resJson.main);
            console.log(resJson);

            if (response.ok) {

                setCity(resJson)

            }



        }
        fetchApi();
    }, [search])

    return (<>

        <div className="box">
            <div className="inputData">
                <input type="search"
                    className="inputField"
                    placeholder="Search City"
                    onChange={myinputData}
                    value={search}
                />

            </div>

            {(!myData) || (!city) ? <h6 className="errorData">no such city found 😞</h6> :
                <div>
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>

                    <img src={"http://openweathermap.org/img/w/" + city.weather[0].icon + ".png"} alt="weather" />


                    <div className="info">
                        <h2 className="location"><i className="fas fa-street-view"></i>{search},{city.sys.country}
                        </h2>


                        <p id="date"><Myname /></p>
                        <h1 className="NewTemp">{myData.temp}&deg;c</h1>

                        <h3 className="tempmin_max">Min : {myData.temp_min}&deg;c | Max : {myData.temp_max}&deg;c</h3>



                    </div>

                </div>


            }






        </div>




    </>);
}

export default Temp;