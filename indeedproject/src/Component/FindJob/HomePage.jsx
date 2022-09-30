









import { SearchIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, Heading, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Pages/Footer";
import { Navbar } from "../Pages/Navbar";
import { SearchTopPayingJobs } from "../Redux/FindJobsReducer/action";
import { InputSearch } from "./Search";


let tags = [
  "Java Developer",
  "Work From Home",
  "Driver",
  "HR Fresher",
  "Software Testing",
  "Sales Executive",
  "Business Analyst",
  "Receptionist",
  "Data Analyst",
  "Seo Executive",
];




 export const handledata = (tag) => {

return tag


}






 export const HomePage = () => {

  const navigate = useNavigate();


const dispatch =useDispatch()


  const searchbyinput = (tag) => {

   
     
    let getBooksParams ={

        params:{
          
          _page:1,
          _limit:5,
            q:tag,
          
           
        }
        
            }
            navigate("/findjob");

    dispatch(SearchTopPayingJobs(getBooksParams))



}





  return (
<div>

  <Navbar/>
<InputSearch/>

    <Container maxW="container.lg" my={5}>
      <VStack>
        <Heading fontSize={20}>Popupler Searches</Heading>
        <Flex flexWrap={"wrap"} justifyContent="center" gap={4} p={5}>
          {tags.map((tag) => {
            return (
              <Button
                key={tag}
                leftIcon={<SearchIcon />}
                colorScheme="gray"
                fontSize={"0.9rem"}
                fontWeight={400}
                _focus={{
                  boxShadow: "0 0 0 2px #fff, 0 0 0 4px #085ff7",
                }}
                onClick={() => {

handledata(tag)

searchbyinput(tag)
                  
                }}
              >
                {tag}
              </Button>
            );
          })}
        </Flex>
      </VStack>
    </Container>

    <Footer/>
    </div>
  );
};
