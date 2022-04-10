let fs = require('fs')

global.owner = ['6281252848955'] // Letakan nomor kamu disini

global.APIs = {
  amel: 'https://melcanz.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org/',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://api.chipa.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais.com',
  zeks: 'https://api.zeks.xyz',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz',
  bx: 'https://bx-hunter.herokuapp.com',
  }

global.APIKeys = {
  'https://melcanz.com': 'alyawangy',
  'https://api.neoxr.eu.org/': 'yntkts',
  'https://api.chipa.xyz': 'pais',
  'https://api.xteam.xyz': 'apivproject',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://zekais.com': 'zekais',
  'https://api.zeks.me': 'apivinz',
  'https://api.lolhuman.xyz': 'yourkey',
  'https://api.vhtear.com': 'sayahafiz',
  'https://bx-hunter.herokuapp.com': 'FuckBitch',
}

global.packname = ''
global.author = '© anya\n@naando.jpeg\n@alya.xzy'

global.wait = 'Proses.. mohon tunggu...'
global.eror = 'Maaf, terjadi kesalahan',
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.watermark = '© anya'
global.image = 'https://telegra.ph/file/f9a25488a3d92751505e8.jpg'
global.thumbfoto = 'https://telegra.ph/file/f9a25488a3d92751505e8.jpg'

global.multiplier = 59 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

gc1 = 'https://chat.whatsapp.com/LQT5bfUx0S9Cma8N7bcdc2'
gc2 = 'https://chat.whatsapp.com/Fqijg3xy84aHLwVhblOiC8'
gc3 = 'soon'
fbku = 'https://www.facebook.com/profile.php?id=100018182722385'
fbalya = 'https://www.facebook.com/profile.php?id=100077396330164'
igku = 'instagram.com/naando.jpeg'
igalya = 'instagram.com/alya.xzy'
tiktokku = 'tiktok.com/nando.xyz'
tiktokalya = 'Ndak punya'
cpku = 'https://wa.me/6281252848955'
cpalya = 'https://wa.me/6285815975368'
lolkey = 'yourkey'
xkey = 'apivproject'
