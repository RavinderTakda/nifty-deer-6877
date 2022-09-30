import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const MiniFooter = () => {
  return (
    <>
      <Box
        w="60%"
        height="100px"
        border="1px solid white"
        m="auto"
        mt="20"
        bg="rgb(245,251,249)"
      >
        <Text textAlign="center" fontSize='20px' mt='20px'>Rate your recent company:</Text>
      </Box>
      <Box display="flex" ml="150px" mt={10}>
        <Text>Career Advice</Text>
        <Text mr={5}>Browse Jobs</Text>
        <Text mr={5}> Browse Companies</Text>
        <Text mr={5}>Salaries</Text>
        <Text mr={5}>Indeed Events</Text>
        <Text mr={5}>Work at Indeed</Text>
        <Text mr={5}>Countries</Text>
        <Text mr={5}>About</Text>
        <Text mr={5}>Help Center ESG at Indeed</Text>
      </Box>
      <Text ml="150px">Guidelines for Safe Job Search</Text>

      <Box ml={20} mt={10} w="60%" mb={10}>
        <SimpleGrid columns={[1, 2, 4]} spacing={5} fontSize={15}>
          <Box>
            <Text ml="100px">© 2022 Indeed</Text>
          </Box>
          <Box>
            <Text>Accessibility at Indeed Privacy </Text>
          </Box>
          <Box>
            <Text> Center Cookies </Text>
          </Box>
          <Box>
            <Text ml="-100px">Privacy Center</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default MiniFooter;
