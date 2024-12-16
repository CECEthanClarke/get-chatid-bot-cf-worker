/**
 * https://github.com/connectingeverycorner/get-chatid-bot-cf-worker
 */
import { sendMessage } from './telegram'

function getSendText(msg) {
	let send_text = '';
	if (msg) {
		if (msg.message_id) {
			send_text += `message id: <code>${msg.message_id}</code>\n\n`;
		}
		if (msg.from) {
			send_text += `
🟢 <strong>From</strong>
	- Title: <code>${msg.from.first_name || ''}${msg.from.last_name || ''}</code>
	- Chat ID: <code>${msg.from.id}</code>
	- Username: ${msg.from.username ? '@' + msg.from.username: ''}\n\n`;
		}
		if (msg.chat) {
			send_text += `
🔵 <strong>Chat</strong>
	- Title: <code>${msg.chat.first_name || ''}${msg.chat.last_name || ''}${msg.chat.title || ''}</code>
	- Chat ID: <code>${msg.chat.id}</code>  
	- Username: ${msg.chat.username ? '@' + msg.chat.username: ''}\n\n`;
		}
		if (msg.reply_to_message) {
			if (msg.reply_to_message.from) {
				send_text += `
🟢 <strong>Reply To Message From</strong>
	- Title: <code>${msg.reply_to_message.from.first_name || ''}${msg.reply_to_message.from.last_name || ''}</code>
	- Chat ID: <code>${msg.reply_to_message.from.id}</code>
	- Username: ${msg.reply_to_message.from.username ? '@' + msg.reply_to_message.from.username: ''}\n\n`;
			}
			if (msg.reply_to_message.chat) {
				send_text += `
🔵 <strong>Reply To Message Chat</strong>
	- Title: <code>${msg.reply_to_message.chat.first_name || ''}${msg.reply_to_message.chat.last_name || ''}${msg.reply_to_message.chat.title || ''}</code>
	- Chat ID: <code>${msg.reply_to_message.chat.id}</code>  
	- Username: ${msg.reply_to_message.chat.username ? '@' + msg.reply_to_message.chat.username: ''}\n\n`;
			}
		}
		if (msg.forward_from) {
			send_text += `
🟢 <strong>Forward From</strong>
	- Title: <code>${msg.forward_from.first_name || ''}${msg.forward_from.last_name || ''}</code>
	- Chat ID: <code>${msg.forward_from.id}</code>
	- Username: ${msg.forward_from.username ? '@' + msg.forward_from.username: ''}\n\n`;
		}
		if (msg.forward_from_chat) {
			send_text += `
🔵 <strong>Forward From Chat</strong>
	- Title: <code>${msg.forward_from_chat.first_name || ''}${msg.forward_from_chat.last_name || ''}${msg.forward_from_chat.title || ''}</code>
	- Chat ID: <code>${msg.forward_from_chat.id}</code>  
	- Username: ${msg.forward_from_chat.username ? '@' + msg.forward_from_chat.username: ''}\n\n`;
		}
	}
	return send_text;
}

async function processUpdate(env, update) {
	try {
		if (update) {
			const msg = update.message;
			if (msg) {
				const type = msg.chat.type;
				const text = msg.text || msg.caption;
				if (text) {
					if (text.startsWith('/start')) {
						const send_text = getSendText(msg);
						await sendMessage(env.BOT_TOKEN, { 
							chat_id: msg.chat.id, 
							text: send_text, 
							parse_mode: 'HTML', 
							reply_to_message_id: msg.message_id,
							reply_markup: type === 'private' ? JSON.stringify({
								keyboard: [
									[
										{
											text: `Get Bot Chat ID`,
											request_users: {
												request_id: msg.message_id + 1,
												user_is_bot: true
											}
										},
										{
											text: `Get User Chat ID`,
											request_users: {
												request_id: msg.message_id + 2,
												user_is_bot: false
											}
										}
									],
									[
										{
											text: `Get Channel Chat ID`,
											request_chat: {
												request_id: msg.message_id + 3,
												chat_is_channel: true
											}
										},
										{
											text: `Get Group Chat ID`,
											request_chat: {
												request_id: msg.message_id + 4,
												chat_is_channel: false
											}
										}
									]
								],
								is_persistent: false,
								resize_keyboard: true,
								one_time_keyboard: true
							}) : undefined
						});
					}
					else if (text.startsWith('/help')) {
						await sendMessage(env.BOT_TOKEN, { 
							chat_id: msg.chat.id, 
							text: `Effortlessly help you get your chat ID — simple and convenient. All the code is open-sourced on GitHub: https://github.com/connectingeverycorner/get-chatid-bot-cf-worker`, 
							parse_mode: 'HTML',
							reply_to_message_id: msg.message_id,
						});
					}
					else {
						if (type === 'private') {
							const send_text = getSendText(msg);
							await sendMessage(env.BOT_TOKEN, { 
								chat_id: msg.chat.id, 
								text: send_text, 
								parse_mode: 'HTML',
								reply_to_message_id: msg.message_id,
							});
						}
					}
				} else if (msg.user_shared) {
					await sendMessage(env.BOT_TOKEN, { 
						chat_id: msg.chat.id, 
						text: `Chat ID: <code>${msg.user_shared.user_id}</code>`, 
						parse_mode: 'HTML'
					});
				} else if (msg.chat_shared) {
					await sendMessage(env.BOT_TOKEN, { 
						chat_id: msg.chat.id, 
						text: `Chat ID: <code>${msg.chat_shared.chat_id}</code>`, 
						parse_mode: 'HTML'
					});
				}
			}
		}
		return true;
	} catch(e) {
		throw e;
	}
}

export default {
	async fetch(request, env, ctx) {
		try {
			const secret_token = request.headers.get('x-telegram-bot-api-secret-token');
			// console.log(secret_token);
			if (secret_token && secret_token === env.BOT_SECRET_TOKEN) {
				const update = await request.json();
				console.log(update);			
				const result = await processUpdate(env, update).catch(e => console.log(e));
				if (result) {
					return Response.json({ ok: true, error: false });
				} else {
					return Response.json({ ok: false, error: true });
				}
			} else {
				return Response.json({ ok: false, error: true });
			}
		} catch (err) {
			console.log(err);
			return Response.json({ ok: false, error: true });
		}
	},
};
