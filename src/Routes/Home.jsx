import React, { useState, useEffect } from "react";
import img2 from "../Images/Adham.jpg";
import { Button } from "@chakra-ui/button";
import Navbar from "../Components/Navbar";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Contact } from "./Contact";
import { About } from "./About";
import { Skills } from "./Skills";
import pdf from "../Images/Adham_Kazi_Resume.pdf";
import loadingGif2 from "../Images/astronaut-in-tea-break.gif";
import {
  Container,
  SimpleGrid,
  Image,
  Box,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { Projects } from "./Projects";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1BJHyYy6mkRy63G3Pg3eqiqA0PlHz6UKf/view?usp=share_link"
    );
  };

  if (isLoading) {
    return (
      <SimpleGrid
        justifyContent={"center"}
        alignContent={"center"}
        h="1000px"
        w="50%"
        m="auto"
      >
        <Image src={loadingGif2} w="100%" />
      </SimpleGrid>
    );
  }

  return (
    <>
      <Navbar />
      <Container maxW={"80%"} py={12} mr="auto" id="home">
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          gap={{ base: "40px", sm: "40px", md: "80px" }}
          mt="100px"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box spacing={1}>
            <Box textAlign={"left"}>
              <Text
                fontSize={{
                  base: "sm",
                  sm: "md",
                  md: "4xl",
                }}
                fontWeight="semibold"
                fontFamily={"revert-layer"}
                color="white"
              >
                Hi, I am
              </Text>

              <Text
                fontSize={{
                  base: "sm",
                  sm: "md",
                  md: "4xl",
                }}
                fontWeight="bold"
                fontFamily={"revert-layer"}
                bgClip="text"
                color="#63B3ED"
              >
                Adham Kazi
              </Text>
              <Text
                fontSize={{
                  base: "sm",
                  sm: "md",
                  md: "4xl",
                }}
                fontWeight="semibold"
                fontFamily={"sans-serif"}
                color="white"
              >
                Full Stack Web Developer
              </Text>
              <Text
                fontFamily={"serif"}
                color="gray.300"
                fontSize={{
                  base: "15px",
                  sm: "17px",
                  md: "20px",
                }}
              >
                A Full Stack Developer who loves building projects.I am equipped
                with a variety of technologies and tools to help me build the
                best possible product.
              </Text>

              <Box
                display={"flex"}
                gap={{
                  base: "10px",
                  sm: "10px",
                  md: "20px",
                }}
                alignItems="center"
                mt="8"
              >
                <Button
                  w={{
                    base: "25%",
                    sm: "25%",
                    md: "30%",
                  }}
                  fontSize={{
                    base: "5px",
                    sm: "5px",
                    md: "13px",
                  }}
                  h={{
                    base: "17px",
                    md: "30px",
                  }}
                  colorScheme="blue"
                  onClick={handleButtonClick}
                >
                  <a href={pdf} download>
                    Download Resume
                  </a>
                </Button>
                <a href="https://github.com/Adhamkazi">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    color="white"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: "#0D74FF" }}
                    icon={<BsGithub size="28px" />}
                  />
                </a>
                <a href="https://www.linkedin.com/in/adhamkazi/">
                  <IconButton
                    aria-label="linkedin"
                    color={"white"}
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: "#0D74FF" }}
                    icon={<BsLinkedin size="28px" />}
                  />
                </a>
              </Box>
            </Box>
          </Box>
          <Box>
            <Image
              rounded={"full"}
              alt={"feature image"}
              src={img2}
              w={{ base: "50%", sm: "50%", md: "60%" }}
              objectFit={"cover"}
            />
          </Box>
        </SimpleGrid>
      </Container>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export { Home };
