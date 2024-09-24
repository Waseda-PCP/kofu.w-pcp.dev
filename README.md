# kofu.w-pcp.dev

`kofu.w-pcp.dev` のホームページのリポジトリです

## Install (Development)

```bash
npm i -D
npm run build
```

## Run (Development)

```bash
npm run dev
```

## Install (Product)

```bash
npm i
npm run build
```

ただし、本番環境でビルドも行う場合は `Install (Development)` を参照してください。

## Run (Product)

```bash
npm start
```

## Env

`.env` は 以下の内容で追加してください。

```env
2024.keyword={ダウンロード用キーワード}
2024.dlurl={ダウンロード URL}
```

## Development (Design)

基本的なデザインは `src/app/global.scss` に sass 形式で保存してあります。
必要に応じて、ページに対して `page.module.scss` が追加できます。
css 形式の使用は可能な限り控えてください。

多用される要素については、コンポーネントを作成してください。
