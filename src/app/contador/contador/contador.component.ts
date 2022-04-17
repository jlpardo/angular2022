import {Component} from '@angular/core';

@Component ({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <h3>{{base}}</h3>

        <button (click)="acumular(base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)">-{{base}}</button>
        `
})

export class contadorComponent {
    title: string = 'bases';
    numero: number = 0;
    base: number = 5;
  
    acumular(base:number) {
      this.numero = this.numero + base;
    }
}