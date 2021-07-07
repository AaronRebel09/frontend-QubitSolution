import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

   // tslint:disable-next-line:member-ordering
   alternate = true;
   // tslint:disable-next-line:member-ordering
   toggle = true;
   // tslint:disable-next-line:member-ordering
   color = false;
   // tslint:disable-next-line:member-ordering
   size = 40;
   // tslint:disable-next-line:member-ordering
   expandEnabled = true;
   // tslint:disable-next-line:member-ordering
   contentAnimation = true;
   // tslint:disable-next-line:member-ordering
   dotAnimation = true;
   // tslint:disable-next-line:member-ordering
   side = 'left';
 
   // tslint:disable-next-line:member-ordering
   entries = [
     {
       header: 'Casa Cooperativa Chiapas',
       content: 'Paquete, Caja con 2 Bolsas de Cafe',
       side: '03 Julio 2021 - 05am:00:00',
       index: 0
     },
     {
       header: 'Centro Distribucion Chiapas',
       content: 'En camino a CDMX',
       side: '03 Julio 2021 - 07am:00:00',
       index: 1
     },
     {
       header: 'Centro Distribucion CDMX',
       content: 'Llegada a Centro Distribucion en camino a su destino',
       side: '03 Julio 2021 - 09am:00:00',
       index: 2
     },
     {
       header: 'En camino biciEntrega ...',
       content: 'Paquete, Caja con 2 Bolsas de Cafe',
       side: '03 Julio 2021 - 09am:20:00',
       index: 3
     }
   ];
 
   addEntry() {
     this.entries.push({
       header: 'header',
       content: 'content',
       side: 'side',
       index: 0
     });
   }
 
   removeEntry() {
     this.entries.pop();
   }
 
   onHeaderClick(event) {
     if (!this.expandEnabled) {
       event.stopPropagation();
     }
   }
 
   onDotClick(event) {
     if (!this.expandEnabled) {
       event.stopPropagation();
     }
   }
 
   onExpandEntry(expanded, index) {
     console.log(`Expand status of entry #${index} changed to ${expanded}`);
   }


}
