import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about-project',
  imports: [MatIconModule],
  templateUrl: './about-project.component.html',
  styleUrl: './about-project.component.css'
})
export class AboutProjectComponent {
  ismobile = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private modalService: NgbModal,) {
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ismobile = window.innerWidth <= 768;
    }
  }
  open(title: string) {
    console.log('open', title);
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = title;
  }

}
