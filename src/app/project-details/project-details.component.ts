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
    { value: '4.34 Acres', label: 'Land Area' },
    { value: '3', label: 'Towers' },
    { value: 'G+14 & G+16', label: 'Floors' },
    { value: '347', label: 'Homes' },
  ];
    amenities = [
      {
        title: 'Sports Arena',
        icon:'img/cascades/sky_garden.png',
        subtitle: 'Exclusive spaces with a view, designed for relaxation and high-end Sports Activities.',
        features: [
          'Jogging Track',
          'Badminton Court',
          'Kids Play Area',
          'Multi-purpose Court',
          'Gym',
          'Yoga & Meditation Zone',
        ]
      },
      {
        title: 'Parks & Gardens',
        icon:'img/cascades/sky_laung.png',
        subtitle: 'Beautifully landscaped gardens and parks for relaxation and leisure.',
        features: [
          'Pet Park',
          'Zen Garden',
          'Elderly Park',
        ]
      },
      {
        title: 'Entertainment Zone',
        icon:'img/cascades/tower_laung.png',
        subtitle: 'A vibrant space for socializing and entertainment with family and friends.',
        features: [
          'Amphitheatre',
          'Banquet Hall',
          'Card Room',
          'Library'
        ]
      },
      {
        title: 'Lounge & Club House',
        icon:'img/cascades/club_house.png',
        subtitle: 'A luxurious space for relaxation and social gatherings.',
        features: [
          'Business Lounge',
        ]
      },
     
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
