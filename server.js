/**
 * 
 * @authors lml (you@example.org)
 * @date    2017-06-05 09:58:54
 * @version $Id$
 */
// var http = require('http');
// var url = require('url');
// var util = require('util');
// var schedule = require('node-schedule');
// function scheduleCronstyle() {
// 	schedule.scheduleJob('30 * * * * *', function() {
// 		console.log('scheduleCronstyle:' + new Date());
// 	})
// }
// // 定时器
// scheduleCronstyle();

// function start(route) {
// 	function onRequest(request, response) {
// 		var pathname = url.parse(request.url).pathname;
// 		console.log('Request for' + pathname + ' received.');
// 		route(pathname);
// 		response.writeHead(200, {'Content-Type': 'text/plain'});
// 		response.write('Hello World exports function');
// 		response.end(util.inspect(url.parse(request.url,true)));
// 	}
// 	http.createServer(onRequest).listen(8888);
// }

// console.log('Server has started');

// exports.start = start;
var ws = require("nodejs-websocket");
console.log("开始建立连接...")

var user1 = null,
    user2 = null,
    user1Ready = false,
    user2Ready = false;
var server = ws.createServer(function(conn) {
    conn.on("text", function(str) {
        var strObj = JSON.parse(str);
        if (strObj.user === "1") {
            user1 = conn;
            user1Ready = true;
            conn.sendText("success");
        }
        if (strObj.user === "2") {
            user2 = conn;
            user2Ready = true;
        }
        if (user1Ready && user2Ready && strObj.user === "1") {
            user2.sendText(str);
        }
        if (user1Ready && user2Ready && strObj.user === "2") {
            user1.sendText(str);
        }

        conn.sendText(str)
    })
    conn.on("close", function(code, reason) {
        console.log("关闭连接")
    });
    conn.on("error", function(code, reason) {
        console.log("异常关闭")
    });
}).listen(8001)
console.log("WebSocket建立完毕")