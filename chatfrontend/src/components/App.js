import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import io from "socket.io-client";
import Login from "./pages/login/Login";
import { Box, Container, CssBaseline } from "@material-ui/core";

const socket = io.connect('/');


function App() {
const ScrollToTop = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Suspense fallback="loading">
    <CssBaseline/>
    <Router>
      <Box className="App">
        <Container maxWidth="md">
        <Switch>
          <Route path="/" exact>
            <Home socket={socket} />
          </Route>
          <Route path="/chat/:roomname/:username" component={Login} />
        </Switch>
        </Container>
      </Box>
    </Router>
    </Suspense>
  );
}

export default App;