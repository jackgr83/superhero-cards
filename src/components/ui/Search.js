import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setText(`${text}`)
        getQuery(`${text}`)
    }

    return (
        <section className='search'>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    className='form-control' 
                    placeholder='Search Superheroes..'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                />
                <input 
                    type='submit' 
                    style={{display:'none'}} 
                    value='Submit'
                />
            </form>
            
        </section>
    )
}

export default Search
