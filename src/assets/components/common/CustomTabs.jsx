import React from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const CustomTabs = ({ elements, fontSize }) => (
  <Tabs
    justify
    className={`mb-3 fw-bold fs-${fontSize}`}
    defaultActiveKey={elements[0].title}
  >
    {elements.map(({ title, content }) => (
      <Tab
        key={title}
        className="px-3 fw-bold fs-3 text-start"
        eventKey={title}
        title={title}
      >
        {content}
      </Tab>
    ))}
  </Tabs>
);

export default CustomTabs;
