import React from "react";
import "./education-entry.css";

interface EducationPageContainerProps {
    educationEntryId: number,
    educationEntryLocation: string;
    educationEntryQualification: string;
    educationEntryTimeframe: string;
    educationEntryDescription: React.ReactNode;
}

const EducationPageContainer: React.FC<EducationPageContainerProps> = ({
    educationEntryId,
    educationEntryLocation,
    educationEntryQualification,
    educationEntryTimeframe,
    educationEntryDescription
}) => {
    return (
        <div className={`education-entry ${educationEntryId === 0 ? 'first-education-entry' : ''}`}>
            <p className="education-entry-location">{educationEntryLocation}</p>
            <p className="education-entry-qualification">{educationEntryQualification}</p>
            <p className="education-entry-timeframe">{educationEntryTimeframe}</p>
            <p className="education-entry-description">{educationEntryDescription}</p>
        </div>
    );
};

export default EducationPageContainer;