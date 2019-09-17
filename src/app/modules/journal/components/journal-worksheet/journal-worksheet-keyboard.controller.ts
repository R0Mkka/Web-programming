import { Injectable } from '@angular/core';

const CELL_CLASS = 'cell';
const ACTIONS_PANEL_CLASS = 'actions-panel';

@Injectable()
export class WorksheetKeyboardController {
  public moveUp(target: HTMLInputElement): void {
    this.moveToElement(
      target,
      target.previousElementSibling as HTMLElement
    );
  }

  public moveDown(target: HTMLInputElement): void {
    this.moveToElement(
      target,
      target.nextElementSibling as HTMLElement
    );
  }

  public moveRight(target: HTMLInputElement, index: number): void {
    this.moveToElement(
      target,
      target.parentElement.nextElementSibling as HTMLElement,
      index
    );
  }

  public moveLeft(target: HTMLInputElement, index: number): void {
    this.moveToElement(
      target,
      target.parentElement.previousElementSibling as HTMLElement,
      index
    );
  }

  private moveToElement(currentElement: HTMLInputElement, nextElement: HTMLElement, index?: number): void {
    if (!nextElement) {
      return;
    }

    if (nextElement.classList.contains(CELL_CLASS)) {
      currentElement.blur();
      nextElement.focus();

      return;
    }

    const nextElementChildren: HTMLCollection = nextElement.children;

    if (nextElementChildren[index] && !nextElementChildren[index].classList.contains(ACTIONS_PANEL_CLASS)) {
      currentElement.blur();
      (nextElementChildren[index] as HTMLElement).focus();
    }
  }
}
