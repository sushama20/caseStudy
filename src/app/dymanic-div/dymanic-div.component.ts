import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dymanic-div',
  templateUrl: './dymanic-div.component.html',
  styleUrls: ['./dymanic-div.component.scss']
})
export class DymanicDivComponent implements OnInit {

  divCount: number = 4;

  constructor(private rd: Renderer2) { }

  ngOnInit(): void {
  }

  showAlert(event:any){
    const button = event.target as HTMLButtonElement;
    alert(`Button in  ${button.id}th div  clicked`);
  }

   scrollHandler() {
    const distanceToBottom = document.body.getBoundingClientRect().bottom;
    if (distanceToBottom < document.documentElement.clientHeight + 150) {
      this.divCount++;
      const div1 = this.rd.createElement('div');
         let btn = this.rd.createElement("button");
         let text = this.rd.createText(`div ${this.divCount}`);
         this.rd.setProperty(btn, 'id', this.divCount);
         this.rd.appendChild(btn, text);
         this.rd.appendChild(div1, btn);
         this.rd.addClass(div1, 'dynamic-div' );
         this.rd.listen(btn, "click", () => {
           alert(`Button  in  ${btn.id}th div  clicked`);
          });
         const myElement: HTMLElement | null= document.getElementById('content');
         if(myElement != null){
          myElement.appendChild<HTMLDivElement>(div1);
        }
    }
  }

  @HostListener("window:scroll", [])
    onScroll(): void {
      this.scrollHandler();
  }

}
