import { Location } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(public location: Location, private element: ElementRef) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbarToggler')[0];

        this.changeContainer(window.innerWidth)
    }

    onResize(event) {
        this.changeContainer(event.target.innerWidth);
    }

    changeContainer(width) {
        const classyContainer = document.getElementsByClassName('classy-nav-container')[0]
        if (width < 991) {
            classyContainer.classList.remove('breakpoint-off');
            classyContainer.classList.add('breakpoint-on');
        } else {
            classyContainer.classList.remove('breakpoint-on');
            classyContainer.classList.add('breakpoint-off');
        }
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const menu = document.getElementsByClassName('classy-menu')[0];
        setTimeout(function() {
            toggleButton.classList.add('active');
            menu.classList.add('menu-on');
        }, 500);

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const menu = document.getElementsByClassName('classy-menu')[0];
        // console.log(html);
        this.toggleButton.classList.remove('active');
        this.sidebarVisible = false;
        menu.classList.remove('menu-on');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    isDocumentation() {
        const titlee = this.location.prepareExternalUrl(this.location.path());
        if ( titlee === '/documentation' ) {
            return true;
        } else {
            return false;
        }
    }
}
