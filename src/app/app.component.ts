import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { ColorPaletteService } from './services/color-palette.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public currentColorPalette = 'color-palette-blue';

  constructor(private colorPaletteService: ColorPaletteService) { }

  public ngOnInit(): void {
    this.currentColorPalette = this.colorPaletteService.currentPalette;
  }
}
