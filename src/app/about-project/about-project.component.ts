import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
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
  @ViewChild('bgVideo', { static: true }) bgVideo!: ElementRef<HTMLVideoElement>;
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
  ngAfterViewInit() {
    const v = this.bgVideo.nativeElement;
    v.muted = true;            // ensure muted at runtime
    v.playsInline = true as any;
    (v as any).webkitPlaysInline = true;
    v.play().catch(() => { /* ignore; will retry on touch */ });
  }

  // As a fallback, start playback on the first tap
  @HostListener('window:touchstart', ['$event'])
  onFirstTouch() {
    const v = this.bgVideo?.nativeElement;
    if (v && v.paused) v.play().catch(() => {});
  }

}
