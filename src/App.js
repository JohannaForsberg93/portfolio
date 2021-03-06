import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
	return (
		<div className="App">
			<Home></Home>
			<About></About>
			<Skills></Skills>
			<Projects></Projects>
		</div>
	);
}

export default App;
