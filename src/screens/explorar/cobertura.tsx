import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tenenciaHistorica } from "../../mocks/tenencias";
import { InsuranceDetails, Tenencia } from "../../models/common";
import { Collapse, Container, Heading, Text } from "@chakra-ui/react";
import InsuranceForm from "../../components/common/forms/insurance";
import Success from "../../components/common/notifications/success";

const CoberturaProcess = () => {
  const { code, id } = useParams();
  const [tenencia, setTenencia] = useState<Tenencia | null>(null);
  const [contact, setContact] = useState<InsuranceDetails>({
    email: "",
    texto: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = () => {
    setIsSuccess(true);
  };

  const getCobertura = () => {
    const tenencia = tenenciaHistorica.find(
      (tenencia) => tenencia.code === code
    );

    if (tenencia) {
      const cobertura = tenencia.coberturas[Number(id) - 1];

      if (!cobertura) {
        return;
      }

      setTenencia(tenencia);
    }
  };

  useEffect(() => {
    getCobertura();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (code === undefined || id === undefined) {
    return <div>Not found</div>;
  }

  return (
    <Container maxW="container.xl">
      <Heading as="h1" size="lg">
        {tenencia?.nombre} / Canal {tenencia?.canal}
      </Heading>
      <Heading as="h3" size="sm" my={2}>
        {tenencia?.coberturas[Number(id) - 1]}
      </Heading>

      <Text my={4}>
        Usted está por solicitar la cobertura a la que hace referencia el código{" "}
        {tenencia?.code} y el id {id}. Por favor, complete los siguientes datos
        para poder continuar con el alta de la cobertura seleccionada
      </Text>
      <Text my={4}>
        Una vez completado el formulario, se le enviará un correo electrónico
        con los datos de la cobertura solicitada y el detalle de los pasos a
        seguir para finalizar el alta. Un asesor se contactará con usted para
        brindarle la información necesaria y responder a sus consultas.
      </Text>

      <Collapse in={isSuccess}>
        <Success
          title="¡Gracias por contactarnos!"
          text={`Te enviamos los detalles de la cobertura a ${contact.email}. En breve nos pondremos en contacto con vos.`}
        />
      </Collapse>
      <Collapse in={!isSuccess}>
        <InsuranceForm
          code={code}
          id={id}
          contact={contact}
          setContact={setContact}
          onSubmit={onSubmit}
        />
      </Collapse>
    </Container>
  );
};

export default CoberturaProcess;
