import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  constructor(public messageService: MessageService){
  }

}
