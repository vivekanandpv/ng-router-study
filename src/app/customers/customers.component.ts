import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent {
  qp$?: Observable<any>;

  constructor(ar: ActivatedRoute) {
    this.qp$ = ar.queryParams;
  }
}
