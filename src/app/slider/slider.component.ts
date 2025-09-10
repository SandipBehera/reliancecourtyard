import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VisitorTrackerService } from '../visitor-tracker.service';
import { ModalComponent } from '../modal/modal.component';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slider',
  imports: [NgbCarouselModule,MatIconModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  providers: [NgbCarouselConfig]
})
export class SliderComponent {
  ismobile = false;
  showNavigationArrows = false;
	showNavigationIndicators = false;
  constructor(private VisitorTrackerService:VisitorTrackerService,@Inject(PLATFORM_ID) private platformId: Object, private modalService: NgbModal){}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ismobile = window.innerWidth <= 768;
    }
    console.log('ismobile', this.ismobile);
    this.VisitorTrackerService.logVisitor('https://RelianceCourtyard.keyonprop.com').subscribe({
      next: (res) => console.log('Visitor logged', res),
      error: (err) => console.error('Error logging visitor:', err)
    });
  }

  open(title: string) {
    const modalRef = this.modalService.open(ModalComponent, {
      centered: true,
      backdrop: 'static',
      size: 'md',
    });
    modalRef.componentInstance.title = title;
    }
}
