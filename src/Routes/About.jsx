import React from 'react';
import { Box, Heading, Link, Image, Text, useColorModeValue, Container, SimpleGrid } from '@chakra-ui/react';
import img3 from "../Images/developer.jpg"

const About = () => {
    return (
        <Container maxW={'7xl'} p="12" mt="50px" id='about'>
            <Heading as="h1" color={"gray.300"} fontFamily="monospace" textDecoration={"underline"}>About</Heading>
            <SimpleGrid marginTop={{ base: '1', sm: '5' }} columns={{ base: 1, sm: 1, md: 2 }} justifyContent="space-between">
                <Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
                    <Box width={{ base: '100%', sm: '85%' }} zIndex="2" marginLeft={{ base: '0', sm: '5%' }} marginTop="5%">
                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            <Image borderRadius="lg" src={img3} alt="developer" objectFit="contain" />
                        </Link>
                    </Box>
                    <Box zIndex="1" width="100%" position="absolute" height="100%">
                        <Box bgGradient={useColorModeValue('radial(orange.600 1px, transparent 1px)', 'radial(orange.300 1px, transparent 1px)')}
                            backgroundSize="20px 20px"
                            opacity="0.4"
                            height="100%"
                        />
                    </Box>
                </Box>
                <Box textAlign={"left"}

                    columns={{ base: 1, sm: 1, md: 1 }}
                    justifyContent="center"
                    marginTop={{ base: '3', sm: '0', md: "100px" }}>
                    <Text as="p" marginTop="2" color={useColorModeValue('gray.300', 'gray.200')} fontSize="lg">
                        I am  full-stack web developer, passionate about developing user-friendly web applications using MERN Stack.
                    </Text>
                    <Text as="p" marginTop="2" color={useColorModeValue('gray.300', 'gray.200')} fontSize="lg">
                        I enjoy developing websites and a keen interest in solving problems and coming up with effective solutions.
                    </Text>

                    <Text as="p" marginTop="2" color={useColorModeValue('gray.300', 'gray.200')} fontSize="lg">
                        Eager to be a part of a team which gives me ability to learn and grow.
                    </Text>
                </Box>
            </SimpleGrid>
        </Container>
    );
};

export { About };