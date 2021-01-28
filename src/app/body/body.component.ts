import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  repayments = [
    {value: '0', viewValue: '6 Months'},
    {value: '1', viewValue: '9 Months'},
    {value: '2', viewValue: '12 Months'}
  ];

  monthlyIncome: number = 100000;
  monthlyExpense: number = 10000;
  min: number = 100000;
  max: number = 300000;
  step: number = 1;

  min2: number = 10000;
  max2: number = 150000;

  constructor(private fb: FormBuilder) { }


  testForm = this.fb.group({
    monthlyIncome: [''],
    monthlyExpense: [''],
    repayment: [''],
    existLoan: [''],
    loanEmi: [''],
  });

  submit() {
    alert(JSON.stringify(this.testForm.value));
  }


  monthlyIncomeEvent(event: any) {
    this.monthlyIncome = event.value;
  }

  monthlyExpenseEvent(event: any) {
    this.monthlyExpense = event.value;
  }

  ngOnInit(): void {

  }

}
