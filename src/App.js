import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header'
import SuperheroGrid from './components/superheroes/SuperheroGrid'
import Search from './components/ui/Search'
import './App.css';
import axios from 'axios';

console.log(process.env.REACT_APP_API_KEY);

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await axios(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${process.env.REACT_APP_API_KEY}/search/${query}_`)
        
        console.log(result.data.results)
        setItems(result.data.results)
        setIsLoading(false)
      } catch (err) {
        console.log('ERROR!')
        setIsLoading(true)
        setIsError(true)
      }
    }

    fetchItems()
  }, [query])

  const superheroes = <SuperheroGrid isLoading={isLoading} items={items} />
  const error = 'none found'

  return (
    <div className="Container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      { isError ? error : superheroes }
    </div>
  );
}

export default App;
