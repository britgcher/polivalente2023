// src/app/header/header.component.ts
import { Component, Input } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideDownUp', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.6s ease-out')
      ]),
      transition('* => void', [
        animate('0.6s ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class HeaderComponent{
  @Input() isAccordionOpen: boolean = false;

  isMobile: boolean;
  private resizeSubscription: Subscription;

  constructor(private platform: Platform) {
    this.isMobile = this.platform.width() < 1025;

    // Inscreva-se em eventos de redimensionamento da janela para atualizar a lógica de exibição
    this.resizeSubscription = this.platform.resize.subscribe(() => {
      this.isMobile = this.platform.width() < 900;
    });
  }

  ngOnDestroy() {
    // Certifique-se de cancelar a inscrição para evitar vazamentos de memória
    this.resizeSubscription.unsubscribe();
  }

  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }
}