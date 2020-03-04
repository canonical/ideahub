import React from "react";

import "./_loading.scss";

export default function Loading() {
  return (
    <div class="loading">
      <i class="p-icon--spinner u-animation--spin is-light"></i>
    </div>
  );
}
