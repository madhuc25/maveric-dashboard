import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idea } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  public ideas: Idea[] = [
    {
      userName: 'Mark Twin',
      userImage: '../../../assets/Ellipse-615.png',
      title: 'Mark Twin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
      createdAt: '',
      updatedAt: '',
      postedBy: '',
      duration: '',
      recommendedTechnology: '',
      challages: '',
      reference: ''
    },
    {
      userName: 'Mark Twin',
      userImage: '../../../assets/Ellipse-615.png',
      title: 'Mark Twin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
      createdAt: '',
      updatedAt: '',
      postedBy: '',
      duration: '',
      recommendedTechnology: '',
      challages: '',
      reference: ''
    },
    {
      userName: 'Mark Twin',
      userImage: '../../../assets/Ellipse-615.png',
      title: 'Mark Twin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
      createdAt: '',
      updatedAt: '',
      postedBy: '',
      duration: '',
      recommendedTechnology: '',
      challages: '',
      reference: ''
    }
  ]

  constructor() { }

  getIdea() {
    let ideaList = this.ideas;
    return Observable.create(
      (observer: { next: (arg0: Idea[]) => any; }) => observer.next(ideaList)
    );
  }
}
