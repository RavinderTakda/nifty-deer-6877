import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box, Button, Divider, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftAddon, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form, Link } from "react-router-dom"
import { Footer } from "../Pages/Footer"
import { Navbar } from "../Pages/Navbar"
import { SearchTopPayingJobs, SingleFullDataJobs } from "../Redux/FindJobsReducer/action"
import { Pagination } from "./Pagination"
import { InputSearch } from "./Search"
import styles from './Searchbox.module.css';
import { MdOutlineUploadFile} from 'react-icons/md';
import { useRef } from "react"

 export const Searchbox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
const inputref =useRef()
 console.log("Inputref",inputref.current)
  const [page,setpage] =useState(1)

  const dispatch =useDispatch()


  const [apply,setapply] =useState(true)
  const [count,setcount] =useState(true)
  const [valid,setvalid] =useState(false)
  


const data =useSelector(state=>state.SearchJobsReducer.data)


// console.log(data)





const singledata =useSelector(state=>state.SearchJobsReducer.singledata)


// console.log("data",data)
console.log("singledata",singledata)



const handleinputref = () => {


  if(inputref.current===null){
    inputref.current.focus()
  }



}








const fulldata =(id) => {




  let getBooksParams ={
  
  params:{
    
      id:id
     
  }
  
      }
  
  
  
  dispatch(SingleFullDataJobs(getBooksParams))


  
  
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

    <Box   pl="5" className={styles.searchbox}   onClick={()=>{

      fulldata(ele.id)
      setcount(false)
    }
    
    
    } >
   
    <Heading size="sm">{ele.job_title}</Heading>
    <p>{ele.company_name}</p>
    <p>{ele.city},{ele.state}</p>
    <Button  size="sm">{ele.job_type}</Button>
    <Button ml={"7px"} size="sm">{ele.category}</Button>
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






{count? data.map((ele,i)=>{

if(i==0){



return(

  <>
   <Box className={styles.singledata} >
   
   <Box pl="5" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} width={"100%"} padding={"10px"}>
    <Heading size="sm">{ele.job_title}</Heading>
    <p style={{"color":"green"}}>{ele.company_name}</p>
    <p>{ele.city},{ele.state}</p>
    {/* <Button size="sm">{ele.job_type}</Button>
    <Button size="sm">{ele.category}</Button> */}
  
    <Button   marginTop={"5px"} onClick={()=>{
  
  // {apply?onOpen():onclose()}
  onOpen()
  
  
    }} backgroundColor="blue" color="white">Apply Now</Button>
  
 
        <Modal
  
    isOpen={isOpen}
    onClose={onClose}
  >
    <ModalOverlay />
   
    <ModalContent>
      <ModalHeader>Add your contact information</ModalHeader>
      <ModalCloseButton />
    
      <ModalBody pb={6}>
      
        <FormControl>
          <FormLabel>First name</FormLabel>
          <Input     ref={inputref}  placeholder='First name' />
        </FormControl>
  
        <FormControl mt={4}>
          <FormLabel>Last name</FormLabel>
          <Input placeholder='Last name' />
        </FormControl>
  
  
        <FormControl mt={4}>
  <FormLabel>Email</FormLabel>
  <Input placeholder='Email' ></Input>
      </FormControl>
  
  
      <FormControl mt={4}>
        <FormLabel>City, State(optional)</FormLabel>
        <Input placeholder='City' ></Input>
      </FormControl>
  
      <FormControl mt={4}>
        <FormLabel>Phone Number</FormLabel>
        <Input placeholder='Phone Number' ></Input>
      </FormControl>
  
      <FormControl mt={4} >
        <FormLabel>Upload Resume</FormLabel>
        <Box display={'flex'}>
        <InputGroup>
      <InputLeftElement
        pointerEvents='none'
        children={<MdOutlineUploadFile size={"30px"}/>}
      />
      <Input type='file' placeholder='Phone number' />
    </InputGroup>
        </Box>
      </FormControl>
      
  
      
  
      </ModalBody>
  
  
    
  
      <ModalFooter>
        <Button onClick={()=>{

          handleinputref()
          setapply(false)
  
         onClose()
         
  
        }} colorScheme='blue' mr={3}>



          Submit
        </Button>
        <Button onClick={onClose}>Cancel</Button>
        
      </ModalFooter>
    </ModalContent>
    
  </Modal>

    
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
  </>
)

}




}):
singledata.map((ele)=>{

  return(
  
    <Box className={styles.singledata} >
   
   <Box pl="5" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} width={"100%"} padding={"10px"}>
    <Heading size="sm">{ele.job_title}</Heading>
    <p style={{"color":"green"}}>{ele.company_name}</p>
    <p>{ele.city},{ele.state}</p>
    {/* <Button size="sm">{ele.job_type}</Button>
    <Button size="sm">{ele.category}</Button> */}
  
    <Button   marginTop={"5px"} onClick={()=>{
  
  {apply?onOpen():onclose()}
  
  
    }} backgroundColor="blue" color="white">{apply?"Apply Now":"Applied"}</Button>
  
  
        <Modal
  
    isOpen={isOpen}
    onClose={onClose}
  >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Add your contact information</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <FormControl>
          <FormLabel>First name</FormLabel>
          <Input  placeholder='First name' />
        </FormControl>
  
        <FormControl mt={4}>
          <FormLabel>Last name</FormLabel>
          <Input placeholder='Last name' />
        </FormControl>
  
  
        <FormControl mt={4}>
  <FormLabel>Email</FormLabel>
  <Input placeholder='Email' ></Input>
      </FormControl>
  
  
      <FormControl mt={4}>
        <FormLabel>City, State(optional)</FormLabel>
        <Input placeholder='City' ></Input>
      </FormControl>
  
      <FormControl mt={4}>
        <FormLabel>Phone Number</FormLabel>
        <Input placeholder='Phone Number' ></Input>
      </FormControl>
  
      <FormControl mt={4} >
        <FormLabel>Upload Resume</FormLabel>
        <Box display={'flex'}>
        <InputGroup>
      <InputLeftElement
        pointerEvents='none'
        children={<MdOutlineUploadFile size={"30px"}/>}
      />
      <Input type='file' placeholder='Phone number' />
    </InputGroup>
        </Box>
      </FormControl>
  
      
  
      </ModalBody>
  
  
    
  
      <ModalFooter>
        <Button onClick={()=>{
          setapply(false)
  
  onClose()
  
        }} colorScheme='blue' mr={3}>
          Submit
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  
    
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
  
  
  
  })



}

</div>



</div>



<Pagination  current={page} onChange={page=>setpage(page)} count={setcount} />


<Footer/>

</div>




)



}