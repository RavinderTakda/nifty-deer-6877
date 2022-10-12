import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Pages/Footer";
import { Navbar } from "../Pages/Navbar";
import { SearchTopPayingJobs } from "../Redux/FindJobsReducer/action";
import { InputSearch } from "./Search";
import { Searchbox } from "./Searchbox";

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

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [homedata, sethomedata] = useState("");

  const handledata = (tag) => {
    sethomedata(tag);

    console.log(homedata);
  };

  const searchbyinput = (tag) => {
    let getBooksParams = {
      params: {
        _page: 1,
        _limit: 5,
        q: tag,
      },
    };

    dispatch(SearchTopPayingJobs(getBooksParams));

    navigate("/findjob");
  };

  return (
    <>
      <Box display={"none"}>
        <Searchbox />
      </Box>

      <Navbar />
      <InputSearch />

      <Container maxW="container.lg" my={5} h={"43vh"} >
        <VStack>
          <Heading fontSize={20}>Popular Searches</Heading>
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
                    handledata(tag);

                    searchbyinput(tag);
                  }}
                >
                  {tag}
                </Button>
              );
            })}
          </Flex>
        </VStack>
      </Container>

      <Footer />
    </>
  );
};
