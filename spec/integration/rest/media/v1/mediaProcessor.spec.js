'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('MediaProcessor', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {extension: 'extension', extensionContext: 'extension_context'};
      var promise = client.media.v1.mediaProcessor.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://media.twilio.com/v1/MediaProcessors';

      var values = {Extension: 'extension', ExtensionContext: 'extension_context', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'extension': 'video-composer-v1',
          'extension_context': '{}',
          'sid': 'ZXdeadbeefdeadbeefdeadbeefdeadbeef',
          'status': 'started',
          'status_callback': 'http://www.example.com',
          'status_callback_method': 'POST',
          'ended_reason': null,
          'url': 'https://media.twilio.com/v1/MediaProcessors/ZXdeadbeefdeadbeefdeadbeefdeadbeef',
          'max_duration': 300
      };

      holodeck.mock(new Response(201, body));

      var opts = {extension: 'extension', extensionContext: 'extension_context'};
      var promise = client.media.v1.mediaProcessor.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.media.v1.mediaProcessor('ZXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'ZXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://media.twilio.com/v1/MediaProcessors/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'extension': 'video-composer-v1',
          'extension_context': '{}',
          'sid': 'ZXdeadbeefdeadbeefdeadbeefdeadbeef',
          'status': 'started',
          'status_callback': 'http://www.example.com',
          'status_callback_method': 'POST',
          'ended_reason': null,
          'url': 'https://media.twilio.com/v1/MediaProcessors/ZXdeadbeefdeadbeefdeadbeefdeadbeef',
          'max_duration': 300
      };

      holodeck.mock(new Response(200, body));

      var promise = client.media.v1.mediaProcessor('ZXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {status: 'ended'};
      var promise = client.media.v1.mediaProcessor('ZXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'ZXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://media.twilio.com/v1/MediaProcessors/${sid}`;

      var values = {Status: 'ended', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid update_ended response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:01:00Z',
          'extension': 'video-composer-v1',
          'extension_context': '{}',
          'sid': 'ZXdeadbeefdeadbeefdeadbeefdeadbeef',
          'status': 'ended',
          'status_callback': 'http://www.example.com',
          'status_callback_method': 'POST',
          'ended_reason': 'ended-via-api',
          'url': 'https://media.twilio.com/v1/MediaProcessors/ZXdeadbeefdeadbeefdeadbeefdeadbeef',
          'max_duration': 300
      };

      holodeck.mock(new Response(200, body));

      var opts = {status: 'ended'};
      var promise = client.media.v1.mediaProcessor('ZXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 10,
              'first_page_url': 'https://media.twilio.com/v1/MediaProcessors?Status=ended&Order=desc&PageSize=10&Page=0',
              'previous_page_url': null,
              'url': 'https://media.twilio.com/v1/MediaProcessors?Status=ended&Order=desc&PageSize=10&Page=0',
              'next_page_url': null,
              'key': 'media_processors'
          },
          'media_processors': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:01:00Z',
                  'extension': 'video-composer-v1',
                  'extension_context': '{}',
                  'sid': 'ZXdeadbeefdeadbeefdeadbeefdeadbeef',
                  'status': 'ended',
                  'status_callback': 'http://www.example.com',
                  'status_callback_method': 'POST',
                  'ended_reason': 'ended-via-api',
                  'url': 'https://media.twilio.com/v1/MediaProcessors/ZXdeadbeefdeadbeefdeadbeefdeadbeef',
                  'max_duration': 300
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.media.v1.mediaProcessor.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 10,
              'first_page_url': 'https://media.twilio.com/v1/MediaProcessors?Status=ended&Order=desc&PageSize=10&Page=0',
              'previous_page_url': null,
              'url': 'https://media.twilio.com/v1/MediaProcessors?Status=ended&Order=desc&PageSize=10&Page=0',
              'next_page_url': null,
              'key': 'media_processors'
          },
          'media_processors': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:01:00Z',
                  'extension': 'video-composer-v1',
                  'extension_context': '{}',
                  'sid': 'ZXdeadbeefdeadbeefdeadbeefdeadbeef',
                  'status': 'ended',
                  'status_callback': 'http://www.example.com',
                  'status_callback_method': 'POST',
                  'ended_reason': 'ended-via-api',
                  'url': 'https://media.twilio.com/v1/MediaProcessors/ZXdeadbeefdeadbeefdeadbeefdeadbeef',
                  'max_duration': 300
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.media.v1.mediaProcessor.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://media.twilio.com/v1/MediaProcessors',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 10,
              'first_page_url': 'https://media.twilio.com/v1/MediaProcessors?Status=ended&Order=desc&PageSize=10&Page=0',
              'previous_page_url': null,
              'url': 'https://media.twilio.com/v1/MediaProcessors?Status=ended&Order=desc&PageSize=10&Page=0',
              'next_page_url': null,
              'key': 'media_processors'
          },
          'media_processors': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:01:00Z',
                  'extension': 'video-composer-v1',
                  'extension_context': '{}',
                  'sid': 'ZXdeadbeefdeadbeefdeadbeefdeadbeef',
                  'status': 'ended',
                  'status_callback': 'http://www.example.com',
                  'status_callback_method': 'POST',
                  'ended_reason': 'ended-via-api',
                  'url': 'https://media.twilio.com/v1/MediaProcessors/ZXdeadbeefdeadbeefdeadbeefdeadbeef',
                  'max_duration': 300
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.media.v1.mediaProcessor.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.media.v1.mediaProcessor.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://media.twilio.com/v1/MediaProcessors';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 10,
              'first_page_url': 'https://media.twilio.com/v1/MediaProcessors?Status=started&Order=asc&PageSize=10&Page=0',
              'previous_page_url': null,
              'url': 'https://media.twilio.com/v1/MediaProcessors?Status=started&Order=asc&PageSize=10&Page=0',
              'next_page_url': null,
              'key': 'media_processors'
          },
          'media_processors': []
      };

      holodeck.mock(new Response(200, body));

      var promise = client.media.v1.mediaProcessor.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_items response',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 10,
              'first_page_url': 'https://media.twilio.com/v1/MediaProcessors?Status=ended&Order=desc&PageSize=10&Page=0',
              'previous_page_url': null,
              'url': 'https://media.twilio.com/v1/MediaProcessors?Status=ended&Order=desc&PageSize=10&Page=0',
              'next_page_url': null,
              'key': 'media_processors'
          },
          'media_processors': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:01:00Z',
                  'extension': 'video-composer-v1',
                  'extension_context': '{}',
                  'sid': 'ZXdeadbeefdeadbeefdeadbeefdeadbeef',
                  'status': 'ended',
                  'status_callback': 'http://www.example.com',
                  'status_callback_method': 'POST',
                  'ended_reason': 'ended-via-api',
                  'url': 'https://media.twilio.com/v1/MediaProcessors/ZXdeadbeefdeadbeefdeadbeefdeadbeef',
                  'max_duration': 300
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.media.v1.mediaProcessor.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_items_using_page_token response',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 10,
              'first_page_url': 'https://media.twilio.com/v1/MediaProcessors?Status=ended&Order=desc&PageSize=10&Page=0',
              'previous_page_url': null,
              'url': 'https://media.twilio.com/v1/MediaProcessors?Status=ended&Order=desc&PageSize=10&Page=0&PageToken=PTTUszYTgyOGFhNDIzZWExNzA0OTkwODNlMDlkZTg3M2NiNDoxOjI%253D',
              'next_page_url': null,
              'key': 'media_processors'
          },
          'media_processors': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:01:00Z',
                  'extension': 'video-composer-v1',
                  'extension_context': '{}',
                  'sid': 'ZXdeadbeefdeadbeefdeadbeefdeadbeef',
                  'status': 'ended',
                  'status_callback': 'http://www.example.com',
                  'status_callback_method': 'POST',
                  'ended_reason': 'ended-via-api',
                  'url': 'https://media.twilio.com/v1/MediaProcessors/ZXdeadbeefdeadbeefdeadbeefdeadbeef',
                  'max_duration': 300
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.media.v1.mediaProcessor.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_items_page_larger_than_max response',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 100,
              'first_page_url': 'https://media.twilio.com/v1/MediaProcessors?Status=ended&Order=desc&PageSize=100&Page=0',
              'previous_page_url': null,
              'url': 'https://media.twilio.com/v1/MediaProcessors?Status=ended&Order=desc&PageSize=100&Page=0',
              'next_page_url': null,
              'key': 'media_processors'
          },
          'media_processors': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:01:00Z',
                  'extension': 'video-composer-v1',
                  'extension_context': '{}',
                  'sid': 'ZXdeadbeefdeadbeefdeadbeefdeadbeef',
                  'status': 'ended',
                  'status_callback': 'http://www.example.com',
                  'status_callback_method': 'POST',
                  'ended_reason': 'ended-via-api',
                  'url': 'https://media.twilio.com/v1/MediaProcessors/ZXdeadbeefdeadbeefdeadbeefdeadbeef',
                  'max_duration': 300
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.media.v1.mediaProcessor.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});