import React from "react";
import EducationEntry from "../education-entry/EducationEntry";
import "./education-page-container.css";

interface EducationDataEntry {
    educationEntryLocation: string;
    educationEntryQualification: string;
    educationEntryTimeframe: string;
    educationEntryDescription: React.ReactNode;
}

const EducationPageContainer: React.FC = () => {
    /* Create a collection of qualifications to be rendered. */
    const educationData: Array<EducationDataEntry> = [
        {
            educationEntryLocation: "Dublin City University",
            educationEntryQualification: "Master's Degree (Honours), Artificial Intelligence",
            educationEntryTimeframe: "Sep 2022 - Aug 2023",
            educationEntryDescription: (
                <>
                    • As an artificial intelligence major, I have studied a number of concepts related to both data analytics and artificial intelligence,
                    including: data gathering, cleaning, manipulation and visualisation, machine learning, natural language processing, and chatbot development.
                    <br /><br />
                    • I have also received education in formal research practices, including the steps involved in gathering and vetting research materials,
                    performing literature reviews, and writing conference-style papers in accordance with accepted formats, such as the IEEE standard.
                    <br /><br />
                    • During my time as a postgraduate, I completed a practicum and research paper on "Examining the Effectiveness of Chatbots in Gathering
                    Family History Information in Comparison to the Standard In-Person Interview Approach". This involved the development of a chatbot that
                    aimed to take the place of a genealogist by being able to interview an elderly interviewee about their family history.
                </>
            )
        },
        {
            educationEntryLocation: "Dublin City University",
            educationEntryQualification: "Bachelor's Degree (Honours), Computer Applications",
            educationEntryTimeframe: "Aug 2013 - Jun 2017",
            educationEntryDescription: (
                <>
                    • As a student of computer applications I have studied the basic concepts of computer science in depth, including networking, hardware,
                    problem solving, design, operating systems and logic. I have also gained work experience by completing a 6-month work placement.
                    <br /><br />
                    • I have also studied some advanced computing concepts including cryptology, data mining, concurrency, image processing, compiler
                    construction and natural language processing (statistical and neural).
                    <br /><br />
                    • As a result of my final year project, I have a strong knowledge of automated transliteration, and statistical language modelling.
                </>
            )
        }
    ];

    /* Render all of the above qualifications. */
    return (
        <div className="education-page-container">
            <div className="education-page-subcontainer">
                <h1 className="education-page-main-header">Education</h1>
                {educationData.map((entry, index) => (
                    <>
                        <EducationEntry
                            educationEntryId={index}
                            educationEntryLocation={entry.educationEntryLocation}
                            educationEntryQualification={entry.educationEntryQualification}
                            educationEntryTimeframe={entry.educationEntryTimeframe}
                            educationEntryDescription={entry.educationEntryDescription}
                        />
                        {index < educationData.length - 1 && <div className="divider-line"></div>}
                    </>
                ))}
            </div>
        </div>
    );
};

export default EducationPageContainer;