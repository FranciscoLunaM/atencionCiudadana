import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-modal-peticion',
  imports: [DialogModule, FormsModule, InputTextModule, DividerModule, FloatLabelModule, SelectModule, DatePickerModule, CheckboxModule],
  templateUrl: './modal-peticion.component.html',
  styleUrl: './modal-peticion.component.scss'
})
export class ModalPeticionComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  peticion = {
    folio: '',
    nombrePeticionario: '',
    conSello: false,
  }
  
  cerrar(){
    this.visibleChange.emit(false);
  }

}
