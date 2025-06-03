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
    { value: '7.34', label: 'Acres Site Area' },
    { value: '5', label: 'Towers' },
    { value: '63', label: 'Floors' },
    { value: '10', label: 'Triplex Penthouses' },
    { value: '1,80,000+ sq ft.', label: 'Clubhouse, Stilt & Skypark Amenities' }
  ];
    amenities = [
      {
        title: 'Sky Garden',
        icon:'img/cascades/sky_garden.png',
        subtitle: 'Exclusive spaces with a view, designed for relaxation and high-end entertainment.',
        features: [
          'Infinity Lap Pool — Temperature Controlled',
          'Yoga Deck',
          'Outdoor Gym',
          'Outdoor Seating',
          'Amphitheatre'
        ]
      },
      {
        title: 'Sky Lounge',
        icon:'img/cascades/sky_laung.png',
        subtitle: 'Shared amenities at the central tower hub.',
        features: [
          'Indoor Sky Pool',
          'Studio Gym',
          'Hammam & Sauna',
          'Business Lounge'
        ]
      },
      {
        title: 'Tower Lounge',
        icon:'img/cascades/tower_laung.png',
        subtitle: 'Exclusive amenities with breathtaking views at the top of every tower.',
        features: [
          'TV Lounge',
          'Private Dining',
          'Card Room',
          'Library'
        ]
      },
      {
        title: 'Clubhouse',
        icon:'img/cascades/club_house.png',
        subtitle: 'A grand 8-floor world for socializing, exercising and relaxation.',
        features: [
          'Café & Dining',
          'Sports Lounge & Games',
          'Mini Theatre',
          'Multi-purpose Hall',
          'Spa | Gym | Pilates/Yoga Studio',
          'Squash Court | Badminton Court',
          'Outdoor Paddle Tennis Court'
        ]
      },
      {
        title: 'Under Tower',
        icon:'img/cascades/under_tower.png',
        subtitle: 'Easy to access facilities below each tower.',
        features: [
          'Guest Lounge & Library',
          'Gaming Zone/Lounge',
          'Kids Play Area | Crèche | Indoor Games',
          'Art / Pottery Studio',
          'Multi-purpose Room | Coworking Space',
          'Guest Rooms | Outdoor Gym | Mini Golf'
        ]
      },
      {
        title: 'Podium',
        icon:'img/cascades/podium.png',
        subtitle: 'Open and sheltered spaces designed for you to unwind.',
        features: [
          'Lagoon Swimming Pool | Kids Wading Pool',
          'Landscaped Gardens | Multi-purpose Lawn',
          'Kids Play Area',
          'Amphitheatre | Walking Trail',
          'Cricket Practice Net | Basketball Practice Court | Pickleball Court'
        ]
      },
      {
        title: 'Groundscape',
        icon:'img/cascades/ground.png',
        subtitle: 'A warm welcome right at the entrance.',
        features: [
          'Grand Entrance | Water Feature',
          'Grand Lobby | Bicycle Loop | Pet Corner'
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
