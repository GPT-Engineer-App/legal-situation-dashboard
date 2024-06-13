import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Box, Heading, Container } from '@chakra-ui/react';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Court Date',
    start: new Date(2023, 9, 20, 10, 0), // October is 9 (0-indexed)
    end: new Date(2023, 9, 20, 12, 0),
  },
  {
    title: 'Meeting with Lawyer',
    start: new Date(2023, 9, 22, 14, 0),
    end: new Date(2023, 9, 22, 15, 0),
  },
];

const CalendarPage = () => (
  <Container maxW="container.xl" py={10}>
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Calendar
      </Heading>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </Box>
  </Container>
);

export default CalendarPage;