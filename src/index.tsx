import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemProvider";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "app/providers/ErrorBoundary";
import { StoreProvider } from "app/providers/StoreProvider";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <StoreProvider>
          <App />
        </StoreProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
