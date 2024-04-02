import React from "react";
import FullScreenSection from "./FullScreenSection";
import {  Box, Heading, Link } from "@chakra-ui/react";
import Card from './Card'

const projects = [
  {
    title: "Movie Booking",
    description:
      "A full-stack Movie Booking web application using the MERN stack. Contains features like user authentication, admin functionality, Bookings, Multi user roles.",
    getImageSrc: "/images/photo1.jpg",
    link: "https://moviebookingwebapp.netlify.app/"
  },
  {
    title: "E-Commerce Web App",
    description:
      "E-commerce web application using React JS, node JS and Express JS. Contains features like adding and removing products from bag and displaying them. Displaying the total amount as items are added to bag, displaying variety of products according to category.",
    getImageSrc: "/images/photo2.jpg",
    link: "https://webapp-e-commerce.netlify.app/"
  },
  {
    title: "Shop Sphere (Fake Store API)",
    description:
      "Integrated Google login & Firebase for user authentication.Created a dashboard showcasing user details and CRUD operations. Utilized Fake Store API for product management, including sorting. Designed UI using Material UI themes, with loader animations for better UX.",
    getImageSrc: "/images/photo3.jpg",
    link: "https://react-fakestore-crud.vercel.app/"
  },
  {
    title: "Google Keep Clone",
    description:
      "This software is a clone of Google keep web application. Leveraged the useState and useEffect hooks to manage the state and interactions of the application. Designed the user interface using HTML and CSS , ensuring a visually appealing and user-friendly experience. ",
    getImageSrc: "/images/photo4.jpg",
    link: "https://ari-12-2000.github.io/Google-Keep.github.io/"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            textDecoration="none"
            color="inherit"
          >
            <Card
              title={project.title}
              description={project.description}
              imagesrc={project.getImageSrc}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </Link>
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
