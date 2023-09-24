import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

const qa = [
  {
    question: "¿Por qué elegir Seguros Sarasa?",
    answer:
      "Porque somos una empresa con más de 20 años de experiencia en el mercado asegurador, con un equipo de profesionales altamente capacitados para brindarle el mejor asesoramiento y servicio.",
  },
  {
    question: "¿Qué coberturas ofrecen?",
    answer:
      "Ofrecemos coberturas para autos, motos, hogar, comercio, vida, accidentes personales, caución, embarcaciones, entre otras.",
  },
  {
    question: "¿Cómo puedo obtener un presupuesto?",
    answer:
      "Podes solicitar un presupuesto online, por teléfono o acercándote a nuestras oficinas. Nuestros asesores te brindarán la mejor opción de acuerdo a tus necesidades y posibilidades.",
  },
  {
    question: "¿Cómo puedo pagar mi seguro?",
    answer:
      "Podes abonar tu seguro en efectivo, con tarjeta de crédito, débito o transferencia bancaria.",
  },
  {
    question: "¿Cómo puedo hacer un reclamo?",
    answer:
      "Podes realizar un reclamo comunicándote con tu asesor de seguros o con la compañía aseguradora. En caso de no tener los datos de contacto, podes comunicarte con nosotros y te brindaremos la información necesaria.",
  },
  {
    question: "¿Cómo puedo renovar mi seguro?",
    answer:
      "Tu asesor de seguros te contactará para informarte sobre la renovación de tu seguro y las opciones disponibles.",
  },
  {
    question:
      "Luego de solicitar una cobertura, ¿cuándo puedo comenzar a utilizarla?",
    answer:
      "Una vez que hayas abonado la primera cuota, la cobertura se activará automáticamente una vez que confimes con nuestro asesor que recibiste la póliza.",
  },
];

const Faq = () => {
  return (
    <Container maxW="container.xl">
      <Heading as="h1" size="lg" mb={4}>
        Preguntas frecuentes
      </Heading>

      <Flex justifyContent="center">
        <Accordion allowMultiple width="100%" maxW="4xl" rounded="lg">
          {qa.map((item, index) => {
            return (
              <AccordionItem key={`faq-${index}`}>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text fontSize="md" fontWeight="500">
                    {item.question}
                  </Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">{item.answer}</Text>
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Flex>
    </Container>
  );
};

export default Faq;
