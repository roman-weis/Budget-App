import { BudgetItem } from '../shared/models/budget-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems : BudgetItem[] = new Array<BudgetItem>();
  total: number
  constructor() { 
    this.total = 0;
  }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
      this.budgetItems.push(newItem);
      this.total += newItem.amount;
  }

  deleteItem(item: BudgetItem){
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.total -= item.amount;
  }
}
