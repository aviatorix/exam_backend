
## get fake products

## Installation

    npm i npm_exam_package


## Usage

For npm_exam_package

```js
var social = require('./index.js');

social.sendToSocial("Caio","Sempronio");//sign in in social
social.insertPost(1,"Hello World");//insert a post
social.reqSendFriendship(1,2);//send a request of friendship
social.reqFriendship(2,1);//receive a request of friendship
social.removePost(1);//remove a post
social.removeReqE(1);//remove a request of friendship
social.acceptFriend(1,2);//accept a request of friendship


```
