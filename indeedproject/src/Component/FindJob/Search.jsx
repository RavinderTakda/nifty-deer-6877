import { SearchIcon } from "@chakra-ui/icons"
import { Box, Button, Input, InputGroup, InputLeftAddon, InputRightElement } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { SearchTopPayingJobs, SingleFullDataJobs } from "../Redux/FindJobsReducer/action"
import { handledata } from "./HomePage"

 export const InputSearch = ({page}) => {

  const [jobtitle,setjobtitle] =useState("")
  const [city,setcity] =useState("")

  const dispatch =useDispatch()

// console.log(handledata())



  const searchbyinput = (e) => {

   
     
    let getBooksParams ={

        params:{
          
          _page:page,
          _limit:5,
            q:jobtitle,
            city:city
           
        }
        
            }


    dispatch(SearchTopPayingJobs(getBooksParams))



}


useEffect(()=>{




searchbyinput()






},[page])






return(

<div>

<Box display="flex" width="73%" margin="auto" marginTop="50px" >

 <InputGroup>
   <InputLeftAddon children='What' />
   <InputRightElement children={<SearchIcon/>}/>
   <Input  onChange={(e)=>setjobtitle(e.target.value)} type='text' placeholder='Job title, Keywords or company'  width="83%"  />
 </InputGroup>


<InputGroup>
  <InputLeftAddon children='Where' />
  <Input  onChange={(e)=>setcity(e.target.value)} type='text'  placeholder='City, State or pin code'  width="81%"  />
</InputGroup>


 <Button onClick={searchbyinput} colorScheme='blue' width="17%" >Find Jobs</Button>


 </Box>



</div>



)


}