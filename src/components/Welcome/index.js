import { StyledWelcome, StyledLink, Title } from './style';

const Welcome = () => {
    return (
		<StyledWelcome>
			<Title>Welcome!</Title>
			<StyledLink to="/">← Back to the Form</StyledLink>
		</StyledWelcome>
	);
}

export default Welcome;
