import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading: boolean = false; // Initialize isLoading to false

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading; // Update isLoading based on loading state
    });
  }
}
