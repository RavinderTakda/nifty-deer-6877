import { SearchIcon } from "@chakra-ui/icons"
import { Box, Button, Input, InputGroup, InputLeftAddon, InputRightElement } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate, useSearchParams } from "react-router-dom"
import { SearchTopPayingJobs, SingleFullDataJobs } from "../Redux/FindJobsReducer/action"
import { getData } from "../Redux/TitleReducer/action"
import {MdLocationPin} from 'react-icons/md';

import styles from './Searchbox.module.css';
 export const InputSearch = ({page}) => {
  const title=useSelector(state=>state.TitleReducer.what)
  const location=useSelector(state=>state.TitleReducer.where)

  
  

  const navigate =useNavigate()

  const [searchparams,setsearchparams] =useSearchParams()
  


  const initialjobtitle = searchparams.getAll("q")
  // console.log(initialjobtitle)

const [what,setWhat] =useState(initialjobtitle || "")

// console.log("what",what)



  // const [jobtitle,setjobtitle] =useState("")

  const initialcity =searchparams.getAll("city")
  const [city,setcity] =useState( initialcity || "")

  const dispatch =useDispatch()





  const searchbyinput = (e) => {


    let payload= {
title:what,
location:city

    }

// console.log("payload",payload)
    dispatch(getData(payload))


    
     
      let getBooksParams ={

        params:{
          
          _page:page,
          _limit:5,
            q:title,
            city:location
           
        }
        
            }
      
      
      dispatch(SearchTopPayingJobs(getBooksParams))



}


useEffect(()=>{

  let params = {

    q:what,
    city:city
    
    }
    
    
    setsearchparams(params)

searchbyinput()



},[page,setsearchparams])






return(

<div className={styles.searchbar}>

<Box display="flex" width="73%" margin="auto" marginTop="50px" >

 <InputGroup>
   <InputLeftAddon children='What' />
   <InputRightElement children={<SearchIcon/>}/>
   <Input  onChange={(e)=>setWhat(e.target.value)} type='text' placeholder='Job title, Keywords or company'  width="83%"  />
 </InputGroup>


<InputGroup>
  <InputLeftAddon children='Where' />
  <InputRightElement children={<MdLocationPin/>}/>
  <Input  onChange={(e)=>setcity(e.target.value)} type='text'  placeholder='City, State or pin code'  width="81%"  />
</InputGroup>


 <Button onClick={ () => {

searchbyinput()
navigate("/findjob")
 }
  
 
  
  } colorScheme='blue' width="17%" >Find Jobs</Button>


 </Box>



</div>



)


}