import React from 'react'
import ReactDOM from 'react-dom'

const heading = document.querySelector('#colorHeading')

class ColorLabel extends React.Component {
	render() {
		heading.style.color = this.props.color;
		heading.style.textShadow = "1px 1px 2px #000000";

		return ReactDOM.createPortal(
			": " + this.props.color,
			heading
		)
	}
}

export default ColorLabel