import React from 'react'

const SuperheroItem = ({ item }) => {
    return (
        <div className='card'>
        <div className='card-inner'>
            <div className='card-front'>
            <img src={item.image.url} alt='' />
            </div>
            <div className='card-back'>
            <h1>{item.name}</h1>
            <ul>
                <li>
                <strong>Height:</strong> {item.appearance.height[0]}
                </li>
                <li>
                <strong>Weight:</strong> {item.appearance.weight[0]}
                </li>
                <li>
                <strong>Intelligence:</strong> {item.powerstats.intelligence}
                </li>
                <li>
                <strong>Strength:</strong> {item.powerstats.strength}
                </li>
                <li>
                <strong>Speed:</strong> {item.powerstats.speed}
                </li>
                <li>
                <strong>Power:</strong> {item.powerstats.power}
                </li>
                <li>
                <strong>Publisher:</strong> {item.biography.publisher}
                </li>
            </ul>
            </div>
        </div>
        </div>
    )
}

export default SuperheroItem
