import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { AboutPage } from "./pages/AboutPage";
import { ApproachPage } from "./pages/ApproachPage";
import { EventsPage } from "./pages/EventsPage";
import { GetInvolvedPage } from "./pages/GetInvolvedPage";
import { HomePage } from "./pages/HomePage";
import { ResourcePage } from "./pages/ResourcePage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { ThemePage } from "./pages/ThemePage";
import { WorkPage } from "./pages/WorkPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/how-we-work/:approachId" element={<ApproachPage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="work/:themeId" element={<ThemePage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="resources/:resourceId" element={<ResourcePage />} />
          <Route path="insights" element={<Navigate to="/resources" replace />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="get-involved" element={<GetInvolvedPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
