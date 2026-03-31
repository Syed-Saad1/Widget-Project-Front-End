import React from "react";
import "./App.css";
import Header from "./Components/Header.jsx";
import Modal from "./Components/Modal.jsx";
import ConfigureGithub from "./Components/ConfigureGitHub.jsx";
import ConfigureGithubRepos from "./Components/ConfigureGitHubRepos.jsx";
import ConfigureDevToArticles from "./Components/ConfigureDev.ToArticles.jsx";
import ConfigureStackOverflowSummury from "./Components/ConfigureStackOverflowSummury.jsx";
import ConfigureHakerNewsActivity from "./Components/ConfigureHakerNewsActivity.jsx";
import GithubProfileCard from "./Components/GithubProfileCard.jsx";
function App() {
  return (
    <>
      <Header />
      {/* <Modal /> */}
      {/* <ConfigureGithub /> */}
      {/* <ConfigureGithubRepos /> */}
      {/* <ConfigureDevToArticles /> */}
      {/* <ConfigureStackOverflowSummury /> */}
      {/* <ConfigureHakerNewsActivity /> */}
      <GithubProfileCard />
    </>
  );
}

export default App;
