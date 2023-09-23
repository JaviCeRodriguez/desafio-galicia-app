import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
// import Product from "../components/common/cards/product";
import { tenenciaHistorica } from "../mocks/tenencias";
import { useState } from "react";
import { Tenencia } from "../models/common";
import TenenciaModal from "../components/common/modals/tenencia";

const Explore = () => {
  const [tenencia, setTenencia] = useState<Tenencia | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (tenencia: Tenencia) => {
    setTenencia(tenencia);
    setIsOpen(true);
  };

  return (
    <Container maxW="container.xl">
      {tenencia && (
        <TenenciaModal
          isOpen={isOpen}
          tenencia={tenencia}
          onClose={() => setIsOpen(false)}
        />
      )}
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
              onClick={() => handleOpenModal(tenencia)}
              cursor="pointer"
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
