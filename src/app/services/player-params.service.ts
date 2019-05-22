import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class PlayerParamsService {

  constructor() { }

  public modelConverter(responseHeader, responseElements) {
    let transformList;

    transformList = _.map(responseElements, function(element) {
                        return _.zipObject(responseHeader, element);
                    });

    return transformList;
  }

}
