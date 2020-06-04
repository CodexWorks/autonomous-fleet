import React, { useState }  from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import modules from './modules';

function App() {
    const [currentTab, setCurrentTab] = useState('dashboard');
    return (
       <Router>
        <div className="App">
          <header className="App-header">
            <ul className="App-nav">
              {modules.map(module => ( // with a name, and routes
                  <li key={module.name} className={currentTab === module.name ? 'active' : ''}>
                    <Link to={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>{module.name}</Link>
                  </li>
              ))}
            </ul>
          </header>
          <div className="App-content">
            {modules.map(module => (
              <Route {...module.routeProps} key={module.name} />
            ))}
          </div>
        </div>
      </Router>
    );

}

export default App;
