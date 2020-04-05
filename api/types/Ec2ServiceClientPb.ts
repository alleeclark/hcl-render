/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  ApplyRequest,
  ApplyResponse,
  BuildRequest,
  BuildResponse,
  PlanRequest,
  PlanResponse} from './ec2_pb';

export class EC2Client {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoBuild = new grpcWeb.AbstractClientBase.MethodInfo(
    BuildResponse,
    (request: BuildRequest) => {
      return request.serializeBinary();
    },
    BuildResponse.deserializeBinary
  );

  build(
    request: BuildRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BuildResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/EC2/Build',
      request,
      metadata || {},
      this.methodInfoBuild,
      callback);
  }

  methodInfoPlan = new grpcWeb.AbstractClientBase.MethodInfo(
    PlanResponse,
    (request: PlanRequest) => {
      return request.serializeBinary();
    },
    PlanResponse.deserializeBinary
  );

  plan(
    request: PlanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PlanResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/EC2/Plan',
      request,
      metadata || {},
      this.methodInfoPlan,
      callback);
  }

  methodInfoApply = new grpcWeb.AbstractClientBase.MethodInfo(
    ApplyResponse,
    (request: ApplyRequest) => {
      return request.serializeBinary();
    },
    ApplyResponse.deserializeBinary
  );

  apply(
    request: ApplyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ApplyResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/EC2/Apply',
      request,
      metadata || {},
      this.methodInfoApply,
      callback);
  }

}

