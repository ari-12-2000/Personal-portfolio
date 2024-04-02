import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";

import emailjs from "@emailjs/browser";

const LandingSection = () => {
  const [nameRef, emailRef, messageRef] = Array.from({ length: 3 }, useRef);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  useEffect(() => {
    emailjs.init(`${import.meta.env.VITE_PUBLIC_KEY}`);
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      comment: "",
    },
    onSubmit: () => {
      emailjs
        .send(
          `${import.meta.env.VITE_SERVICE_ID}`,
          `${import.meta.env.VITE_TEMPLATE_ID}`,
          {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
          }
        )
        .then(
          (result) => {
            if (result.status === 200) {
              formik.resetForm();
              setSubmissionStatus("success");
            }
          },
          (error) => {
            console.log(error);
            setSubmissionStatus("error");
            // You can add logic here for handling errors
          }
        );
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={
                  !!formik.errors.firstName && formik.touched.firstName
                }
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  ref={nameRef}
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  ref={emailRef}
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={!!formik.errors.comment && formik.touched.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  ref={messageRef}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
            
              >
                Submit
              </Button>
              {submissionStatus === "success" && (
                <Alert status="success">
                  <AlertIcon />
                  <AlertTitle>Form submitted successfully!</AlertTitle>
                  <CloseButton
                    position="absolute"
                    right="8px"
                    top="8px"
                    onClick={() => setSubmissionStatus(null)}
                  />
                </Alert>
              )}
              {submissionStatus === "error" && (
                <Alert status="error">
                  <AlertIcon />
                  <AlertTitle>
                    Failed to submit form. Please try again.
                  </AlertTitle>
                  <CloseButton
                    position="absolute"
                    right="8px"
                    top="8px"
                    onClick={() => setSubmissionStatus(null)}
                  />
                </Alert>
              )}
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
