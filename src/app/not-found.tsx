import { Metadata } from "next"

export const metadata: Metadata = {
	title: "THE NOT FOUND PAGE / PCプログラミング部",
}

export default async function NotFound() {

	return (
		<div className="notfound">
			<h1>THE NOT FOUND PAGE.</h1>
			<p>あなたはまだ作られていないページにアクセスしました。リンクを編集したようですね。エンジニアなのでしょうか。</p>
			<p>もしエンジニアでないのなら、<a href="mailto:support@w-pcp.dev">support@w-pcp.dev</a> への連絡をお待ちしております。</p>
		</div>
	)

}
