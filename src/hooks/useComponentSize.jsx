import { useLayoutEffect, useState } from "react";

function getSize(el) {
	if (!el) {
		return {};
	}

	return {
		width: el.offsetWidth,
		height: el.offsetHeight,
	};
}

export function useComponentSize(ref) {
	let [ComponentSize, setComponentSize] = useState(getSize(ref.current));

	function handleResize() {
		if (ref && ref.current) {
			setComponentSize(getSize(ref.current));
		}
	}

	useLayoutEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return ComponentSize;
}
