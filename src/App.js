import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';

function App() {
  return (
    <div className="App">
     <Router>
       <div>
         <Route exact path="/" component={Home} />
         <Route exact path="/portfolio" component={Portfolio} />
         <Route exact path="/contact" component={Contact} />
         </div>
     </Router>
    </div>
  );
}

export default App;
