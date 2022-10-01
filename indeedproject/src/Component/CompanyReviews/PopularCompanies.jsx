import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Flex, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { getCompanyReviews } from "../Redux/CompanyReviews/action";
import style from './PopularCompanies.module.css'

const PopularCompanies = () => {
  const companies = useSelector((state) => state.CompanyReducer.company);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyReviews());
  }, [dispatch]);
  console.log(companies);

  return (
    <>
      <Box w="60%" m="auto" mt="10" className={style.main_copanies}>
        <Text fontSize="4xl" fontWeight="bold" mb={10} className={style.popular_companies}>
          Popular companies
        </Text>
        <SimpleGrid columns={[1, 2, 3]} spacing="30px">
          {companies.map((item) => {
            return (
              <Link to={`/companyreview/${item.id}`}>
                <Box height="120px" key={item.id} boxShadow='dark-lg' padding={3} borderRadius='10px'>
                  <Box>
                    <Box height="70%" w="100%">
                      <Flex>
                        <Box>
                          <Image
                            boxShadow="md"
                            borderRadius={10}
                            width="70px"
                            height="70px"
                            src={item.logo}
                            alt="photo"
                          />
                        </Box>
                        <Box ml="5">
                          <Text fontSize={18} fontWeight="bold">
                            {item.company}
                          </Text>

                          <Box display="flex" mt="2" alignItems="center">
                            {new Array(5).fill("").map((_, i) => (
                              <StarIcon
                                key={i}
                                color={
                                  i < companies.rating
                                    ? "teal.500"
                                    : "orange.700"
                                }
                              />
                            ))}
                            <Box
                              as="span"
                              ml="2"
                              color="gray.600"
                              fontSize="sm"
                            >
                              {companies.reviewCount} reviews
                            </Box>
                          </Box>
                        </Box>
                      </Flex>
                    </Box>
                    <Box height="30%" w="100%">
                      <Flex mt={1}>
                        <Text mr={8}>Salaries</Text>
                        <Text mr="7">Question</Text>
                        <Text>Open Job</Text>
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              </Link>
            );
          })}
        </SimpleGrid>
      </Box>
      <Box
        w="60%"
        height="100px"
        border="1px solid white"
        m="auto"
        mt="20"
        bg="rgb(245,251,249)"
        className={style.starBox}
      >
         <Flex>
          <Box>
            <Image className={style.starBox_img} w='120px' ml={130} mt={5} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQHNkQGtGVMDlyJNseTRWYPRcask7p2sFCg&usqp=CAU"/>
          </Box>
        <Box mt={30} >
         
        <Text textAlign="center" fontSize="24px" as='b' className={style.rate_text}>
          Rate your recent company:
        </Text>
        </Box>
        <Box display="flex" mt="5" ml={3} alignItems="center" >
          {new Array(5).fill("").map((_, i) => (
            <StarIcon fontSize='25px' className={style.star}
              key={i}
              color={i < companies.rating ? "teal.500" : "orange.700"}
            />
          ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm" >
            {companies.reviewCount} 
          </Box>
        </Box>
        </Flex>
      </Box>
    </>
  );
};

export default PopularCompanies;
