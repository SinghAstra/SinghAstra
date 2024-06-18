import React from "react";

const SectionTitle = ({ title, linkText, linkHref }) => (
  <div className="right-sidebar-title">
    <h4>{title}</h4>
    <a href={linkHref}>{linkText}</a>
  </div>
);

export default SectionTitle;
