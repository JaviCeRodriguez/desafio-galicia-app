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
import { ContactDetails } from "../../../models/common";

type Props = {
  contact: ContactDetails;
  setContact: (value: ContactDetails) => void;
  onSubmit: () => void;
};

const ContactForm = ({ contact, setContact, onSubmit }: Props) => {
  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    if (!contact.email || !contact.texto) {
      return;
    }

    onSubmit();
  };

  const handleOnChange = (event: any) => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  };

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
            name="email"
            onChange={handleOnChange}
          />
        </FormControl>
        <FormControl id="texto" isRequired>
          <FormLabel>Escríbenos!</FormLabel>
          <Textarea
            resize="none"
            name="texto"
            placeholder="Escribe aquí tu mensaje"
            _placeholder={{ color: "gray.500" }}
            onChange={handleOnChange}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            type="button"
            onClick={handleOnSubmit}
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
