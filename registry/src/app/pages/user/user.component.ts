import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  users?: User[];
  
  constructor() { }

  ngOnInit(): void {
    this.users = [{pseudonym:"Taniah",email:"tpoveda"},]
    
  }


}
