let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  conn.sendButton(m.chat, `${pickRandom(cinta)}`, wm, 'Next', '.pantuncinta', m)
}
handler.help = ['pantuncinta']
handler.tags = ['fun']
handler.command = /^(pantuncinta)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const cinta = [
"Walaupun hanya sebatang tebu\nWalaupun jarang ketemu\nCintaku hanya untukmu",
"Sungguh bahaya ular kobra\nJika tergigit bisa koma\nSungguh bahagia aku rasa\nJika kita selalu bersama",
"Si buaya darat berkata merdu\nSi buaya air hanya membisu\nSungguh berat rasanya rindu\nWaktu sehari terasa seminggu",
"Bila dingin sedang mengusik\nSepuluh kota diterjang salju\nJika angin bisa berbisik\nKusuruh ia katakan 'I Miss You",
"Meski banyak bunga di taman\nBunga anggrek yang kupilih\nMeski banyak pilihan\nHanya dinda yang kupilih",
"Ibu Rina jualan jamu\nJualannya pakai sepeda\nAku ingin sekali bertemu\nWalau hanya sedetik saja",
"Dari mana datangnya lalat\nKalau bukan dari pasar\nDari mana datangnya surat\nKalau bukan dari pacar",
"Lulur Jawa dibawa Sinta\nSimpan di saku di bawah kereta\nMalu rasanya katakan cinta\nInsan sepertiku hanyalah nista",
"Si mulut kerbau mau berkicau\nBerkata dendam memegang bahu\nHatiku galau hatiku kacau\nCinta terpendam tiada yang tahu",
"Burung gelatik burung nuri\nBurung gagak terbangnya tinggi\nKamu cantik menawan hati\nMeski bapaknya galak, tetap kudekati",
"Pohon durian pohon duku\nDi sampingnya pohon waru\nMemandang wajahmu setiap waktu\nTak pernah membuatku jemu",
"Seribu bebek di kandang singa\nHanya satu berwarna belang\nBeribu cewek di Indonesia\nHanya engkau yang aku sayang",
"Di pantai banyak pohon kelapa\nDi kebun banyak pohon duku\nBiarlah orang berkata apa\nHanya kaulah terbaik untukku",
"Sebatang bakau ditancap paku\nSerdadu India dendangkan lagu\nTidakkah engkau lihat mataku\nSeribu cinta sedang menunggu",
"Seribu satu pohon beringin\nHanya satu si pohon randu\nSeribu malam terasa dingin\nHanya wajahmu yang aku rindu",
"Odong-odong ngebut di Jalan Baru\nUgal-ugalan nabrak tukang jamu\nSudah lama aku ingin bilang sesuatu\nMau dong, jadi pacar kamu",
"Jangan pernah main di selokan\nBajunya kotor ditertawakan\nJangan pernah engkau ragukan\nJanji setia yang aku ikrarkan",
"Minum jamu sambil berdiri\nDiseduhnya di atas panci\nBila hatimu masih sendiri\nBolehkah aku yang mengisi",
"Ambillah bambu buat sembilu\nTerbanglah debu dari cerutu\nNama indahmu ku sebut selalu\nDi dalam doa setiap waktu",
"Satu satu ditambah dua\nDua dua dikurang tiga\nAku dan kamu hidup bersama\nSekarang esok dan selamanya",
"Minum sekoteng hangat rasanya\nMinum segelas ada yang minta\nLaki-laki ganteng siapa yang punya\nBolehkah aku jatuh cinta",
"Paling banyak burung gelatik\nDi atas terbang melayang\nMemang banyak wanita cantik\nCuma engkau yang aku sayang",
"Air mawar di dalam cangkir\nDisimpan kendi di bawah parang\nSedari awal hinggalah akhir\nSayangku tercurah untukmu seorang",
"Layang-layang terbang melayang\nJatuh ke laut taunya hilang\nSiapa bilang abang tak sayang\nSiang malam terbayang-bayang",
"Malam hari bunga layu\nApalagi putik si melati\nAbang jangan terus merayu\nTakut meleleh hatiku ini",
"Habis minum kopi\nLanjut makan sayur bayam\nGak ketemu kamu sehari\nSerasa dua puluh empat jam",
"Bawa peti ke tengah kota\nJatuh di kali berair amis\nSetiap kulihat senyum adinda\nKopi pahit terasa manis",
"Kucing lucu mandi di atas papan\nPapannya dari kayu pohon kelapa\nBadan kurus bukan karena kurang makan\nTapi, gara-gara mikirin kamu yang jauh di sana",
"Berjemur sambil baca majalah\nDiiringi lagu nostalgia\nTak mengapa umurmu sangat tua\nYang penting aku selalu cinta",
"Kalau pergi ke sungai\nTak perlu pakai baju baru\mKalau lagi sakit gini\nObatnya cuma ketemu kamu",
"Daging ayam dibuat gulai\nBuat dimakan kita nanti\nDirimu seorang yang ternilai\nTakkan pernah bisa diganti",
"Ke Cimanggis membeli buku\nBuku tulis untuk sekolah nanti\nBegitu banyak gadis yang mengejarku\nHanya dinda yang nyantol di hati",
"Aku manusia bukan siluman\nAku tak sempurna tapi punya kelebihan\nJadikanlah aku pria idaman\nMeski hanya seorang kusir delman",
"Duduk santai membaca buku\nBaca buku cerita cinta\nSaat aku bertemu kamu\nEh... aku langsung jatuh cinta",
"Ke Citayam membeli kenur\nPulangnya lewat Pekanbaru\nDari malam susah tidur\nSelalu teringat wajah cantikmu",
"Makan nasi pakai tahu\nMinumnya pakai jus jambu\nJanganlah kau jauh dariku\nAku akan selalu sayang padamu",
"Ayam goreng setengah mateng\nBelinya di depan tugu\nAbang sayang, abangku ganteng\nNeng di sini setia menunggu",
"Sebelum pergi jogging\nJangan lupa tuk solat subuh\nPikiran sedikit pangling/nSebab penyakit rinduku sedang kambuh",
"Bawa piring isinya nasi\nNasi kuning untuk semuaBiarlah Bulan jadi saksi\nUntuk awal cinta kita berdua",
"Beli buku, buat tamu.\nSejuk hatiku, melihat senyummu.",
"Pagi pagi makan pepaya\nMinumnya es kelapa muda\nWalau kau sudah ada yang punya\nTapi diriku tetap cinta",
"Nona cantik jualan jamu\nJamu diminum terasa mengkudu\nMeskipun jarang ketemu\nCintaku hanya untukmu",
"Dari desa pergi ke kota\nPerginya tuk cari kerja\nApa benar-benar cinta\nAtau hanya PHP saja",
"Main gundu main layang-layang\nCuma kamu yang aku sayang",
"Mbok jamu baca berita\nCuma kamu yang aku cinta",
"Bawa aku dipukul bat\nDicampur jamu diatas tungku\nCinta suciku cukuplah satu\nUntuk kamu sepanjang waktu",
"Ikan asin di laut Bali\nIkan hiu di pulau Sumatera\nJangan mainkan hati ini\nSebelum engkau benar-benar cinta",
"Membuat sate harus dibakar\nDitusuk dengan sebilah bambu\nTelah kucium wanginya mawar\nHarumnya kalah dengan cintamu",
"Lantai yang kotor harus disapu\nKasih pengharum menjadi wangi\nPertama kali tatap wajahmu\nAku temukan beningnya hati"
]
