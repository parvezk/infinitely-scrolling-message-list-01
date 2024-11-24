import './messages.scss';

import Message from './../Message';

const Messages = ({ messages, msgDispatch }) => {
	return (
		<section className="articlewrap">
			{messages.length &&
				messages.map((message, index) => {
					return (
						<Message key={index} id={index} msgDispatch={msgDispatch} message={message} />
					);
				})}
		</section>
	);
};

export default Messages;
