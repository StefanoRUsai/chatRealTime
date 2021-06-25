import {
  responsiveFontSizes,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from '@material-ui/core/styles';



let theme = createMuiTheme({
  palette: {
    background: {
      default: '#e6e5e5',
    },
}});

theme = responsiveFontSizes(theme);

export default theme;
