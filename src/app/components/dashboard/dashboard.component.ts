import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idea } from 'src/app/models/user.model';
import { IdeaService } from 'src/app/services/idea.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public ideas: Idea[] = [];

  constructor(private locationStrategy: LocationStrategy, private idaeService: IdeaService,
    private router: Router ) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.getIdea();
  }

  preventBackButton() {
    history.pushState(null, '', location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, '', location.href);
    })
  }

  getIdea() {
    this.idaeService.getIdea().subscribe((data: Idea[]) => {
      this.ideas = data;
      console.log(this.ideas);    
    })
  }

  viewDetails() {
    this.router.navigateByUrl('/viewDetails');
  }
}
