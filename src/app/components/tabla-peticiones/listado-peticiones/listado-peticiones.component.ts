import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ModalPeticionComponent } from '../modal/modal-peticion/modal-peticion.component';
import { ModalPeticionarioComponent } from '../modal/modal-peticionario/modal-peticionario.component';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-listado-peticiones',
  imports: [TableModule, CommonModule, ButtonModule, InputTextModule, IconFieldModule, InputIconModule, DialogModule, FormsModule, ModalPeticionComponent, ModalPeticionarioComponent, ProgressSpinner],
  templateUrl: './listado-peticiones.component.html',
  styleUrl: './listado-peticiones.component.scss'
})
export class ListadoPeticionesComponent {

  // Abrir modales
  mostrarModalPeticionario: boolean = false;
  mostrarModalPeticion: boolean = false;

  abrirModalPeticionario(){
    this.mostrarModalPeticionario = true;
  }
  
  abrirModalPeticion(){
    this.mostrarModalPeticion = true;
  }

  // Cargar datos
  cargando: boolean = true;

  ngOnInit(): void{
    setTimeout(() => {
      this.cargando = false;
    }, 2000);
  }
  // Filtrar busqueda en la tabla
  filtrarTabla(event: Event, dt: any) {
    const valor = (event.target as HTMLInputElement).value;
    dt.filterGlobal(valor, 'contains');
  }
  
  // Array peticiones ejemplo, visualizar tabla
  peticiones = [
    { id: 1, folio: 'FOL123456', nombrePeticionario: 'Ezio Auditore', estatus: 'EN PROCESO', diasTranscurridos: 3 },
    { id: 2, folio: 'FOL123457', nombrePeticionario: 'Marcus Fenix', estatus: 'CANCELADO', diasTranscurridos: 1 },
    { id: 3, folio: 'FOL123458', nombrePeticionario: 'Miranda Keyes', estatus: 'ATENDIDO', diasTranscurridos: 7 },
    { id: 4, folio: 'FOL123459', nombrePeticionario: 'Nobara Kugisaki', estatus: 'EN PROCESO', diasTranscurridos: 2 }
  ];
}
