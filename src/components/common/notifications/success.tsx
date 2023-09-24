import { Box, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

type Props = {
  title: string;
  text: string;
};

const Success = ({ title, text }: Props) => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        {title}
      </Heading>
      <Text color={"gray.500"}>{text}</Text>
    </Box>
  );
};

export default Success;
