import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe.component';
import { ListadoComponent } from '../listado/listado.component';

@NgModule({
  declarations: [HeroeComponent, ListadoComponent],
  exports: [ListadoComponent, HeroeComponent],

  imports: [CommonModule],
})
export class HeroesModule {}

//heroes.module.ts se crea un modulo nuevo para que no este todo en el mismo lugar o sea en app.module
// primero colocamos en ngmodule con su importacion en @angular/core , dsp en las declaraciones importadmos todos los
//archivos que quiero incluir y en las importaciones hago lo mismo
//commonmodule hace q se pueda utilizar los ngfor ngif etc
