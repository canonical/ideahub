import React, { useState } from "react";

import "./_pull-panel.scss";

export default function PullPanel({ children, cta, icon }) {
  const [panelUp, setpanelUp] = useState(false);

  const classNames = `pull-panel ${panelUp ? "is-active" : ""}`;
  const iconRef = `p-icon--${icon}`;

  return (
    <div className={classNames}>
      <header
        className="pull-panel__header"
        onClick={() => setpanelUp(!panelUp)}
      >
        <span className="pull-panel__cta">{cta}</span>
        <i className={iconRef}></i>
      </header>
      {children}
    </div>
  );
}
