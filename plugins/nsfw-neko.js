let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch(API('waifupics', '/nsfw/neko'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.url) throw 'Eror!'
  await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Sange sama kartun', watermark, 'Get Again', '#nsfwneko', m)
}
handler.help = ['nsfwneko']
handler.tags = ['nsfw']
handler.limit = 1
handler.nsfw = 1
handler.command = /^nsfwneko$/i

module.exports = handler
