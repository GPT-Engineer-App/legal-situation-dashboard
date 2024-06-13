import { Container, VStack, Heading, Box, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Legal Situation Dashboard
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">Divorce Proceedings</Heading>
            <Text mt={4}>Keep track of all your divorce-related legal matters here.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">Cannabis Possession Charges</Heading>
            <Text mt={4}>Monitor the status and details of your cannabis possession charges.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">Domestic Violence Charges</Heading>
            <Text mt={4}>Stay updated on your domestic violence charges and related information.</Text>
          </Box>
          <Link to="/notes">
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Notes</Heading>
              <Text mt={4}>Keep track of important information and updates.</Text>
            </Box>
          </Link>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;