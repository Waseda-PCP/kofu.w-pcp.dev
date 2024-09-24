import { Metadata } from "next";
import { redirect } from "next/navigation";
import Error from "./error";

export const metadata: Metadata = {
	title: "興風祭 2024 ゲーム配布 / PCプログラミング部",
	keywords: ["興風祭", "2024", "ゲーム", "配布", "ダウンロード", "PCプログラミング部"],
};

export default async function Download() {

	async function action(data: FormData) {

		"use server";

		const keyword = data.get("keyword");

		if (typeof keyword != "string") return;

		if (keyword == process.env["2024.keyword"]) {

			redirect(process.env["2024.dlurl"] as string);

		} else {

			redirect("?error");

		}

	}

	return (

		<div>
			<div className="topimage">
				<img className="pc image-pc" src="/top.webp" alt="top"></img>
				<img className="sp image-sp" src="/top.webp" alt="top"></img>
				<h2 className="image-title">
					ゲーム配布
					<br />
					興風祭 2024
				</h2>
			</div>

			<div className="topcol">
				<h2 id="about-pcp">ダウンロード</h2>

				<p>
					興風祭の活動部屋へ行き、アンケートに回答していただいた方に配布されるキーワードが必要です。<br />
					活動部屋で入手できるキーワードを入力して、ダウンロードボタンを押してください。
				</p>

				<form action={action}>

					<label htmlFor="keyword">キーワード</label>
					<input type="text" name="keyword" id="keyword" />

					<button type="submit">ダウンロード</button>

					<Error />

				</form>
			</div>

		</div>

	)

}
