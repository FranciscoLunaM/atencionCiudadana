import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { Checkbox } from 'primeng/checkbox';

interface City {
  name: string;
}

interface Municipio {
  name: string;
}

interface Dependencia {
  name: string;
}

interface AreaDeAtencion {
  name: string;
}
@Component({
  selector: 'app-stepper',
  imports: [ButtonModule, StepperModule,InputTextModule,FloatLabel,FormsModule,Select,DatePickerModule,Checkbox],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  dateReception: Date | undefined;
  sello: Date | undefined;

  cities: City[] | undefined;
  municipios: Municipio[] | undefined;
  dependencias: Dependencia[] | undefined;
  areasDeAtencion: AreaDeAtencion[] | undefined;

  selectedDependencia: Dependencia | undefined;
  selectedMunicipio: Municipio | undefined;
  selectedCity: City | undefined;
  selectedAreaDeAtencion: AreaDeAtencion | undefined;

  ngOnInit() {
      this.municipios = [
          { name: 'Municipio 1' },
          { name: 'Municipio 2' },
          { name: 'Municipio 3' },
      ];
      this.cities = [
          { name: 'Masculino' },
          { name: 'Femenino' },
         
      ];
      this.dependencias = [
          { name: 'Dependencia 1' },
          { name: 'Dependencia 2' },
          { name: 'Dependencia 3' },
      ];
      this.areasDeAtencion = [
          { name: 'Area 1' },
          { name: 'Area 2' },
          { name: 'Area 3' },
      ]
  }
}
