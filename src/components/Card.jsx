import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const Card = ({ title, description, imagesrc }) => {
 
  return (
    <Box
      borderRadius="xl" // Set border radius to x1
      boxShadow="md"
      p={4}
      bg="white"
      cursor="pointer"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image src={imagesrc} alt={title} />
      <Box bgColor="gray.800" padding="4" borderRadius="xl">
        <Text mt={4} fontWeight="bold" _hover={{ textDecoration: "none" }}>
          {title}
        </Text>
        <Text mt={2} _hover={{ textDecoration: "none" }}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
