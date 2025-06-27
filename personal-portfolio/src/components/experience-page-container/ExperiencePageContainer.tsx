import React from "react";
import ExperienceEntry from "../experience-entry/ExperienceEntry";
import "./experience-page-container.css";

interface ExperienceDataEntry {
    experienceEntryCompanyName: string;
    experienceEntryPosition: string;
    experienceEntryTimeframe: string;
    experienceEntryDescription: React.ReactNode;
}

const ExperiencePageContainer: React.FC = () => {
    /* Create a collection of qualifications to be rendered. */
    const experienceData: Array<ExperienceDataEntry> = [
        {
            experienceEntryCompanyName: "New Payment Innovation Limited",
            experienceEntryPosition: "Senior Full-Stack Developer",
            experienceEntryTimeframe: "May 2025 - Present",
            experienceEntryDescription: (
                <>
                • Collaborated on developing a Next.js and React-based internal dashboard to visualize key product development and testing metrics.
                The tool also supported organization-wide user configuration and integrated with Jira and GitHub for enhanced workflow visibility.
                </>)
        },
        {
            experienceEntryCompanyName: "Generait",
            experienceEntryPosition: "Head of Engineering",
            experienceEntryTimeframe: "Mar 2025 - May 2025",
            experienceEntryDescription: (
                <>
                    • Carried out all previous duties associated with the Full-Stack Software Engineer role.
                    <br /><br />
                    • Led technology evaluations and architectural decisions, and collaborated on the development of a long-term technical roadmap.
                    <br /><br />
                    • Oversaw the creation and maintenance of a quality management system and established best practices for engineering
                    processes, including Agile methodologies, code quality standards, and security protocols.
                    <br /><br />
                    • Oversaw risk management and disaster recovery planning, ensuring business continuity and data security.
                </>
            )
        },
        {
            experienceEntryCompanyName: "Generait/Insight Research Ireland Centre for Data Analytics",
            experienceEntryPosition: "Full-Stack Software Engineer/Analyst Programmer",
            experienceEntryTimeframe: "Aug 2023 - Mar 2025",
            experienceEntryDescription: (
                <>
                    • Acted as the software lead on an exciting project that focused on the development of an AI-powered system for analysing and/or generating legal documents.
                    <br /><br />
                    • Performed the duties of a project manager with regards to the creation and continuous management of a Jira organisation and project, and ensured that all
                    related documentation was regularly maintained using Confluence.
                    <br /><br />
                    • Was responsible for the creation, and maintenance, of the Azure organisation in use for this project. This included the creation of all file stores, app services,
                    virtual machines, cloud DBs, and API management instances, as well as the continuous supervision of said resources, after the fact.
                    <br /><br />
                    • Implemented CI/CD and automated testing from scratch with the use of Azure DevOps and GitHub.
                    <br /><br />
                    • Designed and implemented a number of web APIs in both .NET and Flask to manage the transfer, retrieval, and storage of data from Azure, as well the processing
                    and generation of documents with the use of LLMs and generative AI.
                    <br /><br />
                    • Designed and implemented a Microsoft Office 365 add-in using Node.js, vanilla JS, HTML, and CSS to allow users to interact with
                    the aforementioned document generation system.
                </>
            )
        },
        {
            experienceEntryCompanyName: "Irish Life",
            experienceEntryPosition: "IT Engineer",
            experienceEntryTimeframe: "Apr 2021 - Aug 2023",
            experienceEntryDescription: (
                <>
                    • Carried out all previous duties associated with the IT Technician role.
                    <br /><br />
                    • Designed and implemented an ASP.NET application that utilised Kendo UI, as well as an accompanying collection of Web API 2 services
                    to replace an existing WinForms VB.NET legacy application.
                </>
            )
        },
        {
            experienceEntryCompanyName: "Irish Life",
            experienceEntryPosition: "IT Technician",
            experienceEntryTimeframe: "Oct 2019 - Apr 2021",
            experienceEntryDescription: (
                <>
                    • Carried out all previous duties associated with the IT Developer role that were given to me during my time as a fixed-term contractor.
                    <br /><br />
                    • Developed and reviewed RESTful and non-RESTful web services communicating with both Dynamics 365 and SQL Server. These services were
                    developed with ASP.NET, Web API 2, Entity Framework 6, EF Core and ASP.NET Core.
                    <br /><br />
                    • Worked closely with certain areas of the business to implement a sales process using only OOTB features from Dynamics 365
                    (Business Process Flows, Business Rules, Plugins and Custom Dashboards).
                </>
            )
        },
        {
            experienceEntryCompanyName: "Irish Life",
            experienceEntryPosition: "IT Developer",
            experienceEntryTimeframe: "Jun 2017 - Oct 2019",
            experienceEntryDescription: (
                <>
                    • Developed WCF web services and WPF applications interacting with Microsoft Dynamics CRM 2011 and 365. Said web services and applications
                    employed the use of either Castle Windsor or AutoFac when implementing IOC.
                    <br /><br />
                    • Developed C# plugins and custom Javascript and HTML web resources within Dynamics 365. As well as the development and customization
                    of Windows services and custom message brokering applications.
                    <br /><br />
                    • Participated in a large scale migration project to move an instance of CRM 2011 to Dynamics 365. This also required upgrading and modifying a
                    large suite of applications communicating directly with CRM, as well as modifications to existing CRM web resources to account for soon to be
                    deprecated features in Dynamics 365, such as dialogues.
                    <br /><br />
                    • Customized and enhanced instances of both Microsoft Dynamics CRM 2011 and Dynamics 365 using JS, JQuery, HTML, CSS and AlertJS.
                    <br /><br />
                    • C# unit testing with the use of the Visual Studio unit testing framework, Xunit and TestDriven.net.
                    <br /><br />
                    • Data manipulation in Dynamics 365 with the use of DynamicsNode and Node.js
                    <br /><br />
                    • Development of custom C# utilities for various purposes. Implemented using WPF, WCF, MVVM and IOC (Castle Windsor, AutoFac).
                    <br /><br />
                    • All services, applications and utilities were developed in .NET 4.5.2 onward and employed the use of modern C# constructs like expression-bodied
                    members, null coalescence and conditional operators, shorthand string interpolation and type pattern matching. As well as pre-existing C# functionality
                    such as generic programming and asynchronous programming.
                </>
            )
        },
        {
            experienceEntryCompanyName: "Irish Life",
            experienceEntryPosition: "IT Developer",
            experienceEntryTimeframe: "Apr 2016 - Sep 2016",
            experienceEntryDescription: (
                <>
                    • Developed and enhanced WPF applications, console applications, and WCF services interacting with
                    an instance of Microsoft Dynamics CRM 2011.
                    <br /><br />
                    • Customized and enhanced an existing instance of Microsoft Dynamics CRM 2011.
                    <br /><br />
                    • Refactored C# with the use of Microsoft FxCop and StyleCop.
                    <br /><br />
                    • Carried out C# unit testing and automated deployment, using TestDriven.net, Xunit and TeamCity.
                </>
            )
        },
        {
            experienceEntryCompanyName: "Dublin City University",
            experienceEntryPosition: "Lab Tutor",
            experienceEntryTimeframe: "Sep 2014 - April 2015",
            experienceEntryDescription: (
                <>
                    • Aided and taught a group of 10-12 first-year students per semester during the second year of my degree. The exercises given
                    to these first-year students covered the basic concepts of programming in Java. Said exercises were graded each week by myself
                    along with additional weekly coding assignments.
                </>
            )
        }
    ];

    /* Render all of the above experiences. */
    return (
        <div className="experience-page-container">
            <div className="experience-page-subcontainer">
                <h1 className="experience-page-main-header">Experience</h1>
                {experienceData.map((entry, index) => (
                    <>
                        <ExperienceEntry
                            experienceEntryId={index}
                            experienceEntryCompanyName={entry.experienceEntryCompanyName}
                            experienceEntryPosition={entry.experienceEntryPosition}
                            experienceEntryTimeframe={entry.experienceEntryTimeframe}
                            experienceEntryDescription={entry.experienceEntryDescription}
                        />
                        {index < experienceData.length - 1 && <div className="divider-line"></div>}
                    </>
                ))}
            </div>
        </div>
    );
};

export default ExperiencePageContainer;