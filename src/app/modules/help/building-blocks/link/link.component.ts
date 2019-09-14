import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-building-block-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkBuildingBlockComponent {
  @Input()
  public readonly href: string;

  constructor(private readonly router: Router) { }

  public navigate(): void {
    this.router.navigate([this.href]);
  }
}
