var counter=1;
var registered=[];
var newPost={};
var reqFriendEffect=[];
var reqFriendReceive=[];
var social = [
  {
    id:counter,
    name:"Daviano",
    surname:"Amarù",
    friends:[],
    reqPendE:[],
    reqPendR:[],
    post:[{
        message:"My First Post"
    }],

  }
]

var sendToSocial = function(name, surname){ //registrazione
    counter++;
  for(var i=0;i<social.length; i++){
      registered[i]={
      id:counter,
      name:name,
      surname:surname,
      friend:[],
      reqPendE:[],
      reqPendR:[],
      post:[]
    }
  }
    social.push(registered);

    return "insertion successfully completed";
}

var viewAllUsers = function(){ // lista tutti gli utenti
  return social;
}

var insertPost = function(id,newPost){
  countPost=0;
  for(var i=0;i<social.length; i++){
    if(id===social[i].id){
      social[i].post.push(newPost);

    }
  }
  return "Post Inserted";
}

var reqSendFriendship = function(id,idFriend){
  reqFriendEffect.push({id:idFriend,
    request:"send"});//mando una richiesta(io)
    for(var i=0;i<social.length; i++){
      if(id===social[i].id){
        social[i].reqPendE.push(idFriend);
      }
    }
    for(var i=0;i<social.length; i++){//riceve la mia richiesta
      if(social[i].id===idFriend){
        social[i].reqPendR.push(id);
        console.log(social[i].reqPendR.push(id));
      }
    }
    return "Request effectuated"
  }

  var reqFriendship = function(idFriend){

    for(var i=0;i<i<social.length; i++){
      if(social[i].id.reqPendR===idFriend||social[i].id.friends===idFriend){
        reqFriendReceive.push({id:idFriend,
          request:"receive"});
          return "Sorry friend already present"
          }
          else{
          return "Request received"
        }
      }
    }

/*
//console.log(sendToSocial("Vincenzo","Piro"));
//console.log(insertPost(1,"Ciao bello"));
console.log(reqSendFriendship(1,2));

console.log(reqFriendship(1));
console.log(viewAllUsers());


console.log(reqFriendEffect);
*/
