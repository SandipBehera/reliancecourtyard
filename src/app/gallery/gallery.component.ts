import { NgFor, NgIf } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-gallery',
  imports: [MatIconModule,NgFor,NgbCarouselModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  providers: [NgbCarouselConfig]
})
export class GalleryComponent {
  images = [
    {
      thumbnail: 'img/courtyard/Reliance-Courtyard-Banner-Desktop-1.webp',
      full: 'img/courtyard/Reliance-Courtyard-Banner-Desktop-1.webp',
      alt: 'Table Full of Spices',
    },
    {
      thumbnail: 'img/courtyard/Reliance-Courtyard-Banner-Desktop-2.webp',
      full: 'img/courtyard/Reliance-Courtyard-Banner-Desktop-2.webp',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'img/courtyard/gallery/08.webp',
      full: 'img/courtyard/gallery/08.webp',
      alt: 'View of the City in the Mountains',
    },
    {
      thumbnail: 'img/courtyard/gallery/01.webp',
      full: 'img/courtyard/gallery/01.webp',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'img/courtyard/gallery/04.webp',
      full: 'img/courtyard/gallery/04.webp',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'img/courtyard/gallery/06.webp',
      full: 'img/courtyard/gallery/06.webp',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'img/courtyard/DJI_20250616115350_0172_D-min-scaled.webp',
      full: 'img/courtyard/DJI_20250616115350_0172_D-min-scaled.webp',
      alt: 'Table Full of Spices',
    }
  ];
  showNavigationArrows = false;
	showNavigationIndicators = false;
  currentImage: string = '';
  groupedImages: any[] = [];
  groupedAmenities: any[][] = [];
  @ViewChild('lightbox') lightboxModal!: TemplateRef<any>;
  constructor(private modalService: NgbModal) {}

  openLightbox(imageUrl: string) {
    this.currentImage = imageUrl;
    this.modalService.open(this.lightboxModal, { size: 'lg', centered: true });
  }
  handleKeyDown(event: KeyboardEvent, imageUrl: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.openLightbox(imageUrl);
    }
  }
  ngOnInit() {
    this.groupImages();
    // this.groupedAmenities = this.chunk(this.amenities, 3);
  }

  groupImages() {
    const chunkSize = 3;
    for (let i = 0; i < this.images.length; i += chunkSize) {
      this.groupedImages.push(this.images.slice(i, i + chunkSize));
    }
  }
  chunk(arr: any[], size: number) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }
  open(title: string) {
      console.log('open', title);
      const modalRef = this.modalService.open(ModalComponent);
      modalRef.componentInstance.title = title;
    }
}
