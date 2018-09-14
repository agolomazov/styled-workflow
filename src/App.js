import React, { Component } from 'react';
import Button from './components/common/Button';
import { ThemeProvider } from 'styled-components';
import { Button as BButton } from 'reactstrap';
import LightTheme from './theme/light';
import DarkTheme from './theme/dark';
import PasswordInput from './components/common/PasswordInput';
import PrimaryButton from './components/common/PrimaryButton';
import Spinner from './components/common/spinner';

const LoginWithFacebookButton = Button.extend`
	background: blue;
	border-color: blue;
	color: white;

	&:hover {
		background: skyblue;
		color: black;
		border-color: skyblue;
	}
`;

class App extends Component {
	state = {
		theme: LightTheme,
		showPassword: false,
	};

	toggleTheme = () => {
		this.setState({
			theme: this.state.theme === LightTheme ? DarkTheme : LightTheme,
		});
	};

	handleTogglePassword = () => {
		this.setState({
			showPassword: !this.state.showPassword,
		});
	};

	render() {
		return (
			<ThemeProvider theme={this.state.theme}>
				<div className="App">
					<p className="App-intro">
						To get started, edit <code>src/App.js</code> and save to reload.
					</p>
					<Button primary onClick={this.toggleTheme}>
						Toggle Theme
					</Button>
					<Button>Default button</Button>
					<p>
						<PasswordInput showPassword={this.state.showPassword} />
						<Button onClick={this.handleTogglePassword}>{this.state.showPassword ? 'Hide' : 'Show'}</Button>
					</p>
					<p>
						<BButton color="primary">Bootstrap button</BButton>
					</p>
					<p>
						<PrimaryButton>Primary Button</PrimaryButton>
					</p>
					<p>
						<LoginWithFacebookButton>Login with Facebook</LoginWithFacebookButton>
					</p>
					<Spinner />
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
