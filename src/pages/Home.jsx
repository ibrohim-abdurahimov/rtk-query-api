import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [data, setData] = useState(null)
    useEffect(()=>{
        axios
            .get("https://dummyjson.com/users")
            .then(res=> setData(res.data.users))
    },[])
  return (
    <div>
        <h2 style={{textAlign: 'center'}}>Home</h2>
        {
            data?.map((item)=>(
                <div key={item.id}>
                    <img src={item.image} alt="" />
                    <h3>{item.firstName}</h3>
                </div>
            ))
        }
    </div>
  )
}

export default Home