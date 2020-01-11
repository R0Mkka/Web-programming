import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpComponent {
  constructor(
    private readonly router: Router,
  ) {}

  get showBackButton(): boolean {
    return this.router.url !== '/help';
  }

  public returnBack(): void {
    this.router.navigate(['/help']);
  }
}
