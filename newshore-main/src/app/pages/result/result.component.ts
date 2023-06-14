import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AirService } from 'src/app/common/services/apis/air/air.service';
import { ActivatedRoute } from '@angular/router';

import {
  FindShorterFlight,
  Edge,
  Journey,
} from 'src/app/common/algorithms/find-shorter-flight/find-shorter-flight.class';
import { InterfaceFlights } from 'src/app/common/models/interfaces/flights';
import { ChangeBadgeService } from 'src/app/common/services/apis/changeBadge/change-badge.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit, OnDestroy {
  private _edges: Edge<string>[] = [];
  private _data: InterfaceFlights<ResultComponent>[] = [];
  private _origin: string = '';
  private _destination: string = '';
  private _isPrice: boolean = false;
  private _currency: string = '';
  private _badge: number = 0;
  journey!: Journey<ResultComponent>;


  constructor(private airService: AirService<ResultComponent>, private route: ActivatedRoute, private changeBadge: ChangeBadgeService<ResultComponent>) {}

  private _subscriptionFindShorterFlight: Subscription | undefined;
  private _subscriptionQueryParams: Subscription | undefined;
  private _subscriptionChangeBadge: Subscription | undefined;

  ngOnDestroy(): void {
    this._subscriptionFindShorterFlight?.unsubscribe();
    this._subscriptionQueryParams?.unsubscribe();
    this._subscriptionChangeBadge?.unsubscribe();
  }

  ngOnInit(): void {
    this._subscriptionFindShorterFlight = this.airService
      .getAirApi()
      .subscribe((data) => {
        this._data = data;
        this.getFlightsApi()
      });

      this._subscriptionQueryParams = this.route.queryParams
      .subscribe(params => {
        this._origin = params['origin'],
        this._destination = params['destination'],
        this._isPrice = params['isPrice'],
        this._currency = params['currency'];
      })

       this._subscriptionChangeBadge = this.changeBadge.getChangeBadge(this._currency).subscribe((data: any) => this._badge = data["quotes"]["USD"+this._currency]);
  }

  private createFlightsEdges(weight: boolean) {
    this._data.map((item) =>
      this._edges.push({
        from: item.departureStation,
        to: item.arrivalStation,
        weight: ((weight) ? item.price : 1)
      })
    );

  }

  private getFlightsApi() {
    this.createFlightsEdges(this._isPrice);
    this.journey = new FindShorterFlight(this._data, this._edges, [this._origin, this._destination], this._badge).getJourneyFlight();
  }
}
