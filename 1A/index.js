var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODFhNThiMjZmZjc3NjAwMTJiNjc4ZGUiLCJ1c2VybmFtZSI6Im1peGEueXVyaW5AeWFuZGV4LnJ1Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE0NzgxMjE2NTF9.pq37bFLje-TL9j8p4mJ1JOIGUId5pyDdRODP98_8n-w';
var skb = new Skb(token);
skb.taskHelloWorld('First step!');