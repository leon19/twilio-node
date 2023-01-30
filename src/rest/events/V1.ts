/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Events
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import EventsBase from "../EventsBase";
import Version from "../../base/Version";
import { EventTypeListInstance } from "./v1/eventType";
import { SchemaListInstance } from "./v1/schema";
import { SinkListInstance } from "./v1/sink";
import { SubscriptionListInstance } from "./v1/subscription";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Events
   *
   * @param domain - The Twilio (Twilio.Events) domain
   */
  constructor(domain: EventsBase) {
    super(domain, "v1");
  }

  /** eventTypes - { Twilio.Events.V1.EventTypeListInstance } resource */
  protected _eventTypes?: EventTypeListInstance;
  /** schemas - { Twilio.Events.V1.SchemaListInstance } resource */
  protected _schemas?: SchemaListInstance;
  /** sinks - { Twilio.Events.V1.SinkListInstance } resource */
  protected _sinks?: SinkListInstance;
  /** subscriptions - { Twilio.Events.V1.SubscriptionListInstance } resource */
  protected _subscriptions?: SubscriptionListInstance;

  /** Getter for eventTypes resource */
  get eventTypes(): EventTypeListInstance {
    this._eventTypes = this._eventTypes || EventTypeListInstance(this);
    return this._eventTypes;
  }

  /** Getter for schemas resource */
  get schemas(): SchemaListInstance {
    this._schemas = this._schemas || SchemaListInstance(this);
    return this._schemas;
  }

  /** Getter for sinks resource */
  get sinks(): SinkListInstance {
    this._sinks = this._sinks || SinkListInstance(this);
    return this._sinks;
  }

  /** Getter for subscriptions resource */
  get subscriptions(): SubscriptionListInstance {
    this._subscriptions = this._subscriptions || SubscriptionListInstance(this);
    return this._subscriptions;
  }
}