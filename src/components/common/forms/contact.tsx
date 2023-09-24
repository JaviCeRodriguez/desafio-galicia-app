import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Flex align="center" justify="center">
      <Stack
        spacing={4}
        w="full"
        maxW="xl"
        bg="white"
        rounded="xl"
        boxShadow="lg"
        p={6}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Contáctanos!
        </Heading>
        <Text fontSize={{ base: "sm", sm: "md" }} color={"gray.500"}>
          Ante cualquier duda, consulta o sugerencia, no dudes en contactarnos!
          Estamos para ayudarte 😉
        </Text>
        <FormControl id="email" isRequired>
          <FormLabel>Tu dirección de e-mail</FormLabel>
          <Input
            placeholder="tuemail@gmail.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <FormControl id="texto" isRequired>
          <FormLabel>Escríbenos!</FormLabel>
          <Textarea resize="none" placeholder="Escribe aquí tu mensaje" />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg="blue.400"
            color="white"
            _hover={{
              bg: "blue.500",
            }}
          >
            Enviar
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default ContactForm;
