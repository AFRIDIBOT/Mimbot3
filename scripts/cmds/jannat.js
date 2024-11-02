module.exports = {
 config: {
	 name: "afridi",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "afridi") {
 return message.reply({
 body: " 「I love you🫵😍😔\n\n𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁~𝙰𝙵𝚁𝙸𝙳𝙸\n𝙱𝙾𝚃~𝙲𝚈𝙱𝙴𝚁~𝙼𝙸𝙼」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/7FQTJwY.mp4")
 });
 }
 }
}
