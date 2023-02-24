import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import checkmarkicons from "./icons/checkmarkicons";

export default function Pricing() {
  return (
    <Box
      maxW="950px"
      mx={{base: "20px", lg: "auto"}}
    //   ml={{base:"20px", lg: 'auto'}}
    //   mr={{base:"20px", lg: 'auto'}}
      mt="-160px"
    //   mx="20px"
      bg="white"
      borderRadius="16px"
      overflow="hidden"
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
    >
      <Flex direction={{base: 'column', md: 'column', lg: 'row'}}>
        <Box bg={"#e0d5f5"} p={"45px"} textAlign={"center"}>
          <Text fontSize={"24px"} fontWeight={"bold"}>
            Premium PRO
          </Text>
          <Heading fontSize={"60px"}>$329</Heading>
          <Text fontSize={"18px"}>billed just once</Text>
          <Button m={"20px"} w={"282px"} color={"white"} bg={"#805AD5"}>
            Get Started
          </Button>
        </Box>
        <Box pt={"48px"} pl={"48px"}>
          <Text mb={"24px"}>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack mb={"15px"}>
            <Icon as={checkmarkicons} />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as={checkmarkicons} />
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as={checkmarkicons} />
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as={checkmarkicons} />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
