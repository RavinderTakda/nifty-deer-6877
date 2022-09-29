import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Flex, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { getCompanyReviews } from "../Redux/CompanyReviews/action";

const PopularCompanies = () => {
  const companies = useSelector((state) => state.CompanyReducer.company);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyReviews());
  }, [dispatch]);
  console.log(companies);

  return (
    <Box w="60%" m="auto" mt="10" h="500">
      <Text fontSize="4xl" fontWeight="bold" mb={10}>
        Popular companies
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {companies.map((item) => {
          return (
            <Box height="100px" key={item.id} border="1px solid red">
              <Box>
                <Box height="70%" w="100%">
                  <Flex>
                    <Box>
                      <Image
                        boxShadow="dark-lg"
                        borderRadius={10}
                        width="70px"
                        height="70px"
                        src={item.logo}
                        alt="photo"
                      />
                    </Box>
                    <Box ml="5">
                      <Text fontSize={18} fontWeight="bold">
                        <Link to={"/companyreview/${item.id}"}>
                          {item.company}
                        </Link>
                      </Text>

                      <Box display="flex" mt="2" alignItems="center">
                        {new Array(5).fill("").map((_, i) => (
                          <StarIcon
                            key={i}
                            color={
                              i < companies.rating ? "teal.500" : "orange.700"
                            }
                          />
                        ))}
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
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
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default PopularCompanies;
