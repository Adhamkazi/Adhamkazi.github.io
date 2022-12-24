
import React from 'react'
import img2 from "../Images/suit.jpg"
import { Button } from '@chakra-ui/button';
import Navbar from "../Components/Navbar"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { Contact } from './Contact';
import { About } from './About';
import { Skills } from './Skills';
import { Container, SimpleGrid, Image, Box, Text, IconButton, } from '@chakra-ui/react';
// import { Github } from './Github';
// import { LoadingPage } from './LoadingPage';
// import { useState, useEffect } from "react"
import { Projects } from './Projects';



const Home = () => {
    // const [isLoading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 3000)
    // }, [])

    // if (isLoading) {
    //     return <LoadingPage />
    // }

    return (
        <>

            {/* */}
            < Navbar />
            <Container maxW={'80%'} py={12} mr="auto" id="home">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={15} mt="100px">
                    <Box spacing={1}>
                        <Box textAlign={"left"}>
                            <Text fontSize={{ base: "sm", sm: "md", md: "4xl" }} fontWeight="semibold" fontFamily={'revert-layer'} color="white">Hi, I am</Text>
                            <Text fontSize={{ base: "sm", sm: "md", md: "4xl" }} fontWeight="bold" fontFamily={'revert-layer'} bgClip='text' color="#63B3ED">Adham Kazi</Text>
                            <Text fontSize={{ base: "sm", sm: "md", md: "4xl" }} fontWeight="semibold" fontFamily={"sans-serif"} color="white">Full Stack Web Developer</Text>
                            <Text fontFamily={"serif"} color="gray.500" fontSize={{ base: "8px", sm: "15px", md: "15px" }}>A Full Stack Developer who loves building projects.I am equipped with a variety of technologies and tools to help me build the best possible product.</Text>

                            <Box display={"flex"} gap={{ base: "10px", sm: "10px", md: "20px" }} mt="8">

                                <Button w={{ base: "15%", sm: "15%", md: "20%" }} fontSize={{ base: "5px", sm: "5px", md: "10px" }} h={{ base: "25px", md: "30px" }} colorScheme="blue" onClick={() =>
                                    window.open("https://drive.google.com/file/d/1BJHyYy6mkRy63G3Pg3eqiqA0PlHz6UKf/view?usp=share_link")}>SEE MY RESUME</Button>
                                <a href='https://github.com/Adhamkazi' >
                                    <IconButton
                                        aria-label="github"
                                        color='white'
                                        variant="ghost"
                                        size={{ base: "sm", sm: "sm", md: "sm" }}
                                        isRound={true}
                                        _hover={{ bg: '#0D74FF' }}
                                        icon={<BsGithub size={{ base: "10px", sm: "10px", md: "15px" }} />}
                                    />
                                </a>
                                <a href='https://www.linkedin.com/in/adhamkazi/' >
                                    <IconButton
                                        aria-label="github"
                                        color='white'
                                        variant="ghost"
                                        size={{ base: "sm", sm: "sm", md: "sm" }}
                                        isRound={true}
                                        _hover={{ bg: '#0D74FF' }}
                                        icon={<BsLinkedin size={{ base: "10px", sm: "10px", md: "15px" }} />}
                                    />
                                </a>
                            </Box>
                        </Box>
                    </Box>
                    <Box boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} _focus={{ bg: 'blue.500', }} w={{ base: "40%", sm: "40%", md: "50%" }}
                        h={{ base: "80%", sm: "80%", md: "90%" }}>

                        <Image alt={'my image'} src={img2} w={{ base: "100%", sm: "100%", md: "100%" }} h={{ base: "100%", sm: "100%", md: "100%" }} objectFit={'cover'} />
                    </Box>
                </SimpleGrid>
            </Container >
            <About />
            <Skills />
            {/* <Github /> */}
            <Projects />
            <Contact />

        </>

    );
}
// }
export { Home }