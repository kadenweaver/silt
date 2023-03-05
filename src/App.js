import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, chakra } from "@chakra-ui/react";

import PostTable from './components/PostTable'
import BackButton from "./components/BackButton";
import { MinNav } from "./components/MinNav";

const AppUI = () => {
  // nav drawer
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const openNavDrawer = () => {
    setNavDrawerOpen(true);
  };
  const closeNavDrawer = () => {
    setNavDrawerOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <div className="background-div">
          <BackButton />
          <MinNav
            openNavDrawer={openNavDrawer}
            navDrawerOpen={navDrawerOpen}
            closeNavDrawer={closeNavDrawer}
          />

          <chakra.div
            backgroundColor="#fffef5"
            mt="none"
            w="88%"
            ml="auto"
            mr="auto"
            minHeight="100vh"
            height="100%"
            color="#000000"
            top="0"
            overflow="auto"
          >
            <Container width="100%" mr="auto" ml="auto" mb="13vh">
              <Switch>
                <Route path={"/:page"}>
                  <PostTable />
                </Route>
                <Route path='/'>
                  <PostTable />
                </Route>
              </Switch>
            </Container>
          </chakra.div>
        </div>
      </div>
    </Router>
  );
};

export default AppUI;
