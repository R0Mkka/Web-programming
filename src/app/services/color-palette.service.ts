import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorPaletteService {
  public currentPalette = 'color-palette-blue';

  public changePalette(paletteName: string): void {
    const newColorPalette = `color-palette-${paletteName}`;

    this.currentPalette = newColorPalette;
  }
}
