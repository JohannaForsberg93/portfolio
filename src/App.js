import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
	return (
		<div className="App">
			{/* <h1>Hello World</h1> */}

			<Home></Home>
			<About></About>
			<Projects></Projects>


		</div>
	);
}

export default App;