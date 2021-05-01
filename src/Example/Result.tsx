import * as react from 'react';

interface Props {
	data: {
		[key: string]: any;
	};
}

const Result: react.FC<Props> = ({ data }) => {
	return (
		<div style={{ margin: 10, textAlign: 'center' }}>
			<h4>Result</h4>
			{Object.keys(data).map((key, index) => (
				<p key={index}>
					{key}: {data[key]}
				</p>
			))}
		</div>
	);
};

export default Result;
