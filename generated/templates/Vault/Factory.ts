// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class AddTokensAndPriceFeeds extends ethereum.Event {
  get params(): AddTokensAndPriceFeeds__Params {
    return new AddTokensAndPriceFeeds__Params(this);
  }
}

export class AddTokensAndPriceFeeds__Params {
  _event: AddTokensAndPriceFeeds;

  constructor(event: AddTokensAndPriceFeeds) {
    this._event = event;
  }

  get tokens(): Array<Address> {
    return this._event.parameters[0].value.toAddressArray();
  }

  get priceFeeds(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SetAccessManager extends ethereum.Event {
  get params(): SetAccessManager__Params {
    return new SetAccessManager__Params(this);
  }
}

export class SetAccessManager__Params {
  _event: SetAccessManager;

  constructor(event: SetAccessManager) {
    this._event = event;
  }

  get newAccessManager(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SetFeesManager extends ethereum.Event {
  get params(): SetFeesManager__Params {
    return new SetFeesManager__Params(this);
  }
}

export class SetFeesManager__Params {
  _event: SetFeesManager;

  constructor(event: SetFeesManager) {
    this._event = event;
  }

  get newFeesManager(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SetHarvester extends ethereum.Event {
  get params(): SetHarvester__Params {
    return new SetHarvester__Params(this);
  }
}

export class SetHarvester__Params {
  _event: SetHarvester;

  constructor(event: SetHarvester) {
    this._event = event;
  }

  get newHarvester(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SetSwapContracts extends ethereum.Event {
  get params(): SetSwapContracts__Params {
    return new SetSwapContracts__Params(this);
  }
}

export class SetSwapContracts__Params {
  _event: SetSwapContracts;

  constructor(event: SetSwapContracts) {
    this._event = event;
  }

  get newSwapRouter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newSwapProxy(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class VaultCreated extends ethereum.Event {
  get params(): VaultCreated__Params {
    return new VaultCreated__Params(this);
  }
}

export class VaultCreated__Params {
  _event: VaultCreated;

  constructor(event: VaultCreated) {
    this._event = event;
  }

  get vault(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get share(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokens(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }
}

export class Factory__getFactoryStateResult {
  value0: Array<Address>;
  value1: Address;
  value2: Address;
  value3: Address;
  value4: Address;
  value5: Address;

  constructor(
    value0: Array<Address>,
    value1: Address,
    value2: Address,
    value3: Address,
    value4: Address,
    value5: Address,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddressArray(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    return map;
  }

  getValue0(): Array<Address> {
    return this.value0;
  }

  getValue1(): Address {
    return this.value1;
  }

  getValue2(): Address {
    return this.value2;
  }

  getValue3(): Address {
    return this.value3;
  }

  getValue4(): Address {
    return this.value4;
  }

  getValue5(): Address {
    return this.value5;
  }
}

export class Factory__getRolesPerVaultResult {
  value0: Array<Address>;
  value1: Array<Address>;

  constructor(value0: Array<Address>, value1: Array<Address>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddressArray(this.value0));
    map.set("value1", ethereum.Value.fromAddressArray(this.value1));
    return map;
  }

  getValue0(): Array<Address> {
    return this.value0;
  }

  getValue1(): Array<Address> {
    return this.value1;
  }
}

export class Factory__getShareStateResult {
  value0: Address;
  value1: string;
  value2: string;
  value3: i32;
  value4: BigInt;
  value5: boolean;

  constructor(
    value0: Address,
    value1: string,
    value2: string,
    value3: i32,
    value4: BigInt,
    value5: boolean,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set(
      "value3",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value3)),
    );
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    return map;
  }

  getShare(): Address {
    return this.value0;
  }

  getName(): string {
    return this.value1;
  }

  getSymbol(): string {
    return this.value2;
  }

  getDecimals(): i32 {
    return this.value3;
  }

  getSupply(): BigInt {
    return this.value4;
  }

  getTransferable(): boolean {
    return this.value5;
  }
}

export class Factory__getUserShareStateResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getShare(): Address {
    return this.value0;
  }

  getBalance(): BigInt {
    return this.value1;
  }

  getAllowanceToVault(): BigInt {
    return this.value2;
  }
}

export class Factory__getVaultOngoingFeesResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getOngoingManagementFees(): BigInt {
    return this.value0;
  }

  getOngoingPerformanceFees(): BigInt {
    return this.value1;
  }
}

export class Factory__getVaultStateResultVTokensStruct extends ethereum.Tuple {
  get tokenAddress(): Address {
    return this[0].toAddress();
  }

  get priceFeedAddress(): Address {
    return this[1].toAddress();
  }

  get priceFeedPrecision(): i32 {
    return this[2].toI32();
  }

  get denominator(): BigInt {
    return this[3].toBigInt();
  }
}

export class Factory__getVaultStateResultConstantPropsStruct extends ethereum.Tuple {
  get factory(): Address {
    return this[0].toAddress();
  }

  get createdAtBlockNumber(): BigInt {
    return this[1].toBigInt();
  }

  get share(): Address {
    return this[2].toAddress();
  }
}

export class Factory__getVaultStateResultHistoryPropsStruct extends ethereum.Tuple {
  get highWaterMark(): BigInt {
    return this[0].toBigInt();
  }

  get prevRebalanceSignals(): Array<BigInt> {
    return this[1].toBigIntArray();
  }

  get prevSwap(): BigInt {
    return this[2].toBigInt();
  }

  get prevMngHarvest(): BigInt {
    return this[3].toBigInt();
  }
}

export class Factory__getVaultStateResultConfigPropsStruct extends ethereum.Tuple {
  get paused(): boolean {
    return this[0].toBoolean();
  }

  get verified(): i32 {
    return this[1].toI32();
  }

  get name(): string {
    return this[2].toString();
  }

  get description(): string {
    return this[3].toString();
  }
}

export class Factory__getVaultStateResultFeesPropsStruct extends ethereum.Tuple {
  get beneficiary(): Address {
    return this[0].toAddress();
  }

  get exitFees(): BigInt {
    return this[1].toBigInt();
  }

  get managementFeesRate(): BigInt {
    return this[2].toBigInt();
  }

  get managementFeesToStrategist(): BigInt {
    return this[3].toBigInt();
  }

  get performanceFeesRate(): BigInt {
    return this[4].toBigInt();
  }

  get performanceFeesToStrategist(): BigInt {
    return this[5].toBigInt();
  }
}

export class Factory__getVaultStateResultSecurityPropsStruct extends ethereum.Tuple {
  get maxAUM(): BigInt {
    return this[0].toBigInt();
  }

  get maxLossSwap(): BigInt {
    return this[1].toBigInt();
  }

  get minAmountDeposit(): BigInt {
    return this[2].toBigInt();
  }

  get maxAmountDeposit(): BigInt {
    return this[3].toBigInt();
  }

  get minFrequencySwap(): BigInt {
    return this[4].toBigInt();
  }

  get minSecurityTime(): BigInt {
    return this[5].toBigInt();
  }

  get minHarvestThreshold(): BigInt {
    return this[6].toBigInt();
  }
}

export class Factory__getVaultStateResult {
  value0: Array<Factory__getVaultStateResultVTokensStruct>;
  value1: Factory__getVaultStateResultConstantPropsStruct;
  value2: Factory__getVaultStateResultHistoryPropsStruct;
  value3: Factory__getVaultStateResultConfigPropsStruct;
  value4: Factory__getVaultStateResultFeesPropsStruct;
  value5: Factory__getVaultStateResultSecurityPropsStruct;
  value6: Array<BigInt>;
  value7: Array<BigInt>;
  value8: BigInt;
  value9: BigInt;

  constructor(
    value0: Array<Factory__getVaultStateResultVTokensStruct>,
    value1: Factory__getVaultStateResultConstantPropsStruct,
    value2: Factory__getVaultStateResultHistoryPropsStruct,
    value3: Factory__getVaultStateResultConfigPropsStruct,
    value4: Factory__getVaultStateResultFeesPropsStruct,
    value5: Factory__getVaultStateResultSecurityPropsStruct,
    value6: Array<BigInt>,
    value7: Array<BigInt>,
    value8: BigInt,
    value9: BigInt,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromTupleArray(this.value0));
    map.set("value1", ethereum.Value.fromTuple(this.value1));
    map.set("value2", ethereum.Value.fromTuple(this.value2));
    map.set("value3", ethereum.Value.fromTuple(this.value3));
    map.set("value4", ethereum.Value.fromTuple(this.value4));
    map.set("value5", ethereum.Value.fromTuple(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigIntArray(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigIntArray(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    return map;
  }

  getVTokens(): Array<Factory__getVaultStateResultVTokensStruct> {
    return this.value0;
  }

  getConstantProps(): Factory__getVaultStateResultConstantPropsStruct {
    return this.value1;
  }

  getHistoryProps(): Factory__getVaultStateResultHistoryPropsStruct {
    return this.value2;
  }

  getConfigProps(): Factory__getVaultStateResultConfigPropsStruct {
    return this.value3;
  }

  getFeesProps(): Factory__getVaultStateResultFeesPropsStruct {
    return this.value4;
  }

  getSecurityProps(): Factory__getVaultStateResultSecurityPropsStruct {
    return this.value5;
  }

  getBalances(): Array<BigInt> {
    return this.value6;
  }

  getPositions(): Array<BigInt> {
    return this.value7;
  }

  getVvl(): BigInt {
    return this.value8;
  }

  getSharePrice(): BigInt {
    return this.value9;
  }
}

export class Factory extends ethereum.SmartContract {
  static bind(address: Address): Factory {
    return new Factory("Factory", address);
  }

  accessManager(): Address {
    let result = super.call("accessManager", "accessManager():(address)", []);

    return result[0].toAddress();
  }

  try_accessManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "accessManager",
      "accessManager():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  beacon(): Address {
    let result = super.call("beacon", "beacon():(address)", []);

    return result[0].toAddress();
  }

  try_beacon(): ethereum.CallResult<Address> {
    let result = super.tryCall("beacon", "beacon():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  countVault(): BigInt {
    let result = super.call("countVault", "countVault():(uint256)", []);

    return result[0].toBigInt();
  }

  try_countVault(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("countVault", "countVault():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feesManager(): Address {
    let result = super.call("feesManager", "feesManager():(address)", []);

    return result[0].toAddress();
  }

  try_feesManager(): ethereum.CallResult<Address> {
    let result = super.tryCall("feesManager", "feesManager():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getFactoryState(): Factory__getFactoryStateResult {
    let result = super.call(
      "getFactoryState",
      "getFactoryState():(address[],address,address,address,address,address)",
      [],
    );

    return new Factory__getFactoryStateResult(
      result[0].toAddressArray(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toAddress(),
      result[5].toAddress(),
    );
  }

  try_getFactoryState(): ethereum.CallResult<Factory__getFactoryStateResult> {
    let result = super.tryCall(
      "getFactoryState",
      "getFactoryState():(address[],address,address,address,address,address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Factory__getFactoryStateResult(
        value[0].toAddressArray(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toAddress(),
        value[5].toAddress(),
      ),
    );
  }

  getFeesReceiver(_feeType: BigInt): Address {
    let result = super.call(
      "getFeesReceiver",
      "getFeesReceiver(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_feeType)],
    );

    return result[0].toAddress();
  }

  try_getFeesReceiver(_feeType: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getFeesReceiver",
      "getFeesReceiver(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_feeType)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRolesPerVault(_vault: Address): Factory__getRolesPerVaultResult {
    let result = super.call(
      "getRolesPerVault",
      "getRolesPerVault(address):(address[],address[])",
      [ethereum.Value.fromAddress(_vault)],
    );

    return new Factory__getRolesPerVaultResult(
      result[0].toAddressArray(),
      result[1].toAddressArray(),
    );
  }

  try_getRolesPerVault(
    _vault: Address,
  ): ethereum.CallResult<Factory__getRolesPerVaultResult> {
    let result = super.tryCall(
      "getRolesPerVault",
      "getRolesPerVault(address):(address[],address[])",
      [ethereum.Value.fromAddress(_vault)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Factory__getRolesPerVaultResult(
        value[0].toAddressArray(),
        value[1].toAddressArray(),
      ),
    );
  }

  getShareState(_vault: Address): Factory__getShareStateResult {
    let result = super.call(
      "getShareState",
      "getShareState(address):(address,string,string,uint8,uint256,bool)",
      [ethereum.Value.fromAddress(_vault)],
    );

    return new Factory__getShareStateResult(
      result[0].toAddress(),
      result[1].toString(),
      result[2].toString(),
      result[3].toI32(),
      result[4].toBigInt(),
      result[5].toBoolean(),
    );
  }

  try_getShareState(
    _vault: Address,
  ): ethereum.CallResult<Factory__getShareStateResult> {
    let result = super.tryCall(
      "getShareState",
      "getShareState(address):(address,string,string,uint8,uint256,bool)",
      [ethereum.Value.fromAddress(_vault)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Factory__getShareStateResult(
        value[0].toAddress(),
        value[1].toString(),
        value[2].toString(),
        value[3].toI32(),
        value[4].toBigInt(),
        value[5].toBoolean(),
      ),
    );
  }

  getUserShareState(
    _vault: Address,
    _user: Address,
  ): Factory__getUserShareStateResult {
    let result = super.call(
      "getUserShareState",
      "getUserShareState(address,address):(address,uint256,uint256)",
      [ethereum.Value.fromAddress(_vault), ethereum.Value.fromAddress(_user)],
    );

    return new Factory__getUserShareStateResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
    );
  }

  try_getUserShareState(
    _vault: Address,
    _user: Address,
  ): ethereum.CallResult<Factory__getUserShareStateResult> {
    let result = super.tryCall(
      "getUserShareState",
      "getUserShareState(address,address):(address,uint256,uint256)",
      [ethereum.Value.fromAddress(_vault), ethereum.Value.fromAddress(_user)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Factory__getUserShareStateResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
      ),
    );
  }

  getVaultOngoingFees(_vault: Address): Factory__getVaultOngoingFeesResult {
    let result = super.call(
      "getVaultOngoingFees",
      "getVaultOngoingFees(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(_vault)],
    );

    return new Factory__getVaultOngoingFeesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
    );
  }

  try_getVaultOngoingFees(
    _vault: Address,
  ): ethereum.CallResult<Factory__getVaultOngoingFeesResult> {
    let result = super.tryCall(
      "getVaultOngoingFees",
      "getVaultOngoingFees(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(_vault)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Factory__getVaultOngoingFeesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
      ),
    );
  }

  getVaultState(_vault: Address): Factory__getVaultStateResult {
    let result = super.call(
      "getVaultState",
      "getVaultState(address):((address,address,uint8,uint256)[],(address,uint256,address),(uint256,uint256[],uint256,uint256),(bool,uint8,string,string),(address,uint256,uint256,uint256,uint256,uint256),(uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256[],uint256[],uint256,uint256)",
      [ethereum.Value.fromAddress(_vault)],
    );

    return new Factory__getVaultStateResult(
      result[0].toTupleArray<Factory__getVaultStateResultVTokensStruct>(),
      changetype<Factory__getVaultStateResultConstantPropsStruct>(
        result[1].toTuple(),
      ),
      changetype<Factory__getVaultStateResultHistoryPropsStruct>(
        result[2].toTuple(),
      ),
      changetype<Factory__getVaultStateResultConfigPropsStruct>(
        result[3].toTuple(),
      ),
      changetype<Factory__getVaultStateResultFeesPropsStruct>(
        result[4].toTuple(),
      ),
      changetype<Factory__getVaultStateResultSecurityPropsStruct>(
        result[5].toTuple(),
      ),
      result[6].toBigIntArray(),
      result[7].toBigIntArray(),
      result[8].toBigInt(),
      result[9].toBigInt(),
    );
  }

  try_getVaultState(
    _vault: Address,
  ): ethereum.CallResult<Factory__getVaultStateResult> {
    let result = super.tryCall(
      "getVaultState",
      "getVaultState(address):((address,address,uint8,uint256)[],(address,uint256,address),(uint256,uint256[],uint256,uint256),(bool,uint8,string,string),(address,uint256,uint256,uint256,uint256,uint256),(uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256[],uint256[],uint256,uint256)",
      [ethereum.Value.fromAddress(_vault)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Factory__getVaultStateResult(
        value[0].toTupleArray<Factory__getVaultStateResultVTokensStruct>(),
        changetype<Factory__getVaultStateResultConstantPropsStruct>(
          value[1].toTuple(),
        ),
        changetype<Factory__getVaultStateResultHistoryPropsStruct>(
          value[2].toTuple(),
        ),
        changetype<Factory__getVaultStateResultConfigPropsStruct>(
          value[3].toTuple(),
        ),
        changetype<Factory__getVaultStateResultFeesPropsStruct>(
          value[4].toTuple(),
        ),
        changetype<Factory__getVaultStateResultSecurityPropsStruct>(
          value[5].toTuple(),
        ),
        value[6].toBigIntArray(),
        value[7].toBigIntArray(),
        value[8].toBigInt(),
        value[9].toBigInt(),
      ),
    );
  }

  getWhitelistedTokens(): Array<Address> {
    let result = super.call(
      "getWhitelistedTokens",
      "getWhitelistedTokens():(address[])",
      [],
    );

    return result[0].toAddressArray();
  }

  try_getWhitelistedTokens(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getWhitelistedTokens",
      "getWhitelistedTokens():(address[])",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  harvester(): Address {
    let result = super.call("harvester", "harvester():(address)", []);

    return result[0].toAddress();
  }

  try_harvester(): ethereum.CallResult<Address> {
    let result = super.tryCall("harvester", "harvester():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isTokenWhitelisted(_token: Address): boolean {
    let result = super.call(
      "isTokenWhitelisted",
      "isTokenWhitelisted(address):(bool)",
      [ethereum.Value.fromAddress(_token)],
    );

    return result[0].toBoolean();
  }

  try_isTokenWhitelisted(_token: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTokenWhitelisted",
      "isTokenWhitelisted(address):(bool)",
      [ethereum.Value.fromAddress(_token)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  shareLogic(): Address {
    let result = super.call("shareLogic", "shareLogic():(address)", []);

    return result[0].toAddress();
  }

  try_shareLogic(): ethereum.CallResult<Address> {
    let result = super.tryCall("shareLogic", "shareLogic():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  swapAdapter(): Address {
    let result = super.call("swapAdapter", "swapAdapter():(address)", []);

    return result[0].toAddress();
  }

  try_swapAdapter(): ethereum.CallResult<Address> {
    let result = super.tryCall("swapAdapter", "swapAdapter():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  swapProxy(): Address {
    let result = super.call("swapProxy", "swapProxy():(address)", []);

    return result[0].toAddress();
  }

  try_swapProxy(): ethereum.CallResult<Address> {
    let result = super.tryCall("swapProxy", "swapProxy():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  swapRouter(): Address {
    let result = super.call("swapRouter", "swapRouter():(address)", []);

    return result[0].toAddress();
  }

  try_swapRouter(): ethereum.CallResult<Address> {
    let result = super.tryCall("swapRouter", "swapRouter():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokensPriceFeed(param0: Address): Address {
    let result = super.call(
      "tokensPriceFeed",
      "tokensPriceFeed(address):(address)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toAddress();
  }

  try_tokensPriceFeed(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tokensPriceFeed",
      "tokensPriceFeed(address):(address)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  vaults(param0: BigInt): Address {
    let result = super.call("vaults", "vaults(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toAddress();
  }

  try_vaults(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("vaults", "vaults(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _shareLogic(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _accessManager(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _feesManager(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _harvester(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _swapRouter(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _swapProxy(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _swapAdapter(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _beacon(): Address {
    return this._call.inputValues[7].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddTokensAndPriceFeedsToWLCall extends ethereum.Call {
  get inputs(): AddTokensAndPriceFeedsToWLCall__Inputs {
    return new AddTokensAndPriceFeedsToWLCall__Inputs(this);
  }

  get outputs(): AddTokensAndPriceFeedsToWLCall__Outputs {
    return new AddTokensAndPriceFeedsToWLCall__Outputs(this);
  }
}

export class AddTokensAndPriceFeedsToWLCall__Inputs {
  _call: AddTokensAndPriceFeedsToWLCall;

  constructor(call: AddTokensAndPriceFeedsToWLCall) {
    this._call = call;
  }

  get _tokens(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _priceFeeds(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class AddTokensAndPriceFeedsToWLCall__Outputs {
  _call: AddTokensAndPriceFeedsToWLCall;

  constructor(call: AddTokensAndPriceFeedsToWLCall) {
    this._call = call;
  }
}

export class CreateVaultCall extends ethereum.Call {
  get inputs(): CreateVaultCall__Inputs {
    return new CreateVaultCall__Inputs(this);
  }

  get outputs(): CreateVaultCall__Outputs {
    return new CreateVaultCall__Outputs(this);
  }
}

export class CreateVaultCall__Inputs {
  _call: CreateVaultCall;

  constructor(call: CreateVaultCall) {
    this._call = call;
  }

  get _tokensAddresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _creationProps(): CreateVaultCall_creationPropsStruct {
    return changetype<CreateVaultCall_creationPropsStruct>(
      this._call.inputValues[1].value.toTuple(),
    );
  }

  get _feesProps(): CreateVaultCall_feesPropsStruct {
    return changetype<CreateVaultCall_feesPropsStruct>(
      this._call.inputValues[2].value.toTuple(),
    );
  }

  get _securityProps(): CreateVaultCall_securityPropsStruct {
    return changetype<CreateVaultCall_securityPropsStruct>(
      this._call.inputValues[3].value.toTuple(),
    );
  }
}

export class CreateVaultCall__Outputs {
  _call: CreateVaultCall;

  constructor(call: CreateVaultCall) {
    this._call = call;
  }
}

export class CreateVaultCall_creationPropsStruct extends ethereum.Tuple {
  get vaultName(): string {
    return this[0].toString();
  }

  get description(): string {
    return this[1].toString();
  }

  get shareName(): string {
    return this[2].toString();
  }

  get shareSymbol(): string {
    return this[3].toString();
  }

  get strategist(): Address {
    return this[4].toAddress();
  }
}

export class CreateVaultCall_feesPropsStruct extends ethereum.Tuple {
  get beneficiary(): Address {
    return this[0].toAddress();
  }

  get exitFees(): BigInt {
    return this[1].toBigInt();
  }

  get managementFeesRate(): BigInt {
    return this[2].toBigInt();
  }

  get managementFeesToStrategist(): BigInt {
    return this[3].toBigInt();
  }

  get performanceFeesRate(): BigInt {
    return this[4].toBigInt();
  }

  get performanceFeesToStrategist(): BigInt {
    return this[5].toBigInt();
  }
}

export class CreateVaultCall_securityPropsStruct extends ethereum.Tuple {
  get maxAUM(): BigInt {
    return this[0].toBigInt();
  }

  get maxLossSwap(): BigInt {
    return this[1].toBigInt();
  }

  get minAmountDeposit(): BigInt {
    return this[2].toBigInt();
  }

  get maxAmountDeposit(): BigInt {
    return this[3].toBigInt();
  }

  get minFrequencySwap(): BigInt {
    return this[4].toBigInt();
  }

  get minSecurityTime(): BigInt {
    return this[5].toBigInt();
  }

  get minHarvestThreshold(): BigInt {
    return this[6].toBigInt();
  }
}

export class RemoveTokensFromWhitelistCall extends ethereum.Call {
  get inputs(): RemoveTokensFromWhitelistCall__Inputs {
    return new RemoveTokensFromWhitelistCall__Inputs(this);
  }

  get outputs(): RemoveTokensFromWhitelistCall__Outputs {
    return new RemoveTokensFromWhitelistCall__Outputs(this);
  }
}

export class RemoveTokensFromWhitelistCall__Inputs {
  _call: RemoveTokensFromWhitelistCall;

  constructor(call: RemoveTokensFromWhitelistCall) {
    this._call = call;
  }

  get _tokens(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class RemoveTokensFromWhitelistCall__Outputs {
  _call: RemoveTokensFromWhitelistCall;

  constructor(call: RemoveTokensFromWhitelistCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetAccessManagerCall extends ethereum.Call {
  get inputs(): SetAccessManagerCall__Inputs {
    return new SetAccessManagerCall__Inputs(this);
  }

  get outputs(): SetAccessManagerCall__Outputs {
    return new SetAccessManagerCall__Outputs(this);
  }
}

export class SetAccessManagerCall__Inputs {
  _call: SetAccessManagerCall;

  constructor(call: SetAccessManagerCall) {
    this._call = call;
  }

  get _newAccessManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAccessManagerCall__Outputs {
  _call: SetAccessManagerCall;

  constructor(call: SetAccessManagerCall) {
    this._call = call;
  }
}

export class SetFeesManagerCall extends ethereum.Call {
  get inputs(): SetFeesManagerCall__Inputs {
    return new SetFeesManagerCall__Inputs(this);
  }

  get outputs(): SetFeesManagerCall__Outputs {
    return new SetFeesManagerCall__Outputs(this);
  }
}

export class SetFeesManagerCall__Inputs {
  _call: SetFeesManagerCall;

  constructor(call: SetFeesManagerCall) {
    this._call = call;
  }

  get _newFeesManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeesManagerCall__Outputs {
  _call: SetFeesManagerCall;

  constructor(call: SetFeesManagerCall) {
    this._call = call;
  }
}

export class SetHarvesterCall extends ethereum.Call {
  get inputs(): SetHarvesterCall__Inputs {
    return new SetHarvesterCall__Inputs(this);
  }

  get outputs(): SetHarvesterCall__Outputs {
    return new SetHarvesterCall__Outputs(this);
  }
}

export class SetHarvesterCall__Inputs {
  _call: SetHarvesterCall;

  constructor(call: SetHarvesterCall) {
    this._call = call;
  }

  get _newHarvester(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetHarvesterCall__Outputs {
  _call: SetHarvesterCall;

  constructor(call: SetHarvesterCall) {
    this._call = call;
  }
}

export class SetSwapContractsCall extends ethereum.Call {
  get inputs(): SetSwapContractsCall__Inputs {
    return new SetSwapContractsCall__Inputs(this);
  }

  get outputs(): SetSwapContractsCall__Outputs {
    return new SetSwapContractsCall__Outputs(this);
  }
}

export class SetSwapContractsCall__Inputs {
  _call: SetSwapContractsCall;

  constructor(call: SetSwapContractsCall) {
    this._call = call;
  }

  get _newSwapRouter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _newSwapProxy(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetSwapContractsCall__Outputs {
  _call: SetSwapContractsCall;

  constructor(call: SetSwapContractsCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
