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

const InputPart = () => {
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
        <InputGroup border="1px solid gray" borderRadius="6px" mt="2">
          <Input />
          <InputRightElement children={<SearchIcon color="black" />} />
        </InputGroup>
        <Button colorScheme="blue" w="300px" mt="2" ml="2" p="2">
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
