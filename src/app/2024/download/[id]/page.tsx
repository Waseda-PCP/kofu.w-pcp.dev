import { notFound } from "next/navigation";

export default async function DLPage({ params: { id } }: { params: { id: string } }) {

	if (id != process.env["2024.dlid"]) {

		notFound();

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
					このページのリンクは、家族内、友人内のみで共有し、第三者に共有しないでください。
					また、このリンクにアクセスすることでいつでもダウンロードできるためにリンクのコピーをおすすめします。
				</p>

				<a href={`/${id}-data.zip`}>ダウンロード</a>
			</div>

		</div>

	)

}