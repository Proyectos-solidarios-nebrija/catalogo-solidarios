import satori from 'satori'
import { html } from 'satori-html'
import sharp from 'sharp'

const langTitles = {
  es: 'Proyectos Solidarios',
  en: 'Solidarity Projects'
}

export const GET = async ({ url }) => {
  const ogText = url.searchParams.get('text')
  const lang = url.searchParams.get('lang') ?? 'es'
  const enableSubtitle = url.searchParams.get('subtitle') === 'true'

  if (!ogText) {
    return new Response('Not Found', { status: 404 })
  }

  let fontBuffer

  try {
    const font = await fetch(
      `${url.origin}/fonts/montserrat-latin-600-normal.ttf`
    )
    fontBuffer = await font.arrayBuffer()
  } catch (error) {
    console.log(error)
    return new Response('Internal Server Error', { status: 500 })
  }

  const markup = html(`
    <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-family: "Monserrat"; color: #31363f; flex-direction: column; gap: 25px; background-color: #eee; background-image: radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%); background-size: 100px 100px;">
      <h1 style="font-size: 86px; text-align: center; margin: 0; padding: 0;">${ogText}</h1>
      ${enableSubtitle ? `<h2 style="font-size: 36px; opacity: 0.8;">${langTitles[lang]}</h2>` : ''}
    </div>
    <img src="${url.origin}/images/favicon.png" style="position: absolute; width: 100px; top: 40px; left: 40px; margin: 0; padding: 0;" />
  `)

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Montserrat',
        data: Buffer.from(fontBuffer),
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
