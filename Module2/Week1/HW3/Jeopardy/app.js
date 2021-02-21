class App extends React.Component {
	state = {
		score: 0,
		category: '',
		points: null,
		prompt: '',
		answer: '',
		isRevealed: false
	}

// Retrieves and displays question category and clue onscreen.
	getClue = () => {
		const url = 'http://jservice.io/api/random'
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				const clueData = json[0];
				console.log(clueData);
				if (clueData.invalid_count>0){
					this.getClue();
				} else {
				this.setState({
					category: clueData.category.title,
					points: Number(clueData.value),
					prompt: clueData.question,
					answer: clueData.answer,
					isRevealed: false
				});
				}
			})
	}

// Displays answer at bottom of screen.
	revealAnswer = () => {
		this.setState({
			isRevealed: true
		});
	}

	changeScore = (amt) => {
		this.setState({
			score: this.state.score + amt
		});
	}

// Renders all starting screen content (title, score panel, etc).
	render() {
		return (
			<div className='app'>
				<h1 className='title'> Welcome to Jeopardy!</h1>

				<LabeledData title="Score" value={this.state.score}/>

				<div >
					<button id="decrease" onClick={() => this.changeScore(-this.state.points)}>Decrease</button>
					<button id="increase" onClick={() => this.changeScore(this.state.points)}>Increase</button>
					<button id="reset" onClick={() => this.changeScore(-this.state.score)}>Reset</button>
				</div>

				<h2 id="lets-play"> Let's Play! </h2>
				<button id="get-clue" onClick={this.getClue}> Get Clue </button>

				<LabeledData title="Category" value={this.state.category}/>
				<LabeledData title="Points" value={this.state.points}/>
				<LabeledData title="Clue" value={this.state.prompt}/>

				<button id="answer" onClick={this.revealAnswer}> Click to Reveal Answer </button>
				{this.state.isRevealed? <LabeledData title="Answer" value={this.state.answer}/>: null}
			</div>
			)
	}
}

class LabeledData extends React.Component {
	render() {
		return (
			<h2 className="label">{this.props.title}:
				<span className="value"> {this.props.value}</span>
			</h2>
			)
	}
}


ReactDOM.render(<App/>,document.getElementById('main'));
