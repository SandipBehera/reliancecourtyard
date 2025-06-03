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
      thumbnail: 'img/cascades/luxury-apartments-cascades-neopolis-gallery-img1.jpg',
      full: 'img/cascades/luxury-apartments-cascades-neopolis-gallery-img1.jpg',
      alt: 'Table Full of Spices',
    },
    {
      thumbnail: 'img/cascades/luxury-apartments-cascades-neopolis-gallery-img2.jpg',
      full: 'img/cascades/luxury-apartments-cascades-neopolis-gallery-img2.jpg',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'img/cascades/luxury-apartments-cascades-neopolis-gallery-img3.jpg',
      full: 'img/cascades/luxury-apartments-cascades-neopolis-gallery-img3.jpg',
      alt: 'View of the City in the Mountains',
    },
    {
      thumbnail: 'img/cascades/luxury-apartments-cascades-neopolis-gallery-img4.jpg',
      full: 'img/cascades/luxury-apartments-cascades-neopolis-gallery-img4.jpg',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'img/cascades/luxury-apartments-cascades-neopolis-gallery-img5.jpg',
      full: 'img/cascades/luxury-apartments-cascades-neopolis-gallery-img5.jpg',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'img/cascades/luxury-apartments-cascades-neopolis-gallery-img6.jpg',
      full: 'img/cascades/luxury-apartments-cascades-neopolis-gallery-img6.jpg',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'img/cascades/luxury-apartments-cascades-neopolis-overview-img1.jpg',
      full: 'img/cascades/luxury-apartments-cascades-neopolis-overview-img1.jpg',
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
