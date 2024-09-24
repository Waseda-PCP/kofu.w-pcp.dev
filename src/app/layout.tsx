import { Metadata } from 'next'
import './global.scss'
import jsonLDs from './ld-json'
import JumpLink from '@/components/jumplink'

export const metadata: Metadata = {
  title: '興風祭 / PCプログラミング部',
  description: '早稲田中学校・高等学校のPCプログラミング部の 興風祭特設 公式ホームページです。',
  keywords: ['早稲田', '早稲田中学校', '早稲田高等学校', 'PCプログラミング部', '興風祭', 'W-PCP'],
  authors: [
    {
      name: '早稲田中学校・高等学校',
      url: 'https://www.w-pcp.dev/',
    }
  ],
  abstract: "早稲田中学校・高等学校のPCプログラミング部の 興風祭特設 公式ホームページです。",
  creator: "Yama.can / W-PCP",
  publisher: "W-PCP",
  referrer: 'strict-origin-when-cross-origin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="ja">

      <head>

        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {
          jsonLDs.map((jsonLD, index) =>
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={
                {
                  __html: JSON.stringify(jsonLD)
                }
              }
            />
          )
        }

      </head>

      <body>

        <header>

          <a href="/2024">
            <div className="logo">
              W-PCP
              <br />
              <p>KOFU-FES</p>
            </div>
          </a>

          <div className="menu">
            <p><JumpLink href="/2024#about-pcp">PCPについて</JumpLink></p>|
            <p><JumpLink href="/2024#contents">展示</JumpLink></p>|
            <p><JumpLink href="/2024#enquetes">アンケート</JumpLink></p>|
            <p><JumpLink href="/2024#games">ゲーム配布</JumpLink></p>|
            <p><JumpLink href="/2024#access">アクセス</JumpLink></p>
          </div>

          <div className='hamburger'>
            ≡
          </div>

        </header>

        <main>

          {children}

        </main>

        <footer>
          <div className="footlogo">
            <p>早稲田中学校・高等学校</p>
            <h2>PCプログラミング部</h2>
            <h3>Links</h3>
            <a className="block" href="https://www.youtube.com/watch?v=fjxDzQjeaNs">YouTube (W-PCP)</a>
            <a className="block" href="https://www.youtube.com/shorts/FvWeI3yxi8o">YouTube Shorts (W-PCP)</a>
            <a className="block" href="https://x.com/waseda_pcp">X (旧 Twitter)</a>
            <br />
            <p>YouTube 及び YouTube Shorts は Google LLC の登録商標です。</p>
            <p>X 及び Twitter は X Corp. の登録商標です。</p>
            <p>サイトに問題がある場合は、<a href="mailto:support@w-pcp.dev">support@w-pcp.dev</a> へのご連絡をお願いいたします。</p>
          </div>
        </footer>

      </body>

    </html>

  )

}
