import { Metadata } from 'next'
import './global.scss'
import jsonLDs from './ld-json'

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

          <h2>興風祭</h2>

          <p>by W-PCP</p>

          <div className='sp'>

            <a href={`/${new Date().getFullYear()}`}>今年の興風祭</a>

          </div>

          <div className='pc'>

            <a href={`/${new Date().getFullYear()}`}>今年の興風祭（{new Date().getFullYear()}年度）</a>

          </div>

        </header>

        <main>

          {children}

        </main>

      </body>

    </html>

  )

}
