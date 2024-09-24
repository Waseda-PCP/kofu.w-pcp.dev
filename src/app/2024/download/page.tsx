import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "興風祭 2024 ゲーム配布 / PCプログラミング部",
	keywords: ["興風祭", "2024", "ゲーム", "配布", "ダウンロード", "PCプログラミング部"],
};

export default async function Download({ searchParams: { error } }: { searchParams: { error?: string } }) {

	async function action(data: FormData) {

		"use server";

		const keyword = data.get("keyword");

		if (typeof keyword != "string") return;

		if (keyword == process.env["2024.keyword"]) {

			redirect(process.env["2024.dlurl"] as string);

		} else {

			redirect("/2024/download?error");

		}

	}

	return (



		<form action={action}>

			<label htmlFor="keyword">キーワード</label>
			<input type="text" name="keyword" id="keyword" />

			<button type="submit">ダウンロード</button>

			{error != undefined && <p>キーワードが違います。</p>}

		</form>

	)

}
