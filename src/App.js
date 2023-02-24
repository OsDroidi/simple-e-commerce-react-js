import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import { DataProvider } from "./components/Context";
import GithubCorner from 'react-github-corner';

class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <div className="container mx-auto">
          <Router>
            <Header />
            <Section />
            <GithubCorner href="https://github.com/OsDroidi/simple-e-commerce-react-js" target="_blank" />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
