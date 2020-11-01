import './App.css';
import Shapes from './components/shapes/shapes'
import Logos from './components/logos/logos'
import {ReactComponent as MakeLogo} from './logo.svg'
import {ReactComponent as ReactLogo} from './react-logo.svg'

function App({ headline, showLogo, backgroundImage }) {
  return (
    <div className="App" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      {showLogo && (
        <Logos logoOne={<MakeLogo />} logoTwo={<ReactLogo />} />
      )}

      <h1>{headline}</h1>

      <div className="shape-container">
        <Shapes />
      </div>
    </div>
  );
}


App.defaultProps = {
  headline: 'I am a cool World',
  showLogo: true,
  backgroundImage: '',
}

export default App;
