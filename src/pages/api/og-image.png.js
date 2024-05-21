// import fs from "node:fs/promises";
// import satori from "satori";
// import sharp from "sharp";

// export const GET = async function get({ params, request }) {
//   const monserratData = await fs.readFile(
//     "./public/fonts/Montserrat-VariableFont_wght.woff2"
//   );

//   const svg = await satori(
//     {
//       type: "h1",
//       props: {
//         children: "Hello world",
//         style: {
//           fontWeight: "bold",
//         },
//       },
//     },
//     {
//       width: 1200,
//       height: 630,
//       fonts: [
//         {
//           name: "Montserrat",
//           data: monserratData,
//           weight: "normal",
//           style: "normal",
//         },
//       ],
//     }
//   );

//   const png = await sharp(Buffer.from(svg)).png().toBuffer();

//   return new Response(png, {
//     headers: {
//       "Content-Type": "image/png",
//     },
//   });
// };
