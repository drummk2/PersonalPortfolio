import React from "react";
import "./education-entry.css";

interface EducationPageContainerProps {
    educationEntryLocation: string;
    educationEntryQualification: string;
    educationEntryTimeframe: string;
    educationEntryDescription: React.ReactNode;
}

const EducationPageContainer: React.FC<EducationPageContainerProps> = ({
    educationEntryLocation,
    educationEntryQualification,
    educationEntryTimeframe,
    educationEntryDescription
}) => {
    return (
        <div className="education-entry">
            <p className="education-entry-location">{educationEntryLocation}</p>
            <p className="education-entry-qualification">{educationEntryQualification}</p>
            <p className="education-entry-timeframe">{educationEntryTimeframe}</p>
            <p className="education-entry-description">{educationEntryDescription}</p>
        </div>
    );
};

export default EducationPageContainer;