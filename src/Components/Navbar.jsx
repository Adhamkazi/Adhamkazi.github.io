import img1 from "../Images/Logo.jpg";
import pdf from "../Images/Adham_Kazi_Resume.pdf";
import {
  Text,
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1BJHyYy6mkRy63G3Pg3eqiqA0PlHz6UKf/view?usp=share_link"
    );
  };
  return (
    <>
      <Box
        boxShadow="lg"
        p="2"
        bg={useColorModeValue("#1A202C", "#1A202C")}
        px={4}
        position="fixed"
        zIndex={"10"}
        w="100%"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Text as="strong" fontSize="40px" color="#00B5D8">
                Portfolio
              </Text>
            </Box>

            <HStack
              as={"nav"}
              spacing={9}
              display={{ base: "none", md: "flex" }}
              cursor="pointer"
            >
              <Text
                fontSize={{ base: "15px", sm: "15px", md: "18px" }}
                color="gray.200"
                _hover={{
                  fontWeight: "semibold",
                  color: "#63B3ED",
                  textDecoration: "underline",
                }}
              >
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </Text>

              <Text
                fontSize={{ base: "15px", sm: "15px", md: "18px" }}
                color="gray.200"
                _hover={{
                  fontWeight: "semibold",
                  color: "#63B3ED",
                  textDecoration: "underline",
                }}
              >
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </Text>
              <Text
                fontSize={{ base: "15px", sm: "15px", md: "18px" }}
                color="gray.200"
                _hover={{
                  fontWeight: "semibold",
                  color: "#63B3ED",
                  textDecoration: "underline",
                }}
              >
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Skills
                </Link>
              </Text>
              <Text
                fontSize={{ base: "15px", sm: "15px", md: "18px" }}
                color="gray.200"
                _hover={{
                  fontWeight: "semibold",
                  color: "#63B3ED",
                  textDecoration: "underline",
                }}
              >
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </Text>
              <Text
                fontSize={{ base: "15px", sm: "15px", md: "18px" }}
                color="gray.200"
                _hover={{
                  fontWeight: "semibold",
                  color: "#63B3ED",
                  textDecoration: "underline",
                }}
              >
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </Text>

              <Button
                fontSize={{ base: "15px", sm: "15px", md: "18px" }}
                color="gray.200"
                variant={"outline"}
                _hover={{
                  fontWeight: "semibold",
                  color: "#63B3ED",
                  textDecoration: "underline",
                }}
                onClick={handleButtonClick}
              >
                <a href={pdf} download>
                  Download Resume
                </a>
              </Button>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={img1} />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Text
                fontFamily={"monospace"}
                fontSize={{ base: "15px", sm: "15px", md: "18px" }}
                color="gray.200"
              >
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </Text>
              <Text
                fontFamily={"monospace"}
                fontSize={{ base: "15px", sm: "15px", md: "18px" }}
                color="gray.200"
              >
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </Text>
              <Text
                fontFamily={"monospace"}
                fontSize={{ base: "15px", sm: "15px", md: "18px" }}
                color="gray.200"
              >
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Skills
                </Link>
              </Text>
              <Text
                fontFamily={"monospace"}
                fontSize={{ base: "15px", sm: "15px", md: "18px" }}
                color="gray.200"
              >
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </Text>
              <Text
                fontFamily={"monospace"}
                fontSize={{ base: "15px", sm: "15px", md: "18px" }}
                color="gray.200"
              >
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </Text>
              <Text
                fontFamily={"monospace"}
                fontSize={{ base: "15px", sm: "15px", md: "18px" }}
                color="gray.200"
              >
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <a href={pdf} download>
                    Download Resume
                  </a>
                </Link>
              </Text>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
