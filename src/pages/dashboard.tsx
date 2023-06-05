import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
})

const option: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.teal[300]
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: "datetime",
        axisBorder: {
            color: theme.colors.teal[300]
        },
        categories: [
            "2023-06-01T00:22:00.00Z",
            "2023-06-02T00:23:00.00Z",
            "2023-06-03T00:24:00.00Z",
            "2023-06-04T00:25:00.00Z",
            "2023-06-05T00:27:00.00Z",
        ]
    },
    fill: {
        opacity: 0.3,
        type: "gradient",
        gradient: {
            shade: "dark",
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    }
};

const series = [
    { name: "series1", data: [31, 120, 59, 309, 403] }
];

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px">
                    <Box
                        p="8"
                        bgColor="teal.900"
                        pb="4"
                        borderRadius={10}
                    >
                        <Text fontSize="lg" mb="4">
                            Inscritos da Semana
                        </Text>
                        <Chart options={option} series={series} type="area" height={160} />
                    </Box>
                    <Box
                        p="8"
                        bgColor="teal.900"
                        pb="4"
                        borderRadius={10}
                    >
                        <Text fontSize="lg" mb="4">
                            Taxa de abertura
                        </Text>
                        <Chart options={option} series={series} type="area" height={160} />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}