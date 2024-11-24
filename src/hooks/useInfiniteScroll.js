import { useEffect, useCallback } from 'react';

export const useInfiniteScroll = (scrollRef, dispatch) => {
	const scrollObserver = useCallback(
		(el) =>
			new IntersectionObserver(([entry]) => {
				if (entry.intersectionRatio > 0) {
					dispatch({ type: 'ADVANCED_PAGE' });
				}
			}).observe(el),
		[dispatch]
	);

	useEffect(() => {
		if (scrollRef.current) scrollObserver(scrollRef.current);
		return () => {
			// if (scrollRef.current) scrollObserver.unobserve(scrollRef.current);
		};
	}, [scrollObserver, scrollRef]);
};
