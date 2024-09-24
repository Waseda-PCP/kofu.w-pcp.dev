import { Metadata } from 'next'
import './global.scss'

export const metadata: Metadata = {
  title: '興風祭 / PCプログラミング部',
  description: '早稲田中学校・高等学校のPCプログラミング部の 興風祭特設 公式ホームページです。',
  keywords: ['早稲田中学校', '早稲田高等学校', 'PCプログラミング部', '興風祭', 'W-PCP'],
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

      </head>

      <body>

        <header>

          <div className="logo">
            W-PCP
            <br />
            <p>KOFU-FES</p>
          </div>

          <div className="menu">
            <p>PCPについて</p>|
            <p>展示</p>|
            <p>アンケート</p>|
            <p>ゲーム配布</p>|
            <p>アクセス</p>
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
          </div>
        </footer>

      </body>

    </html>

  )

}
