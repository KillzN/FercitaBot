const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*🌸⤷ 𝐌𝐄𝐍𝐂𝐈𝐎𝐍𝐄𝐒:* ${pesan}`;
  let teks = `*> 𝗙𝗲𝗿𝗰𝗶𝘁𝗮𝗕𝗼𝘁𝗰𝗶𝘁𝗮𝗮 𝘁𝗲 𝗶𝗻𝘃𝗼𝗰𝗮 𝗺𝗮𝗹𝗮𝘆𝗮𝗮 <*\n\n ${oi}\n\n➥ _*» @xmynsi.ff:*_\n`;
  for (const mem of participants) {
    teks += `🪷 @${mem.id.split('@')[0]}\n`;
  }
  teks += `└ *𝐅𝐞𝐫𝐜𝐢𝐭𝐚𝐁𝐨𝐭𝐜𝐢𝐭𝐚𝐚 ⇝ 👸🏻 @xmynsi.ff*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación|putos)$/i;
handler.admin = true;
handler.group = true;
export default handler;