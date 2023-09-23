import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
// import Product from "../components/common/cards/product";
import { tenenciaHistorica } from "../mocks/tenencias";

const Explore = () => {
  return (
    <Container maxW="container.xl">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={4}
      >
        {tenenciaHistorica.map((tenencia) => {
          return (
            <GridItem
              key={tenencia.id}
              bg="gray.50"
              p={3}
              rounded="md"
              boxShadow="md"
            >
              <Heading as="h6" size="xs" fontWeight={500}>
                {tenencia.nombre} / Canal {tenencia.canal}
              </Heading>
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Explore;
