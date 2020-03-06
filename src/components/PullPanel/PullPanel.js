import React, { useState, useEffect } from "react";

import "./_pull-panel.scss";

export default function PullPanel({
  children,
  cta,
  icon,
  offScreen,
  initPanelUp = false
}) {
  const [panelUp, setpanelUp] = useState(initPanelUp);

  useEffect(() => {
    setpanelUp(initPanelUp);
  }, [initPanelUp]);

  const classNames = `pull-panel ${panelUp ? "is-active" : ""} ${
    offScreen ? "is-offscreen" : ""
  }`;
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
