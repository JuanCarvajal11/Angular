import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeBadgeService } from 'src/app/common/services/apis/changeBadge/change-badge.service'

@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css'],
})
export class FindFlightsComponent implements OnInit {
  @ViewChild('formFlights') formFlights: NgForm | undefined;
  objectKeys = Object.keys;
  currency: {currencies: {}} = {currencies: {"USD": "United States Dollar", "COP": "Colombian Peso", "EUR": "Euro"}};
  dataFlightForm = {
    origin: undefined,
    destination: undefined,
    weight: false,
    currency: undefined
  };

  constructor(private router: Router, private changeBadge: ChangeBadgeService<FindFlightsComponent>) {}

  ngOnInit(): void {
    this.changeBadge.getListBadge().subscribe((data: any)  => this.currency = data);
  }

  checkDataFlightForm() {
    if (!(this.dataFlightForm.origin === this.dataFlightForm.destination)) {
      this.sendDataByUrl(
        this.dataFlightForm.origin!,
        this.dataFlightForm.destination!
      );
    } else {
      alert('El vuelo que intentas no se puede efectuar');
    }
    this.formFlights?.reset();
  }

  private sendDataByUrl(origin: string, destination: string) {
    this.router
      .navigate(['/result'], {
        queryParams: {
          origin: origin.toUpperCase(),
          destination: destination.toUpperCase(),
          isPrice: this.dataFlightForm.weight,
          currency: this.dataFlightForm.currency
        },
      })
      .then(
        (nav) => {
          console.log(nav);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
