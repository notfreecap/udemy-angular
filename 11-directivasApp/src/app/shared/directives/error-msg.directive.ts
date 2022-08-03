import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit{

  private _color: string = 'red';
  private _message: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(color: string){    
    this._color = color;
    this.setColor();
  }
  @Input() set message(message: string){    
    this._message = message;
    this.setMessage();
  }

  @Input() set valido(valido: boolean | undefined){
    if(valido){
      this.htmlElement.nativeElement.classList.remove('hidden');
    }else{
      this.htmlElement.nativeElement.classList.add('hidden');
    }
  }


  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }


  ngOnInit(): void {
    this.setColor();
    this.setMessage();
  }


  setColor():void{
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage():void{
    this.htmlElement.nativeElement.textContent = this._message;
  }

}
