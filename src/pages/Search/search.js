import React, { useContext } from 'react'
import './search.css' ;
import { useSearchParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import ProductCard from '../../components/ProductCard.js'
import ThemeContext from '../../contexts/ThemeContext.js';

function Search() {
  
  const [serarchParams] = useSearchParams();
  const query =serarchParams.get("q");
  const url = "http://localhost:3000/tarifler?q=" + query ;
  const {mode} = useContext(ThemeContext);

  const {data:tarifler,isLoading,error} = useFetch(url);


  return (
    <div className={`text-${mode==="dark"? "light":"dark"} `}>
      <div className='row mt-3'>
        <h2 >Aranan Kelime "{query}"</h2>
        <hr/>
        {isLoading && <div className='alert alert-warning' >Yükleniyor</div>}
        {error && <div className='alert alert-danger' >{error}</div>}
        {
          tarifler && tarifler.map(tarif =>( < ProductCard key={tarif.id} tarif={tarif} />))
          
        }
      </div>
    </div>
  )
}

export default Search ;