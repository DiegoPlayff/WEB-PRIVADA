import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Testimonials = React.lazy(() => import("pages/Testimonials"));
const Followers = React.lazy(() => import("pages/Followers"));
const FanWall = React.lazy(() => import("pages/FanWall"));
const FacebookSignin = React.lazy(() => import("pages/FacebookSignin"));
const PasscodeLock = React.lazy(() => import("pages/PasscodeLock"));
const PerformanceTracker = React.lazy(() => import("pages/PerformanceTracker"));
const SalesReporting = React.lazy(() => import("pages/SalesReporting"));
const QuoteManagement = React.lazy(() => import("pages/QuoteManagement"));
const UsageInsights = React.lazy(() => import("pages/UsageInsights"));
const RolesPermissions = React.lazy(() => import("pages/RolesPermissions"));
const TaskBlocker = React.lazy(() => import("pages/TaskBlocker"));
const LoyaltySystem = React.lazy(() => import("pages/LoyaltySystem"));
const InventoryTrendAnalysis = React.lazy(() =>
  import("pages/InventoryTrendAnalysis")
);
const ProjectsTracking = React.lazy(() => import("pages/ProjectsTracking"));
const GraphicalCharts = React.lazy(() => import("pages/GraphicalCharts"));
const CardconnectIntegration = React.lazy(() =>
  import("pages/CardconnectIntegration")
);
const QRCode = React.lazy(() => import("pages/QRCode"));
const ExpenseTracking = React.lazy(() => import("pages/ExpenseTracking"));
const MultiplayerSupport = React.lazy(() => import("pages/MultiplayerSupport"));
const DemoAccount = React.lazy(() => import("pages/DemoAccount"));
const CollectTransactionFees = React.lazy(() =>
  import("pages/CollectTransactionFees")
);
const MultipleGestureRecogniser = React.lazy(() =>
  import("pages/MultipleGestureRecogniser")
);
const AudioMusic = React.lazy(() => import("pages/AudioMusic"));
const CustomisedOrderStatus = React.lazy(() =>
  import("pages/CustomisedOrderStatus")
);
const AutomatedEmailSending = React.lazy(() =>
  import("pages/AutomatedEmailSending")
);
const AdhocReporting = React.lazy(() => import("pages/AdhocReporting"));
const BaslineReporting = React.lazy(() => import("pages/BaslineReporting"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/baslinereporting" element={<BaslineReporting />} />
          <Route path="/adhocreporting" element={<AdhocReporting />} />
          <Route
            path="/automatedemailsending"
            element={<AutomatedEmailSending />}
          />
          <Route
            path="/customisedorderstatus"
            element={<CustomisedOrderStatus />}
          />
          <Route path="/audiomusic" element={<AudioMusic />} />
          <Route
            path="/multiplegesturerecogniser"
            element={<MultipleGestureRecogniser />}
          />
          <Route
            path="/collecttransactionfees"
            element={<CollectTransactionFees />}
          />
          <Route path="/demoaccount" element={<DemoAccount />} />
          <Route path="/multiplayersupport" element={<MultiplayerSupport />} />
          <Route path="/expensetracking" element={<ExpenseTracking />} />
          <Route path="/qrcode" element={<QRCode />} />
          <Route
            path="/cardconnectintegration"
            element={<CardconnectIntegration />}
          />
          <Route path="/graphicalcharts" element={<GraphicalCharts />} />
          <Route path="/projectstracking" element={<ProjectsTracking />} />
          <Route
            path="/inventorytrendanalysis"
            element={<InventoryTrendAnalysis />}
          />
          <Route path="/loyaltysystem" element={<LoyaltySystem />} />
          <Route path="/taskblocker" element={<TaskBlocker />} />
          <Route path="/rolespermissions" element={<RolesPermissions />} />
          <Route path="/usageinsights" element={<UsageInsights />} />
          <Route path="/quotemanagement" element={<QuoteManagement />} />
          <Route path="/salesreporting" element={<SalesReporting />} />
          <Route path="/performancetracker" element={<PerformanceTracker />} />
          <Route path="/passcodelock" element={<PasscodeLock />} />
          <Route path="/facebooksignin" element={<FacebookSignin />} />
          <Route path="/fanwall" element={<FanWall />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
