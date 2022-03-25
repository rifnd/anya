let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  let res = await fetch(API('waifupics', '/nsfw/trap'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.url) throw 'Eror!'
  await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Sange = streess', watermark, 'Get Again', '#nsfwtrap', m)
}
handler.help = ['nsfwtrap']
handler.tags = ['nsfw']
handler.limit = 1
handler.nsfw = 1
handler.command = /^(nsfwtrap)$/i

module.exports = handler
