import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Heading,
  ListItem,
  List,
  ListIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Tenencia } from "../../../models/common";

type Props = {
  isOpen: boolean;
  tenencia: Tenencia;
  onClose: () => void;
};

const TenenciaModal = ({ isOpen, tenencia, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Stack>
            <Heading as="h5" size="md">
              {tenencia.nombre}
            </Heading>
            <Heading as="h6" size="xs" color="GrayText" fontWeight={500}>
              Canal: {tenencia.canal}
            </Heading>
          </Stack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List spacing={2}>
            {tenencia.coberturas.map((cobertura, index) => (
              <ListItem
                key={index}
                as={Link}
                to={`/explorar/${tenencia.code}/${index + 1}`}
                display="flex"
                flexDirection="row"
                cursor="pointer"
              >
                <ListIcon as={ArrowForwardIcon} color="blue.500" />
                <Heading as="h6" size="xs" fontWeight={500}>
                  {cobertura}
                </Heading>
              </ListItem>
            ))}
          </List>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TenenciaModal;
