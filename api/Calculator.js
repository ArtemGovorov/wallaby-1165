// @flow
"use strict";

import {describe, it} from 'mocha';
import {expect} from 'chai';

export interface Calculator {
  add(a: number, b: number): number;
}

export default function (sut: Calculator) {
  describe(':Calculator', function () {
    describe('.add()', function () {
      it('returns the sum of its operands', function () {
        const sum = sut.add(1, 2);
        expect(sum).to.equal(3);
      });
    });
  });
}
