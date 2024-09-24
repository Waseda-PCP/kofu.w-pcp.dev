"use client";

import { useEffect } from "react";

export default function JumpLink({ href, children }: { href: string, children: React.ReactNode }) {

	function onClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {

		const url = new URL(href, "https://kofu.w-pcp.dev");

		const nowUrl = new URL(location.href);

		if (url.pathname != nowUrl.pathname) {

			return;

		}

		event.preventDefault();

		const target = document.getElementById(url.hash.slice(1));

		if (target) {

			scrollTo({
				top: target.getBoundingClientRect().top - document.querySelector("header")!.getBoundingClientRect().height + scrollY,
				behavior: "smooth",
			});

		}

	}

	return (
		<a href={href} onClick={onClick}>{children}</a>
	)

}
