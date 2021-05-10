import { Component, AfterViewChecked } from '@angular/core';
import io from 'socket.io-client';
import Giphy from 'giphy-api';

declare const microlink;

const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements AfterViewChecked  {
  title = 'mdp';


  socket;
  message: string;
  constructor() {}
  
  ngAfterViewChecked() {
    microlink('.link-preview');
  }



  ngOnInit() {
    this.setupSocketConnection();
  
  }

  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('message-broadcast', (data: string) => {
      if (data) {
       const element = document.createElement('li');
       element.innerHTML = data;
       element.style.background = 'white';
       element.style.padding =  '15px 30px';
       element.style.margin = '10px';
       document.getElementById('message-list').appendChild(element);
       }
    });
  }

  SendMessage() {
    this.socket.emit('message', this.message);
    const element = document.createElement('li');
   element.innerHTML = this.message;
   element.style.background = 'lightblue';
   element.style.padding =  '15px 30px';
   element.style.margin = '10px';
   element.style.textAlign = 'right';
   document.getElementById('message-list').appendChild(element);
    this.message = '';
 }
 
 //Emojis

 showEmojiPicker = false;
 toggleEmojiPicker() {
  this.showEmojiPicker = !this.showEmojiPicker;
}

addEmoji(event) {
  const { message } = this;
  const text = `${message}${event.emoji.native}`;

  this.message = text;
  this.showEmojiPicker = false;
}

//GIFs
showGiphySearch = false;
giphySearchTerm = '';
giphyResults = [];
currentUser

searchGiphy() {
  const giphy = Giphy();
  const searchTerm = this.giphySearchTerm;
  giphy.search(searchTerm)
    .then(res => {
      console.log(res);
      this.giphyResults = res.data;
    })
    .catch(console.error);
}
link = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
sendGif(title, url) {
  const { currentUser } = this;
  currentUser.sendMessage({
    text: title,
    attachment: {
      link: url,
      type: 'image',
    }
  }).catch(console.error);
  this.showGiphySearch = false;
}

toggleGiphySearch() {
  this.showGiphySearch = !this.showGiphySearch;
}

sendMessage() {
  const { message, currentUser } = this;
  currentUser.sendMessage({
    text: message,
  });

  this.message = '';
}




}
