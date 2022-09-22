import { BigInt } from "@graphprotocol/graph-ts"
import {
  Factory,
  AddTokensAndPriceFeeds,
  OwnershipTransferred,
  SetAccessManager,
  SetFeesManager,
  SetHarvester,
  SetSwapContracts,
  VaultCreated
} from "../generated/Factory/Factory"
import { ExampleEntity } from "../generated/schema"

export function handleAddTokensAndPriceFeeds(
  event: AddTokensAndPriceFeeds
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.tokens = event.params.tokens
  entity.priceFeeds = event.params.priceFeeds

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.accessManager(...)
  // - contract.beacon(...)
  // - contract.countVault(...)
  // - contract.feesManager(...)
  // - contract.getAllVaults(...)
  // - contract.getFactoryState(...)
  // - contract.getFeesReceiver(...)
  // - contract.getRolesPerVault(...)
  // - contract.getShareState(...)
  // - contract.getUserShareState(...)
  // - contract.getVaultOngoingFees(...)
  // - contract.getVaultState(...)
  // - contract.getWhitelistedTokens(...)
  // - contract.harvester(...)
  // - contract.isTokenWhitelisted(...)
  // - contract.owner(...)
  // - contract.shareLogic(...)
  // - contract.swapAdapter(...)
  // - contract.swapProxy(...)
  // - contract.swapRouter(...)
  // - contract.tokensPriceFeed(...)
  // - contract.vaults(...)
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleSetAccessManager(event: SetAccessManager): void {}

export function handleSetFeesManager(event: SetFeesManager): void {}

export function handleSetHarvester(event: SetHarvester): void {}

export function handleSetSwapContracts(event: SetSwapContracts): void {}

export function handleVaultCreated(event: VaultCreated): void {}