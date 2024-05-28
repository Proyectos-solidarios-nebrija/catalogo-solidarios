import fs from 'node:fs/promises'
import satori from 'satori'
import { html } from 'satori-html'
import sharp from 'sharp'

const langTitles = {
  es: 'Proyectos Solidarios',
  en: 'Solidarity Projects'
}

export const GET = async ({ url }) => {
  const ogText = url.searchParams.get('text')
  let lang = url.searchParams.get('lang')

  if (!lang) {
    lang = 'es'
  }

  if (!ogText) {
    return new Response('Not Found', { status: 404 })
  }

  const monserratData = await fs.readFile(
    './public/fonts/montserrat-latin-600-normal.ttf'
  )

  const markup = html(`
    <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-family: "Monserrat"; color: #31363f; flex-direction: column; gap: 25px; background-color: #eee;">
      <h1 style="font-size: 86px; text-align: center; text-transform: capitalize; margin: 0; padding: 0;">${ogText}</h1>
      <h2 style="font-size: 36px; opacity: 0.8;">${langTitles[lang]}</h2>
    </div>
    <img src="${url.origin}/images/favicon.png" style="position: absolute; width: 100px; top: 40px; left: 40px; margin: 0; padding: 0;" />
  `)

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Montserrat',
        data: monserratData,
        weight: 'normal',
        style: 'normal'
      }
    ]
  })

  const png = await sharp(Buffer.from(svg)).png().toBuffer()

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png'
    }
  })
}
