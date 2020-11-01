import PropTypes from "prop-types";
import './App.css';
import Shapes from './components/shapes/shapes'
import Logos from './components/logos/logos'
import {ReactComponent as MakeLogo} from './logo.svg'
import {ReactComponent as ReactLogo} from './react-logo.svg'

function App({ headline, showLogo, backgroundImage }) {

  const headlineCheck = JSON.parse(headline);

  return (
    <div className="App" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      {showLogo && (
        <Logos logoOne={<MakeLogo />} logoTwo={<ReactLogo />} />
      )}

      {headlineCheck ? <h1>{headline}</h1> : <h1>"I am Steveee's world"</h1>}
      <h1>{headline}</h1>

      <div className="shape-container">
        <Shapes />
      </div>
    </div>
  );
}

App.propTypes = {
  headline: PropTypes.string,
  showLogo: PropTypes.bool,
  backgroundImage: PropTypes.string,
}

export default App;
