import { Component, computed, input, linkedSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  imports: [RouterLink],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  readonly pages = input(0);
  readonly currentPage = input(1);

  readonly activePage = linkedSignal(this.currentPage);

  readonly getPagesList = computed(() => {
    return Array.from({ length: this.pages() }, (_, i) => i + 1);
  });
}
