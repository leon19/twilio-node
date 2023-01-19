/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Oauth
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

export interface OpenidDiscoveryContext {
  /**
   * Fetch a OpenidDiscoveryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OpenidDiscoveryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: OpenidDiscoveryInstance) => any
  ): Promise<OpenidDiscoveryInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface OpenidDiscoveryContextSolution {}

export class OpenidDiscoveryContextImpl implements OpenidDiscoveryContext {
  protected _solution: OpenidDiscoveryContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/.well-known/openid-configuration`;
  }

  fetch(
    callback?: (error: Error | null, item?: OpenidDiscoveryInstance) => any
  ): Promise<OpenidDiscoveryInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) => new OpenidDiscoveryInstance(operationVersion, payload)
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

interface OpenidDiscoveryPayload extends OpenidDiscoveryResource {}

interface OpenidDiscoveryResource {
  issuer: string;
  authorization_endpoint: string;
  device_authorization_endpoint: string;
  token_endpoint: string;
  userinfo_endpoint: string;
  revocation_endpoint: string;
  jwk_uri: string;
  response_type_supported: Array<string>;
  subject_type_supported: Array<string>;
  id_token_signing_alg_values_supported: Array<string>;
  scopes_supported: Array<string>;
  claims_supported: Array<string>;
  url: string;
}

export class OpenidDiscoveryInstance {
  protected _solution: OpenidDiscoveryContextSolution;
  protected _context?: OpenidDiscoveryContext;

  constructor(protected _version: V1, payload: OpenidDiscoveryResource) {
    this.issuer = payload.issuer;
    this.authorizationEndpoint = payload.authorization_endpoint;
    this.deviceAuthorizationEndpoint = payload.device_authorization_endpoint;
    this.tokenEndpoint = payload.token_endpoint;
    this.userinfoEndpoint = payload.userinfo_endpoint;
    this.revocationEndpoint = payload.revocation_endpoint;
    this.jwkUri = payload.jwk_uri;
    this.responseTypeSupported = payload.response_type_supported;
    this.subjectTypeSupported = payload.subject_type_supported;
    this.idTokenSigningAlgValuesSupported =
      payload.id_token_signing_alg_values_supported;
    this.scopesSupported = payload.scopes_supported;
    this.claimsSupported = payload.claims_supported;
    this.url = payload.url;

    this._solution = {};
  }

  /**
   * The issuer URL
   */
  issuer: string;
  /**
   * The URL of authorization endpoint
   */
  authorizationEndpoint: string;
  /**
   * The URL of device code authorization endpoint
   */
  deviceAuthorizationEndpoint: string;
  /**
   * The URL of token endpoint
   */
  tokenEndpoint: string;
  /**
   * The URL of user info endpoint
   */
  userinfoEndpoint: string;
  /**
   * The URL of revocation endpoint
   */
  revocationEndpoint: string;
  /**
   * The URL of public JWK endpoint
   */
  jwkUri: string;
  /**
   * List of response type supported for identity token
   */
  responseTypeSupported: Array<string>;
  /**
   * List of subject supported for identity token
   */
  subjectTypeSupported: Array<string>;
  /**
   * List of JWS signing algorithms supported for identity token
   */
  idTokenSigningAlgValuesSupported: Array<string>;
  /**
   * List of scopes supported identity token
   */
  scopesSupported: Array<string>;
  /**
   * List of claims supported for identity token
   */
  claimsSupported: Array<string>;
  url: string;

  private get _proxy(): OpenidDiscoveryContext {
    this._context =
      this._context || new OpenidDiscoveryContextImpl(this._version);
    return this._context;
  }

  /**
   * Fetch a OpenidDiscoveryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OpenidDiscoveryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: OpenidDiscoveryInstance) => any
  ): Promise<OpenidDiscoveryInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      issuer: this.issuer,
      authorizationEndpoint: this.authorizationEndpoint,
      deviceAuthorizationEndpoint: this.deviceAuthorizationEndpoint,
      tokenEndpoint: this.tokenEndpoint,
      userinfoEndpoint: this.userinfoEndpoint,
      revocationEndpoint: this.revocationEndpoint,
      jwkUri: this.jwkUri,
      responseTypeSupported: this.responseTypeSupported,
      subjectTypeSupported: this.subjectTypeSupported,
      idTokenSigningAlgValuesSupported: this.idTokenSigningAlgValuesSupported,
      scopesSupported: this.scopesSupported,
      claimsSupported: this.claimsSupported,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface OpenidDiscoverySolution {}

export interface OpenidDiscoveryListInstance {
  _version: V1;
  _solution: OpenidDiscoverySolution;
  _uri: string;

  (): OpenidDiscoveryContext;
  get(): OpenidDiscoveryContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function OpenidDiscoveryListInstance(
  version: V1
): OpenidDiscoveryListInstance {
  const instance = (() => instance.get()) as OpenidDiscoveryListInstance;

  instance.get = function get(): OpenidDiscoveryContext {
    return new OpenidDiscoveryContextImpl(version);
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