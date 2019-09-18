import { Injectable } from '@angular/core';

import { JournalWorksheetComponent } from './journal-worksheet.component';

import { Keyboard } from '@constants';

const CELL_CLASS = 'cell';
const ACTIONS_PANEL_CLASS = 'actions-panel';

@Injectable()
export class WorksheetKeyboardController {
  public initKeyboardListeners(context: JournalWorksheetComponent): void {
    document.onkeydown = (event: KeyboardEvent) => {
      const target: HTMLInputElement = event.target as HTMLInputElement;

      if (context.focusedElementIndex === null) {
        return;
      }

      // TODO: Tab and Sthift + Tab
      switch (event.key) {
        case Keyboard.ArrowDown:
        case Keyboard.Enter:
          event.preventDefault();
          this.moveDown(target);
          break;
        case Keyboard.ArrowUp:
          event.preventDefault();
          this.moveUp(target);
          break;
        case Keyboard.ArrowRight:
          event.preventDefault();
          this.moveRight(target, context.focusedElementIndex);
          break;
        case Keyboard.ArrowLeft:
          event.preventDefault();
          this.moveLeft(target, context.focusedElementIndex);
          break;
        default:
          break;
      }
    };
  }

  public destroyListeners(): void {
    document.onkeydown = null;
  }

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
