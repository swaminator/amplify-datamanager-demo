import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Listing {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly date?: string;
  constructor(init: ModelInit<Listing>);
  static copyOf(source: Listing, mutator: (draft: MutableModel<Listing>) => MutableModel<Listing> | void): Listing;
}