// React, ReactDOM

// @ts-ignore
const { createRoot } = ReactDOM;

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = createRoot(rootElement);

root.render(<h1>hi</h1>);