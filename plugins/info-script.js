//Credits Jangan Dihapus
//Thanks To Jarot 
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://youtube.com/channel/UC1ikkqsPvtWuE_QonsET1yg*`
let wibu = `https://hadi-api.herokuapp.com/api/loli` 
let thumb = await(await fetch('https://telegra.ph/file/6a5d4785c6acc30b86e40.jpg')).buffer()
conn.sendButtonDoc(m.chat, str, wm,'ᴏᴋ','Bilek', fgif, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/sahrulwara_____",
    title: 'Cari Aja Disitu',
    body: 'want source code?',
    thumbnail: thumb,
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['sc', 'script']
handler.tags = ['info', 'main']
handler.command =  /^(script|sc)$/i

export default handler
