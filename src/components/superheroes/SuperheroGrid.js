import React from 'react'
import SuperheroItem from './SuperheroItem'
import Spinner from '../ui/Spinner'

const SuperheroGrid = ({ items, isLoading }) => {
    return isLoading ? <Spinner /> : 
    
    <section className='cards'>
        {items ? 
            items.map(item => {
                return <SuperheroItem key={item.id} item={item}></SuperheroItem>
            }) : ""
        } 
    </section>
}

export default SuperheroGrid
