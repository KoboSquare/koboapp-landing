import { MantineProvider, createTheme, virtualColor } from "@mantine/core";

const theme = createTheme({
    primaryColor: 'primary',
    colors: {
        primary: virtualColor({
            name: 'primary',
            dark: '#007F5F',
            light: '#007F5F',
        }),
    },
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return <MantineProvider theme={theme}>
        {children}
    </MantineProvider>;
};