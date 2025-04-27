import "./education-entry.css";

const EducationPageContainer = ({
    educationEntryLocation,
    educationEntryQualification,
    educationEntryTimeframe,
    educationEntryDescription }) => {
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