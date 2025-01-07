import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex space-x-4 border-b">
        {children.map((child, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 ${
              activeTab === index
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-500'
            }`}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{children[activeTab]}</div>
    </div>
  );
};

const Tab = ({ children }) => {
  return <div>{children}</div>;
};

export { Tabs, Tab };
