import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Coursework } from "../pages/coursework";
import { Portfolio } from "../pages/portfolio";
import { HuiWebsite } from "../pages/HuiWebsite";
import { PersonalWebsite } from "../pages/PersonalWebsite";
import { DiscreteMathModel } from "../pages/DiscreteMathModel";
import { AiArt } from "../pages/AiArt";
import { WildCard } from "../pages/WildCard";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Photography } from "../pages/photography";
import { PhotographyJapan } from "../pages/PhotographyJapan";
import { PhotographyKorea } from "../pages/PhotographyKorea";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coursework" element={<Coursework />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/huiwebsite" element={<HuiWebsite />} />
        <Route path="/portfolio/personalwebsite" element={<PersonalWebsite />} />
        <Route path="/portfolio/discretemathmodel" element={<DiscreteMathModel />} />
        <Route path="/portfolio/aiart" element={<AiArt />} />
        <Route path="/portfolio/wildcard" element={<WildCard />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/photography/japan" element={<PhotographyJapan />} />
        <Route path="/photography/korea" element={<PhotographyKorea />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;