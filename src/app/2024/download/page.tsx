import { Metadata } from "next";
import { redirect } from "next/navigation";
import Error from "./error";
import fs from "fs";

export const metadata: Metadata = {
	title: "興風祭 2024 ゲーム配布 / PCプログラミング部",
	keywords: ["興風祭", "2024", "ゲーム", "配布", "ダウンロード", "PCプログラミング部"],
};

export default async function Download() {

	async function action(data: FormData) {

		"use server";

		const keyword = data.get("keyword");

		if (typeof keyword != "string") return;

		const jsonData: any = {};

		for (const value of data.entries()) {

			jsonData[value[0]] = value[1];

		}

		fs.appendFileSync("enquete.txt", JSON.stringify(jsonData) + ",\n");

		if (keyword.toLowerCase() == process.env["2024.keyword"]) {

			redirect("/2024/download/" + process.env["2024.dlid"]);

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
					活動部屋で入手できるキーワードを入力して、ダウンロードボタンを押してください。<br/>
					ゲームは Windows でのみ動作します。
				</p>

				<form action={action}>

					<Error />

					<label htmlFor="keyword">キーワード：</label>
					<input type="text" name="keyword" id="keyword" required />

					<br />

					<label htmlFor="people">何人で来ましたか？（必須）</label>

					<select name="people" id="people" required>

						<option id="e1">1人</option>
						<option id="e2">2人</option>
						<option id="e3">3人</option>
						<option id="e4">4人</option>

					</select>

					<br />

					<label htmlFor="age">ゲームをプレイした人の年齢を教えて下さい（必須）</label>

					<select name="age" id="age" required>

						<option id="under_el">小学生以下</option>
						<option id="e1">小学1年生</option>
						<option id="e2">小学2年生</option>
						<option id="e3">小学3年生</option>
						<option id="e4">小学4年生</option>
						<option id="e5">小学5年生</option>
						<option id="e6">小学6年生</option>
						<option id="jh">中学生</option>
						<option id="h">高校生</option>
						<option id="a">大人</option>

					</select>

					<br />

					<label htmlFor="sat">PCプログラミング部の展示に満足しましたか？（必須）</label>

					<select name="sat" id="sat" required>

						<option id="e1">非常に満足</option>
						<option id="e2">やや満足</option>
						<option id="e3">どちらとも言えない</option>
						<option id="e4">やや満足していない</option>
						<option id="e5">全く満足していない</option>

					</select>

					<br />

					<label htmlFor="game">遊んだゲームの内容を教えて下さい</label>

					<input type="text" id="game" name="game" />

					<br />

					<label htmlFor="wanted">改善してほしい点を教えて下さい</label>

					<input type="text" id="wanted" name="wanted" />

					<br />

					<button type="submit">ダウンロード</button>

				</form>
			</div>

		</div>

	)

}
