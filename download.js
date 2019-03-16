var http = require('http');
var fs = require('fs');

function pDownload(url, dest) {
  var file = fs.createWriteStream(dest);
  return new Promise((resolve, reject) => {
    var responseSent = false; // flag to make sure that response is sent only once.
    http.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          if (responseSent) return;
          responseSent = true;
          resolve();
        });
      });
    }).on('error', err => {
      if (responseSent) return;
      responseSent = true;
      reject(err);
    });
  });
}

//example
pDownload('http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&text=你好我是palor我會唱歌', 'copy.mp3')
  .then(() => {
    var bitmap = fs.readFileSync('copy.mp3');
    console.log(bitmap.toString('base64'));
    console.log('downloaded file no issues...')
})
  .catch(e => console.error('error while downloading', e));


