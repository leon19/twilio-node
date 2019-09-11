/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2 = require('../../V2');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the NumberList
 *
 * @param version - Version of the resource
 */
declare function NumberList(version: V2): NumberListInstance;

/**
 * Options to pass to fetch
 *
 * @property originationNumber - The origination number for which to fetch pricing information
 */
interface NumberInstanceFetchOptions {
  originationNumber?: string;
}

interface NumberListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): NumberContext;
  /**
   * Constructs a number
   *
   * @param destinationNumber - The destination number for which to fetch pricing information
   */
  get(destinationNumber: string): NumberContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface NumberPayload extends NumberResource, Page.TwilioResponsePayload {
}

interface NumberResource {
  country: string;
  destination_number: string;
  inbound_call_price: string;
  iso_country: string;
  origination_number: string;
  outbound_call_prices: string[];
  price_unit: string;
  url: string;
}

interface NumberSolution {
}


declare class NumberContext {
  /**
   * Initialize the NumberContext
   *
   * @param version - Version of the resource
   * @param destinationNumber - The destination number for which to fetch pricing information
   */
  constructor(version: V2, destinationNumber: string);

  /**
   * fetch a NumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: NumberInstanceFetchOptions, callback?: (error: Error | null, items: NumberInstance) => any): Promise<NumberInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class NumberInstance extends SerializableClass {
  /**
   * Initialize the NumberContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param destinationNumber - The destination number for which to fetch pricing information
   */
  constructor(version: V2, payload: NumberPayload, destinationNumber: string);

  private _proxy: NumberContext;
  country: string;
  destinationNumber: string;
  /**
   * fetch a NumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: NumberInstanceFetchOptions, callback?: (error: Error | null, items: NumberInstance) => any): void;
  inboundCallPrice: string;
  isoCountry: string;
  originationNumber: string;
  outboundCallPrices: string[];
  priceUnit: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class NumberPage extends Page<V2, NumberPayload, NumberResource, NumberInstance> {
  /**
   * Initialize the NumberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: NumberSolution);

  /**
   * Build an instance of NumberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: NumberPayload): NumberInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { NumberContext, NumberInstance, NumberList, NumberListInstance, NumberPage, NumberPayload, NumberResource, NumberSolution }
