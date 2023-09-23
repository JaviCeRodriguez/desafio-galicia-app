import { Box, Grid, GridItem } from "@chakra-ui/react";
import Product from "../components/common/cards/product";

const Explore = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem>
          <Product title="Sofá" description="Sofá de 3 lugares" />
        </GridItem>
        <GridItem>
          <Product title="Mesa" description="Mesa de jantar" />
        </GridItem>
        <GridItem>
          <Product title="Cadeira" description="Cadeira de escritório" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Explore;
