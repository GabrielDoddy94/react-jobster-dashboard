import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

import Wrapper from "../assets/wrappers/LandingPage";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby jianbing neutra forage, organic tousled edison bulb JOMO
            meggings poutine sriracha four loko distillery mlkshk put a bird on
            it. Tacos kickstarter actually ethical cornhole.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
