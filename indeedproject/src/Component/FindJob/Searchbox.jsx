import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box, Button, Divider, Heading, Input, InputGroup, InputLeftAddon, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Footer } from "../Pages/Footer"
import { Navbar } from "../Pages/Navbar"
import { SearchTopPayingJobs, SingleFullDataJobs } from "../Redux/FindJobsReducer/action"
import { Pagination } from "./Pagination"
import { InputSearch } from "./Search"
import styles from './Searchbox.module.css';


 export const Searchbox = () => {
  const title=useSelector(state=>state.TitleReducer.what)
  const location=useSelector(state=>state.TitleReducer.where)
   console.log(title,location);
  const [page,setpage] =useState(1)

  const dispatch =useDispatch()


  const [apply,setapply] =useState(true)
  const [count,setcount] =useState(true)


const data =useSelector(state=>state.SearchJobsReducer.data)
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


<Divider  orientation='horizontal' marginTop={"30px"}  />




<div className={styles.bigdiv} >



<div style={{"width":"49%"}}>

{data.map((ele)=>{

return(

    <Box   pl="5" className={styles.searchbox}   onClick={()=>fulldata(ele.id)} >
   
    <Heading size="sm">{ele.job_title}</Heading>
    <p>{ele.company_name}</p>
    <p>{ele.city},{ele.state}</p>
    <Button  size="sm">{ele.job_type}</Button>
    <Button size="sm">{ele.category}</Button>
    <Box
                pl="0"
                height={"57%"}
                overflow="hidden"
                // overflow="auto"
                marginTop="8px"
                dangerouslySetInnerHTML={{ __html: ele.html_job_description }}
              />

    </Box>
)


})}

</div>


<div  style={{"width":"47%"}}>

{singledata.map((ele)=>{

return(

  <Box className={styles.singledata} >
 
 <Box pl="5" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} width={"100%"} padding={"10px"}>
  <Heading size="sm">{ele.job_title}</Heading>
  <p style={{"color":"green"}}>{ele.company_name}</p>
  <p>{ele.city},{ele.state}</p>
  {/* <Button size="sm">{ele.job_type}</Button>
  <Button size="sm">{ele.category}</Button> */}
  <Link to={"/applyjob"}>
  <Button marginTop={"5px"} onClick={AlreadyApplied} backgroundColor="blue" color="white">{apply?"Apply Now":"Applied"}</Button>
  </Link>
  
  </Box>
  <Box
              pl="6"
              height={"79%"}
              overflowX="hidden"
              overflowY="auto"
              marginTop="8px"
              dangerouslySetInnerHTML={{ __html: ele.html_job_description }}
            />

  </Box>
)



})}

</div>



</div>



<Pagination  current={page} onChange={page=>setpage(page)} />


<Footer/>

</div>




)



}