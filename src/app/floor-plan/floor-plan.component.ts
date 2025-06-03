import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-floor-plan',
  imports: [],
  templateUrl: './floor-plan.component.html',
  styleUrl: './floor-plan.component.css'
})
export class FloorPlanComponent {

  constructor(private modalService: NgbModal) {}

  open(title: string) {
        console.log('open', title);
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.title = title;
      }
}
