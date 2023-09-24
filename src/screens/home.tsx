import { Container, Grid } from "@chakra-ui/react";
import SiniestrosCard from "../components/common/cards/siniestros";

const Home = () => {
  return (
    <Container maxW="container.xl">
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
        <SiniestrosCard />
        <SiniestrosCard />
        {/* <GridItem
          colSpan={{
            base: 6,
          }}
          bg="gray.50"
          rounded="lg"
          boxShadow="md"
          p="2"
        /> */}
      </Grid>
    </Container>
  );
};

export default Home;
