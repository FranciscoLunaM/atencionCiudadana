import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { Checkbox } from 'primeng/checkbox';
import { formatDate } from '@angular/common';
import { DividerModule } from 'primeng/divider';



interface City {
  name: string;
}

interface Municipio {
  name: string;
  id: number;
}

interface Dependencia {
  name: string;
  id: number;
}

interface AreaDeAtencion {
  name: string;
  id: number;
}
@Component({
  selector: 'app-stepper',
  imports: [ButtonModule, StepperModule,InputTextModule,FloatLabel,FormsModule,Select,DatePickerModule,Checkbox,ReactiveFormsModule,DividerModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  disabledSelloStatus: boolean = true;
  dateReception: Date | undefined ;
  selloStatus: boolean = false;
  sello: Date | undefined;

  cities: City[] | undefined;
  municipios: Municipio[] | undefined;
  dependencias: Dependencia[] | undefined;
  areasDeAtencion: AreaDeAtencion[] | undefined;

  selectedDependencia: Dependencia | undefined;
  selectedMunicipio: Municipio | undefined;
  selectedSex: City | undefined;
  selectedAreaDeAtencion: AreaDeAtencion | undefined;

  peticionarioForm= new FormGroup({
    nombre: new FormControl(),
    apellido_paterno: new FormControl(),
    apellido_materno: new FormControl(),
    telefono: new FormControl(),
    curp: new FormControl(),
    email: new FormControl(),
    sexo: new FormControl(),
    id_municipio:new FormControl(),
    direccion:new FormControl(),
    observaciones:new FormControl()
    
  })
  
  peticionForm=new FormGroup({
    id_peticionario:new FormControl(),
    id_dependencia:new FormControl(),
    id_usuario:new FormControl(),
    id_area_atencion:new FormControl(),
    fecha_recepcion:new FormControl(),
    fecha_sistema:new FormControl(),
    opciones_sello:new FormControl(),
    observaciones:new FormControl(),
    folio:new FormControl(),
    asunto:new FormControl(),
    tipo_documento:new FormControl(),
    estatus:new FormControl(),
    fecha_sellado:new FormControl()
  })

  ngOnInit() {
      this.municipios = [
          { name: 'Municipio 1' ,id:1},
          { name: 'Municipio 2' ,id:2},
          { name: 'Municipio 3' ,id:3},
      ];
      this.cities = [
          { name: 'Masculino' },
          { name: 'Femenino' },
         
      ];
      this.dependencias = [
          { name: 'Dependencia 1',id:1},
          { name: 'Dependencia 2',id:2 },
          { name: 'Dependencia 3',id:3 },
      ];
      this.areasDeAtencion = [
          { name: 'Area 1' ,id:1 },
          { name: 'Area 2' ,id:2 },
          { name: 'Area 3' ,id:3 },
      ]
  }

  onChangeStatus(){
      this.disabledSelloStatus=this.selloStatus
      if(!this.selloStatus==false)
        {
          this.sello = undefined
          this.peticionForm.value.fecha_sellado=undefined
        }
  }

  test(){
    this.peticionarioForm.value.sexo=this.selectedSex?.name
    this.peticionarioForm.value.id_municipio=this.selectedMunicipio?.id
    this.peticionForm.value.id_dependencia=this.selectedDependencia?.id
    this.peticionForm.value.id_area_atencion=this.selectedAreaDeAtencion?.id
    this.peticionForm.value.fecha_sistema=formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
    this.peticionForm.value.opciones_sello=this.selloStatus.valueOf()

    if(this.dateReception){
      this.peticionForm.value.fecha_recepcion=formatDate(this.dateReception, 'yyyy-MM-dd', 'en-US')
    }
    if(this.sello){
      this.peticionForm.value.fecha_sellado=formatDate(this.sello, 'yyyy-MM-dd', 'en-US')
    }
    

    console.log(this.peticionarioForm.value)
    console.log(this.peticionForm.value)
  }
}
