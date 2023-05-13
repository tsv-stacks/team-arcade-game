import { ReactComponent as Html } from "../assets/icons/html-icon.svg";
import { ReactComponent as CSSIcon } from "../assets/icons/css-icon.svg";
import { ReactComponent as VJSIcon } from "../assets/icons/vanillaJS-icon.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/react-icon.svg";

const Gamepage = ({ props }) => {
  // remove line below when mapping through in parent
  const gameInfo = props[0];
  console.log(gameInfo);
  return (
    <div className="gamepage">
      <h2>{gameInfo.title}</h2>
      <p>Highscores</p>
      <p>{gameInfo.description}</p>
      <p>image background</p>
      <p>Built with: [icons]</p>
      <Html />
      <CSSIcon />
      <VJSIcon />
      <ReactIcon />
      <button type="button">Start Game</button>
    </div>
  );
};

export default Gamepage;
