import { ChangeDetectionStrategy, Component, signal, ElementRef, viewChildren, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { animate, stagger } from 'motion';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

interface Hotspot {
  id: number;
  top: string;
  left: string;
  productName: string;
  price: number;
  image: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  products = signal<Product[]>([
    {
      id: 1,
      name: 'Axe-Base Dining Table',
      price: 150,
      rating: 5,
      reviews: 42,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYPng97UYTNTZF_9ouo-1B6_RfCY72TA4-Gn5_YnU47X8LVoOs96jovwBQ8ZaHbtWYs2K44P0TI0FxOX29W-RQmHDUwwoUThYHPBbAr0Fp2VbrhWLBoc0rQq6M9NMEJU3qTL9NZWV5q0H5-72pk5XdPtz01_iYhknz74KKgeK_iI3bjn2oM0DVHVxY7CLTHdH0bFlnfbS5kish5FDhEf1TiV3ZQ6val7UYzrauHU4Z8g3JAT0hEhLxGMAMdTQ5Ss1c4AGa1JkyPGU8'
    },
    {
      id: 2,
      name: 'Forge Bar Stool',
      price: 120,
      rating: 4.5,
      reviews: 18,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIzzmU2TdfLhyLzPiHx5rOuIHgoXtoWZZptj4wsjLE4BTP0iEBr8BSbWCOUS9ELQ8EpZkaDOiq6dXTUd4NZioxDYg7836SjtpZ62aZIxhPDPFmQu1VJYjd-asc4HSVNMp8Pn1A2joJIvZC3tS_ecw4Pyn05hDItlEFiJJ2g1Zam-Tg8JyAeNGKE4gWB0Li6Nfxmblwaf7lmL9-koPqv2nbILs9D9NlvaKied-p0lcWlxUoTjnE7O30JjP2y9RKFPturW9SjUp7dEtY'
    },
    {
      id: 3,
      name: "Engineer's Desk",
      price: 140,
      rating: 5,
      reviews: 29,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAj55mk4IMEcrUmpuVv5M-Xzi7ibHOI1RD12AqDfEWAr4qC4_e3aH6RAVz7uUjLeuCgDRWshNIjcvkeBuT-xmFZ-a8X5vjPdkPeS5Jrj_4mnM6RFT3l7nqnSzRNsTUXj3-rSfdQqVqVq-DP13sSz7KAnzX0gA-EFuYU4T6sE71w_LrVIpUtJlkZBb7gcl2OzaHYdWTFEqaqOQWjQKLRLQtf9rqMwRayBuwW2waYo0wiEy_fHpZGHN1M1a075Ju0S6HTXAMHJ3rsUrdn'
    },
    {
      id: 4,
      name: 'Filament Floor Lamp',
      price: 80,
      rating: 4,
      reviews: 12,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3L3K6CEgoU0Fc1bC0WvJ-TgK673y07ybsvgFb97cP5b0rwlJhCj44FU99DwXE3Zo7-IYhlVz73rdRrFrXQOM_be6QD7YajNfngz1TumBfe_QxlfX1A1CfxXwXJqxMzRT7cjRuqJh6yYu_WpD567095LgX8bcZCLD-B0M475V7YtmIeMiL_AzL_QgRLpgzGdusdkKu0EpapLzuLmwJgr1CcQ1h67cno8wspL64GVhl5m6Y-A2Qlmmt7PD6sGMpwu86HV91StpuxipR'
    }
  ]);

  hotspots = signal<Hotspot[]>([
    {
      id: 1,
      top: '33%',
      left: '25%',
      productName: 'Loft Sofa v.1',
      price: 2890,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdmHh1OZ--uAITtzqgLq8p-Uy3MH7oSDerys_gyHbSLvM9HIP_71FNLcZIBykNvR6VvreGf4cC6AzZ1uGRykaB5uUL4Y1xBoMgZgjPgOpxIY136rG6m8ACehkXavwzCBbf0zooHUCHGkfepRcotFiYs1yEeCvBKlSQ6v9aVHBRT2zWQTNRuasxd5dqdhzQlSB_JzMKF-u2IL71ZHhyaiq-Ajh26_fvRjxa_BB5OD3YPdSUYmlKDIDIAunuUUmZINzJQ2lrxLLEO70C'
    },
    {
      id: 2,
      top: '75%',
      left: '66%',
      productName: 'Walnut Coffee Table',
      price: 840,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW1TORzaTjMITQqEQCTjgzYzHBSDM8C1dyBOih1YRb7kH8k2p8L0q4138QKccVoQtaTxPPYR9dm4BhG_4ovaEMRQKTrVMjlryC8UP0KJpnNI9RRF4ftLRPbeAMdfOev8e_Mzk27A2DL3JPfaOZ6H8F7gJqAyxxGLlnxXNfBRLH-m0WgV8cpRaEKkmI_zzkOCIZBeiiwY1tjXUh96BVZ6Q7jguwAmBay_P2Vb5WRCURXV8OmIWfX1UbpAQkM-ZrmaJFX0lBJY6rzEQo'
    }
  ]);

  sections = viewChildren<ElementRef>('animatedSection');

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    this.sections().forEach(section => {
      observer.observe(section.nativeElement);
    });

    // Initial animations for hero
    animate('.hero-title', { opacity: [0, 1], y: [50, 0] }, { duration: 0.8, ease: 'easeOut' });
    animate('.hero-stagger', { opacity: [0, 1], y: [20, 0] }, { delay: stagger(0.1), duration: 0.6 });
  }

  getStars(rating: number): string[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) stars.push('star');
      else if (i - 0.5 <= rating) stars.push('star_half');
      else stars.push('star_outline');
    }
    return stars;
  }
}
