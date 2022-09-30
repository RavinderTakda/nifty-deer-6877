import React from "react";
import {
  Box,
  Text,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Flex,
  Link,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCompanyReviews } from "../Redux/CompanyReviews/action";

const InputPart = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const handleCLick = () => {
    const getdata = {
      params: {
        company: text
      },
    };
    dispatch(getCompanyReviews(getdata));
  };
  
  return (
    <Box w="60%" m="auto">
      <Text fontSize="5xl" fontWeight="bold" mt={10}>
        Find great places to work
      </Text>
      <Text fontSize="2xl" mt="3">
        Get access to millions of company reviews
      </Text>
      <Text fontWeight="bold" mt="6">
        Company name or job title
      </Text>
      <Flex mb="4">
        <InputGroup  borderRadius="6px" mt="2">
          <Input
          isInvalid
          errorBorderColor='gray.300'
            value={text}
           
            onChange={(e) => setText(e.target.value)}
          />
          <InputRightElement children={<SearchIcon color="black" />} />
        </InputGroup>
        <Button
          onClick={handleCLick}
          colorScheme="blue"
          w="300px"
          mt="2"
          ml="2"
          p="2"
        >
          Find Companies
        </Button>
      </Flex>
      <Link color="blue">
        <u>Do you want to search for salaries?</u>
      </Link>
    </Box>
  );
};

export default InputPart;
