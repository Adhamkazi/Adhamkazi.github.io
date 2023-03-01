import { Box, SimpleGrid, Image, Button, Heading, Container } from "@chakra-ui/react";
import html from "../Images/html5.png";
import css from "../Images/css3.png";
import javaScript from "../Images/javascript.png";
import react from "../Images/react.png";
import redux from "../Images/redux.png";
import github from "../Images/github.png";
import chakra from "../Images/chakra.png";
import express from "../Images/express.png";
import nodejs from "../Images/nodejs.png";
import typescript from "../Images/typescript.png";
import npm from "../Images/NPM.png";
import mongodb from "../Images/Mongodb.png";

const Skills = () => {
  return (
    <Container w="80%" maxW="full" centerContent overflow="hidden" mt="100px" id="skills">
      <Heading color={"gray.200"} fontStyle="oblique" textDecoration={"underline"}>
        Skills
      </Heading>

      <SimpleGrid columns={{ base: 2, md: 4 }} w="60%" gap="30px" margin="auto" mt={"30px"}>
        <SimpleGrid alignContent={"center"} boxShadow="2xl" p="3" rounded="md" bg="#1A202C" w="80%">
          <Image ml="5px" src={html} w="80%" />
          <Button
            h="30px"
            mt="20px"
            w="70px"
            fontSize={"sm"}
            rounded={"md"}
            bg={"#1A202C"}
            color={"white"}
            boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
            _hover={{ bg: "blue.500" }}
            _focus={{ bg: "blue.500" }}
          >
            HTML
          </Button>
        </SimpleGrid>

        <SimpleGrid alignContent={"center"} boxShadow="2xl" p="3" rounded="md" bg="#1A202C" w="80%">
          <Image ml="5px" src={css} w="80%" />
          <Button
            mt="20px"
            h="30px"
            w="70px"
            fontSize={"sm"}
            rounded={"md"}
            bg={"#1A202C"}
            color={"white"}
            boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
            _hover={{ bg: "blue.500" }}
            _focus={{ bg: "blue.500" }}
          >
            CSS
          </Button>
        </SimpleGrid>

        <SimpleGrid alignContent={"center"} boxShadow="2xl" p="3" rounded="md" bg="#1A202C" w="80%">
          <Image ml={"5px"} src={javaScript} w="80%" />
          <Button
            mt="20px"
            w="70px"
            h="30px"
            fontSize={"sm"}
            rounded={"md"}
            bg={"#1A202C"}
            color={"white"}
            boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
            _hover={{ bg: "blue.500" }}
            _focus={{ bg: "blue.500" }}
          >
            JavaScript
          </Button>
        </SimpleGrid>

        <SimpleGrid alignContent={"center"} boxShadow="2xl" p="3" rounded="md" bg="#1A202C" w="80%">
          <Image ml="5px" src={react} w="80%" />
          <Button
            mt="20px"
            w="70px"
            h="30px"
            fontSize={"sm"}
            rounded={"md"}
            bg={"#1A202C"}
            color={"white"}
            boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
            _hover={{ bg: "blue.500" }}
            _focus={{ bg: "blue.500" }}
          >
            React
          </Button>
        </SimpleGrid>

        <SimpleGrid alignContent={"center"} boxShadow="2xl" p="3" rounded="md" bg="#1A202C" w="80%">
          <Image ml="5px" src={redux} w="80%" />
          <Button
            mt="20px"
            w="70px"
            h="30px"
            fontSize={"sm"}
            rounded={"md"}
            bg={"#1A202C"}
            color={"white"}
            boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
            _hover={{ bg: "blue.500" }}
            _focus={{ bg: "blue.500" }}
          >
            Redux
          </Button>
        </SimpleGrid>

        <SimpleGrid alignContent={"center"} boxShadow="2xl" p="3" rounded="md" bg="#1A202C" w="80%">
          <Image src={chakra} w="80%" ml="5px" />
          <Button
            mt="20px"
            w="70px"
            h="30px"
            fontSize={"sm"}
            rounded={"md"}
            bg={"#1A202C"}
            color={"white"}
            boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
            _hover={{ bg: "blue.500" }}
            _focus={{ bg: "blue.500" }}
          >
            Chakra-ui
          </Button>
        </SimpleGrid>

        <SimpleGrid alignContent={"center"} boxShadow="2xl" p="3" rounded="md" bg="#1A202C" w="80%">
          <Image src={typescript} w="80%" ml="5px" />
          <Button
            mt="20px"
            w="70px"
            h="30px"
            fontSize={"sm"}
            rounded={"md"}
            bg={"#1A202C"}
            color={"white"}
            boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
            _hover={{ bg: "blue.500" }}
            _focus={{ bg: "blue.500" }}
          >
            TypeScript
          </Button>
        </SimpleGrid>

        <SimpleGrid alignContent={"center"} boxShadow="2xl" p="3" rounded="md" bg="#1A202C" w="80%">
          <Image src={nodejs} w="80%" ml="5px" />
          <Button
            mt="20px"
            w="70px"
            h="30px"
            fontSize={"sm"}
            rounded={"md"}
            bg={"#1A202C"}
            color={"white"}
            boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
            _hover={{ bg: "blue.500" }}
            _focus={{ bg: "blue.500" }}
          >
            Nodejs
          </Button>
        </SimpleGrid>

        <SimpleGrid alignContent={"center"} boxShadow="2xl" p="3" rounded="md" bg="#1A202C" w="80%">
          <Image src={express} w="80%" ml="5px" />
          <Button
            mt="20px"
            w="70px"
            h="30px"
            fontSize={"sm"}
            rounded={"md"}
            bg={"#1A202C"}
            color={"white"}
            boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
            _hover={{ bg: "blue.500" }}
            _focus={{ bg: "blue.500" }}
          >
            Express
          </Button>
        </SimpleGrid>

        <SimpleGrid alignContent={"center"} boxShadow="2xl" p="3" rounded="md" bg="#1A202C" w="80%">
          <Image ml={"5px"} src={mongodb} w="80%" />
          <Button
            mt={"20px"}
            w="70px"
            h="30px"
            fontSize={"sm"}
            rounded={"md"}
            bg={"#1A202C"}
            color={"white"}
            boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
            _hover={{ bg: "blue.500" }}
            _focus={{ bg: "blue.500" }}
          >
            MongoDb
          </Button>
        </SimpleGrid>

        <SimpleGrid alignContent={"center"} boxShadow="2xl" p="3" rounded="md" bg="#1A202C" w="80%">
          <Image ml={"5px"} src={npm} w="80%" />
          <Button
            mt="20px"
            w="70px"
            h="30px"
            fontSize={"sm"}
            rounded={"md"}
            bg={"#1A202C"}
            color={"white"}
            boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
            _hover={{ bg: "blue.500" }}
            _focus={{ bg: "blue.500" }}
          >
            NPM
          </Button>
        </SimpleGrid>
        <SimpleGrid alignContent={"center"} boxShadow="2xl" p="3" rounded="md" bg="#1A202C" w="80%">
          <Image src={github} w="80%" ml="5px" />
          <Button
            mt="20px"
            w="70px"
            h="30px"
            fontSize={"sm"}
            rounded={"md"}
            bg={"#1A202C"}
            color={"white"}
            boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
            _hover={{ bg: "blue.500" }}
            _focus={{ bg: "blue.500" }}
          >
            Github
          </Button>
        </SimpleGrid>
      </SimpleGrid>

      <Box w="60%" margin="auto">
        <Heading color={"gray.200"} fontStyle="oblique" mt="70px">
          Github Calender
        </Heading>

        <Box
          mt="20px"
          fontSize={"sm"}
          rounded={"md"}
          h="100%"
          padding={"10px"}
          paddingBottom="20px"
          bg={"#1A202C"}
          w="100%"
          color={"white"}
          boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
          _focus={{ bg: "blue.500" }}
        >
          <Image w="100%" src="https://ghchart.rshah.org/adhamkazi" mt="30px" />
        </Box>

        <Box w={"60%"} margin="auto">
          <Image
            mt="30px"
            src="https://camo.githubusercontent.com/ca7675cc1b92b719d115e082195d916b629cd5f514c033f4b36f93e26afbe667/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d616468616d6b617a69267468656d653d7261646963616c26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d66616c7365266c61796f75743d636f6d70616374"
          />
        </Box>
      </Box>
    </Container>
  );
};

export { Skills };
