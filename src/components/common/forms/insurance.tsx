import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { InsuranceDetails } from "../../../models/common";

type Props = {
  contact: InsuranceDetails;
  id: string;
  code: string;
  setContact: (value: InsuranceDetails) => void;
  onSubmit: () => void;
};

const InsuranceForm = ({ contact, code, id, setContact, onSubmit }: Props) => {
  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    if (!contact.email) {
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
    <Flex align="center" justify="center" py={4}>
      <Stack
        spacing={4}
        w="full"
        maxW="3xl"
        bg="white"
        rounded="xl"
        boxShadow="lg"
        p={6}
      >
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
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
        >
          <FormControl id="code" isRequired>
            <FormLabel>Código</FormLabel>
            <Input
              placeholder="Código"
              _placeholder={{ color: "gray.500" }}
              type="text"
              name="code"
              value={code}
              disabled
            />
          </FormControl>
          <FormControl id="id" isRequired>
            <FormLabel>ID</FormLabel>
            <Input
              placeholder="ID"
              _placeholder={{ color: "gray.500" }}
              type="text"
              name="id"
              value={id}
              disabled
            />
          </FormControl>
        </Stack>
        <FormControl id="texto">
          <FormLabel>Consultas? Escribinos!</FormLabel>
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

export default InsuranceForm;
