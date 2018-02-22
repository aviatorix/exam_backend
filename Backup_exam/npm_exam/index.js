
var registered=[];
var newPost={};
var reqFriendEffect=[];
var reqFriendReceive=[];
var counter = 1;
var social = [
  {
    id:counter,
    name:"Daviano",
    surname:"Amarù",
    friends:[],
    reqPendE:[],
    reqPendR:[],
    post:["My First Post"],

  }
]

 exports.sendToSocial = function(name, surname){ //registrazione
      counter++;
      social.push({//0
      id:counter,
      name:name,
      surname:surname,
      friend:[],
      reqPendE:[],
      reqPendR:[],
      post:[]
    });
    registered.push({
    id:counter,
    name:name,
    surname:surname,
    friend:[],
    reqPendE:[],
    reqPendR:[],
    post:[]
  });
  return "insertion successfully completed";
}

exports.viewAllUsers = function(){ // lista tutti gli utenti
  return social;
}

exports.insertPost = function(id,newPost){
  countPost=0;
  for(var i=0;i<social.length; i++){
    if(id===social[i].id){
      social[i].post.push(newPost);

    }
  }
  return "Post Inserted";
}

exports.reqSendFriendship = function(id,idFriend){ //mi manda una richiesta

  for(var i=0;i<i<social.length; i++){
    if(social[i].id.reqPendE===idFriend||social[i].id.friends===idFriend){
      return "Sorry friend already present"
    }
    else{
      social[i].reqPendE.push(idFriend);
      reqFriendEffect.push({id:id,
        request:"send"});
        for(var i=0;i<i<social.length; i++){
          if(social[i].id===idFriend){
            social[i].reqPendR.push(id);
            return "Request send";
          }

        }
      }
    }
  }

exports.reqFriendship = function(idFriend,id){ //mi manda una richiesta

  for(var i=0;i<i<social.length; i++){
    if(social[i].id.reqPendR===id||social[i].id.friends===id){
      return "Sorry friend already present"
    }
    else{
      social[i].reqPendR.push(idFriend);
      reqFriendReceive.push({id:idFriend,
        request:"receive"});
        for(var i=0;i<i<social.length; i++){
          if(social[i].id===idFriend){
            social[i].reqPendE.push(id);
            return "Request received";
          }
        }
      }
    }
  }

exports.removePost = function(id){
  for(var i=0; i<social.length;i++){
    if(social[i].id===id){
      social[i].post.splice(i,1);
      return "Post is deleted"
    }
  }

}

exports.removeReqE = function(id){
  for(var i=0; i<social.length;i++){
    if(social[i].id===id){
      social[i].reqPendE.splice(i,1);
      return "Request is deleted"
    }
  }

}
exports.acceptFriend = function(id,idFriend){
  for(var i=0; i<social.length;i++){
    if(social[i].id===id) {
      if(parseInt(social[i].reqPendR)===idFriend){
        social[i].friends=[idFriend]
        social[i].reqPendR.splice(i,1);
      }

      return "you accepted a friend";
    }
  }
}
