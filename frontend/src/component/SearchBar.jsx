import React, { useState } from 'react'

const SearchBar = ({data}) => {
  const [filterData, setFilterData] = useState([]);
  const [isHide, setIsHide] = useState('hidden');

  const handleFilter = (val) => {
    const res = data.filter(f => f.type.toLowerCase().includes(val))
    setFilterData(res);
    
    filterData.length === 0 ? setIsHide('') : setIsHide('hidden')
  }
  
  return (
    <div className='flex flex-col md:text-white md:justify-end md:items-end mt-4 md:mt-0'>
      <div>
        <input type="text" placeholder="Search retreats by title"
              className='w-full md:w-[500px] md:bg-blue-900 border-2 rounded-md py-1 px-2'
              onChange={e => handleFilter(e.target.value)}
        />
      </div>

      <div className={`w-full md:w-[500px] border-2 md:text-black md:absolute md:bg-white top-[70%] overflow-y-auto max-h-[200px] rounded-md mt-1 p-2 ${isHide}`}>
        {
          filterData.map((fil, key)=>
            <div key={key}>
              {fil.type}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default SearchBar