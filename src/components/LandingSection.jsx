import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import imgSrc from '/images/ARITRA.jpg';

const greeting = "Hello, I am Aritra!";
const bio1 = "A fullstack developer";
const bio2 = "specialised in MERN";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
<VStack spacing={16}>
<Avatar src={imgSrc}
size="2xl"
name="Your Name"
/>
{/* We using Chakra UI here */}
<Heading as='h4' size='md' noOfLines={1}>{greeting}</Heading>
<VStack spacing={6}>
<Heading as='h1' size="3xl" noOfLines={1}>{bio1}</Heading>
<Heading as='h1' size='3xl' noOfLines={1}>{bio2}</Heading>
</VStack>
</VStack>

  </FullScreenSection>
);

export default LandingSection;
