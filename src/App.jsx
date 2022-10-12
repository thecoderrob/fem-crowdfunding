import "./App.css";

import Navbar from "./components/Navbar";
import Reward from "./components/Reward";
import ModalBackProject from "./components/ModalBackProject";
import ModalThankYou from "./components/ModalThankYou";

import { useGlobalContext } from "./context";

function App() {
  const {
    isBookmarked,
    setIsBookmarked,
    openBackProjectModal,
    rewards,
    selectedReward,
    setSelectedReward,
  } = useGlobalContext();
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main className="flow">
        <div className="container--main-header | container grid">
          <img src="/src/assets/logo-mastercraft.svg" alt="" />

          <div className="text | flow">
            <h1 className="fs-800 title">Mastercraft Bamboo Monitor Riser</h1>
            <p>
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
          </div>

          <div className="cta-wrapper | flex">
            <button className="cta cta--primary" onClick={openBackProjectModal}>
              Back this project
            </button>
            <button
              className="cta cta--bookmark"
              data-checked={isBookmarked}
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                  <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                </g>
              </svg>
              <span>Bookmark</span>
            </button>
          </div>
        </div>

        <ModalBackProject
          rewards={rewards}
          selectedReward={selectedReward}
          setSelectedReward={setSelectedReward}
        />

        <ModalThankYou />

        <div className="container--dashboard | container flow">
          <div className="data | grid">
            <p>
              <span className="d-block fs-900 title">$89,914</span>
              of $100,000 backed
            </p>
            <p>
              <span className="d-block fs-900 title">5,007</span>
              total backers
            </p>
            <p>
              <span className="d-block fs-900 title">56</span>
              days left
            </p>
          </div>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>

        <div className="container--about | container flow">
          <h2 className="fs-700 title">About this project</h2>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>

          {rewards.map((reward) => {
            const { id } = reward;
            return <Reward key={id} {...reward} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
