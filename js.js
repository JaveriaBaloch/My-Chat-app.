
socket = io()


$(()=>{
$('button').click(()=>{
message = {name:$('input').val(),message:$('textarea').val()}
postMessage()
})
getMessages()
})

socket.on('message',addMessage)
function addMessage(message){
$('.messages').append(`
<div class="col-lg-7 my-3 mx-3 col-md-8 com-sm-10 card card-body msg">
    <h3>${message.name}</h3>
    <p>${message.message}</p>
</div>
`)
}


function postMessage(){
$.post('http://localhost:3000/messages',message)
}


function getMessages(){
$.get('http://localhost:3000/messages',(messages)=>{
messages.forEach(addMessage)
})
}