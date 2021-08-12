import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../interface/episode';
import { BreakingbadService } from '../service/breakingbad.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  allEpisodes: any;

  dataColumns: string[] = ['episode_id', 'title', 'season', 'air_date'];
  constructor(private breakingBadService: BreakingbadService) {}

  ngOnInit(): void {
    this.breakingBadService.getEpisodes().subscribe((data) => {
      this.allEpisodes = data;
    });
  }
}
