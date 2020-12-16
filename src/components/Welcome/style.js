import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
	font-size: 4rem;
`;

export const StyledWelcome = styled.div`
	text-align: center;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	font-size: 2rem;
    color: #1212dd;
    
    &:hover {
        text-decoration: underline;
    }
`;