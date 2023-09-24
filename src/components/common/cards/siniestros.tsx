import { GridItem } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import { data } from "../../../mocks/siniestros";
import { ApexOptions } from "apexcharts";

const SiniestrosCard = () => {
  const categories = data[0].data.map((entry) => entry.month);
  const series = data.map((yearData) => ({
    name: yearData.year.toString(),
    data: yearData.data.map((monthData) => monthData.amount),
  }));

  const options = {
    chart: {
      id: "line-chart",
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      title: {
        text: "Monto en Pesos Argentinos",
      },
    },
    title: {
      text: "Cobros por sinietros menual",
      align: "center",
    },
    legend: {
      position: "top",
    },
    stroke: {
      curve: "smooth",
    },
  };

  return (
    <GridItem
      colSpan={{
        base: 6,
        md: 3,
      }}
      bg="gray.50"
      rounded="lg"
      boxShadow="md"
      p="2"
    >
      <Chart options={options as ApexOptions} series={series} type="line" />
    </GridItem>
  );
};

export default SiniestrosCard;
