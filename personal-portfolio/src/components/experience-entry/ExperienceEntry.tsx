import React from "react";
import "./experience-entry.css";

interface ExperienceEntryProps {
    experienceEntryId: number,
    experienceEntryCompanyName: string;
    experienceEntryPosition: string;
    experienceEntryTimeframe: string;
    experienceEntryDescription: React.ReactNode;
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
    experienceEntryId,
    experienceEntryCompanyName,
    experienceEntryPosition,
    experienceEntryTimeframe,
    experienceEntryDescription
}) => {
    return (
        <div className={`experience-entry ${experienceEntryId === 0 ? 'first-experience-entry' : ''}`}>
            <p className="experience-entry-company-name">{experienceEntryCompanyName}</p>
            <p className="experience-entry-position">{experienceEntryPosition}</p>
            <p className="experience-entry-timeframe">{experienceEntryTimeframe}</p>
            <p className="experience-entry-description">{experienceEntryDescription}</p>
        </div>
    );
};

export default ExperienceEntry;