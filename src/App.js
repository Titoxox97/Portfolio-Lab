import { Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightMode } from "./components/Themes";
import GlobalStyle from "./globalStyles";

// My web page components
import Main from "./components/Main";
import About from "./components/About";
import BlogPage from "./components/BlogPage";
import WorkStuff from "./components/WorkStuff";
import Skills from "./components/Skills";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightMode}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/work" component={WorkStuff} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
