let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
//https://api.lolhuman.xyz/api/random/ppcouple?apikey=RFK-Rey
m.reply(wait)

let res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkey}`)
let json = await res.json()

await conn.sendFile(m.chat, json.result.male, '', 'cowo', m)
conn.sendButtonImg(m.chat, json.result.female, 'cewe', watermark, 'Get again', '.ppcp', m,false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet', 'anime']
handler.command = /^(pp(cp|couple))$/i
handler.limit = 1

module.exports = handler
