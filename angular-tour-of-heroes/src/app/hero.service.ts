import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`Hero Service: fetching hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hero Service: fetching heroes');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
