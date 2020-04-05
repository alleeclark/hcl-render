import * as jspb from "google-protobuf"

export class BuildRequest extends jspb.Message {
  getSource(): string;
  setSource(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getName(): string;
  setName(value: string): void;

  getInstanceCount(): number;
  setInstanceCount(value: number): void;

  getAmi(): string;
  setAmi(value: string): void;

  getInstanceType(): string;
  setInstanceType(value: string): void;

  getKeyName(): string;
  setKeyName(value: string): void;

  getMonitoring(): boolean;
  setMonitoring(value: boolean): void;

  getVpcSecurityGroupIdsList(): Array<string>;
  setVpcSecurityGroupIdsList(value: Array<string>): void;
  clearVpcSecurityGroupIdsList(): void;
  addVpcSecurityGroupIds(value: string, index?: number): void;

  getSubnetId(): string;
  setSubnetId(value: string): void;

  getTagMap(): jspb.Map<string, string>;
  clearTagMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BuildRequest): BuildRequest.AsObject;
  static serializeBinaryToWriter(message: BuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildRequest;
  static deserializeBinaryFromReader(message: BuildRequest, reader: jspb.BinaryReader): BuildRequest;
}

export namespace BuildRequest {
  export type AsObject = {
    source: string,
    version: string,
    name: string,
    instanceCount: number,
    ami: string,
    instanceType: string,
    keyName: string,
    monitoring: boolean,
    vpcSecurityGroupIdsList: Array<string>,
    subnetId: string,
    tagMap: Array<[string, string]>,
  }
}

export class BuildResponse extends jspb.Message {
  getBuildId(): string;
  setBuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BuildResponse): BuildResponse.AsObject;
  static serializeBinaryToWriter(message: BuildResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildResponse;
  static deserializeBinaryFromReader(message: BuildResponse, reader: jspb.BinaryReader): BuildResponse;
}

export namespace BuildResponse {
  export type AsObject = {
    buildId: string,
  }
}

export class PlanRequest extends jspb.Message {
  getBuildId(): string;
  setBuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlanRequest): PlanRequest.AsObject;
  static serializeBinaryToWriter(message: PlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanRequest;
  static deserializeBinaryFromReader(message: PlanRequest, reader: jspb.BinaryReader): PlanRequest;
}

export namespace PlanRequest {
  export type AsObject = {
    buildId: string,
  }
}

export class PlanResponse extends jspb.Message {
  getOutput(): string;
  setOutput(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlanResponse): PlanResponse.AsObject;
  static serializeBinaryToWriter(message: PlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanResponse;
  static deserializeBinaryFromReader(message: PlanResponse, reader: jspb.BinaryReader): PlanResponse;
}

export namespace PlanResponse {
  export type AsObject = {
    output: string,
  }
}

export class ApplyRequest extends jspb.Message {
  getBuildId(): string;
  setBuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyRequest): ApplyRequest.AsObject;
  static serializeBinaryToWriter(message: ApplyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyRequest;
  static deserializeBinaryFromReader(message: ApplyRequest, reader: jspb.BinaryReader): ApplyRequest;
}

export namespace ApplyRequest {
  export type AsObject = {
    buildId: string,
  }
}

export class ApplyResponse extends jspb.Message {
  getOutput(): string;
  setOutput(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyResponse): ApplyResponse.AsObject;
  static serializeBinaryToWriter(message: ApplyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyResponse;
  static deserializeBinaryFromReader(message: ApplyResponse, reader: jspb.BinaryReader): ApplyResponse;
}

export namespace ApplyResponse {
  export type AsObject = {
    output: string,
  }
}

