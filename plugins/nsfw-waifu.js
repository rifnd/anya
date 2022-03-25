let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  let res = await fetch(API('waifupics', '/nsfw/waifu'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.url) throw 'Eror!'
  await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Sange sama kertun', watermark, 'Get Again', '#nsfwwaifu', m)
}
handler.help = ['nsfwwaifu']
handler.tags = ['nsfw']
handler.limit = 1
handler.nsfw = 1
handler.command = /^(nsfwwaifu)$/i

module.exports = handler
