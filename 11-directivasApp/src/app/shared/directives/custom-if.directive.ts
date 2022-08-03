import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf(condition: boolean){
    condition ? this.viweContainer.createEmbeddedView(this.templateRef)
              : this.viweContainer.clear();
  }

  constructor(
      private templateRef: TemplateRef<HTMLElement>,
      private viweContainer: ViewContainerRef
    ) { }

}
