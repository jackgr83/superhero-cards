import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header'
import SuperheroGrid from './components/superheroes/SuperheroGrid'
import Search from './components/ui/Search'
import './App.css';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await axios(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${process.env.REACT_APP_API_KEY}/search/${query}_`)       
        setItems(result.data.results)
        setIsLoading(false)
      } catch (err) {
        setIsLoading(true)
        setIsError(true)
      }
    }

    fetchItems()
  }, [query])

  const superheroes = <SuperheroGrid isLoading={isLoading} items={items} />
  const error = ''

  return (
    <div className="Container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      { isError ? error : superheroes }
    </div>
  );
}

export default App;
