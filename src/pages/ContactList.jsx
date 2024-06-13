import { Box, Container, Heading, VStack, Text, HStack, Divider } from "@chakra-ui/react";

const contacts = {
  lawyers: [
    { name: "John Doe", phone: "123-456-7890", email: "john.doe@example.com", description: "Family Lawyer" },
    { name: "Jane Smith", phone: "987-654-3210", email: "jane.smith@example.com", description: "Criminal Defense Lawyer" },
  ],
  supportGroups: [
    { name: "Support Group A", phone: "555-555-5555", email: "supportA@example.com", description: "Divorce Support Group" },
    { name: "Support Group B", phone: "444-444-4444", email: "supportB@example.com", description: "Domestic Violence Support Group" },
  ],
  others: [
    { name: "Therapist C", phone: "333-333-3333", email: "therapistC@example.com", description: "Licensed Therapist" },
    { name: "Financial Advisor D", phone: "222-222-2222", email: "advisorD@example.com", description: "Financial Advisor" },
  ],
};

const ContactList = () => (
  <Container maxW="container.xl" py={10}>
    <VStack spacing={8} align="stretch">
      <Heading as="h1" size="2xl" textAlign="center">
        Contact List
      </Heading>
      {Object.keys(contacts).map((category) => (
        <Box key={category} p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Heading>
          {contacts[category].map((contact, index) => (
            <Box key={index} mb={4}>
              <HStack justify="space-between">
                <VStack align="start">
                  <Text fontWeight="bold">{contact.name}</Text>
                  <Text>{contact.phone}</Text>
                  <Text>{contact.email}</Text>
                  <Text>{contact.description}</Text>
                </VStack>
              </HStack>
              {index < contacts[category].length - 1 && <Divider />}
            </Box>
          ))}
        </Box>
      ))}
    </VStack>
  </Container>
);

export default ContactList;