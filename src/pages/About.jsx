import React from 'react'
import { useGetProductsQuery } from '../redux/api/product-api'

const About = () => {
   const {data, isLoading, isError, error} = useGetProductsQuery()
   console.log(data);
   
  return (
    <div>
        <h2 style={{textAlign: 'center'}}>Hero</h2>
        {
            data?.map((item)=>(
                <div key={item.id}>
                    <img src={item.img} width='200' alt="" />
                    <h3>{item.title}</h3>
                </div>
            ))
        }
    </div>
  )
}

export default About