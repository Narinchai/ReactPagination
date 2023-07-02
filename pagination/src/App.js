
import './App.css';
import Foodcomponents from "./components/Foodcomponents"
import {useEffect, useState} from "react"
import MenuData from './data/MenuData'



function App() {
  const [foodData,setFoodData] = useState(MenuData) 
  const [dataInPage,setDataInPage] = useState([])
  const [page,setPage] = useState(0)


  const pagination=()=>{
    const foodPerPage=3
    const pages = Math.ceil(MenuData.length/foodPerPage)
    console.log("จำนวนหน้า=", pages);

   const newFood = Array.from({length:pages},(data,index)=>{
      const start = index * foodPerPage
     return MenuData.slice(start,start+foodPerPage)
    })
   return newFood
  }

  const handlePage=(index)=>{
      setPage(index)
  }

  useEffect(()=>{
  const paginate = pagination()
  setDataInPage(paginate)
  setFoodData(paginate[page])
},[page])


  return (
    <div className="App">
     <h1>app components</h1>

     <div className="container">
     {foodData.map((data,index)=>{
      return <Foodcomponents key={index} {...data}/>
     })}</div>

     <div className="pagination-container">
      {dataInPage.map((data,index)=>{
        return (
        <button key={index} onClick={()=>handlePage(index)}
        className={`page-btn ${index === page ? "active-btn": null }`}>
          {index+1} </button>
          )
      })} </div>


    </div>
  );
}

export default App;
