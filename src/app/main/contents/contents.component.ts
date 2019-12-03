import { Component, OnInit } from '@angular/core';
import { AccountApi } from 'src/app/api';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {
  Acc: Account[] = [];
  searchText: string;
  accountEmail: string;
  constructor(
    private accountApi: AccountApi,
    private router: Router,
    private modalService: NgbModal
  ) {

  }


  ngOnInit() {
    this.getAccount();
  }

  getAccount()  {
    this.accountApi.find<Account>().subscribe((acc: Account[]) => {
      this.Acc = acc;
      console.log(this.Acc);
    }, error => {
      console.log(error);
    });
  }

  deleteById(accountId)  {
    this.accountApi.deleteById(accountId).subscribe(() => {
      this.Acc = this.Acc.filter(acc => acc.id !== accountId);
      console.log('delete!');
    }, err => {
      console.log(err);
    })
  }

  search()  {
    console.log(this.searchText);
  }

  viewAccount(id, name) {
    const navigationextras = {
      state: {
        accountId: id,
        accountName: name
      }
    }
    this.router.navigate(['/main/account-details'], navigationextras);
  }

  open(content, email) {
    this.accountEmail = email;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  sendMail(content) {
    console.log(this.accountEmail);
    console.log(content);
    this.accountApi.sendMailToUser(this.accountEmail, content).subscribe(() => {
      console.log('Success');
    }, err => {
      console.log(err);
    });
  }

}
