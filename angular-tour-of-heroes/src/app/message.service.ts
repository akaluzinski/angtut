import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messages: string[] = [];

  public add(message: string): void {

    const date = new Date();
    this.messages.push(date.toLocaleTimeString() + ' ' + message);
  }

  purge(): void {
    this.messages = [];
  }

  constructor() { }
}
