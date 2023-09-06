import { Grid, GridItem } from "@chakra-ui/react";
import Product from "./components/common/cards/product";
import MainLayout from "./components/layout/main";

const App = () => {
  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default App;
