import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from "react-icons/ri"

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Text
                fontSize="3xl"
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
            >
                UIdash
                <Text as="span" ml="1" color="pink.500">.</Text>
            </Text>

            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="teal.900"
                borderRadius="full"
            >
                <Input
                    color="gray.50"
                    variant="unstyled"
                    px="4"
                    mr="4"
                    placeholder="Buscar na Plataforma"
                    _placeholder={{ color: "gray.300" }}
                />

                <Icon as={RiSearchLine} fontSize="20" color="teal.300" />
            </Flex>

            <Flex
                align="center"
                ml="auto"
            >
                <HStack spacing={8} mx="8" pr="8" py="1" color="teal.300" borderRightWidth={1} borderColor="teal.900">
                    <Icon as={RiNotificationLine} fontSize="20" />
                    <Icon as={RiUserAddLine} fontSize="20" />
                </HStack>

                <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text>Ronald Joaquim</Text>
                        <Text color="gray.300" fontSize="small">ronaldjoaquimcardoso11@gmail.com</Text>
                    </Box>

                    <Avatar size="md" src="https://github.com/Ronald-Joaquim.png" />
                </Flex>
            </Flex>
        </Flex>
    )
}