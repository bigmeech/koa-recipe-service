import agent from '../util/agent';
import { expect } from 'chai';

import { server } from '../../lib/server';

describe('Add to favourites', () => {
  after((done) => {
    server.close();
    done();
  });
  it('Get /api/favourite should star Lemon chicken for user Joe', () => {
    return agent()
      .get('/api/favourite')
      .set('x-access-token', 'joe')
      .expect(200)
      .expect((res) => {
        return expect(res).to.be.an('Array');
      });
  });
});
