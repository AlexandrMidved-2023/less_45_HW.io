const el = React.createElement;

class Button_JS extends React.Component {

	constructor(props) {
		super(props);
		this.state = { fleg: false }

	}

	render() {
		if (this.state.fleg) {
			return el(
				'img',
				{
					className: 'react__img',
					src: './assets/img/React-icon.svg.png',
					alt: 'image'
				}
			)
		}
		return el(
			'button',
			{ onClick: () => this.setState({ fleg: true }) },
			'Click me'
		)
	}

}
const domContainer = document.querySelector('#block__js');
const root = ReactDOM.createRoot(domContainer);

root.render(el(Button_JS));




