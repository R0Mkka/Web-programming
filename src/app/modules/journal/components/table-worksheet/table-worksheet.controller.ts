import { Injectable } from '@angular/core';

const CELL_CLASS = 'worksheet-item';

@Injectable()
export class TableWorksheetController {
  public moveUp(target: HTMLInputElement, index: number): void {
    this.moveToElement(
      target,
      target.parentElement.parentElement.previousElementSibling,
      index
    );
  }

  public moveDown(target: HTMLInputElement, index: number): void {
    this.moveToElement(
      target,
      target.parentElement.parentElement.nextElementSibling,
      index
    );
  }

  public moveRight(target: HTMLInputElement): void {
    this.moveToElement(target, target.parentElement.nextElementSibling);
  }

  public moveLeft(target: HTMLInputElement): void {
    this.moveToElement(target, target.parentElement.previousElementSibling);
  }

  private moveToElement(target: HTMLInputElement, workingElement: Element, index?: number): void {
    if (!index && workingElement) {
      target.blur();

      workingElement.querySelector('input').focus();

      return;
    }

    if (workingElement && workingElement.children[index].classList.contains(CELL_CLASS)) {
      target.blur();

      workingElement.children[index].querySelector('input').focus();
    }
  }
}
