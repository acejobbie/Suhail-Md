const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Nakuru,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c9f1fbd5b78d902762e5f.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𒋨🏴‍☠️⃝𝘼𝘾𝙀☠️𝐂𝐋͢𝐢𝚵𝐍͢𝙏⃝𒋨🉑" 


global.devs = "254726856795" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254726856795";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_04_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk1LFxuICAgICAgICA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA3LFxuICAgICAgICA1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgODMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDksXG4gICAgICAgIDI5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODksXG4gICAgICAgIDE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxLFxuICAgICAgICA1MSxcbiAgICAgICAgMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDMxLFxuICAgICAgICAzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMxLFxuICAgICAgICA5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQyLFxuICAgICAgICA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDUwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDczLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDZTJJUGdPL0M3Z3BXZFdqQjJJQVp1Vm5TYnlqamp2MVZtNFNpOVc5cVFJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcyNjg1Njc5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E1NkIyNEM2NUE5QkIyNkQyNzdDMkM0OEE2NUZGOTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTcxMDgxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzI2ODU2Nzk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNTEzQTc4QTJENjJGRTc0RkI0M0Q2NkUyRTA4MUQ1NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjExNzEwODNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY2xCNnBmNzBReE9uVkZfMlZHV0VaZ1wiLFxuICBcInBob25lSWRcIjogXCI3YjZmMDkxOC1mNmUxLTRjM2ItYjhhYi0wNDkxNzkxMWUxNGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICA0OSxcbiAgICAgIDEzNyxcbiAgICAgIDIzMyxcbiAgICAgIDM3LFxuICAgICAgMTkyLFxuICAgICAgMjA3LFxuICAgICAgMTIyLFxuICAgICAgMTg4LFxuICAgICAgMjQsXG4gICAgICAxNjcsXG4gICAgICA5NyxcbiAgICAgIDEyMSxcbiAgICAgIDE4MCxcbiAgICAgIDE4LFxuICAgICAgMTQ5LFxuICAgICAgMjAwLFxuICAgICAgMTgsXG4gICAgICAxODQsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICA3OCxcbiAgICAgIDE2OSxcbiAgICAgIDE3OSxcbiAgICAgIDEwOSxcbiAgICAgIDEzLFxuICAgICAgMTk4LFxuICAgICAgOTMsXG4gICAgICAyMDMsXG4gICAgICAxNzEsXG4gICAgICAxNTYsXG4gICAgICAyMDksXG4gICAgICAxMTMsXG4gICAgICA0MCxcbiAgICAgIDIwOCxcbiAgICAgIDI1NCxcbiAgICAgIDY0LFxuICAgICAgMTksXG4gICAgICAxLFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZMUzVETFJSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MjY4NTY3OTU6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NTk4OTc1MDM3MDU1Mjo3MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLMzB5ZnNGRUlENTI3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBPQ1JVQ3FGVVJpdVM2WTh2QjVyRVpGdm9aZFEwS3dqc2NaY2VFelBPbEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicUdVaSt4UWUraUNQVE5YU3JGZ21OeWFjandkTnNrM1cwcHBlWE9XeHkwdWRMcmlYbHA2RHM2RStWRUpYcXpvM3ZnTkRxTDVtOVpCZUl1eE9xUDg0Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU3hSdTd5b084cExLak13aURRaXNwcTVDMlZWM3BWVC9jaDYrRnU4VXo3dkYxcG4xdDN3R0NXMmMwc0F2ZTZFRy9WTDB3MExPSno5amR5ZGlsenBoaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzI2ODU2Nzk1OjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTcxMDc2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ𖤍🔥",
  packname: process.env.PACK_NAME || "ɪ αɱ 𝙰ϲе™⟬𝟭⟭",
  botname : process.env.BOT_NAME  || "𒋨🏴‍☠️⃝𝘼𝘾𝙀☠️𝘽𝙊𝙏⃝𒋨🉑",
  ownername:process.env.OWNER_NAME|| "🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ𖤍🔥",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
