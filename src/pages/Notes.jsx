import { useState } from 'react';
import { Box, Button, Container, Heading, Input, Textarea, VStack, HStack, Text } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddNote = () => {
    if (editIndex !== null) {
      const updatedNotes = notes.map((note, index) => (index === editIndex ? { title, content } : note));
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      setNotes([...notes, { title, content }]);
    }
    setTitle('');
    setContent('');
  };

  const handleEditNote = (index) => {
    setTitle(notes[index].title);
    setContent(notes[index].content);
    setEditIndex(index);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Notes
        </Heading>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack spacing={4}>
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button colorScheme="teal" onClick={handleAddNote}>
              {editIndex !== null ? 'Update Note' : 'Add Note'}
            </Button>
          </VStack>
        </Box>
        {notes.map((note, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <HStack justify="space-between">
              <VStack align="start">
                <Text fontWeight="bold">{note.title}</Text>
                <Text>{note.content}</Text>
              </VStack>
              <HStack spacing={2}>
                <Button size="sm" onClick={() => handleEditNote(index)}>
                  <FaEdit />
                </Button>
                <Button size="sm" colorScheme="red" onClick={() => handleDeleteNote(index)}>
                  <FaTrash />
                </Button>
              </HStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Notes;