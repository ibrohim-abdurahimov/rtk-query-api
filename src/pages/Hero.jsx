import React, { useState } from 'react'
import { useCreateCategoryMutation, useDeleteCategoryMutation, useGetCategoryQuery, useUpdateCategoryMutation } from '../redux/api/category-api'
import './Hero.css'

const Hero = () => {
   const {data, isLoading, isError, error } = useGetCategoryQuery()
   const [createCategory, {}] = useCreateCategoryMutation()
   const [deleteCategory] = useDeleteCategoryMutation()
   const [updateItem] =  useUpdateCategoryMutation()
   const [titleValue, setTitleValue] = useState('')
   const [descValue, setDescValue] = useState('')

   const handleCreate = e => {
    e.preventDefault()
    const data = new FormData(e.target)    
    const newCategory = Object.fromEntries(data)
    createCategory(newCategory)
       .unwrap()
       .then((res)=>{
        e.target.reset()
       })
   }
   const handleDeleteCategory =id =>{
    deleteCategory(id)
   }
  
  //  const handleUp = (id, body) =>{
  //   updateItem({id, body})
    
    
    
  //  }
//    const handleDelete = id =>{
//     deleteCategory(id)
//    }
   
  return (
    <div>
        <h2 style={{textAlign: 'center'}}>Hero</h2>
        <form className='form' onSubmit={handleCreate} action="">
            <input required value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)} type="text" name='title' placeholder='Title'/>
            <input required value={descValue}
              onChange={(e) => setDescValue(e.target.value)} type="text" name='desc' placeholder='Desc'/>
            <button>Create</button>
        </form>
        {
            data?.map((item)=>(
                <div className='card' key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button onClick={()=> handleDeleteCategory(item.id)}>del</button>
                </div>
            ))
        }
    </div>
  )
}

export default Hero