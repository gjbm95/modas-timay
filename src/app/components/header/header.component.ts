import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goHome(){
    var element = document.getElementById("home");
    var elementPosition = element!!.offsetTop;
    window.scrollTo({
       top: elementPosition -100, 
       behavior: "smooth"
    });
  }

  goAboutUs(){
     var element = document.getElementById("aboutus");
     var elementPosition = element!!.offsetTop;
     window.scrollTo({
        top: elementPosition -100, 
        behavior: "smooth"
     });
  }

  goContacts(){
    var element = document.getElementById("contacts");
    var elementPosition = element!!.offsetTop;
    window.scrollTo({
       top: elementPosition -100, 
       behavior: "smooth"
    });
  }

  goProducts(){
    var element = document.getElementById("products");
    var elementPosition = element!!.offsetTop;
    window.scrollTo({
       top: elementPosition -100, 
       behavior: "smooth"
    });
  }

}
