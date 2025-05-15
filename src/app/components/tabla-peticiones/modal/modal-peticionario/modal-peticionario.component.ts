import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-modal-peticionario',
  imports: [DialogModule, FormsModule, InputTextModule, DividerModule, FloatLabelModule, SelectModule],
  templateUrl: './modal-peticionario.component.html',
  styleUrl: './modal-peticionario.component.scss'
})
export class ModalPeticionarioComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  peticionario = {
    folio: '',
    nombrePeticionario: ''
  }
  
  cerrar(){
    this.visibleChange.emit(false);
  }
}
