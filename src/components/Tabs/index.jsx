import { useState } from "react";

export default function TabsCustom({ tabs }) {
  const [tabName, setTabName] = useState(tabs[0]);
  const [type, setType] = useState();
  return (
    <div>
      {tabs.map((tab, index) => {
        return (
          <button 
            key={index} 
            onClick={() => setType(tab)}
            className={`${type === tab ? "active" : ''}`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
