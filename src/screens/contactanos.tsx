import { Collapse, Container } from "@chakra-ui/react";
import ContactForm from "../components/common/forms/contact";
import { useState } from "react";
import Success from "../components/common/notifications/success";
import { ContactDetails } from "../models/common";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    email: "",
    texto: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <Container maxW="container.lg">
      <Collapse in={isSuccess}>
        <Success
          title="¡Gracias por contactarnos!"
          text={`Te responderemos a la brevedad a ${contactDetails.email}`}
        />
      </Collapse>
      <Collapse in={!isSuccess}>
        <ContactForm
          contact={contactDetails}
          setContact={setContactDetails}
          onSubmit={() => setIsSuccess(true)}
        />
      </Collapse>
    </Container>
  );
};

export default Contact;
