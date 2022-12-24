import React from 'react'
import loadingGif2 from "../Images/astronaut-in-tea-break.gif"
// import AOS from "aos";
// import "aos/dist/aos.css"
import { Image, Box, Heading } from "@chakra-ui/react"

const LoadingPage = () => {

    return (
        <Box h="1000px" w="50%" m="auto">

            < Image src={loadingGif2} w="70%" />
            <Box mt={{ base: "-20px", md: "-50px" }} m="auto" w="70%">
                <Heading color="gray.400" fontFamily={"monospace"}>Adham Kazi</Heading>
            </Box>

        </Box >
    )
}

export { LoadingPage };