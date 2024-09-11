import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-auth-content',
  standalone: true,
  imports: [],
  templateUrl: './auth-content.component.html',
  styleUrl: './auth-content.component.css',
})
export class AuthContentComponent {
  data: string[] = [];

  constructor(private service: AxiosService) {}

  ngOnInit(): void {
    this.service
      .request(null, 'GET', '/api/v1/messages')
      .then((response) => (this.data = response.data));
  }
}
