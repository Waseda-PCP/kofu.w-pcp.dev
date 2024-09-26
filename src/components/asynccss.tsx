"use client";

import { useEffect } from "react";

export default function AsyncCSS({ href }: { href: string }) {

	useEffect(() => {

		document.querySelectorAll(`link[rel=preload][href="${href}"]`).forEach((link) => {

			const target = link as HTMLLinkElement;

			target.rel = "stylesheet";

		});

	});

	return (
		<link rel="preload" href={href} as="style" />
	)

}
