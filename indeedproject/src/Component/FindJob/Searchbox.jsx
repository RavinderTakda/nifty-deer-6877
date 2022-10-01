import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box, Button, Heading, Input, InputGroup, InputLeftAddon, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Footer } from "../Pages/Footer"
import { Navbar } from "../Pages/Navbar"
import { SearchTopPayingJobs, SingleFullDataJobs } from "../Redux/FindJobsReducer/action"
import { Pagination } from "./Pagination"
import { InputSearch } from "./Search"
import styles from './Searchbox.module.css';


 export const Searchbox = () => {

  const [page,setpage] =useState(1)

  const dispatch =useDispatch()


  const [apply,setapply] =useState(true)
  const [count,setcount] =useState(true)


const data =useSelector(state=>state.SearchJobsReducer.data)
console.log(data)
const singledata =useSelector(state=>state.SearchJobsReducer.singledata)
// console.log("data",data)
// console.log("singledata",singledata)

const fulldata =(id) => {


  let getBooksParams ={
  
  params:{
    
      id:id
     
  }
  
      }
  
  
  
  dispatch(SingleFullDataJobs(getBooksParams))
  
  
  }




const AlreadyApplied = () => {

if(count>1){

  alert("You are already applied")

}

setapply(false)
setcount(count=>count+1)

  
}





return(
   

<div >
<Navbar/>
   <InputSearch page={page}/>


<Box  display="flex" width="28%" justifyContent="space-between" margin="auto"  marginTop="50px">
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
    Date Posted
  </MenuButton>
  <MenuList>
    <MenuItem>Last 24 Hours</MenuItem>
    <MenuItem>Last 3 Days</MenuItem>
    <MenuItem>Last 7 Days</MenuItem>
    <MenuItem>Last 14 Days</MenuItem>
 
  </MenuList>
</Menu>



<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
   Job Type
  </MenuButton>
  <MenuList>
    <MenuItem>Full Time</MenuItem>
    <MenuItem>Part Time</MenuItem>
    <MenuItem>Contract</MenuItem>
    <MenuItem>Fresher</MenuItem>
    <MenuItem>Internship</MenuItem>
  </MenuList>
</Menu>




<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
    Remote
  </MenuButton>
  <MenuList>
    <MenuItem>Yes</MenuItem>
    <MenuItem>No</MenuItem>
 
  </MenuList>
</Menu>

</Box>




<div className={styles.bigdiv} >








<div>

{data.map((ele)=>{

return(

    <div className={styles.searchbox} onClick={()=>fulldata(ele.id)} >
   
    <Heading size="sm">{ele.job_title}</Heading>
    <p>{ele.company_name}</p>
    <p>{ele.city},{ele.state}</p>
    <Button size="sm">{ele.job_type}</Button>
    <Button size="sm">{ele.category}</Button>
    <Box
                pl="10"
                height={"78%"}
                overflow="hidden"
                // overflow="auto"
                dangerouslySetInnerHTML={{ __html: ele.html_job_description }}
              />

    </div>
)


})}

</div>


<div>

{singledata.map((ele)=>{

return(

  <div className={styles.singledata} >
 
  <Heading size="sm">{ele.job_title}</Heading>
  <p>{ele.company_name}</p>
  {/* <p>{ele.city},{ele.state}</p> */}
  {/* <Button size="sm">{ele.job_type}</Button>
  <Button size="sm">{ele.category}</Button> */}
  <Button onClick={AlreadyApplied} backgroundColor="blue" color="white">{apply?"Apply":"Applied"}</Button>
  <Box
              pl="10"
              height={"78%"}
              overflowX="hidden"
              overflowY="auto"
              dangerouslySetInnerHTML={{ __html: ele.html_job_description }}
            />

  </div>
)



})}

</div>



</div>



<Pagination  current={page} onChange={page=>setpage(page)} />


<Footer/>

</div>




)



}