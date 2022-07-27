import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/services/role/role.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {
  id_role!: any;
  role!: Role;
  name!: string;
  constructor(private roleService: RoleService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.saveData();
  }

  saveData(): void {
    this.activatedRoute.paramMap.subscribe(id_role => {
        this.id_role = id_role.get('_id');
        this.roleService.findById(this.id_role).subscribe(
          res => {
            this.name = res.name!
    });
  });
}

  updateRole(): void {
    this.roleService.findById(this.id_role).subscribe(
      role => {
        this.role = {
          name: this.name
        }
        this.roleService.update(this.id_role, this.role).subscribe(
          data => {
            this.router.navigate(['/pages/roles/role'])
          },
          error => {
            console.log(error)
          }
        )
      },
      error => {
        console.log(error)
      }
    )
  }
}
