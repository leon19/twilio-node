'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Number', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.pricing.v2.voice
                                     .numbers('+15017122661').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {destinationNumber: '+15017122661'};
      var url = _.template('https://pricing.twilio.com/v2/Voice/Numbers/<%= destinationNumber %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'country': 'United States',
          'destination_number': '+18001234567',
          'inbound_call_price': {
              'base_price': null,
              'current_price': null,
              'number_type': null
          },
          'iso_country': 'US',
          'origination_number': '+987654321',
          'outbound_call_prices': [
              {
                  'base_price': '0.013',
                  'current_price': '0.013',
                  'origination_prefixes': [
                      'ALL'
                  ]
              }
          ],
          'price_unit': 'USD',
          'url': 'https://pricing.twilio.com/v2/Voice/Numbers/+18001234567'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v2.voice
                                     .numbers('+15017122661').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});