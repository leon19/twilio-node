/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Taskrouter
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to fetch a WorkersStatisticsInstance
 */
export interface WorkersStatisticsContextFetchOptions {
  /** Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends. */
  minutes?: number;
  /** Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
  startDate?: Date;
  /** Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time. */
  endDate?: Date;
  /** The SID of the TaskQueue for which to fetch Worker statistics. */
  taskQueueSid?: string;
  /** The `friendly_name` of the TaskQueue for which to fetch Worker statistics. */
  taskQueueName?: string;
  /** Only include Workers with `friendly_name` values that match this parameter. */
  friendlyName?: string;
  /** Only calculate statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`. */
  taskChannel?: string;
}

export interface WorkersStatisticsContext {
  /**
   * Fetch a WorkersStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkersStatisticsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkersStatisticsInstance) => any
  ): Promise<WorkersStatisticsInstance>;
  /**
   * Fetch a WorkersStatisticsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkersStatisticsInstance
   */
  fetch(
    params: WorkersStatisticsContextFetchOptions,
    callback?: (error: Error | null, item?: WorkersStatisticsInstance) => any
  ): Promise<WorkersStatisticsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkersStatisticsContextSolution {
  workspaceSid: string;
}

export class WorkersStatisticsContextImpl implements WorkersStatisticsContext {
  protected _solution: WorkersStatisticsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, workspaceSid: string) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    this._solution = { workspaceSid };
    this._uri = `/Workspaces/${workspaceSid}/Workers/Statistics`;
  }

  fetch(
    params?:
      | WorkersStatisticsContextFetchOptions
      | ((error: Error | null, item?: WorkersStatisticsInstance) => any),
    callback?: (error: Error | null, item?: WorkersStatisticsInstance) => any
  ): Promise<WorkersStatisticsInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["minutes"] !== undefined) data["Minutes"] = params["minutes"];
    if (params["startDate"] !== undefined)
      data["StartDate"] = serialize.iso8601DateTime(params["startDate"]);
    if (params["endDate"] !== undefined)
      data["EndDate"] = serialize.iso8601DateTime(params["endDate"]);
    if (params["taskQueueSid"] !== undefined)
      data["TaskQueueSid"] = params["taskQueueSid"];
    if (params["taskQueueName"] !== undefined)
      data["TaskQueueName"] = params["taskQueueName"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["taskChannel"] !== undefined)
      data["TaskChannel"] = params["taskChannel"];

    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WorkersStatisticsInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid
        )
    );

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

interface WorkersStatisticsPayload extends WorkersStatisticsResource {}

interface WorkersStatisticsResource {
  realtime: any;
  cumulative: any;
  account_sid: string;
  workspace_sid: string;
  url: string;
}

export class WorkersStatisticsInstance {
  protected _solution: WorkersStatisticsContextSolution;
  protected _context?: WorkersStatisticsContext;

  constructor(
    protected _version: V1,
    payload: WorkersStatisticsResource,
    workspaceSid: string
  ) {
    this.realtime = payload.realtime;
    this.cumulative = payload.cumulative;
    this.accountSid = payload.account_sid;
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;

    this._solution = { workspaceSid };
  }

  /**
   * An object that contains the real-time statistics for the Worker.
   */
  realtime: any;
  /**
   * An object that contains the cumulative statistics for the Worker.
   */
  cumulative: any;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
   */
  accountSid: string;
  /**
   * The SID of the Workspace that contains the Worker.
   */
  workspaceSid: string;
  /**
   * The absolute URL of the Worker statistics resource.
   */
  url: string;

  private get _proxy(): WorkersStatisticsContext {
    this._context =
      this._context ||
      new WorkersStatisticsContextImpl(
        this._version,
        this._solution.workspaceSid
      );
    return this._context;
  }

  /**
   * Fetch a WorkersStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkersStatisticsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkersStatisticsInstance) => any
  ): Promise<WorkersStatisticsInstance>;
  /**
   * Fetch a WorkersStatisticsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkersStatisticsInstance
   */
  fetch(
    params: WorkersStatisticsContextFetchOptions,
    callback?: (error: Error | null, item?: WorkersStatisticsInstance) => any
  ): Promise<WorkersStatisticsInstance>;

  fetch(
    params?: any,
    callback?: (error: Error | null, item?: WorkersStatisticsInstance) => any
  ): Promise<WorkersStatisticsInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      realtime: this.realtime,
      cumulative: this.cumulative,
      accountSid: this.accountSid,
      workspaceSid: this.workspaceSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WorkersStatisticsSolution {
  workspaceSid: string;
}

export interface WorkersStatisticsListInstance {
  _version: V1;
  _solution: WorkersStatisticsSolution;
  _uri: string;

  (): WorkersStatisticsContext;
  get(): WorkersStatisticsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function WorkersStatisticsListInstance(
  version: V1,
  workspaceSid: string
): WorkersStatisticsListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  const instance = (() => instance.get()) as WorkersStatisticsListInstance;

  instance.get = function get(): WorkersStatisticsContext {
    return new WorkersStatisticsContextImpl(version, workspaceSid);
  };

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = ``;

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