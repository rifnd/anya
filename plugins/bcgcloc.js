let handler = async (m, { conn, text }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `Mengirim pesan broadcast ke ${groups.length} grup\nEstimasi selesai ${groups.length * 1.5} detik`, m)
  for (let id of groups) {
    await conn.delay(1500)
    await conn.sendButtonLoc(id, fla + 'Pesan siaran', text, watermark, 'broadcast', 'broadcast')
    }
  m.reply('*Broadcast Selesai*')
}
handler.help = ['bcgclokasi', 'bcgcloc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(bcgclokasi|bcgcloc)$/i

handler.owner = true

module.exports = handler
