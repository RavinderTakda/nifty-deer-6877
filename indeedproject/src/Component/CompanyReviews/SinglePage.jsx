import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./SinglePage.module.css";

import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

const SinglePage = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const companies = useSelector((state) => state.CompanyReducer.company);
  console.log(companies);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const data = companies?.find((el) => el.id === Number(id));
      data && setData(data);
    }
  }, [id, companies]);

  return (
    <>
      <Box
        w="70%"
        m="auto"
        mt="3"
        border="1px solid gray"
        p={5}
        borderRadius={5}
      >
        <Flex>
          <Box>
            <Flex>
              <Image
                w="100px"
                borderRadius={10}
                src={companies[`${id - 1}`].logo}
                alt={companies[`${id - 1}`].company}
              />

              <Box ml="10" mt={3}>
                <Text fontSize={20} as="b" ml="1">
                  {companies[`${id - 1}`].company}
                </Text>
                <Box display="flex" mt="2">
                  {new Array(5).fill("").map((_, i) => (
                    <StarIcon
                      key={i}
                      color={
                        i < companies[`${id - 1}`].rating
                          ? "teal.500"
                          : "orange.700"
                      }
                    />
                  ))}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {companies[`${id - 1}`].reviewCount} reviews
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Spacer></Spacer>
          <Box mt={6}>
            <Button variant="solid" color="white" colorScheme="blue" w="200px">
              follow
            </Button>
            <Button border="1px solid black " color="blue" w="200px" ml="3">
              write a review
            </Button>
          </Box>
        </Flex>

        <Box>
          <HStack spacing="70px" mt={16}>
            <Text borderBottom="5px solid black">Snap shot</Text>
            <Text>Why should join us</Text>
            <Flex>
              <Text mt={-5}>
                {companies[`${id - 1}`].ratings}
                <Text> Reviews</Text>
              </Text>
            </Flex>
            <Box>
              <Text mt={-5}>{companies[`${id - 1}`].salaries}</Text>
              <Text>Salaries</Text>
            </Box>

            <Box>
              <Text mt={-5}>{companies[`${id - 1}`].jobs}</Text>
              <Text>Job</Text>
            </Box>
            <Box>
              <Text mt={-5}>{companies[`${id - 1}`].questions}</Text>
              <Text>Questions </Text>
            </Box>

            <Text>Interviews</Text>
            <Text>Phots</Text>
          </HStack>
        </Box>
      </Box>
      <Divider orientation="horizontal" />

      {/* ----------Second part-------------- */}

      <Box w="70%" m="auto" mt="3">
        <Flex fontSize={15}>
          <Text>{companies[`${id - 1}`].company}</Text>
          <Text ml={5}>Careers and Employment</Text>
        </Flex>
        <Text fontSize="3xl" as="b">
          About the company
        </Text>

        <SimpleGrid columns={[1, 2, 2]} className={style.about}>
          <Box mt={10} className={style.img_ceo}>
            <Image
              borderRadius={10}
              w="300px"
              height="350px"
              src={companies[`${id - 1}`].ceo_image}
              alt={companies[`${id - 1}`].ceo_name}
            />
          </Box>
          <Box mt="10" className={style.about_name}>
            <Box className={style.about_name1}>
              <Box
                w="150px"
                h="150px"
                border="1px solid black"
                borderRadius={10}
                className={style.name_Box1}
              >
                <Text fontSize="xl" ml={3} mt={5}>
                  CEO
                </Text>
                <Text fontSize="xl" ml={3} mt={2}>
                  {" "}
                  {companies[`${id - 1}`].ceo_name}
                </Text>
              </Box>
              <Box
                w="150px"
                h="150px"
                border="1px solid black"
                ml={20}
                borderRadius={10}
                className={style.name_Box1}
              >
                <Text fontSize="xl" ml={3} mt={5}>
                  Founded
                </Text>
                <Text fontSize="xl" ml={3} mt={2}>
                  {" "}
                  {companies[`${id - 1}`].founded_year}
                </Text>
              </Box>
            </Box>
            <Box mt={5} className={style.about_name2}>
              <Box
                w="150px"
                h="150px"
                border="1px solid black"
                borderRadius={10}
              >
                <Text fontSize="xl" ml={3} mt={5}>
                  Revenue
                </Text>
                <Text fontSize="xl" ml={3} mt={2}>
                  {" "}
                  {companies[`${id - 1}`].revenue}
                </Text>
              </Box>
              <Box
                w="150px"
                h="150px"
                border="1px solid black"
                ml={20}
                borderRadius={10}
              >
                <Text fontSize="xl" ml={3} mt={5}>
                  Company size
                </Text>
                <Text fontSize="xl" ml={3} mt={2}>
                  {" "}
                  {companies[`${id - 1}`].company_size}
                </Text>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>

        <Box mt={10} ml={5} mb={10} className={style.desc}>
          <Text>{companies[`${id - 1}`].description}</Text>
        </Box>
      </Box>
    </>
  );
};

export default SinglePage;
