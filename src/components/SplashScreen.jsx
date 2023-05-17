import '../styles/splashscreen.css';
import { ReactComponent as GithubIcon } from '../assets/icons/github-icon.svg';
import { ReactComponent as TwitterIcon } from '../assets/icons/twitter-icon.svg';
import Footer from './Footer';
import SignIn from './authentication/SignIn';

const SplashScreen = ({ onChildClick }) => {
  const handleInputChange = () => {
    onChildClick(false);
  };

  return (
    <div
      id="splashscreen"
      className="splashscreen"
      style={{
        backgroundImage: `url(/splash-screen.gif)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1>Splash Screen</h1>
      <h2>Logo</h2>
      <h2>Project Name</h2>
      <SignIn />
      <p>Enter / begin / insert coin image (flickering)</p>
      <button
        style={{ width: '200px' }}
        type="button"
        onClick={handleInputChange}
      >
        Temp Button
      </button>
      <div className="splashscreen__credits">
        <p className="splashscreen__credits-created">CREATED BY:</p>

        <div className="splashscreen__credits-container">
          <a
            href="https://www.linkedin.com/in/anthonymmoran/"
            target={'_blank'}
            className="splashscreen__credits--clean-text splashscreen__credits-tony"
            rel="noreferrer"
          >
            Anthony Moran
          </a>
          <div className="splashscreen__credits-icons">
            <a
              href="https://github.com/tonymm55"
              target={'_blank'}
              rel="noreferrer"
            >
              <GithubIcon color={'white'} width={'30px'} height={'30px'} />
            </a>
            <a
              target={'_blank'}
              href="https://twitter.com/TonyMCodes"
              rel="noreferrer"
            >
              <TwitterIcon color={'white'} width={'30px'} height={'30px'} />
            </a>
          </div>
        </div>

        <div className="splashscreen__credits-container">
          <a
            href="https://www.linkedin.com/in/matthew-giles-83695646/"
            target={'_blank'}
            className="splashscreen__credits-matt splashscreen__credits--clean-text "
            rel="noreferrer"
          >
            Matthew Giles
          </a>
          <div className="splashscreen__credits-icons">
            <a
              href="https://github.com/tsv-stacks"
              target={'_blank'}
              rel="noreferrer"
            >
              <GithubIcon color={'white'} width={'30px'} height={'30px'} />
            </a>
            <a
              target={'_blank'}
              href="https://twitter.com/Matty92G"
              rel="noreferrer"
            >
              <TwitterIcon color={'white'} width={'30px'} height={'30px'} />
            </a>
          </div>
        </div>

        <div className="splashscreen__credits-container">
          <a
            href="https://www.linkedin.com/in/tarndeep-virdi/"
            target={'_blank'}
            className="splashscreen__credits-tarndeep splashscreen__credits--clean-text "
            rel="noreferrer"
          >
            Tarndeep Virdi
          </a>
          <div className="splashscreen__credits-icons">
            <a
              href="https://github.com/tsv-stacks"
              target={'_blank'}
              rel="noreferrer"
            >
              <GithubIcon color={'white'} width={'30px'} height={'30px'} />
            </a>
            <a
              target={'_blank'}
              href="https://twitter.com/tsv_stacks"
              rel="noreferrer"
            >
              <TwitterIcon color={'white'} width={'30px'} height={'30px'} />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SplashScreen;
