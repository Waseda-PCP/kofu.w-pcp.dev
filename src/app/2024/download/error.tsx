"use client";

import { useEffect } from "react";

export default function Error() {

	useEffect(() => {

		if (location.search == "?error") {

			scrollTo(0, window.outerHeight);

		} else {

			document.querySelector("#error")?.remove();

		}

	});

	return <div id="error" className="error">キーワードが違います。</div>;

}