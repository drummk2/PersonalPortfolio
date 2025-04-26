import { useMemo, useState } from "react";
import EducationPageContainer from "./components/education-page-container/EducationPageContainer";
import ExperiencePageContainer from "./components/experience-page-container/ExperiencePageContainer";
import FooterTextContainer from "./components/footer-text-container/FooterTextContainer";
import HomePageContainer from "./components/home-page-container/HomePageContainer";
import HeaderTextContainer from "./components/header-text-container/HeaderTextContainer";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import NavigationBarLocations from "./enums/navigationbarlocations.js";
import ProjectsPageContainer from "./components/projects-page-container/ProjectsPageContainer";
import "./App.css";
import "./enums/navigationbarlocations.js";

function App() {
    const [page, setPage] = useState(NavigationBarLocations.ABOUT);

    /* Determine which page component should be rendered. */
    let PageComponent;
    switch (page) {
        case NavigationBarLocations.ABOUT:
            PageComponent = HomePageContainer;
            break;
        case NavigationBarLocations.EDUCATION:
            PageComponent = EducationPageContainer;
            break;
        case NavigationBarLocations.EXPERIENCE:
            PageComponent = ExperiencePageContainer;
            break;
        case NavigationBarLocations.PROJECTS:
            PageComponent = ProjectsPageContainer;
            break;
        default:
            PageComponent = HomePageContainer;
    }

    /* Use memoization to store the contents of the footer that will be rendered below. */
    const footerEntries = useMemo(() => [
        { header: "Email", content: "klrdrumm@outlook.com" },
        { header: "LinkedIn", content: <a href="https://www.linkedin.com/in/kieron-drumm-788382114/">https://www.linkedin.com/in/kieron-drumm-788382114/</a> },
        { header: "GitHub", content: <a href="https://github.com/drummk2">https://github.com/drummk2</a> }
    ], []);

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