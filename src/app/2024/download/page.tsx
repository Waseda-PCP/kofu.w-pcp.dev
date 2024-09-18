import { redirect } from "next/navigation";

export default async function Download() {

	async function action(data: FormData) {

		"use server";

		const keyword = data.get("keyword");

		if (typeof keyword != "string") return;

		if (keyword == process.env["2024.keyword"]) {

			redirect(process.env["2024.dlurl"] as string);

		}

	}

	return (

		<form action={action}>

			<input type="text" name="keyword" />

			<button type="submit">ダウンロード</button>

		</form>

	)

}
