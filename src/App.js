import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

const Index = (props) => (
  <div className="container-fluid">
    <h1 className="def-f t-4 m-5 text-center" >{ 'Punpikorn Rattanawirojkul (PUN)' }</h1>
    <div className="row">
      <div className="col-sm-12 text-center">
          <Link to="/projectxi/">
            <Button outline color="primary" size="lg">
              <p className="def-f t-2 m-5 text-center">
                { 'Project XI Preview' }
              </p>
            </Button>
          </Link>
      </div>
    </div>
  </div>
);

const ProjectXI = (props) => (
  <div className="container-fluid">
    <div className="row mt-5">
      <div className="col-sm-12">
        <h1 className="def-f t-4 text-center" >{ 'Project XI: Virtual Space Tour Preview' }</h1>
      </div>
    </div>
    <div className="row mt-5 mb-2">
      <div className="col-sm-12">
        <p className="def-f t-2 text-center" >{ 'Gaze at the button for 3 seconds to navigate, or you could click at it when the reticle enters the button' }</p>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-offset-1 col-sm-10 col-sm-offset-1">
        <iframe
          title="projectxi-360"
          src="/projectxi-360/index.html"
          style={{
            width: '100%',
            height: props.width * (0.40)
          }} />
      </div>
    </div>
    <div className="row mt-5">
      <div className="note col-sm-offset-1 col-sm-10 col-sm-offset-1">
        <p className="def-f font-weight-bold t-3">{ 'Note for Google Cardboard users: ' }</p>
        <p className="def-f t-2">{ 'Please access this website using Google Chrome and also enable the '}
          <code>WebVR</code>{ ' flag by navigating to ' }<code>{ 'chrome://flags' }</code></p>
        <p className="def-f t-2">{ 'Or please have a look at the first section of this ' }
          <a target="_blank" rel="noopener noreferrer" href="https://hackernoon.com/how-i-got-a-react-vr-dev-environment-working-with-an-android-cardboard-1fcaf00faebc">
            Guide
          </a>{ ' for more detail.'}
        </p>
      </div>
      <div className="acknowledgement col-sm-offset-1 col-sm-10 col-sm-offset-1">
        <p className="def-f font-weight-bold t-3">Acknowledgement</p>
        <p className="def-f t-2">
          { 'The tools and technologies used to develop this preview is quite new to me. This mini-project would not be able to complete in just a short-time (around 2 weeks) without the suggestions from the following people,' }
        </p>
        <ul className="def-f t-2">
          <li>{ 'Promboon J. (Golf): Thank you for providing a quick summary of Redux and a wonderful idea of the software design behind this project.' }</li>
          <li>{ 'Chinnaporn S. (Chin): Thank you for a general suggestions of React and the way to deploy this project, including your encouragement as well.' }</li>
          <li>{ 'Kittipat P. (Maxmi): Thank you for helping me made a decision on the tools behind this project, reminding me a good time when we developed the Project XI 2 years ago!' }</li>
        </ul>
      </div>
    </div>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
  }

  componentWillMount(){
    this.setState({width: window.innerWidth});
  }

  // Keep the router away first ...
  // <Router>
  //   <div>
  //     <Route path="/" exact component={Index}></Route>
  //     <Route path="/projectxi/"
  //       render={() => (
  //
  //       )}/>
  //   </div>
  // </Router>

  render() {
    return (
      <div>
        <ProjectXI width={this.state.width} />
      </div>
    );
  }
}

export default App;
