import { useEffect } from "react";
import { useState } from "react";

export default function TabsCustom({ tabs, children }) {
  const [tabName, setTabName] = useState(tabs[0]);
  const [tabContent, setTabContent] = useState(tabs[0]);

  useEffect(()=>{
    setTabContent(tabContent);
  },[tabContent])

  return (
    <div>
      {tabName.map((tab, index) => {
        return (
          <button 
            key={index} 
            onClick={() => setTabName(tab)}
            className={`${tabContent === tab ? "active:text-white active:bg-green-700" : ''}`}
          >
            {tab.name}
          </button>
        );
      })}
      {children}
    </div>
  );
}
