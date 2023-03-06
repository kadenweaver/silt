import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, chakra, useDisclosure } from "@chakra-ui/react";

import PostTable from "./components/PostTable";
import BackButton from "./components/BackButton";
import { MinNav } from "./components/MinNav";
import { SmallAppNav } from "./components/SmallAppNav";

const AppUI = () => {

  const {
    isOpen: navDrawerOpen,
    onClose: closeNavDrawer,
    onOpen: openNavDrawer,
  } = useDisclosure();

  const smallAppMode = window.innerWidth < 500;

  return (
    <Router>
      <div className="App">
        <div className="background-div">
          <BackButton />
          {!smallAppMode && (
            <MinNav
              openNavDrawer={openNavDrawer}
              navDrawerOpen={navDrawerOpen}
              closeNavDrawer={closeNavDrawer}
            />
          )}

          {smallAppMode && (
            <SmallAppNav
              openNavDrawer={openNavDrawer}
              navDrawerOpen={navDrawerOpen}
              closeNavDrawer={closeNavDrawer}
            />
          )}

          <chakra.div
            backgroundColor="#fffef5"
            mt="none"
            w="88%"
            ml="auto"
            mr="auto"
            height="100%"
            minHeight="100vh"
            color="#000000"
            top="0"
            overflow='auto'
          >
            <Container width="100%" mr="auto" ml="auto" mb="13vh">
              <Switch>
                <Route path={"/:page"}>
                  <PostTable />
                </Route>
                <Route path="/">
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
