import { createRoot } from "react-dom/client";
import { AppearanceProvider } from "@twa-dev/mark42";
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<AppearanceProvider><App/></AppearanceProvider>);
