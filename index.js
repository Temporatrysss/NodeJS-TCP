var net = require('net');
var textChunk = '';
let count = 0;
var server = net.createServer(function (socket) {
  socket.setEncoding('utf-8');
  socket.write('Echo server\r\n');
  socket.on('data', function (data) {
    // count++;
    textChunk += data;
    // if (count == 2) {
    //   const arr = textChunk.split('</EndofFile>');
    //   console.log(JSON.parse(arr[0]).base64);
    //   textChunk = '';
    //   count = 0;
    // }
    // console.log(data);
    console.log('data');
    //const arr = data.split('</EndofFile>');
    // console.log(JSON.parse(arr[0]).base64);
    //textChunk = data.toString('utf8');
    //console.log(textChunk);
    //socket.write(textChunk);
  });
  socket.on('end', function () {
    const arr = textChunk.split('</EndofFile>');
    console.log(JSON.parse(arr[0]).base64);
    //console.log(textChunk);
    textChunk = '';
  });
});
server.listen(3010, '58.114.172.33');

// // Import net module.
// var net = require('net');

// // Create and return a net.Server object, the function will be invoked when client connect to this server.
// var server = net.createServer(function (client) {

//   //console.log('Client connect. Client local address : ' + client.localAddress + ':' + client.localPort + '. client remote address : ' + client.remoteAddress + ':' + client.remotePort);

//   client.setEncoding('utf-8');

//   client.setTimeout(1000);

//   // When receive client data.
//   client.on('data', function (data) {

//     // Print received client data and length.
//     //console.log('Receive client send data : ' + data + ', data size : ' + client.bytesRead);
//     const arr = data.split('</EndofFile>');
//     //console.log(JSON.parse(arr[0]).base64);
//     console.log(arr.toString());

//     // Server send data back to client use client net.Socket object.
//     //client.end('Server received data : ' + data + ', send back to client data size : ' + client.bytesWritten);
//   });

//   // When client send data complete.
//   client.on('end', function () {
//     //console.log('Client disconnect.');

//     // Get current connections count.
//     server.getConnections(function (err, count) {
//       if (!err) {
//         // Print current connection count in server console.
//         //console.log("There are %d connections now. ", count);
//       } else {
//         console.error(JSON.stringify(err));
//       }

//     });
//   });

//   // When client timeout.
//   client.on('timeout', function () {
//     console.log('Client request time out. ');
//   })
// });

// // Make the server a TCP server listening on port 9999.
// server.listen(3010, function () {

//   // Get server address info.
//   var serverInfo = server.address();

//   var serverInfoJson = JSON.stringify(serverInfo);

//   //console.log('TCP server listen on address : ' + serverInfoJson);

//   server.on('close', function () {
//     //console.log('TCP server socket is closed.');
//   });

//   server.on('error', function (error) {
//     console.error(JSON.stringify(error));
//   });

// });
