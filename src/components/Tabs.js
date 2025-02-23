// filepath: /d:/Intellij Workspace/orchestration-ui/src/components/Tabs.js
import { useState } from 'react';
import './Tabs.css'; // Import the CSS file

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].label);

    const handleTabClick = (label) => {
        setActiveTab(label);
    };

    return (
        <div className="tabs">
            <div className="tab-buttons">
                {tabs.map((tab) => (
                    <button
                        key={tab.label}
                        className={`tab-button ${activeTab === tab.label ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab.label)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabs.map((tab) => (
                    <div
                        key={tab.label}
                        className={`tab-panel ${activeTab === tab.label ? 'active' : ''}`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;