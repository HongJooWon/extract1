import { parse } from 'pdf-parse';

export const config = {
  api: {
    bodyParser: false
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const fdatas = req.pdf;
  const data = await parse(fdatas);

  res.status(200).json({ text: data.text });
}

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: '10mb',
//     },
//   },
// }