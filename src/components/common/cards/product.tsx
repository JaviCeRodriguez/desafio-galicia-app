import {
  Card,
  CardBody,
  Stack,
  Image,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

type ProductProps = {
  title: string;
  description: string;
};

const Product = ({ title, description }: ProductProps) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Contratar
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Ver más info
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Product;
