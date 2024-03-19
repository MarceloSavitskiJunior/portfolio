import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  ngOnInit(): void {
    const accordionItems = document.querySelectorAll('.accordion__item');

  accordionItems.forEach(item => {
      const title = item.querySelector('.accordion__title');
      const content = item.querySelector('.accordion__content');

      title?.addEventListener('click', () => {
          item.classList.toggle('active');
          content?.classList.toggle('accordion__content--open');
      });
  });
  }

}
