import { useForm } from "react-hook-form";
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs';

const Contact = () => {

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit({ values }) {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert("THANKS FOR CONNECTING");
                resolve();
            }, 1000);
        });
    }
    // const [name, setName] = useState("")
    // const [mail, setMail] = useState("")
    // const [message, setMessage] = useState("")

    // const handleName = (e) => {
    //     setName(e.target.value)
    // }
    // const handleMail = (e) => {
    //     setMail(e.target.value)
    // }
    // const handleMessage = (e) => {
    //     setMessage(e.target.value)
    // }

    return (
        <Container bg="#1A202C" maxW="full" mt={10} centerContent overflow="hidden" id='contact'>
            <Flex>
                <Box
                    bg="#1A202C"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Heading>Contact</Heading>
                                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                                        Fill up the form below to contact
                                    </Text>
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack pl={0} spacing={3} alignItems="flex-start">
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                                                +91-9545401057
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="230px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                                                kaziadham95@gmail.com
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                                                Pune, Maharashtra
                                            </Button>
                                        </VStack>
                                    </Box>
                                    <HStack
                                        mt={{ lg: 10, md: 10 }}
                                        spacing={5}
                                        px={5}
                                        alignItems="flex-start">
                                        <IconButton
                                            aria-label="facebook"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }}
                                            icon={<MdFacebook size="28px" />}
                                        />
                                        <a href='https://github.com/Adhamkazi'>
                                            <IconButton
                                                aria-label="github"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: '#0D74FF' }}
                                                icon={<BsGithub size="28px" />}
                                            />
                                        </a>
                                        <a href='https://www.linkedin.com/in/adhamkazi/' >
                                            <IconButton
                                                aria-label="linkedin"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: '#0D74FF' }}
                                                icon={<BsLinkedin size="28px" />}
                                            />
                                        </a>
                                    </HStack>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg="#1A202C" borderRadius="lg">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Box m={8} color="white">
                                            <VStack spacing={5}>
                                                <FormControl id="name" isInvalid={errors.name}>
                                                    <FormLabel>Your Name</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7" _hover={{
                                                        borderRadius: 'gray.300',
                                                    }}>
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<BsPerson color="gray.800" />}
                                                        />
                                                        <Input type="text" size="md" color={"white"} id="name"
                                                            placeholder="name"
                                                            {...register("name", {
                                                                required: "This is required",
                                                                minLength: { value: 4, message: "Minimum length should be 4" }
                                                            })}
                                                        />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="email">
                                                    <FormLabel>Mail</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7" _hover={{
                                                        borderRadius: 'gray.300',
                                                    }}>
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<MdOutlineEmail color="gray.800" />}
                                                        />
                                                        <Input type="text" size="md" placeholder="email"
                                                            {...register("Email", {
                                                                required: "This is required",
                                                                minLength: { value: 4, message: "Minimum length should be 4" }
                                                            })} />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="message">
                                                    <FormLabel>Message</FormLabel>
                                                    <Textarea
                                                        borderColor="gray.300"
                                                        _hover={{
                                                            borderRadius: 'gray.300',
                                                        }}
                                                        placeholder="message"
                                                        // placeholder="name"
                                                        {...register("message", {
                                                            required: "This is required",
                                                            minLength: { value: 4, message: "Minimum length should be 4" }
                                                        })}
                                                    />
                                                </FormControl>
                                                <FormControl id="name" float="right">
                                                    <Button
                                                        colorScheme="teal" isLoading={isSubmitting} type="submit"
                                                        variant="solid"
                                                        bg="#0D74FF"
                                                        color="white"
                                                        _hover={{}}>
                                                        Let's Conect
                                                    </Button>
                                                </FormControl>
                                            </VStack>
                                        </Box>
                                    </form>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>

    );
}

export { Contact }

