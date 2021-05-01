import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Example = () => {
	return (
		<div style={{ margin: 10 }}>
			<h3>Different Form Examples</h3>
			<ListGroup>
				<ListGroupItem>
					<Link to='/login'>Login</Link>
				</ListGroupItem>
				<ListGroupItem>
					<Link to='/register'>Register</Link>
				</ListGroupItem>
				<ListGroupItem>
					<Link to='/profile'>Profile</Link>
				</ListGroupItem>
				<ListGroupItem>
					<Link to='/dstv'>DSTV</Link>
				</ListGroupItem>
			</ListGroup>
		</div>
	);
};

export default Example;
