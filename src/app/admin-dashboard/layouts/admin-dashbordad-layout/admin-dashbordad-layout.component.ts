import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';


@Component({
  selector: 'app-admin-dashbordad-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-dashbordad-layout.component.html',
})
export class AdminDashbordadLayoutComponent {
  readonly authService = inject(AuthService);

  readonly user = computed(() => this.authService.user())
}
