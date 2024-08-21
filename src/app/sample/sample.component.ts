import { Component, VERSION, OnInit } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

// Define the interface
interface TableData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [ScrollingModule],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {
  items: any = [];

  ngOnInit() {
    for (let i = 0; i < 1000; i++) {
      this.items.push(`Item #${i}`);
    }
  }
}
