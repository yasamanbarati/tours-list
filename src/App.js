import { Fragment } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { theme } from './setup/theme';
import { store } from './setup/redux/store';
import { useToursData } from './servises/shop/api';
import { Tours } from './scenes/home/tours';

function App() {

  useToursData();

  return (
    <Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Tours />
        </ThemeProvider>
      </Provider>
    </Fragment>
  );
}

export default App;
