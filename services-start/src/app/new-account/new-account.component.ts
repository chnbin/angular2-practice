import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],

  // Parent component providers AccountsService, if we add AccountsService here, there will be
  // TWO AccountsService instance.
  providers: []
})
export class NewAccountComponent {
   constructor(private accountsService: AccountsService) {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
