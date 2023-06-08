import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Ronald Joaquim</Text>
                <Text color="gray.300" fontSize="small">ronaldjoaquimcardoso11@gmail.com</Text>
            </Box>

            <Avatar size="md" src="https://github.com/Ronald-Joaquim.png" />
        </Flex>
    )
}