import { useEffect, useRef } from 'react';
import './message.scss';

const Message = ({ message, msgDispatch }) => {
	const { author, content, updated, id } = message;
	const msgEl = useRef(null);
	const src = `https://message-list.appspot.com/${author.photoUrl}`;

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting && entry.intersectionRatio > 0) {
				entry.target.classList.add('tile-transition');
			}
		});
	});

	useEffect(() => {
		if (msgEl.current) observer.observe(msgEl.current);
		return () => {
			if (msgEl.current) observer.unobserve(msgEl.current);
		};
	}, []);

	const deleteMsg = (evt) => {
		evt.preventDefault();
		msgDispatch({ type: 'DELETE_MSG', id: +msgEl.current.dataset['msgId'] });
	};

	return (
		<article className="tile" ref={msgEl} data-msg-id={id}>
			<div className="photo">
				<img className="card-img-top" data-src={src} src={src} alt={author.title} />
			</div>
			<div className="info">
				<h4>{author.name}</h4>
				<span>{updated}</span>
			</div>
			<p>{content}</p>
			<button className="btn fa fa-close" onClick={deleteMsg}></button>
		</article>
	);
};
export default Message;
