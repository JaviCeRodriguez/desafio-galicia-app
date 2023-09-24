import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

const Warning = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <WarningTwoIcon boxSize={"50px"} color="orange.300" />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        No hay favoritos!
      </Heading>
      <Text color="gray.500">
        Agrega tus seguros favoritos para tenerlos a mano! 🤩
      </Text>
      <Link
        as={RouterLink}
        to="/explorar"
        color="blue.500"
        fontWeight="bold"
        mt={4}
        fontSize="lg"
      >
        Explorar seguros
      </Link>
    </Box>
  );
};

export default Warning;
