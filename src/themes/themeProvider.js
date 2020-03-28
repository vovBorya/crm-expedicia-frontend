import { createMuiTheme } from '@material-ui/core/styles';
import themes from './index'

const withType = (theme, type) => ({
  ...theme,
  palette: {
    ...theme.palette,
    type
  }
})

export default () => {
  const themeName = localStorage.getItem("THEME") || 'standard';
  if (!themeName) return undefined;

  const darkmode = localStorage.getItem("DARKMODE");
  const type = darkmode === "true" ? 'dark' : 'light';

  const theme = themes[themeName];

  if (!theme) return undefined;

  return createMuiTheme(withType(theme, type));
}

