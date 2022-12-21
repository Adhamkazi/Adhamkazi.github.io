// import { useColorMode } from '@chakra-ui/color-mode'
// import { useMediaQuery } from '@chakra-ui/react';
// import { Box, Text, Flex, Stack, Image, IconButton, SimpleGrid, Container } from "@chakra-ui/react";

import React from 'react'
import img2 from "../Images/Adham.JPG"
import { Button } from '@chakra-ui/button';

import Navbar from "../Components/Navbar"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { Contact } from './Contact';
import { About } from './About';
import { Skills } from './Skills';


// function Home() {

//     const { colorMode } = useColorMode();
//     const isDark = colorMode === "dark";

//     const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

//     return (

//         <>
//             <Navbar />
//             <Stack>
//                 <Container maxW={'5xl'} py={12}>
//                     <Flex columns={{ base: 1, md: 2 }} spacing={10}>
//                         <Stack spacing={4}>
//                             <Box align='left'>
//                                 <Text fontSize={{ base: "sm", sm: "md", md: "5xl" }} fontWeight="semibold" fontFamily={'revert-layer'} color="white">Hi, I am</Text>
//                                 <Text fontSize={{ base: "sm", sm: "md", md: "5xl" }} fontWeight="bold" fontFamily={'revert-layer'} bgClip='text' color="#63B3ED">Adham Kazi</Text>
//                                 <Text fontSize={{ base: "sm", sm: "md", md: "5xl" }} fontWeight="semibold" fontFamily={"cursive"} color="white">Full Stack Web Developer</Text>


//                                 <Text fontFamily={"cursive"} color="gray.500" fontSize={{ base: "8px", sm: "10px", md: "20px" }}>A Full Stack Developer who loves building projects.I am equipped with a variety of technologies and tools to help me build the best possible product.</Text>
//                                 <Box display={"flex"} gap={{ base: "10px", sm: "10px", md: "20px" }} mt="8">
//                                     <Button w={{ base: "10%", sm: "10%", md: "20%" }} fontSize={{ base: "5px", sm: "5px", md: "15px" }} colorScheme="blue" onClick={() =>
//                                         window.open("https://drive.google.com/file/d/1BJHyYy6mkRy63G3Pg3eqiqA0PlHz6UKf/view?usp=share_link")
//                                     }>SEE MY RESUME</Button>

//                                     <a href='https://github.com/Adhamkazi' >
//                                         <IconButton
//                                             aria-label="github"
//                                             color='white'
//                                             variant="ghost"
//                                             size={{ base: "sm", sm: "sm", md: "md" }}
//                                             isRound={true}
//                                             _hover={{ bg: '#0D74FF' }}
//                                             icon={<BsGithub size={{ base: "15px", sm: "15px", md: "20px" }} />}
//                                         />
//                                     </a>

//                                     <a href='https://www.linkedin.com/in/adhamkazi/' >
//                                         <IconButton
//                                             aria-label="github"
//                                             color='white'
//                                             variant="ghost"
//                                             size={{ base: "sm", sm: "sm", md: "md" }}
//                                             isRound={true}
//                                             _hover={{ bg: '#0D74FF' }}
//                                             icon={<BsLinkedin size={{ base: "15px", sm: "15px", md: "20px" }} />}
//                                         />
//                                     </a>
//                                 </Box>
//                             </Box>

//                             <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
//                                 mb={isNotSmallerScreen ? "0" : "12"}
//                                 backgroundColor="transparent" boxShadow="lg"
//                                 boxSize={{ base: "20%", sm: "20%", md: "30%" }} src={img2} />
//                         </Stack>
//                     </Flex>
//                 </Container>
//             </Stack>
//             <About />
//             <Skills />
//             <Contact />
//         </>
//     )
// }

// export { Home }


import {
    Container,
    SimpleGrid,
    Image,

    Box,
    Text,

    IconButton,

} from '@chakra-ui/react';





const Home = () => {
    return (
        <>
            <Navbar />
            <Container maxW={'80%'} py={12} mr="auto" id="home">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt="100px">
                    <Box spacing={4}>
                        <Box textAlign={"left"}>
                            <Text fontSize={{ base: "sm", sm: "md", md: "4xl" }} fontWeight="semibold" fontFamily={'revert-layer'} color="white">Hi, I am</Text>
                            <Text fontSize={{ base: "sm", sm: "md", md: "4xl" }} fontWeight="bold" fontFamily={'revert-layer'} bgClip='text' color="#63B3ED">Adham Kazi</Text>
                            <Text fontSize={{ base: "sm", sm: "md", md: "4xl" }} fontWeight="semibold" fontFamily={"cursive"} color="white">Full Stack Web Developer</Text>
                            <Text fontFamily={"cursive"} color="gray.500" fontSize={{ base: "8px", sm: "15px", md: "15px" }}>A Full Stack Developer who loves building projects.I am equipped with a variety of technologies and tools to help me build the best possible product.</Text>

                            <Box display={"flex"} gap={{ base: "10px", sm: "10px", md: "20px" }} mt="8">

                                <Button w={{ base: "15%", sm: "15%", md: "30%" }} fontSize={{ base: "5px", sm: "5px", md: "15px" }} colorScheme="blue" onClick={() =>
                                    window.open("https://drive.google.com/file/d/1BJHyYy6mkRy63G3Pg3eqiqA0PlHz6UKf/view?usp=share_link")
                                }>SEE MY RESUME</Button>
                                <a href='https://github.com/Adhamkazi' >
                                    <IconButton
                                        aria-label="github"
                                        color='white'
                                        variant="ghost"
                                        size={{ base: "sm", sm: "sm", md: "md" }}
                                        isRound={true}
                                        _hover={{ bg: '#0D74FF' }}
                                        icon={<BsGithub size={{ base: "15px", sm: "15px", md: "20px" }} />}
                                    />
                                </a>
                                <a href='https://www.linkedin.com/in/adhamkazi/' >
                                    <IconButton
                                        aria-label="github"
                                        color='white'
                                        variant="ghost"
                                        size={{ base: "sm", sm: "sm", md: "md" }}
                                        isRound={true}
                                        _hover={{ bg: '#0D74FF' }}
                                        icon={<BsLinkedin size={{ base: "15px", sm: "15px", md: "20px" }} />}
                                    />
                                </a>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src={
                                img2
                            }
                            w={{ base: "50%", sm: "50%", md: "70%" }}
                            objectFit={'cover'}
                        />
                    </Box>
                </SimpleGrid>
            </Container >
            <About />
            <Skills />
            <Contact />
        </>
    );
}
export { Home }