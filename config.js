const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Nakuru,Kenya."


global.mongodb= process.env.MONGODB_URI || " mongodb+srv://userbot:userbot@cluster0.iweqz.mongodb.net/test?retryWrites=true&w=majority"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_00_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODksXG4gICAgICAgIDU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3LFxuICAgICAgICA0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDg1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQxLFxuICAgICAgICA5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgNzQsXG4gICAgICAgIDk1LFxuICAgICAgICA2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyLFxuICAgICAgICA2NyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNCxcbiAgICAgICAgNzksXG4gICAgICAgIDc0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMixcbiAgICAgICAgOTIsXG4gICAgICAgIDg5LFxuICAgICAgICA4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwLFxuICAgICAgICA1NixcbiAgICAgICAgMjI4LFxuICAgICAgICA5NixcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NixcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQUVEMzhGcGQ4ZlM4d3pkRDVxYVVkeE9PemxoRi8yWVNyZ3J1QWVSTHRiQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MjY4NTY3OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE1MzREODBGRTBFMTg3QTE4MDNGOTY2MTJEQjBCNUU5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTE5NjAzM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5TzB6bmI2Q1FuU09teWZpTnNpdWhnXCIsXG4gIFwicGhvbmVJZFwiOiBcImE3ZmYyNWFkLTUzNTctNDZlYS05NTgyLTIzMzM5MmU0NzkwZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICAyMjIsXG4gICAgICAxMjUsXG4gICAgICA2NCxcbiAgICAgIDE5MCxcbiAgICAgIDE4NyxcbiAgICAgIDE4LFxuICAgICAgMTk1LFxuICAgICAgMTIzLFxuICAgICAgMTg0LFxuICAgICAgNjIsXG4gICAgICA2MyxcbiAgICAgIDU5LFxuICAgICAgMjAsXG4gICAgICAyMjEsXG4gICAgICAxOTMsXG4gICAgICAxOTksXG4gICAgICA5LFxuICAgICAgMTgyLFxuICAgICAgNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzIsXG4gICAgICA4MixcbiAgICAgIDE2NCxcbiAgICAgIDEyOSxcbiAgICAgIDY5LFxuICAgICAgMTA4LFxuICAgICAgMTA5LFxuICAgICAgNjUsXG4gICAgICAyNDgsXG4gICAgICAyNDcsXG4gICAgICAxNTIsXG4gICAgICAyMjYsXG4gICAgICA2OSxcbiAgICAgIDU2LFxuICAgICAgNDUsXG4gICAgICAxMTUsXG4gICAgICAxOTgsXG4gICAgICAxMTUsXG4gICAgICAyMzksXG4gICAgICAyNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzQyM0dQUzdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyNjg1Njc5NTo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg1OTg5NzUwMzcwNTUyOjcyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0s3MHlmc0ZFUGE3M2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUE9DUlVDcUZVUml1UzZZOHZCNXJFWkZ2b1pkUTBLd2pzY1pjZUV6UE9sQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBakIyMGVWSDZkTVRkelpZUEhSY3pWWFpaa0UvZmRqMXlYRVNHOUJZOHUyR3JhZjZmVHpVZkZnbXJ1aWlBbHllZUdLTXUvcnA4K3AxQ0hnMWVtQmZDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2YkxKMEpBaXh2MlBuK0djWExsL1NHVHFreFk2WDdOeFp2dkVYM2RHWkQvQ1piRUd4S3NEckl4Zit1WDlwR0d6dFE5eWZOb1pCVlNobUQraVMyL1JpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MjY4NTY3OTU6NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExOTYwMjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCckFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJyQS5qc29uIjogIntcImtleURhdGFcIjpcInU3cjRwMkxac2M4Um5nTUw4cWVpb3BQRnR5Q1VFVklQSitiQTIvWVlyUDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYwMTMzNzkwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTE5NTk5ODgxNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "A17_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "•Ⓐϲԑƭђεɱα𝖛ҿ𝖗𝖎𝖼қ𖤍" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
  LANG: ( process.env.THEME ||  "⟬𝕯⟭𝐞𝐦𝐨𝐧𝐬🏴‍☠️"  ).toUpperCase(),



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
