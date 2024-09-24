import { Metadata } from "next"

export const metadata: Metadata = {
	title: "興風祭 2024 / PCプログラミング部",
};

export default async function Page() {

	return (

		<div>

			<h1>2024年度 興風祭</h1>

			<p>PCプログラミング部公式 興風祭特設ページ</p>

			<h2>来場者向けゲーム配布</h2>

			<p>興風祭向けに、PCプログラミング部が開発したゲームを配布しています。</p>
			<p>すでに 興風祭 2024 で PCプログラミング部 へお越しになられ、ゲームのダウンロードを希望する方はこちらの <a href="/2024/download">ダウンロードページ</a> へのアクセスをお願いいたします。</p>

		</div>

	)

}
