import React from 'react'
import Tour from './Tour';
import './TourList.css'

const DUMMY_LIST = [
   
    {
        date: "JUL16",
        name:'DETROIT, MI',
        place:'DTE ENERGY MUSIC THEATRE'

    },

    {
        date: "JUL19",
        name:'TORONTO,ON',
        place:'BUDWEISER STAGE'

    },
    {
        date: "JUL22",
        name:'BRISTOW, VA',
        place:'JIGGY LUBE LIVE'

    },
    {
        date: "JUL16",
        name:'PHOENIX, AZ',
        place:'AK-CHIN PAVILION'

    },
    {
        date: "JUL16",
        name:' LAS VEGAS, NV',
        place:'CONCORD PAVILION'

    },
    {
        date: "JUL16",
        name:'CONCORD, CA',
        place:'T-MOBILE ARENA'

    },
]



const TourList = () => {
  return (
    <div className='containerr'>
        <h2>TOURS</h2>
        {DUMMY_LIST.map((item)=>{
          return <Tour key = {Math.random()} name={item.name} date={item.date} place={item.place}/>
        })}
      
    </div>
  )
}

export default TourList
