import { CommonModule, isPlatformBrowser, NgFor } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-details',
  imports: [NgFor,MatIconModule,NgbCarouselModule, CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
  providers: [NgbCarouselConfig]
})
export class ProjectDetailsComponent {
  stats = [
    { value: '1.3 Acres', label: 'Land Area' },
    { value: '1', label: 'Towers' },
    { value: 'G+7', label: 'Floors' },
    { value: '131', label: 'Homes' },
  ];
    amenities = [
      {
        title: 'Project Highlights',
        icon:'img/cascades/sky_garden.png',
        subtitle: 'Exclusive spaces with a view, designed for relaxation and high-end Sports Activities.',
        features: [
          'Located at Shankarpally',
          '131 thoughtfully designed 2 BHKs',
          '7,500 Sq. Ft. Clubhouse',
          '70% open spaces',
          '100% Vaastu oriented design',
        ]
      },
      {
        title: '25+ Amenities',
        icon:'img/cascades/sky_laung.png',
        subtitle: 'Beautifully landscaped gardens and parks for relaxation and leisure.',
        features: [
          'Gymnasium',
          'Tot Lots',
          'Kids Play Area',
          'Provision for Reading Room',
          '3 Guest Room',
          'Indoor Games Room',
          'Walking Track',
          'AC Function Hall',
          'Basket Ball Area',
          'Provision for Grocery Store',
          '24×7 Power Back-up',
          'ECO STP'
        ]
      }
    ];
  showNavigationArrows = false;
	showNavigationIndicators = false;
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
