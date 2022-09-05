import { useState } from "react";

export default function TabsCustom({ tabs, children }) {
  const [tabName, setTabName] = useState(0);
  const [type, setType] = useState();
  return (
    <div>
      {tabs.map((tab, index) => {
        return (
          <button key={index} onClick={() => setType(tab)}>
            {tab}
          </button>
        );
      })}
    </div>
  );
}
