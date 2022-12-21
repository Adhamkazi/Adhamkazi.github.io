import {
    Box,
    SimpleGrid,
    Image,
    Button,
    Heading
} from '@chakra-ui/react';
import html from "../Images/html5.png"
import css from "../Images/css3.png"
import javaScript from "../Images/javascript.png"
import react from "../Images/react.png"
import redux from "../Images/redux.png"
import github from "../Images/github.png"
import chakra from "../Images/chakra.png"
import express from "../Images/express.png"
import nodejs from "../Images/nodejs.png"
import typescript from "../Images/typescript.png"
import npm from "../Images/NPM.png"

const Skills = () => {
    return (
        <Box maxW={'7xl'} mt="50px" id="skills">
            <Heading as="h1" color={"gray.300"} fontFamily="monospace" textDecoration={"underline"} >Skills</Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} w="60%" gap="30px" margin="auto">

                <Box boxShadow='2xl' p='6' rounded='md' bg='#1A202C' w="80%">
                    <Image src={html} w="100%" />
                    <Button h="30px" mt="20px" w="70px" fontSize={'sm'} rounded={'md'} bg={'#1A202C'} color={'white'} boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} _hover={{ bg: 'blue.500', }} _focus={{ bg: 'blue.500', }}>
                        HTML
                    </Button>

                </Box>
                <Box boxShadow='2xl' p='6' rounded='md' bg='#1A202C' w="80%">
                    <Image src={css} w="100%" />
                    <Button mt="20px" h="30px" w="70px" fontSize={'sm'} rounded={'md'} bg={'#1A202C'} color={'white'} boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} _hover={{ bg: 'blue.500', }} _focus={{ bg: 'blue.500', }}>
                        CSS
                    </Button>

                </Box>
                <Box boxShadow='2xl' p='6' rounded='md' bg='#1A202C' w="80%">
                    <Image src={javaScript} w="100%" />
                    <Button mt="20px" w="70px" h="30px" fontSize={'sm'} rounded={'md'} bg={'#1A202C'} color={'white'} boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} _hover={{ bg: 'blue.500', }} _focus={{ bg: 'blue.500', }}>
                        JavaScript
                    </Button>
                </Box>
                <Box boxShadow='2xl' p='6' rounded='md' bg='#1A202C' w="80%">
                    <Image src={react} w="100%" />
                    <Button mt="20px" w="70px" h="30px" fontSize={'sm'} rounded={'md'} bg={'#1A202C'} color={'white'} boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} _hover={{ bg: 'blue.500', }} _focus={{ bg: 'blue.500', }}>
                        React
                    </Button>
                </Box>

                <Box boxShadow='2xl' p='6' rounded='md' bg='#1A202C' w="80%">
                    <Image src={redux} w="100%" />
                    <Button mt="20px" w="70px" h="30px" fontSize={'sm'} rounded={'md'} bg={'#1A202C'} color={'white'} boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} _hover={{ bg: 'blue.500', }} _focus={{ bg: 'blue.500', }}>
                        Redux
                    </Button>
                </Box>

                <Box boxShadow='2xl' p='6' rounded='md' bg='#1A202C' w="80%">
                    <Image src={chakra} w="100%" />
                    <Button mt="10px" w="70px" h="30px" fontSize={'sm'} rounded={'md'} bg={'#1A202C'} color={'white'} boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} _hover={{ bg: 'blue.500', }} _focus={{ bg: 'blue.500', }}>
                        Chakra-ui
                    </Button>
                </Box>

                <Box boxShadow='2xl' p='6' rounded='md' bg='#1A202C' w="80%">
                    <Image src={typescript} w="100%" />
                    <Button mt="20px" w="70px" h="30px" fontSize={'sm'} rounded={'md'} bg={'#1A202C'} color={'white'} boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} _hover={{ bg: 'blue.500', }} _focus={{ bg: 'blue.500', }}>
                        TypeScript
                    </Button>
                </Box>


                <Box boxShadow='2xl' p='6' rounded='md' bg='#1A202C' w="80%">
                    <Image src={nodejs} w="100%" />
                    <Button mt="20px" w="70px" h="30px" fontSize={'sm'} rounded={'md'} bg={'#1A202C'} color={'white'} boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} _hover={{ bg: 'blue.500', }} _focus={{ bg: 'blue.500', }}>
                        Nodejs
                    </Button>
                </Box>
                <Box boxShadow='2xl' p='6' rounded='md' bg='#1A202C' w="80%">
                    <Image src={express} w="100%" />
                    <Button mt="20px" w="70px" h="30px" fontSize={'sm'} rounded={'md'} bg={'#1A202C'} color={'white'} boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} _hover={{ bg: 'blue.500', }} _focus={{ bg: 'blue.500', }}>
                        Express
                    </Button>
                </Box>
                <Box boxShadow='2xl' p='6' rounded='md' bg='#1A202C' w="80%">
                    <Image src={npm} w="100%" />
                    <Button mt="20px" w="70px" h="30px" fontSize={'sm'} rounded={'md'} bg={'#1A202C'} color={'white'} boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} _hover={{ bg: 'blue.500', }} _focus={{ bg: 'blue.500', }}>
                        NPM
                    </Button>
                </Box>
                <Box boxShadow='2xl' p='6' rounded='md' bg='#1A202C' w="80%">
                    <Image src={github} w="100%" />
                    <Button mt="20px" w="70px" h="30px" fontSize={'sm'} rounded={'md'} bg={'#1A202C'} color={'white'} boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} _hover={{ bg: 'blue.500', }} _focus={{ bg: 'blue.500', }}>
                        Github
                    </Button>
                </Box>



            </SimpleGrid >
        </Box >
    );
};




export { Skills }