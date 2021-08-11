import { Component, OnInit } from '@angular/core';
import { Episode } from '../interface/episode';
import { BreakingbadService } from '../service/breakingbad.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  private allEpisodes: any;
  constructor(private breakingBadService: BreakingbadService) {}

  ngOnInit(): void {
    this.breakingBadService.getEpisodes().subscribe((data) => {
      this.allEpisodes = data;
      console.log(data);
    });
  }
}
