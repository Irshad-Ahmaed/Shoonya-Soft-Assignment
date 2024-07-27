import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import axios from 'axios';
import SearchBar from './SearchBar';
import Card from './Card';

const Filter = () => {
  const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])

    const optionsDate = [
  
      {value:0 , label:"less than a year"},
      {value:1 , label:"between 1 year"},
      {value:2 , label:"greater than 2 year"},
          
    ]
    const optionsType = [
  
      {value:0 , label:"Standalone"},
      {value:1 , label:"Relax"},
      {value:2 , label:"Signature"},
          
    ]
  return (
    <div className='flex flex-col m-4 gap-3'>
        <div className='md:flex justify-between'>
          <div className='flex flex-col md:flex-row gap-4 md:gap-12'>
            <Select options={optionsDate} className='md:w-[200px]' placeholder="select by date" />
            <Select options={optionsType} className='md:w-[200px]' placeholder="select by name" />
          </div>
          <SearchBar data={data} />
        </div>
        <Card  data={data}/>
    </div>
  )
}

export default Filter