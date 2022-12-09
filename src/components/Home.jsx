import React from 'react';
import { useState } from 'react';
import background from './background.jpg'

const Home = () => {

    const [data, setData] = useState({
        temp: 0,
        feels_like: 0,
        humidity: 0,
        min_temp: 0,
        max_temp: 0,
        wind_speed: 0,
        wind_degrees: 0,
        sunrise: 0,
        sunset: 0
    });

    const [search, setSearch] = useState("");

    const getData = (cityName) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fa9a9e1cefmshdc5532c189e8abap157f45jsn52a6d3895f74',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };

        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`, options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.log(err) );
    }


    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '90vh' }} >
            <main className="container p-5">

                <div className="d-flex " role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={e => setSearch(e.target.value)} />
                    <button className="btn btn-info" type="submit" onClick={() => getData(search)}>Search</button>
                </div>
=

                <h3 className='text-white text-center my-4'>
                    Weather of {search}
                </h3>

                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-info">
                            <div className="card-header py-3 text-bg-info border-info">
                                <h4 className="my-0 fw-normal">Temperature</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">{data.temp}<small className="text-muted fw-light">°C</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Temperature is {data.temp}</li>
                                    <li>Min temperature is {data.min_temp}</li>
                                    <li>Max temperature is {data.max_temp}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-info">
                            <div className="card-header py-3 text-bg-info border-info">
                                <h4 className="my-0 fw-normal">Humidity</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">{data.humidity}<small className="text-muted fw-light">%</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Wind Degree is {data.wind_degrees}</li>
                                    <li>Feels likes {data.feels_like}</li>
                                    <li>Humidity is {data.humidity}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-info">
                            <div className="card-header py-3 text-bg-info border-info">
                                <h4 className="my-0 fw-normal">Wind Info</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">{data.wind_speed}<small className="text-muted fw-light">km/hr</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Wind speed is {data.wind_speed}</li>
                                    <li>Sunrise time is {data.sunrise}</li>
                                    <li>Sunset time is {data.sunset}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home