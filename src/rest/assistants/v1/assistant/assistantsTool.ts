/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Assistants
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to each
 */
export interface AssistantsToolListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: AssistantsToolInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface AssistantsToolListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AssistantsToolListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AssistantsToolContext {
  /**
   * Create a AssistantsToolInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantsToolInstance
   */
  create(
    callback?: (error: Error | null, item?: AssistantsToolInstance) => any
  ): Promise<AssistantsToolInstance>;

  /**
   * Remove a AssistantsToolInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssistantsToolContextSolution {
  assistantId: string;
  id: string;
}

export class AssistantsToolContextImpl implements AssistantsToolContext {
  protected _solution: AssistantsToolContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, assistantId: string, id: string) {
    if (!isValidPathParam(assistantId)) {
      throw new Error("Parameter 'assistantId' is not valid.");
    }

    if (!isValidPathParam(id)) {
      throw new Error("Parameter 'id' is not valid.");
    }

    this._solution = { assistantId, id };
    this._uri = `/Assistants/${assistantId}/Tools/${id}`;
  }

  create(
    callback?: (error: Error | null, item?: AssistantsToolInstance) => any
  ): Promise<AssistantsToolInstance> {
    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AssistantsToolInstance(
          operationVersion,
          payload,
          instance._solution.assistantId,
          instance._solution.id
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface AssistantsToolPayload extends TwilioResponsePayload {
  tools: AssistantsToolResource[];
}

interface AssistantsToolResource {
  account_sid: string;
  description: string;
  enabled: boolean;
  id: string;
  meta: Record<string, object>;
  name: string;
  requires_auth: boolean;
  type: string;
  url: string;
  date_created: Date;
  date_updated: Date;
}

export class AssistantsToolInstance {
  protected _solution: AssistantsToolContextSolution;
  protected _context?: AssistantsToolContext;

  constructor(
    protected _version: V1,
    payload: AssistantsToolResource,
    assistantId: string,
    id?: string
  ) {
    this.accountSid = payload.account_sid;
    this.description = payload.description;
    this.enabled = payload.enabled;
    this.id = payload.id;
    this.meta = payload.meta;
    this.name = payload.name;
    this.requiresAuth = payload.requires_auth;
    this.type = payload.type;
    this.url = payload.url;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

    this._solution = { assistantId, id: id || this.id };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Tool resource.
   */
  accountSid: string;
  /**
   * The description of the tool.
   */
  description: string;
  /**
   * True if the tool is enabled.
   */
  enabled: boolean;
  /**
   * The tool ID.
   */
  id: string;
  /**
   * The metadata related to method, url, input_schema to used with the Tool.
   */
  meta: Record<string, object>;
  /**
   * The name of the tool.
   */
  name: string;
  /**
   * The authentication requirement for the tool.
   */
  requiresAuth: boolean;
  /**
   * The type of the tool. (\'WEBHOOK\')
   */
  type: string;
  /**
   * The url of the tool resource.
   */
  url: string;
  /**
   * The date and time in GMT when the Tool was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the Tool was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;

  private get _proxy(): AssistantsToolContext {
    this._context =
      this._context ||
      new AssistantsToolContextImpl(
        this._version,
        this._solution.assistantId,
        this._solution.id
      );
    return this._context;
  }

  /**
   * Create a AssistantsToolInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantsToolInstance
   */
  create(
    callback?: (error: Error | null, item?: AssistantsToolInstance) => any
  ): Promise<AssistantsToolInstance> {
    return this._proxy.create(callback);
  }

  /**
   * Remove a AssistantsToolInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      description: this.description,
      enabled: this.enabled,
      id: this.id,
      meta: this.meta,
      name: this.name,
      requiresAuth: this.requiresAuth,
      type: this.type,
      url: this.url,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AssistantsToolSolution {
  assistantId: string;
}

export interface AssistantsToolListInstance {
  _version: V1;
  _solution: AssistantsToolSolution;
  _uri: string;

  (id: string): AssistantsToolContext;
  get(id: string): AssistantsToolContext;

  /**
   * Streams AssistantsToolInstance records from the API.
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
   * @param { AssistantsToolListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: AssistantsToolInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: AssistantsToolListInstanceEachOptions,
    callback?: (
      item: AssistantsToolInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of AssistantsToolInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AssistantsToolPage) => any
  ): Promise<AssistantsToolPage>;
  /**
   * Lists AssistantsToolInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssistantsToolListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: AssistantsToolInstance[]) => any
  ): Promise<AssistantsToolInstance[]>;
  list(
    params: AssistantsToolListInstanceOptions,
    callback?: (error: Error | null, items: AssistantsToolInstance[]) => any
  ): Promise<AssistantsToolInstance[]>;
  /**
   * Retrieve a single page of AssistantsToolInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssistantsToolListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AssistantsToolPage) => any
  ): Promise<AssistantsToolPage>;
  page(
    params: AssistantsToolListInstancePageOptions,
    callback?: (error: Error | null, items: AssistantsToolPage) => any
  ): Promise<AssistantsToolPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AssistantsToolListInstance(
  version: V1,
  assistantId: string
): AssistantsToolListInstance {
  if (!isValidPathParam(assistantId)) {
    throw new Error("Parameter 'assistantId' is not valid.");
  }

  const instance = ((id) => instance.get(id)) as AssistantsToolListInstance;

  instance.get = function get(id): AssistantsToolContext {
    return new AssistantsToolContextImpl(version, assistantId, id);
  };

  instance._version = version;
  instance._solution = { assistantId };
  instance._uri = `/Assistants/${assistantId}/Tools`;

  instance.page = function page(
    params?:
      | AssistantsToolListInstancePageOptions
      | ((error: Error | null, items: AssistantsToolPage) => any),
    callback?: (error: Error | null, items: AssistantsToolPage) => any
  ): Promise<AssistantsToolPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AssistantsToolPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AssistantsToolPage) => any
  ): Promise<AssistantsToolPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new AssistantsToolPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class AssistantsToolPage extends Page<
  V1,
  AssistantsToolPayload,
  AssistantsToolResource,
  AssistantsToolInstance
> {
  /**
   * Initialize the AssistantsToolPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: AssistantsToolSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AssistantsToolInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AssistantsToolResource): AssistantsToolInstance {
    return new AssistantsToolInstance(
      this._version,
      payload,
      this._solution.assistantId
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
