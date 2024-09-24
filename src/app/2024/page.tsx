import Image from "next/image"
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
				<h2>PCPについて</h2>
			</div>

			<div className="topcol">
				<h2>展示内容</h2>
			</div>

			<div className="topcol">
				<h2>アンケート</h2>
			</div>

			<div className="topcol">
				<h2>ゲーム配布</h2>
			</div>

			<div className="topcol">
				<h2>アクセス</h2>
			</div>

		</div>

	)

}
