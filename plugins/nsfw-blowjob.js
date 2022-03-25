let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  let res = await fetch(API('waifupics', '/nsfw/blowjob'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.url) throw 'Eror!'
  await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'sange sama kartun', watermark, 'Get Again', '#nsfwblowjob', m)
}
handler.help = ['nsfwblowjob']
handler.tags = ['nsfw']
handler.limit = 1
handler.nsfw = true
handler.command = /^(nsfwblowjob)$/i

module.exports = handler
