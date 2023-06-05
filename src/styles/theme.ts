import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "teal.700",
                color: "gray.50"
            }
        }
    },
    fonts: {
        heading: "Roboto",
        body: "",
    }
})