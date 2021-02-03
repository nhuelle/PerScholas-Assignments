// Declaring already-added grocery items as an array.
const groceries = [bread, eggs, milk, squick]

class App extends React.Component {
	state = {
		groceries: groceries,
			inputs: {
				itemInput: '',
				brandInput: '',
				unitsInput: '',
				quantityInput: ''
			}
	}

	handleTyping = (event) => {
		console.log(event.target.name)
		console.log(event.target.value)

		const newInputs = this.state.inputs;
		newInputs[`${event.target.name}Input`] = event.target.value
		this.setState({
			inputs: newInputs
		});

		console.log(this.state)
	}

// Component for adding grocery items.
	handleAdd = (event) => {
		const amt = this.state.inputs.quantityInput || 1;
		const units = this.state.inputs.unitsInput || "N/A";
		const item = {
			item: this.state.inputs.itemInput,
			brand: this.state.inputs.brandInput,
			units: units,
			quantity: amt,
			isPurchased: false
		}

		this.setState({
			groceries: [...this.state.groceries, item],
			inputs: {
				itemInput: '',
				brandInput: '',
				unitsInput: '',
				quantityInput: ''
			}
		});

	}

// Component for marking items purchased and removing them from list.
	markPurchased = (event, itemName) => {
		console.log(itemName)
		const changeIndex = this.state.groceries.findIndex((element) => element.item === itemName);
		let newGroceries = this.state.groceries;
		newGroceries[changeIndex].isPurchased = true;
		this.setState({
			groceries: newGroceries
		});
	}

	render() {
		return(
			<div >
				<ItemAdder typing={this.handleTyping} adder={this.handleAdd} inputs={this.state.inputs}/>

				<ul className="grocery-list">
					{this.state.groceries.map((grocery) => !grocery.isPurchased ? <GroceryItem name={grocery.item} markPurchased={this.markPurchased}/> : null )}
				</ul>
			</div>
			)
	}
}

class ItemAdder extends React.Component {
	render() {
		return (
			<div className="add-item-wrapper">
				<label htmlFor="item">Item Name:</label>
				<input type="text" name="item" onChange={this.props.typing} value={this.props.inputs.itemInput}/>

				<label htmlFor="brand">Brand:</label>
				<input type="text" name="brand" onChange={this.props.typing} value={this.props.inputs.brandInput}/>

				<label htmlFor="units">Unit</label>
				<input type="text" name="units" onChange={this.props.typing} value={this.props.inputs.unitsInput}/>

				<label htmlFor="quantity">Quantity</label>
				<input type="text" name="quantity" onChange={this.props.typing} value={this.props.inputs.quantityInput}/>

				<button className="add-button" onClick={this.props.adder}> Add to List </button>
			</div>
			)
	}
}

class GroceryItem extends React.Component {

	handlePurchase = (event) => {
		this.props.markPurchased(event, this.props.name);

	}

	render() {
		return (
			<li className="grocery-item">
				{this.props.name}
				<button className="purchased-button" onClick={this.handlePurchase}> Purchased </button>
			</li>
			)
	}
}

ReactDOM.render(<App/>, document.getElementById('main'));
