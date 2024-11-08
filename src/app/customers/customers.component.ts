import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Savable } from '../models/savable.model';

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
