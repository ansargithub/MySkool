import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkoolService } from '../skool.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrganizationService } from 'src/app/services/organization.service';
import { Organization } from 'src/app/data-models/organization';
import { BoardService } from '../../board-service.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/data-models/user';

@Component({
  selector: 'app-skool-form',
  templateUrl: './skool-form.component.html',
  styleUrls: ['./skool-form.component.css']
})
export class SkoolFormComponent implements OnInit {
  skoolForm: FormGroup;
  isEditing: boolean = false;
  organizations:Organization[];
  boards:any[];
  currentuser:User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private skoolService: SkoolService,private orgservice:OrganizationService,
    private boardService:BoardService,private userService: UserService

  ) {}

  ngOnInit() {
   
    const id = this.route.snapshot.params['id'];
    this.orgservice.getOrganizations().subscribe((organizations) => {
      this.organizations = organizations;
    });
    this.getBoards();
    this.createForm();
    if (id) {
      this.isEditing = true;
      this.getSkool(id);
    }
   
    
    else
    { 
      this.currentuser=this.userService.getCurrentUser();
      this.skoolForm.controls['userID'].setValue(this.currentuser!.username!);}

      
  }


  getBoards(): void {
    this.boardService.getBoards()
      .subscribe(boards => this.boards = boards);
  }

  createForm() {
    this.skoolForm = new FormGroup({
      skoolId:new FormControl(0),
      skoolName: new FormControl('', [Validators.required]),
     /*  branchId: new FormControl('', [Validators.required]),
      branchName: new FormControl('', [Validators.required]), */
      boardId: new FormControl('', [Validators.required]),
      userID: new FormControl('', [Validators.required]),
      status: new FormControl(''),
      estDate: new FormControl(null),
      geoLatitude: new FormControl(''),
      geoLongitude: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      lmd: new FormControl(null),
      lmu: new FormControl(''),
      organizationId: new FormControl('', [Validators.required])
    });
  }

  getSkool(id: number) {
    this.skoolService.getSkool(id)
      .subscribe(skool => {
        this.skoolForm.patchValue(skool);
      });
  }

  saveSkool() {
    if (this.isEditing) {
      const skoolId = this.route.snapshot.params['id'];
      this.skoolForm.controls['studentId']=skoolId;
      this.skoolService.updateSkool(skoolId,this.skoolForm.value)
        .subscribe(() => {
          this.router.navigate(['/organization/skools']);
        });
    } else {
      this.skoolService.addSkool(this.skoolForm.value)
        .subscribe(() => {
          this.router.navigate(['/organization/skools']);
        });
    }
  }
}
