import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.css']
})
export class CapabilitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickAccordion(event) {
    const accordions = document.getElementsByTagName('dd');
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].style.display = 'none';
    }

    const ddItem = event.target.nextElementSibling;
    ddItem.style.display = 'block';
  }

}
