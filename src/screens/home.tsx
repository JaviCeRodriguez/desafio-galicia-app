import { Container, Grid, GridItem, Heading, Stack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container maxW="container.lg">
      <Grid
        h="100%"
        minH="500px"
        templateRows={{
          base: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem
          colSpan={{
            base: 6,
            md: 3,
          }}
          bg="gray.50"
          rounded="lg"
          boxShadow="md"
          p="2"
        >
          <Stack>
            <Heading as="h5" size="sm">
              Seguros Sarasa
            </Heading>
          </Stack>
        </GridItem>
        <GridItem
          colSpan={{
            base: 6,
            md: 3,
          }}
          bg="gray.50"
          rounded="lg"
          boxShadow="md"
          p="2"
        />
        <GridItem
          colSpan={{
            base: 6,
          }}
          bg="gray.50"
          rounded="lg"
          boxShadow="md"
          p="2"
        />
      </Grid>
    </Container>
  );
};

export default Home;
