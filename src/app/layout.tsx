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

          <h2>興風祭</h2>

          <p>by W-PCP</p>

          <div className='sp'>

            <a href={`/${new Date().getFullYear()}`}>今年の興風祭</a>

          </div>

          <div className='pc'>

            <a href={`/${new Date().getFullYear()}`}>今年の興風祭（{new Date().getFullYear()}年度）</a>

            |

            過去の興風祭

            <a href="https://w-pcp-site-v3.vercel.app/kofu">2023年度</a>

          </div>

        </header>

        <main>

          {children}

        </main>

      </body>

    </html>

  )

}
