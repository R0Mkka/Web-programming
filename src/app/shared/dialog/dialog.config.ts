import { IDialogConfig } from '@models/dialog';

import { ColorPaletteService } from '@services/color-palette.service';

const colorPaletteService = new ColorPaletteService();

export const defaultDialogConfig: IDialogConfig = {
  width: '400px',
  panelClass: colorPaletteService.currentPalette,
  hasBackdrop: true
};

