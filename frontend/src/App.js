import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>HotPrimeFlix</h1>
     <video id="videoPlayer" width="70%" controls autoplay>
            <source src="http://a1817e72fc09e4b5fa44cae96dd90f71-943234011.ap-northeast-3.elb.amazonaws.com:3002/static/video.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
