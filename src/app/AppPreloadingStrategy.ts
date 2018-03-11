import { Observable } from 'rxjs/Observable';
import { PreloadingStrategy, Route } from '@angular/router';

export class AppPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, preload: Function): Observable<any> {
        if (route.data && route.data.preload) {
          return preload();
        } else {
          return Observable.of(null);
        }
      }
  }