import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(@Inject(DOCUMENT) private document: any) { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (this.document.body.scrollTop > 80 || this.document.documentElement.scrollTop > 80) {
        this.document.getElementById("navbar").style.backgroundColor = "rgb(255 255 255)";
        this.document.getElementById("navbar").style.boxShadow = "0 .5rem 1rem rgba(0,0,0,.15)";
        this.document.getElementById("logo").style.width = "50%";
      } else {
        this.document.getElementById("navbar").style.backgroundColor = "rgb(255 255 255 / 0%)";
        this.document.getElementById("navbar").style.boxShadow = "0rem 0rem rgba(0,0,0,0)";
        this.document.getElementById("logo").style.width = "60%";
        
      }
  }

  ngOnInit(): void {
  }

}
