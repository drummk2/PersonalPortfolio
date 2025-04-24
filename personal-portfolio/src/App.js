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
        </div>
    );
}

export default App;