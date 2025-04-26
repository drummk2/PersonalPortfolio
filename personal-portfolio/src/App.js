import { useState } from "react";
import "./App.css";
import FooterTextContainer from "./components/footer-text-container/FooterTextContainer";
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

    const footerEntries = [
        { header: "Email", content: "klrdrumm@outlook.com" },
        { header: "LinkedIn", content: <a href="https://www.linkedin.com/in/kieron-drumm-788382114/">https://www.linkedin.com/in/kieron-drumm-788382114/</a> },
        { header: "GitHub", content: <a href="https://github.com/drummk2">https://github.com/drummk2</a> }
    ];

    return (
        <div className="App">
            <div className="header-container">
                <HeaderTextContainer />
                <NavigationBar onChangePage={setPage} />
            </div>
            <PageComponent />
            <footer>
                <hr className="footer-line" />
                <div className="footer-content-container">
                    {footerEntries.map((footerEntry) => (
                        <FooterTextContainer
                            footerTextHeader={footerEntry.header}
                            footerTextContent={footerEntry.content}
                        />
                    ))}
                </div>
            </footer>
        </div>
    );
}

export default App;