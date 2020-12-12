import React from 'react'
import './Colorizer.scss';

export default class Colorizer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			color: "",
			bgColor: "white"
		}

		this.colorValue = this.colorValue.bind(this);
		this.setNewColor = this.setNewColor.bind(this);
	}

	colorValue(e) {
		this.setState({
			color: e.target.value
		})
	}

	setNewColor(e) {
		this.setState({
			bgColor: this.state.color
		})
		e.preventDefault()
	}

	render() {
		const squareStyle = {
			backgroundColor: this.state.bgColor
		}

		return (
			<div className="colorArea">
				<div style={squareStyle} className="colorSquare"></div>

				<form onSubmit={this.setNewColor}>
					<input onChange={this.colorValue}
						placeholder="Enter a color value"
					/>
					<button type="submit">Go</button>
				</form>
			</div>
		);
	}
}