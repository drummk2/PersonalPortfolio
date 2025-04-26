import { useState } from "react";
import "./App.css";
import HomePageContainer from "./components/home-page-container/HomePageContainer";
import HeaderTextContainer from "./components/header-text-container/HeaderTextContainer";
import NavigationBar from "./components/navigation-bar/NavigationBar";

function App() {
    const [page, setPage] = useState("about");

    let PageComponent;
    switch (page) {
        case "about":
            PageComponent = HomePageContainer;
            break;
        default:
            PageComponent = HomePageContainer;
    }

    return (
        <div className="App">
            <div className="header-container">
                <HeaderTextContainer />
                <NavigationBar onChangePage={setPage}/>
            </div>
            <PageComponent />
            <footer>
                <hr className="footer-line" />
                <div className="footer-content-container">
                    <div className="footer-text-container">
                        <p className="footer-text-header">Email</p>
                        <p className="footer-text-content">klrdrumm@outlook.com</p>
                    </div>
                    <div className="footer-text-container">
                        <p className="footer-text-header">LinkedIn</p>
                        <p className="footer-text-content"><a href="https://www.linkedin.com/in/kieron-drumm-788382114/">https://www.linkedin.com/in/kieron-drumm-788382114/</a></p>
                    </div>
                    <div className="footer-text-container">
                        <p className="footer-text-header">GitHub</p>
                        <p className="footer-text-content"><a href="https://github.com/drummk2">https://github.com/drummk2</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;