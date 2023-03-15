# Rich Presence User Account

## Install
```bash
$ yarn install
```

## Setup
Mengimport modul terlebih dahulu
```js
const Discord = require('discord.js-selfbot-v13');
```
setelah mengimport, setup client nya untuk menonaktifkan `syncStatus` dan juga `checkUpdate`
```js
const client = new Discord.Client({
  checkUpdate: false,
  syncStatus: false
});
```

## Setup Rich Presence
pastikan menaruh kode rich presence dalam event ready.

```js
const richPresence = new Discord.RichPresence()
```
Setelah membuat variable rich presence, kita bisa menambahkan activity nya dibawah variable tersebut

### Mengubah tipe activity
```js
// pada tipe activity terdapat 4 tipe,
// yaitu PLAYING, WATCHING, LISTENING, STREAMING
.setType('PLAYING')
```

### Details
```js
// details adalah deskripsi dari activity
.setDetails('Hello World')
```
![details](https://cdn.discordapp.com/attachments/901133191962837053/1085428964073414696/image.png)

### State
```js
// state adalah status dari activity
.setState('State')
```
![state](https://media.discordapp.net/attachments/901133191962837053/1085429275882172527/image.png)

# Running
```bash
$ node index.js
```
or
```bash
$ yarn start
```