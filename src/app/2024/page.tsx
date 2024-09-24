import { Metadata } from "next"

export const metadata: Metadata = {
	title: "興風祭 2024 / PCプログラミング部",
};

export default async function Page() {

	return (

		<div>
			<div className="topimage">
				<img className="pc image-pc" src="/top.webp" alt="top"></img>
				<img className="sp image-sp" src="/top.webp" alt="top"></img>
				<h2 className="image-title">
					W-PCP
					<br />
					2024.9.28-29
					<br />
					Bldg.1 6E/6F
				</h2>
			</div>

			<div className="topcol">
				<h2 id="about-pcp">PCPについて</h2>

				<p>

					PCプログラミング部は、早稲田中学校・高等学校の公式部活動です。
					略称として、W-PCP と呼ばれています。
					W-PCP では、競技プログラミング、Web開発、ゲーム開発などを行っています。

				</p>
			</div>

			<div className="topcol">
				<h2 id="contents">展示内容</h2>

				<p>

					興風祭で、部員が制作したゲームを展示しています。
					是非お越しください。

				</p>
			</div>

			<div className="topcol">
				<h2 id="enquetes">アンケート</h2>

				<p>
					アンケートは準備中です。しばらくお待ちください。
				</p>
			</div>

			<div className="topcol">
				<h2 id="games">ゲーム配布</h2>

				<p>
					興風祭 2024 にて W-PCP へお越しいただき、アンケートに答えてくださった方は <a href="/2024/download">ダウンロードページ</a> より、ゲームをダウンロードできます。<br />
					ぜひ、ダウンロードして遊んでみてください。
				</p>
			</div>

			<div className="topcol">
				<h2 id="access">アクセス</h2>

				<table>

					<tbody>

						<tr>

							<td>開催</td>
							<td>早稲田中学校・高等学校</td>

						</tr>

						<tr>

							<td>住所</td>
							<td>〒162-8654 東京都新宿区馬場下町 62番地</td>

						</tr>

						<tr>

							<td>日時</td>
							<td>2024年 9月28日、9月29日 9:00 ~ 16:00</td>

						</tr>

						<tr>

							<td>展示室</td>
							<td>1号館（高校棟）3階 高校3年 E組、F組</td>

						</tr>

					</tbody>

				</table>

				<p>更に詳細な情報を確認するには、<a href="https://www.waseda-h.ed.jp/%e3%82%a2%e3%82%af%e3%82%bb%e3%82%b9/"> 早稲田中学校・高等学校の公式サイト</a> をご覧ください。</p>

			</div>

		</div>

	)

}
