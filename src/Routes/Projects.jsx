import { Button, Heading, Image, SimpleGrid, Text, Box, Container } from "@chakra-ui/react";
import reliance from "../Images/reliance.jpg";
import myntra from "../Images/Myntra.png";
import cartlane from "../Images/cartlane.png";
import html from "../Images/html5.png";
import json from "../Images/json.png";
import css from "../Images/css3.png";
import react from "../Images/react.png";
import redux from "../Images/redux.png";
import chakra from "../Images/chakra.png";
import mongodb from "../Images/Mongodb.png";
import hotstar from "../Images/hotstar.png";
import javascript from "../Images/javascript.png";
import cronometer from "../Images/cronometer.png";
import javaScript from "../Images/javascript.png";
import express from "../Images/express.png";
import nodejs from "../Images/nodejs.png";

const Projects = () => {
  return (
    <Container w="100%" maxW="full" centerContent overflow="hidden" mt="100px" id="project">
      <Heading color={"gray.200"} fontStyle="oblique" textDecoration={"underline"}>
        Projects
      </Heading>
      <SimpleGrid
        color={"white"}
        boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
        _focus={{ bg: "blue.500" }}
        w="80%"
        columns={{ base: 1, sm: 1, md: 2 }}
        mt="30px"
      >
        <Box ml="10px" mb="10px" padding="20px 20px 20px 20px">
          <Box textAlign={"left"}>
            <Heading fontSize={"23px"} color="blue.300" fontFamily={"sans-serif"}>
              Reliance Clone
            </Heading>
            <Text color="gray.500">
              Reliance Digital is an Indian Electronics retail company.Where you can buy online Electronics products.
            </Text>
            <Text color="gray.400" fontSize={"12px"} mt="10px">
              Groupe Project done by 5 members.
            </Text>
          </Box>
          <Box display={"flex"} gap="10px" mt="20px" justifyContent={"center"}>
            <Image src={html} w="8%" h="8%" />
            <Image src={css} w="8%" h="8%" />
            <Image src={chakra} w="8%" h="8%" />
            <Image src={react} w="8%" h="8%" />
            <Image src={redux} w="8%" h="8%" />
            <Image src={mongodb} w="8%" h="8%" />
          </Box>
          <Box display={"flex"} gap="60px" mt="10px" justifyContent={"center"}>
            <Button
              h="30px"
              mt="20px"
              w="70px"
              fontSize={"sm"}
              rounded={"md"}
              bg={"blue.500"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              _focus={{ bg: "blue.500" }}
              onClick={() => window.open("https://639ff644ca15d51e2f7032a7--misccart.netlify.app")}
            >
              DEMO
            </Button>
            <Button
              h="30px"
              mt="20px"
              w="70px"
              fontSize={"sm"}
              rounded={"md"}
              bg={"blue.500"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              _focus={{ bg: "blue.500" }}
              onClick={() => window.open("https://github.com/p9168247913/-kindhearted-stick-7099")}
            >
              CODE
            </Button>
          </Box>
        </Box>
        <Box m="auto">
          <Image w={"98%"} h="200px" alt={"project1"} objectFit={"cover"} src={reliance} />
        </Box>
      </SimpleGrid>

      <SimpleGrid
        color={"white"}
        boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
        _focus={{ bg: "blue.500" }}
        w="80%"
        columns={{ base: 1, sm: 1, md: 2 }}
        mt="40px"
      >
        <Box ml="10px" mb="10px" padding="20px 20px 20px 20px">
          <Box textAlign={"left"}>
            <Heading fontSize={"23px"} color="blue.300" fontFamily={"sans-serif"}>
              Hotstar Clone
            </Heading>
            <Text color="gray.500">
              {" "}
              Hotstar is an Indian brand of subscription video on-demand over-the-top streaming service owned by Novi Digital
              Entertainment of Disney Star and operated by Disney Media and Entertainment Distribution.
            </Text>
            <Text color="gray.400" fontSize={"12px"} mt="10px">
              Indviual Project done by me in 5 days.
            </Text>
          </Box>
          <Box display={"flex"} gap="10px" mt="20px" justifyContent={"center"}>
            <Image src={html} w="8%" h="8%" />
            <Image src={css} w="8%" h="8%" />
            <Image src={javascript} w="8%" h="8%" />
          </Box>
          <Box display={"flex"} gap="60px" mt="10px" justifyContent={"center"}>
            <Button
              h="30px"
              mt="20px"
              w="70px"
              fontSize={"sm"}
              rounded={"md"}
              bg={"blue.500"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              _focus={{ bg: "blue.500" }}
              onClick={() => window.open("https://astounding-boba-5c552e.netlify.app/")}
            >
              DEMO
            </Button>
            <Button
              h="30px"
              mt="20px"
              w="70px"
              fontSize={"sm"}
              rounded={"md"}
              bg={"blue.500"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              _focus={{ bg: "blue.500" }}
              onClick={() => window.open("https://github.com/Adhamkazi/Hotstar-clone")}
            >
              CODE
            </Button>
          </Box>
        </Box>
        <Box m="auto">
          <Image w={"98%"} h="200px" alt={"project1"} objectFit={"cover"} src={hotstar} />
        </Box>
      </SimpleGrid>

      <SimpleGrid
        color={"white"}
        boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
        _focus={{ bg: "blue.500" }}
        w="80%"
        columns={{ base: 1, sm: 1, md: 2 }}
        mt="40px"
      >
        <Box ml="10px" mb="10px" padding="20px 20px 20px 20px">
          <Box textAlign={"left"}>
            <Heading fontSize={"23px"} color="blue.300" fontFamily={"sans-serif"}>
              Cronometer Clone
            </Heading>
            <Text color="gray.500">
              Cronometer is the most accurate, comprehensive nutrition tracking app on earth. Unlike other apps on the market,
              our nutritional data is curated from verified, accurate sources. We aim to provide a complete solution – no matter
              what diet you choose to be on.
            </Text>
            <Text color="gray.400" fontSize={"12px"} mt="10px">
              Indviual Project done by me in 5 days.
            </Text>
          </Box>
          <Box display={"flex"} gap="10px" mt="20px" justifyContent={"center"}>
            <Image src={html} w="8%" h="8%" />
            <Image src={css} w="8%" h="8%" />
            <Image src={react} w="8%" h="8%" />
            <Image src={chakra} w="8%" h="8%" />
          </Box>
          <Box display={"flex"} gap="60px" mt="10px" justifyContent={"center"}>
            <Button
              h="30px"
              mt="20px"
              w="70px"
              fontSize={"sm"}
              rounded={"md"}
              bg={"blue.500"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              _focus={{ bg: "blue.500" }}
              onClick={() => window.open("https://papaya-croissant-4a3794.netlify.app")}
            >
              DEMO
            </Button>
            <Button
              h="30px"
              mt="20px"
              w="70px"
              fontSize={"sm"}
              rounded={"md"}
              bg={"blue.500"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              _focus={{ bg: "blue.500" }}
              onClick={() => window.open("https://github.com/Adhamkazi/afraid-shoe-4639")}
            >
              CODE
            </Button>
          </Box>
        </Box>
        <Box m="auto">
          <Image w={"98%"} h="200px" alt={"project1"} objectFit={"cover"} src={cronometer} />
        </Box>
      </SimpleGrid>

      <SimpleGrid
        color={"white"}
        boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
        _focus={{ bg: "blue.500" }}
        w="80%"
        columns={{ base: 1, sm: 1, md: 2 }}
        mt="40px"
      >
        <Box ml="10px" mb="10px" padding="20px 20px 20px 20px">
          <Box textAlign={"left"}>
            <Heading fontSize={"23px"} color="blue.300" fontFamily={"sans-serif"}>
              Myntra Clone
            </Heading>
            <Text color="gray.500">
              Myntra is an Largest E-commerce webiste. There are thousands of Products. Where You can buy online Shoes , Cloths
              for men womens and kids.
            </Text>
            <Text color="gray.400" fontSize={"12px"} mt="10px">
              Group Project done by 4 members.executed in 5 days.
            </Text>
          </Box>
          <Box display={"flex"} gap="10px" mt="20px" justifyContent={"center"}>
            <Image src={javaScript} w="8%" h="8%" />
            <Image src={redux} w="8%" h="8%" />
            <Image src={react} w="8%" h="8%" />
            <Image src={chakra} w="8%" h="8%" />
            <Image src={nodejs} w="8%" h="8%" />
            <Image src={express} w="8%" h="8%" />
            <Image src={mongodb} w="8%" h="8%" />
          </Box>
          <Box display={"flex"} gap="60px" mt="10px" justifyContent={"center"}>
            <Button
              h="30px"
              mt="20px"
              w="70px"
              fontSize={"sm"}
              rounded={"md"}
              bg={"blue.500"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              _focus={{ bg: "blue.500" }}
              onClick={() => window.open("https://friendly-sorbet-912886.netlify.app/")}
            >
              DEMO
            </Button>
            <Button
              h="30px"
              mt="20px"
              w="70px"
              fontSize={"sm"}
              rounded={"md"}
              bg={"blue.500"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              _focus={{ bg: "blue.500" }}
              onClick={() => window.open("https://github.com/imukeshkaushal/Myntra-Clone")}
            >
              CODE
            </Button>
          </Box>
        </Box>
        <Box m="auto">
          <Image w={"100%"} h="200px" alt={"project1"} src={myntra} />
        </Box>
      </SimpleGrid>

      <SimpleGrid
        color={"white"}
        boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
        _focus={{ bg: "blue.500" }}
        w="80%"
        columns={{ base: 1, sm: 1, md: 2 }}
        mt="40px"
      >
        <Box ml="10px" mb="10px" padding="20px 20px 20px 20px">
          <Box textAlign={"left"}>
            <Heading fontSize={"23px"} color="blue.300" fontFamily={"sans-serif"}>
              Cartlane Clone
            </Heading>
            <Text color="gray.500">Cartlane is Indian online Jewllery Retailer. There are thousands of Jewellery Items.</Text>
            <Text color="gray.400" fontSize={"12px"} mt="10px">
              Group Project done by 4 members.executed in 5 days.
            </Text>
          </Box>
          <Box display={"flex"} gap="10px" mt="20px" justifyContent={"center"}>
            <Image src={html} w="8%" h="8%" />
            <Image src={css} w="8%" h="8%" />
            <Image src={javaScript} w="8%" h="8%" />
            <Image src={redux} w="8%" h="8%" />
            <Image src={react} w="8%" h="8%" />
            <Image src={chakra} w="8%" h="8%" />
            <Image src={json} w="10%" h="10%" />
          </Box>
          <Box display={"flex"} gap="60px" mt="10px" justifyContent={"center"}>
            <Button
              h="30px"
              mt="20px"
              w="70px"
              fontSize={"sm"}
              rounded={"md"}
              bg={"blue.500"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              _focus={{ bg: "blue.500" }}
              onClick={() => window.open("https://luxury-wisp-dd7ec9.netlify.app/")}
            >
              DEMO
            </Button>
            <Button
              h="30px"
              mt="20px"
              w="70px"
              fontSize={"sm"}
              rounded={"md"}
              bg={"blue.500"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              _focus={{ bg: "blue.500" }}
              onClick={() => window.open("https://github.com/avnishsingh0/new-bucket-3441")}
            >
              CODE
            </Button>
          </Box>
        </Box>
        <Box m="auto">
          <Image w={"100%"} h="200px" alt={"project1"} src={cartlane} />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export { Projects };
