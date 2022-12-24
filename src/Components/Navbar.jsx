import img1 from "../Images/Logo.jpg"

import {
    Text, Box, Flex, Avatar, HStack, IconButton, Button, Menu, MenuButton, useDisclosure, useColorModeValue, Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import {Link } from 'react-router-dom'
import { Link } from "react-scroll";

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box boxShadow='lg' p='2' bg={useColorModeValue('#1A202C', '#1A202C')} px={4} position="fixed" zIndex={"10"}
                w="100%">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
                    <IconButton size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
                    <HStack spacing={8} alignItems={'center'} >
                        <Box>
                            <Text as="strong" fontSize="25px" color="#086F83">Portfolio</Text></Box>

                        <HStack as={'nav'} spacing={10} display={{ base: 'none', md: 'flex' }} cursor="pointer">
                            <Text fontFamily={"serif"} fontSize={{ base: "15px", sm: "15px", md: "19px" }} color="darkgrey" _hover={{ fontWeight: 'semibold', color: "#63B3ED", textDecoration: "underline" }}><Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></Text>
                            <Text fontFamily={"serif"} fontSize={{ base: "15px", sm: "15px", md: "18px" }} color="darkgrey" _hover={{ fontWeight: 'semibold', color: "#63B3ED", textDecoration: "underline" }}><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link></Text>
                            <Text fontFamily={"serif"} fontSize={{ base: "15px", sm: "15px", md: "18px" }} color="darkgrey" _hover={{ fontWeight: 'semibold', color: "#63B3ED", textDecoration: "underline" }}><Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link></Text>
                            <Text fontFamily={"serif"} fontSize={{ base: "15px", sm: "15px", md: "18px" }} color="darkgrey" _hover={{ fontWeight: 'semibold', color: "#63B3ED", textDecoration: "underline" }}><Link activeClass="active" to="project" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link></Text>
                            <Text fontFamily={"serif"} fontSize={{ base: "15px", sm: "15px", md: "18px" }} color="darkgrey" _hover={{ fontWeight: 'semibold', color: "#63B3ED", textDecoration: "underline" }}><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></Text>
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar size={'sm'} src={img1} />
                            </MenuButton>
                        </Menu>
                    </Flex>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>

                            <Text fontFamily={"monospace"} fontSize={{ base: "15px", sm: "15px", md: "18px" }} color="darkgrey"><Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></Text>
                            <Text fontFamily={"monospace"} fontSize={{ base: "15px", sm: "15px", md: "18px" }} color="darkgrey"><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link></Text>
                            <Text fontFamily={"monospace"} fontSize={{ base: "15px", sm: "15px", md: "18px" }} color="darkgrey"><Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link></Text>
                            <Text fontFamily={"monospace"} fontSize={{ base: "15px", sm: "15px", md: "18px" }} color="darkgrey"><Link activeClass="active" to="project" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link></Text>
                            <Text fontFamily={"monospace"} fontSize={{ base: "15px", sm: "15px", md: "18px" }} color="darkgrey"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></Text>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            {/* <Home /> */}
        </>
    );
}

export default Navbar