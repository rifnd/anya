let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Grup official Moon Bot')).buffer(), `
「 Grup Official Moon Bot 」

Grup 1:
${gc1}

Grup 2:
${gc2}

Grup 3:
${gc3}

Join ya☺️
Kalau linknya gak valid/direset hubungi owner
`.trim(), watermark, 'Sewa bot', '.sewa', m)
handler.help = ['grupbot']
handler.tags = ['info']
handler.command = /^(gcbot|grupbot|groupbot)$/i

module.exports = handler
