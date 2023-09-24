import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { tenenciaHistorica } from "../../mocks/tenencias";
import { useState } from "react";
import { Tenencia } from "../../models/common";
import TenenciaModal from "../../components/common/modals/tenencia";
import { useFavoriteStore } from "../../store/favoriteStore";

const Explore = () => {
  const [tenencia, setTenencia] = useState<Tenencia | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const tenenciasStored = useFavoriteStore((state) => state.tenencias);
  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);

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
          const isFavorite = tenenciasStored.find((t) => t.id === tenencia.id);

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
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Heading as="h6" size="xs" fontWeight={500}>
                  {tenencia.nombre} / Canal {tenencia.canal}
                </Heading>

                <Box
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isFavorite) {
                      removeFavorite(tenencia.id);
                    } else {
                      addFavorite(tenencia);
                    }
                  }}
                >
                  <StarIcon color={isFavorite ? "yellow.400" : "gray.400"} />
                </Box>
              </Stack>
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Explore;
