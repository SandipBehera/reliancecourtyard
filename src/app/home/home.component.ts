import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SliderComponent } from '../slider/slider.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { AboutProjectComponent } from '../about-project/about-project.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { FloorPlanComponent } from '../floor-plan/floor-plan.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgIf,MatIconModule, SliderComponent, ContactUsComponent, ProjectDetailsComponent, AboutProjectComponent, GalleryComponent, FloorPlanComponent, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
private modalTimer: any;
  constructor(private modalService: NgbModal) {}
  modalRef: any = null;
  showBar = false;
  ngOnInit() {
    // this.scheduleModal();
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const infoSection = document.querySelector('app-about-project');
    const scrollY = window.scrollY + window.innerHeight;

    if (infoSection) {
      const top = infoSection.getBoundingClientRect().top + window.scrollY;
      this.showBar = scrollY > top;
    }
  }

  scrollToContact() {
    const contact = document.querySelector('app-contact-us');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }
  open(title: string) {
    console.log('open', title);
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = title;
  }
  scheduleModal() {
    this.modalTimer = setTimeout(() => {
      // If modal is already open, do not open another
      if (this.modalRef) return;
  
      this.modalRef = this.modalService.open(ModalComponent);
  
      this.modalRef.result.finally(() => {
        this.modalRef = null; // Reset after close/dismiss
        this.scheduleModal(); // Schedule the next modal
      });
  
    }, 10000); // 10 seconds
  }

  ngOnDestroy() {
    clearTimeout(this.modalTimer);
  }
}
