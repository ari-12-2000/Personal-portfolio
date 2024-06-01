import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Link } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Movie Booking",
    description:
      "A full-stack Movie Booking web application using the MERN stack featuring user, admin authentication, movie bookings and cancellations, adding movies by admin and distinct profiles for users and admins. Contains movie search and filter features",
    getImageSrc: "/images/photo1.jpg",
    link: "https://moviebookingwebapp.netlify.app/",
  },
  {
    title:"Advanced Responsive Weather App",
    description:"Showing all cities using opendatasoft API, in a table format with infinite scroll feature. The table has columns city name, country, time zone, etc. and clicking on each city row, navigates to the weather page for that particular city. Implemented weather details via openweathermap api",
    link:"https://advancedresponsiveweatherapp.netlify.app/"
  },
  {
    title: "E-Commerce Web App",
    description:"E-commerce web application using React JS, node JS and Express JS. Contains features like adding and removing products from bag and displaying them. Displaying the total amount to pay as items are added to bag, displaying variety of products according to category.",
    getImageSrc: "/images/photo6.jpg",
    link: "https://webapp-e-commerce.netlify.app/",
  },
  {
    title: "Shop Sphere (Fake Store API)",
    description:
      "Integrated Google login & Firebase for user authentication.Created a dashboard showcasing user details and CRUD operations. Utilized Fake Store API for product management, including sorting. Designed UI using Material UI themes, with loader animations for better UX.",
    getImageSrc: "/images/photo3.jpg",
    link: "https://react-fakestore-crud.vercel.app/",
  },

  {
    title: "Google Keep Clone",
    description:
      "This software is a clone of Google keep web application. Leveraged the useState and useEffect hooks to manage the state and interactions of the application. Designed the user interface using HTML and CSS , ensuring a visually appealing and user-friendly experience. ",
    getImageSrc: "/images/photo4.jpg",
    link: "https://ari-12-2000.github.io/Google-Keep.github.io/",
  },

  {
    title: "Goal Tracker",
    description:
      "The Goal Accomplish web application is designed for efficient goal management and tracking. Users can check and uncheck goals to monitor their progress individually, and a swipe-to-right feature allows for bulk goal tracking. The progress bar updates dynamically, showing completion percentages based on the total number of goals.The app includes a progress graph that charts daily progress, with the percentage on the y-axis and dates on the x-axis, helping users visualize their achievements over time. A bottom navigation menu enables easy switching between different pages.Built with Next.js, Tailwind CSS, HTML, Material UI, and Font-Awesome, the application combines robust functionality with a sleek, user-friendly design.",
    getImageSrc: "/images/photo5.png",
    link:"https://goal-accomplish.netlify.app/"
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
