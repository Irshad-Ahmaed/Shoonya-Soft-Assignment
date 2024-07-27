import React, { useState } from 'react'
import moment from 'moment';

const Card = ({data}) => {
    const [currPage, setCurrPage] = useState(1);
    const cardPerPage = 3;
    const lastIndex = currPage * cardPerPage;
    const firstIndex = lastIndex - cardPerPage;
    const currCardPage = data.slice(firstIndex, lastIndex);
    console.log(data);
    const nextPage = () => {
        setCurrPage(currPage+1);
    }

    const prevPage = () => {
        setCurrPage(currPage-1);
    }

  return (
        <div>
            {
                currCardPage.map((item, index) => 
                    <div className='flex flex-col md:flex-row md:inline-block md:mx-2'>
                        <div className='flex flex-col justify-center w-full md:w-[479px] gap-2 md:gap-4 my-4 py-3 px-4 bg-orange-100 rounded-lg'>
                            <div className='mb-1'>
                                <img src={item.image} alt='girl_yoga_img' 
                                    className='w-full md:w-1/2 h-40 object-cover rounded-md md:rounded-2xl'
                                />
                            </div>
                            
                            <div>
                                <h3 className='font-semibold text-lg'>{item.title}</h3>
                                <p className='text-xs'>{item.description}</p>
                            </div>

                            <div className='text-xs md:flex flex-col gap-2'>
                                <p>Date: {moment(item.date).fromNow()}</p>
                                <p>Location: {item.location}</p>
                                <span className='font-bold'>Price: ${item.price}</span>
                            </div>
                        </div>
                    </div>
                )
            }

            <div className='text-white text-center mb-10'>
                <button onClick={prevPage} className='bg-blue-900 rounded-2xl px-3 py-1 mx-3'>Previous</button>
                <button onClick={nextPage} className='bg-blue-900 rounded-2xl px-3 py-1 mx-3'>Next</button>
            </div>
        </div>
    )
}

export default Card