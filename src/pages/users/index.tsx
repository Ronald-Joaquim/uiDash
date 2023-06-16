import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import Link from "next/link";
import { useUsers } from "../../services/hooks/useUsers";

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

export default function UserList() {
    const { data, isLoading, isFetching, error } = useUsers()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="30" >
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="teal.900" p="10">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size={["sm", "lg"]} fontWeight="normal">
                            Usuários
                            {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
                        </Heading>
                        <Link href={"/users/create"} passHref>
                            <Button size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    {isLoading ? (
                        <Flex justifyContent={"center"}>
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justifyContent={"center"}>
                            <Text>Falha ao obter dados dos usuários</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th px={["4", "4", "6"]} color="gray.300">
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>Usuário</Th>
                                        {isWideVersion && <Th>Data de cadastro</Th>}
                                        <Th w="8"></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.map((user: User) => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td px={["4", "4", "6"]}>
                                                    <Checkbox colorScheme="pink" />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Text fontWeight="bold">{user.name}</Text>
                                                        <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                                    </Box>
                                                </Td>
                                                {isWideVersion && <Td>
                                                    {user.createdAt}
                                                </Td>}

                                            </Tr>
                                        )
                                    })}
                                </Tbody>
                            </Table>
                            <Pagination />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    );
}