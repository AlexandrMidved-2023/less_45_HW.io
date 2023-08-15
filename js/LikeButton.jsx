const el = React.createElement;

class Button_JSX extends React.Component {
	constructor(props) {
		super(props);
		this.state = { fleg: false }
	}

	render() {
		if (this.state.fleg) {
			return (
				<img className='react__img'
					src='./assets/img/React-icon.svg.png'>
				</img>
			)
		}
		return (

			<button onClick={() => this.setState({ fleg: true })}>
				Click me
			</button>

		)
	}

}

const domContainer = document.querySelector('#block__jsx');
const root = ReactDOM.createRoot(domContainer);

root.render(el(Button_JSX));