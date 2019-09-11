/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the MemberList
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Service that the resource is associated with
 * @param channelSid - The unique ID of the Channel for the member
 */
declare function MemberList(version: V1, serviceSid: string, channelSid: string): MemberListInstance;

/**
 * Options to pass to update
 *
 * @property lastConsumedMessageIndex - The index of the last consumed Message for the Channel for the Member
 * @property roleSid - The SID of the Role to assign to the member
 */
interface MemberInstanceUpdateOptions {
  lastConsumedMessageIndex?: number;
  roleSid?: string;
}

interface MemberListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): MemberContext;
  /**
   * create a MemberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: MemberListInstanceCreateOptions, callback?: (error: Error | null, item: MemberInstance) => any): Promise<MemberInstance>;
  /**
   * Streams MemberInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: MemberListInstanceEachOptions, callback?: (item: MemberInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a member
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): MemberContext;
  /**
   * Retrieve a single target page of MemberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MemberPage) => any): Promise<MemberPage>;
  /**
   * Lists MemberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: MemberListInstanceOptions, callback?: (error: Error | null, items: MemberInstance[]) => any): Promise<MemberInstance[]>;
  /**
   * Retrieve a single page of MemberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: MemberListInstancePageOptions, callback?: (error: Error | null, items: MemberPage) => any): Promise<MemberPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property identity - The `identity` value that identifies the new resource's User
 * @property roleSid - The SID of the Role to assign to the member
 */
interface MemberListInstanceCreateOptions {
  identity: string;
  roleSid?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property identity - The `identity` value of the resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface MemberListInstanceEachOptions {
  callback?: (item: MemberInstance, done: (err?: Error) => void) => void;
  done?: Function;
  identity?: string | string[];
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property identity - The `identity` value of the resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface MemberListInstanceOptions {
  identity?: string | string[];
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property identity - The `identity` value of the resources to read
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface MemberListInstancePageOptions {
  identity?: string | string[];
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface MemberPayload extends MemberResource, Page.TwilioResponsePayload {
}

interface MemberResource {
  account_sid: string;
  channel_sid: string;
  date_created: Date;
  date_updated: Date;
  identity: string;
  last_consumed_message_index: number;
  last_consumption_timestamp: Date;
  role_sid: string;
  service_sid: string;
  sid: string;
  url: string;
}

interface MemberSolution {
  channelSid?: string;
  serviceSid?: string;
}


declare class MemberContext {
  /**
   * Initialize the MemberContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Service to fetch the resource from
   * @param channelSid - The unique ID of the channel the member belongs to
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, serviceSid: string, channelSid: string, sid: string);

  /**
   * fetch a MemberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MemberInstance) => any): Promise<MemberInstance>;
  /**
   * remove a MemberInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: MemberInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a MemberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: MemberInstanceUpdateOptions, callback?: (error: Error | null, items: MemberInstance) => any): Promise<MemberInstance>;
}


declare class MemberInstance extends SerializableClass {
  /**
   * Initialize the MemberContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Service that the resource is associated with
   * @param channelSid - The unique ID of the Channel for the member
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, payload: MemberPayload, serviceSid: string, channelSid: string, sid: string);

  private _proxy: MemberContext;
  accountSid: string;
  channelSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a MemberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MemberInstance) => any): void;
  identity: string;
  lastConsumedMessageIndex: number;
  lastConsumptionTimestamp: Date;
  /**
   * remove a MemberInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: MemberInstance) => any): void;
  roleSid: string;
  serviceSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a MemberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: MemberInstanceUpdateOptions, callback?: (error: Error | null, items: MemberInstance) => any): void;
  url: string;
}


declare class MemberPage extends Page<V1, MemberPayload, MemberResource, MemberInstance> {
  /**
   * Initialize the MemberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: MemberSolution);

  /**
   * Build an instance of MemberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MemberPayload): MemberInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { MemberContext, MemberInstance, MemberList, MemberListInstance, MemberListInstanceCreateOptions, MemberListInstanceEachOptions, MemberListInstanceOptions, MemberListInstancePageOptions, MemberPage, MemberPayload, MemberResource, MemberSolution }
