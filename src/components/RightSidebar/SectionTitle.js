import React from "react";

const SectionTitle = ({ title, linkText, linkHref, onClose }) => (
  <div className="right-sidebar-title">
    <h4>{title}</h4>
    <a href={linkHref} onClick={onClose}>
      {linkText}
    </a>
  </div>
);

export default SectionTitle;
