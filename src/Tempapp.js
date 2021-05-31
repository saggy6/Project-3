import React, { useEffect, useState } from 'react';

const Tempapp = () => {
    const [city, setCity] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=590930c47d83aa50b089951adfbc28bf`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        };
        fetchApi();
    }, [search])
    return (
        <>
            <div className="Box">
                <div className="inputData">
                    <input type="search"
                        className="inputFeild"
                        onChange={(event) => { setSearch(event.target.value) }} />
                </div>
                {!city ? (
                    <p>No Data Found !</p>
                ) : (
                    <div className="info">
                        <h1 className="location">{search}</h1>
                        <h2 className="temp">Current Temp:{city.temp}°C</h2>
                        <h3 className="tempmin_max">Min Temp:{city.temp_min}°C |Max Temp:{city.temp_max}°C</h3>
                    </div>
                )}
            </div>
        </>
    )

}
export default Tempapp;