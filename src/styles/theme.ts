import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "teal.800",
                color: "gray.50"
            }
        }
    },
    fonts: {
        heading: "Roboto",
        body: "Roboto",
    }
})