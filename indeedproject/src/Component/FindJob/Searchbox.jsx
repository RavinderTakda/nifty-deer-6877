import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box, Button, Input, InputGroup, InputLeftAddon, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { SearchTopPayingJobs } from "../Redux/FindJobsReducer/action"



 export const Searchbox = () => {

    const [jobtitle,setjobtitle] =useState("")
    const [city,setcity] =useState("")
const dispatch =useDispatch()

    const searchbyinput = (e) => {

   
     
        let getBooksParams ={

            params:{
              
                _page:"1",
                city:city
               
            }
            
                }


        dispatch(SearchTopPayingJobs(getBooksParams))



    }


    useEffect(()=>{











    },[])







return(

<div >

    <Box  display="flex" width="60%" margin="auto" marginTop="50px" >

  <InputGroup>
    <InputLeftAddon children='What' />
    <Input onChange={(e)=>setjobtitle(e.target.value)} type='text' placeholder='Job title, Keywords or company' rightIcon="SearchIcon" width="70%"  />
  </InputGroup>

  {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
  <InputGroup>
    <InputLeftAddon children='Where' />
    <Input  onChange={(e)=>setcity(e.target.value)} type='text'  placeholder='City, State or pin code'  leftIcon="PhoneIcon" width="70%"  />
 
  </InputGroup>



  <Button onClick={searchbyinput} colorScheme='blue' width="15%" >Find Jobs</Button>



</Box>


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
</div>
)



}