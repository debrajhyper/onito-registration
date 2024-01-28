import { createTheme, responsiveFontSizes, Container, styled, colors } from "@mui/material";

let theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: colors.grey[900]
        }
    },
});

theme = responsiveFontSizes(theme);

// const useStyle = makeStyles(() => ({
//     root: {
//         width: "auto",
//         marginLeft: theme.spacing(2),
//         marginRight: theme.spacing(2),
//         backgroundColor: theme.palette.background.default,
//         color: theme.palette.text.primary,
//     },
// }));

const classes = {
    root: 'root',
    box: 'box',
    stack: 'stack',
}

const Root = styled(Container)({
    height: '100vh',
    width: '100vw'
})

export { theme };
