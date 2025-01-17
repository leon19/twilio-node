/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

export interface RequestManagedCertContext {
  /**
   * Update a RequestManagedCertInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RequestManagedCertInstance
   */
  update(
    callback?: (error: Error | null, item?: RequestManagedCertInstance) => any
  ): Promise<RequestManagedCertInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RequestManagedCertContextSolution {
  domainSid: string;
}

export class RequestManagedCertContextImpl
  implements RequestManagedCertContext
{
  protected _solution: RequestManagedCertContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, domainSid: string) {
    if (!isValidPathParam(domainSid)) {
      throw new Error("Parameter 'domainSid' is not valid.");
    }

    this._solution = { domainSid };
    this._uri = `/LinkShortening/Domains/${domainSid}/RequestManagedCert`;
  }

  update(
    callback?: (error: Error | null, item?: RequestManagedCertInstance) => any
  ): Promise<RequestManagedCertInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RequestManagedCertInstance(
          operationVersion,
          payload,
          instance._solution.domainSid
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

interface RequestManagedCertPayload extends RequestManagedCertResource {}

interface RequestManagedCertResource {
  domain_sid: string;
  date_updated: Date;
  date_created: Date;
  date_expires: Date;
  domain_name: string;
  certificate_sid: string;
  url: string;
  managed: boolean;
  requesting: boolean;
}

export class RequestManagedCertInstance {
  protected _solution: RequestManagedCertContextSolution;
  protected _context?: RequestManagedCertContext;

  constructor(
    protected _version: V1,
    payload: RequestManagedCertResource,
    domainSid?: string
  ) {
    this.domainSid = payload.domain_sid;
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateExpires = deserialize.iso8601DateTime(payload.date_expires);
    this.domainName = payload.domain_name;
    this.certificateSid = payload.certificate_sid;
    this.url = payload.url;
    this.managed = payload.managed;
    this.requesting = payload.requesting;

    this._solution = { domainSid: domainSid || this.domainSid };
  }

  /**
   * The unique string that we created to identify the Domain resource.
   */
  domainSid: string;
  /**
   * Date that this Domain was last updated.
   */
  dateUpdated: Date;
  /**
   * Date that this Domain was registered to the Twilio platform to create a new Domain object.
   */
  dateCreated: Date;
  /**
   * Date that the private certificate associated with this domain expires. This is the expiration date of your existing cert.
   */
  dateExpires: Date;
  /**
   * Full url path for this domain.
   */
  domainName: string;
  /**
   * The unique string that we created to identify this Certificate resource.
   */
  certificateSid: string;
  url: string;
  /**
   * A boolean flag indicating if the certificate is managed by Twilio.
   */
  managed: boolean;
  /**
   * A boolean flag indicating if a managed certificate needs to be fulfilled by Twilio.
   */
  requesting: boolean;

  private get _proxy(): RequestManagedCertContext {
    this._context =
      this._context ||
      new RequestManagedCertContextImpl(
        this._version,
        this._solution.domainSid
      );
    return this._context;
  }

  /**
   * Update a RequestManagedCertInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RequestManagedCertInstance
   */
  update(
    callback?: (error: Error | null, item?: RequestManagedCertInstance) => any
  ): Promise<RequestManagedCertInstance> {
    return this._proxy.update(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      domainSid: this.domainSid,
      dateUpdated: this.dateUpdated,
      dateCreated: this.dateCreated,
      dateExpires: this.dateExpires,
      domainName: this.domainName,
      certificateSid: this.certificateSid,
      url: this.url,
      managed: this.managed,
      requesting: this.requesting,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface RequestManagedCertSolution {}

export interface RequestManagedCertListInstance {
  _version: V1;
  _solution: RequestManagedCertSolution;
  _uri: string;

  (domainSid: string): RequestManagedCertContext;
  get(domainSid: string): RequestManagedCertContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function RequestManagedCertListInstance(
  version: V1
): RequestManagedCertListInstance {
  const instance = ((domainSid) =>
    instance.get(domainSid)) as RequestManagedCertListInstance;

  instance.get = function get(domainSid): RequestManagedCertContext {
    return new RequestManagedCertContextImpl(version, domainSid);
  };

  instance._version = version;
  instance._solution = {};
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
