"use client";

import { useEffect } from "react";

export default async function Menu() {

	useEffect(() => {

		if (!document.querySelector(".menu *")) {

			document.querySelectorAll("h2").forEach((element) => {

				if (element.id) {

					const link = document.createElement("a");
					link.href = `#${element.id}`;
					link.textContent = element.textContent;
					link.addEventListener("click", (event) => {
						event.preventDefault();
						scrollTo({
							top: element.getBoundingClientRect().top - document.querySelector("header")!.getBoundingClientRect().height + scrollY,
							behavior: "smooth",
						});
					});

					const p = document.createElement("p");
					p.appendChild(link);

					document.querySelector(".menu")?.appendChild(p);

				}

			});

		}

	})

	return (
		<div className="menu" />
	)

}