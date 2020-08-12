/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// You can delete this file if you're not using it
import "lazysizes"

import React from 'react';
import ReactDOM from 'react-dom'
import SWUpdater from "./src/components/SWUpdater/swupdater";

require("prismjs/themes/prism-tomorrow.css")

// https://web.dev/code-splitting-suspense/?utm_source=lighthouse&utm_medium=unknown
// implementar react lazy

// Essa função avisa quando o serviceWorker atualizou.
// https://www.gatsbyjs.org/docs/browser-apis/#onServiceWorkerUpdateReady
function onServiceWorkerUpdateReady() {
    const root = document.createElement('div');
    document.body.appendChild(root);

    ReactDOM.render(<SWUpdater />, root);
}

export { onServiceWorkerUpdateReady }