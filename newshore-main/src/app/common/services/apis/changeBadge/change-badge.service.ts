import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ChangeBadge } from 'src/app/common/models/interfaces/change-badge'

@Injectable({ providedIn: 'root' })
export class ChangeBadgeService<T> {
  constructor(private httpClient: HttpClient) {}

  getListBadge() {
    return this.httpClient.get<ChangeBadge<T>>(`${environment.changeBadgeApiURL}/list?apikey=${environment.changeBadgeApiKEY}`);
  }

  getChangeBadge(target: string): Observable<ChangeBadge<T>> {
    return this.httpClient.get<ChangeBadge<T>>(`${environment.changeBadgeApiURL}/live?source=USD&currencies=${target}&apikey=${environment.changeBadgeApiKEY}`);
  }
}
