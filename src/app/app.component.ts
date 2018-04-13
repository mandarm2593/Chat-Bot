import { Component } from '@angular/core';
import { ApiAiClient } from 'api-ai-javascript';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages=[];
  inputText:any =null;
  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  constructor() {
     
  }

  acceptInput(e){
    //e.preventDefault();

   // console.log(this.inputText);
    this.client.textRequest(this.inputText)
    .then(res => 
      {
        let messageBot = {
          content: res.result.fulfillment.speech,
        from: 'bot'
        };
        let messageUser = {
          content: this.inputText,
        from: 'user'
        };
        this.messages.push(messageUser);

        this.messages.push(messageBot);
        console.log(res.result.fulfillment.speech);
      });
    
  }

}
