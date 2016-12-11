import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  public links: any[] = [
    {
      name: 'GitHub',
      url: 'https://yak-yak-yak',
      icon: 'web',
    },
    {
      name: 'Issues',
      url: 'https://yak-yak-yak',
      icon: 'bug_report',
    },
    {
      name: 'yak-yak-yak',
      url: 'yak-yak-yak',
      icon: 'person',
    },
  ];

  constructor() { }

  ngOnInit() { }
}
