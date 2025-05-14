import { Component } from '@angular/core';
import { StepperComponent } from "../../components/stepper/stepper.component";
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'app-captura',
  imports: [StepperComponent,CommonModule, TabsModule, BadgeModule, AvatarModule],
  templateUrl: './captura.component.html',
  styleUrl: './captura.component.scss'
})
export class CapturaComponent {

}
