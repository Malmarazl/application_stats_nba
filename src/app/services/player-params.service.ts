import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class PlayerParamsService {

  // This service is generic, here put common function that will use in app

  constructor() { }

  /* 
  * This function take two arrays and mixed it taking into account their common index, return a new object.
  * More information https://lodash.com/docs/
  */

  public modelConverter(responseHeader: any, responseElements: any) {
    let transformList;

    transformList = _.map(responseElements, function(element) {
                        return _.zipObject(responseHeader, element);
                    });

    return transformList;
  }
}
