import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import style from './MiniFooter.module.css'

const MiniFooter = () => {
  return (
    <>
    
      <Box display="flex" ml="150px" mt={10} className={style.maim_footer}>
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
      <Text ml="150px" className={style.guide_text}>Guidelines for Safe Job Search</Text>

      <Box ml={20} mt={10} w="60%" mb={10}>
        <SimpleGrid columns={[1, 2, 4]} spacing={5} fontSize={15} className={style.footer_bottom}>
          <Box>
            <Text ml="100px" className={style.text1}>© 2022 Indeed</Text>
          </Box>
          <Box>
            <Text className={style.text2}>Accessibility at Indeed Privacy </Text>
          </Box>
          <Box>
            <Text className={style.text3}> Center Cookies </Text>
          </Box>
          <Box>
            <Text ml="-100px" className={style.text4}>Privacy Center</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default MiniFooter;
