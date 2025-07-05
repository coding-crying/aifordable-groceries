
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserPreferences
 * 
 */
export type UserPreferences = $Result.DefaultSelection<Prisma.$UserPreferencesPayload>
/**
 * Model UserAllergy
 * 
 */
export type UserAllergy = $Result.DefaultSelection<Prisma.$UserAllergyPayload>
/**
 * Model FridgeItem
 * 
 */
export type FridgeItem = $Result.DefaultSelection<Prisma.$FridgeItemPayload>
/**
 * Model UserFavorite
 * 
 */
export type UserFavorite = $Result.DefaultSelection<Prisma.$UserFavoritePayload>
/**
 * Model ShoppingSession
 * 
 */
export type ShoppingSession = $Result.DefaultSelection<Prisma.$ShoppingSessionPayload>
/**
 * Model SessionRecipe
 * 
 */
export type SessionRecipe = $Result.DefaultSelection<Prisma.$SessionRecipePayload>
/**
 * Model ShoppingListItem
 * 
 */
export type ShoppingListItem = $Result.DefaultSelection<Prisma.$ShoppingListItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreferences`: Exposes CRUD operations for the **UserPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreferences.findMany()
    * ```
    */
  get userPreferences(): Prisma.UserPreferencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAllergy`: Exposes CRUD operations for the **UserAllergy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAllergies
    * const userAllergies = await prisma.userAllergy.findMany()
    * ```
    */
  get userAllergy(): Prisma.UserAllergyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fridgeItem`: Exposes CRUD operations for the **FridgeItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FridgeItems
    * const fridgeItems = await prisma.fridgeItem.findMany()
    * ```
    */
  get fridgeItem(): Prisma.FridgeItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFavorite`: Exposes CRUD operations for the **UserFavorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFavorites
    * const userFavorites = await prisma.userFavorite.findMany()
    * ```
    */
  get userFavorite(): Prisma.UserFavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shoppingSession`: Exposes CRUD operations for the **ShoppingSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingSessions
    * const shoppingSessions = await prisma.shoppingSession.findMany()
    * ```
    */
  get shoppingSession(): Prisma.ShoppingSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionRecipe`: Exposes CRUD operations for the **SessionRecipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionRecipes
    * const sessionRecipes = await prisma.sessionRecipe.findMany()
    * ```
    */
  get sessionRecipe(): Prisma.SessionRecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shoppingListItem`: Exposes CRUD operations for the **ShoppingListItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingListItems
    * const shoppingListItems = await prisma.shoppingListItem.findMany()
    * ```
    */
  get shoppingListItem(): Prisma.ShoppingListItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserPreferences: 'UserPreferences',
    UserAllergy: 'UserAllergy',
    FridgeItem: 'FridgeItem',
    UserFavorite: 'UserFavorite',
    ShoppingSession: 'ShoppingSession',
    SessionRecipe: 'SessionRecipe',
    ShoppingListItem: 'ShoppingListItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userPreferences" | "userAllergy" | "fridgeItem" | "userFavorite" | "shoppingSession" | "sessionRecipe" | "shoppingListItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserPreferences: {
        payload: Prisma.$UserPreferencesPayload<ExtArgs>
        fields: Prisma.UserPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findFirst: {
            args: Prisma.UserPreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findMany: {
            args: Prisma.UserPreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          create: {
            args: Prisma.UserPreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          createMany: {
            args: Prisma.UserPreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          delete: {
            args: Prisma.UserPreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          update: {
            args: Prisma.UserPreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.UserPreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          upsert: {
            args: Prisma.UserPreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          aggregate: {
            args: Prisma.UserPreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreferences>
          }
          groupBy: {
            args: Prisma.UserPreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesCountAggregateOutputType> | number
          }
        }
      }
      UserAllergy: {
        payload: Prisma.$UserAllergyPayload<ExtArgs>
        fields: Prisma.UserAllergyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAllergyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAllergyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>
          }
          findFirst: {
            args: Prisma.UserAllergyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAllergyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>
          }
          findMany: {
            args: Prisma.UserAllergyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>[]
          }
          create: {
            args: Prisma.UserAllergyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>
          }
          createMany: {
            args: Prisma.UserAllergyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAllergyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>[]
          }
          delete: {
            args: Prisma.UserAllergyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>
          }
          update: {
            args: Prisma.UserAllergyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>
          }
          deleteMany: {
            args: Prisma.UserAllergyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAllergyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAllergyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>[]
          }
          upsert: {
            args: Prisma.UserAllergyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAllergyPayload>
          }
          aggregate: {
            args: Prisma.UserAllergyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAllergy>
          }
          groupBy: {
            args: Prisma.UserAllergyGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAllergyGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAllergyCountArgs<ExtArgs>
            result: $Utils.Optional<UserAllergyCountAggregateOutputType> | number
          }
        }
      }
      FridgeItem: {
        payload: Prisma.$FridgeItemPayload<ExtArgs>
        fields: Prisma.FridgeItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FridgeItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FridgeItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FridgeItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FridgeItemPayload>
          }
          findFirst: {
            args: Prisma.FridgeItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FridgeItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FridgeItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FridgeItemPayload>
          }
          findMany: {
            args: Prisma.FridgeItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FridgeItemPayload>[]
          }
          create: {
            args: Prisma.FridgeItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FridgeItemPayload>
          }
          createMany: {
            args: Prisma.FridgeItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FridgeItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FridgeItemPayload>[]
          }
          delete: {
            args: Prisma.FridgeItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FridgeItemPayload>
          }
          update: {
            args: Prisma.FridgeItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FridgeItemPayload>
          }
          deleteMany: {
            args: Prisma.FridgeItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FridgeItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FridgeItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FridgeItemPayload>[]
          }
          upsert: {
            args: Prisma.FridgeItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FridgeItemPayload>
          }
          aggregate: {
            args: Prisma.FridgeItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFridgeItem>
          }
          groupBy: {
            args: Prisma.FridgeItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FridgeItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FridgeItemCountArgs<ExtArgs>
            result: $Utils.Optional<FridgeItemCountAggregateOutputType> | number
          }
        }
      }
      UserFavorite: {
        payload: Prisma.$UserFavoritePayload<ExtArgs>
        fields: Prisma.UserFavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          findFirst: {
            args: Prisma.UserFavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          findMany: {
            args: Prisma.UserFavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>[]
          }
          create: {
            args: Prisma.UserFavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          createMany: {
            args: Prisma.UserFavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>[]
          }
          delete: {
            args: Prisma.UserFavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          update: {
            args: Prisma.UserFavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          deleteMany: {
            args: Prisma.UserFavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserFavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>[]
          }
          upsert: {
            args: Prisma.UserFavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          aggregate: {
            args: Prisma.UserFavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFavorite>
          }
          groupBy: {
            args: Prisma.UserFavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<UserFavoriteCountAggregateOutputType> | number
          }
        }
      }
      ShoppingSession: {
        payload: Prisma.$ShoppingSessionPayload<ExtArgs>
        fields: Prisma.ShoppingSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShoppingSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShoppingSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingSessionPayload>
          }
          findFirst: {
            args: Prisma.ShoppingSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShoppingSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingSessionPayload>
          }
          findMany: {
            args: Prisma.ShoppingSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingSessionPayload>[]
          }
          create: {
            args: Prisma.ShoppingSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingSessionPayload>
          }
          createMany: {
            args: Prisma.ShoppingSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShoppingSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingSessionPayload>[]
          }
          delete: {
            args: Prisma.ShoppingSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingSessionPayload>
          }
          update: {
            args: Prisma.ShoppingSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingSessionPayload>
          }
          deleteMany: {
            args: Prisma.ShoppingSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShoppingSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShoppingSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingSessionPayload>[]
          }
          upsert: {
            args: Prisma.ShoppingSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingSessionPayload>
          }
          aggregate: {
            args: Prisma.ShoppingSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShoppingSession>
          }
          groupBy: {
            args: Prisma.ShoppingSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShoppingSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShoppingSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ShoppingSessionCountAggregateOutputType> | number
          }
        }
      }
      SessionRecipe: {
        payload: Prisma.$SessionRecipePayload<ExtArgs>
        fields: Prisma.SessionRecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionRecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionRecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionRecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionRecipePayload>
          }
          findFirst: {
            args: Prisma.SessionRecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionRecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionRecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionRecipePayload>
          }
          findMany: {
            args: Prisma.SessionRecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionRecipePayload>[]
          }
          create: {
            args: Prisma.SessionRecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionRecipePayload>
          }
          createMany: {
            args: Prisma.SessionRecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionRecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionRecipePayload>[]
          }
          delete: {
            args: Prisma.SessionRecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionRecipePayload>
          }
          update: {
            args: Prisma.SessionRecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionRecipePayload>
          }
          deleteMany: {
            args: Prisma.SessionRecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionRecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionRecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionRecipePayload>[]
          }
          upsert: {
            args: Prisma.SessionRecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionRecipePayload>
          }
          aggregate: {
            args: Prisma.SessionRecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionRecipe>
          }
          groupBy: {
            args: Prisma.SessionRecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionRecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionRecipeCountArgs<ExtArgs>
            result: $Utils.Optional<SessionRecipeCountAggregateOutputType> | number
          }
        }
      }
      ShoppingListItem: {
        payload: Prisma.$ShoppingListItemPayload<ExtArgs>
        fields: Prisma.ShoppingListItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShoppingListItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShoppingListItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>
          }
          findFirst: {
            args: Prisma.ShoppingListItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShoppingListItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>
          }
          findMany: {
            args: Prisma.ShoppingListItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>[]
          }
          create: {
            args: Prisma.ShoppingListItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>
          }
          createMany: {
            args: Prisma.ShoppingListItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShoppingListItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>[]
          }
          delete: {
            args: Prisma.ShoppingListItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>
          }
          update: {
            args: Prisma.ShoppingListItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>
          }
          deleteMany: {
            args: Prisma.ShoppingListItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShoppingListItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShoppingListItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>[]
          }
          upsert: {
            args: Prisma.ShoppingListItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>
          }
          aggregate: {
            args: Prisma.ShoppingListItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShoppingListItem>
          }
          groupBy: {
            args: Prisma.ShoppingListItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShoppingListItemCountArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userPreferences?: UserPreferencesOmit
    userAllergy?: UserAllergyOmit
    fridgeItem?: FridgeItemOmit
    userFavorite?: UserFavoriteOmit
    shoppingSession?: ShoppingSessionOmit
    sessionRecipe?: SessionRecipeOmit
    shoppingListItem?: ShoppingListItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    allergies: number
    fridgeItems: number
    favorites: number
    shoppingHistory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allergies?: boolean | UserCountOutputTypeCountAllergiesArgs
    fridgeItems?: boolean | UserCountOutputTypeCountFridgeItemsArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    shoppingHistory?: boolean | UserCountOutputTypeCountShoppingHistoryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAllergiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAllergyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFridgeItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FridgeItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShoppingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingSessionWhereInput
  }


  /**
   * Count Type ShoppingSessionCountOutputType
   */

  export type ShoppingSessionCountOutputType = {
    recipes: number
    shoppingList: number
  }

  export type ShoppingSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | ShoppingSessionCountOutputTypeCountRecipesArgs
    shoppingList?: boolean | ShoppingSessionCountOutputTypeCountShoppingListArgs
  }

  // Custom InputTypes
  /**
   * ShoppingSessionCountOutputType without action
   */
  export type ShoppingSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSessionCountOutputType
     */
    select?: ShoppingSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShoppingSessionCountOutputType without action
   */
  export type ShoppingSessionCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionRecipeWhereInput
  }

  /**
   * ShoppingSessionCountOutputType without action
   */
  export type ShoppingSessionCountOutputTypeCountShoppingListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    familySize: number | null
    weeklyBudget: number | null
  }

  export type UserSumAggregateOutputType = {
    familySize: number | null
    weeklyBudget: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    zipCode: string | null
    familySize: number | null
    weeklyBudget: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    zipCode: string | null
    familySize: number | null
    weeklyBudget: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    email: number
    zipCode: number
    familySize: number
    weeklyBudget: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    familySize?: true
    weeklyBudget?: true
  }

  export type UserSumAggregateInputType = {
    familySize?: true
    weeklyBudget?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    zipCode?: true
    familySize?: true
    weeklyBudget?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    zipCode?: true
    familySize?: true
    weeklyBudget?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    zipCode?: true
    familySize?: true
    weeklyBudget?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string | null
    email: string | null
    zipCode: string | null
    familySize: number
    weeklyBudget: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    zipCode?: boolean
    familySize?: boolean
    weeklyBudget?: boolean
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    allergies?: boolean | User$allergiesArgs<ExtArgs>
    fridgeItems?: boolean | User$fridgeItemsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    shoppingHistory?: boolean | User$shoppingHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    zipCode?: boolean
    familySize?: boolean
    weeklyBudget?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    zipCode?: boolean
    familySize?: boolean
    weeklyBudget?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    zipCode?: boolean
    familySize?: boolean
    weeklyBudget?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "email" | "zipCode" | "familySize" | "weeklyBudget", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    allergies?: boolean | User$allergiesArgs<ExtArgs>
    fridgeItems?: boolean | User$fridgeItemsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    shoppingHistory?: boolean | User$shoppingHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      preferences: Prisma.$UserPreferencesPayload<ExtArgs> | null
      allergies: Prisma.$UserAllergyPayload<ExtArgs>[]
      fridgeItems: Prisma.$FridgeItemPayload<ExtArgs>[]
      favorites: Prisma.$UserFavoritePayload<ExtArgs>[]
      shoppingHistory: Prisma.$ShoppingSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string | null
      email: string | null
      zipCode: string | null
      familySize: number
      weeklyBudget: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    allergies<T extends User$allergiesArgs<ExtArgs> = {}>(args?: Subset<T, User$allergiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fridgeItems<T extends User$fridgeItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$fridgeItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FridgeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shoppingHistory<T extends User$shoppingHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$shoppingHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly zipCode: FieldRef<"User", 'String'>
    readonly familySize: FieldRef<"User", 'Int'>
    readonly weeklyBudget: FieldRef<"User", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    where?: UserPreferencesWhereInput
  }

  /**
   * User.allergies
   */
  export type User$allergiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    where?: UserAllergyWhereInput
    orderBy?: UserAllergyOrderByWithRelationInput | UserAllergyOrderByWithRelationInput[]
    cursor?: UserAllergyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAllergyScalarFieldEnum | UserAllergyScalarFieldEnum[]
  }

  /**
   * User.fridgeItems
   */
  export type User$fridgeItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeItem
     */
    select?: FridgeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FridgeItem
     */
    omit?: FridgeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeItemInclude<ExtArgs> | null
    where?: FridgeItemWhereInput
    orderBy?: FridgeItemOrderByWithRelationInput | FridgeItemOrderByWithRelationInput[]
    cursor?: FridgeItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FridgeItemScalarFieldEnum | FridgeItemScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    where?: UserFavoriteWhereInput
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    cursor?: UserFavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * User.shoppingHistory
   */
  export type User$shoppingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSession
     */
    select?: ShoppingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingSession
     */
    omit?: ShoppingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingSessionInclude<ExtArgs> | null
    where?: ShoppingSessionWhereInput
    orderBy?: ShoppingSessionOrderByWithRelationInput | ShoppingSessionOrderByWithRelationInput[]
    cursor?: ShoppingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingSessionScalarFieldEnum | ShoppingSessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserPreferences
   */

  export type AggregateUserPreferences = {
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  export type UserPreferencesAvgAggregateOutputType = {
    maxCookTime: number | null
    maxPrepTime: number | null
    maxStores: number | null
  }

  export type UserPreferencesSumAggregateOutputType = {
    maxCookTime: number | null
    maxPrepTime: number | null
    maxStores: number | null
  }

  export type UserPreferencesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    dietaryRestrictions: string | null
    cuisinePreferences: string | null
    nutritionFocus: string | null
    maxCookTime: number | null
    maxPrepTime: number | null
    skillLevel: string | null
    equipmentAvailable: string | null
    preferredStores: string | null
    maxStores: number | null
    bulkBuyingOk: boolean | null
    organicPreference: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferencesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    dietaryRestrictions: string | null
    cuisinePreferences: string | null
    nutritionFocus: string | null
    maxCookTime: number | null
    maxPrepTime: number | null
    skillLevel: string | null
    equipmentAvailable: string | null
    preferredStores: string | null
    maxStores: number | null
    bulkBuyingOk: boolean | null
    organicPreference: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferencesCountAggregateOutputType = {
    id: number
    userId: number
    dietaryRestrictions: number
    cuisinePreferences: number
    nutritionFocus: number
    maxCookTime: number
    maxPrepTime: number
    skillLevel: number
    equipmentAvailable: number
    preferredStores: number
    maxStores: number
    bulkBuyingOk: number
    organicPreference: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPreferencesAvgAggregateInputType = {
    maxCookTime?: true
    maxPrepTime?: true
    maxStores?: true
  }

  export type UserPreferencesSumAggregateInputType = {
    maxCookTime?: true
    maxPrepTime?: true
    maxStores?: true
  }

  export type UserPreferencesMinAggregateInputType = {
    id?: true
    userId?: true
    dietaryRestrictions?: true
    cuisinePreferences?: true
    nutritionFocus?: true
    maxCookTime?: true
    maxPrepTime?: true
    skillLevel?: true
    equipmentAvailable?: true
    preferredStores?: true
    maxStores?: true
    bulkBuyingOk?: true
    organicPreference?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferencesMaxAggregateInputType = {
    id?: true
    userId?: true
    dietaryRestrictions?: true
    cuisinePreferences?: true
    nutritionFocus?: true
    maxCookTime?: true
    maxPrepTime?: true
    skillLevel?: true
    equipmentAvailable?: true
    preferredStores?: true
    maxStores?: true
    bulkBuyingOk?: true
    organicPreference?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferencesCountAggregateInputType = {
    id?: true
    userId?: true
    dietaryRestrictions?: true
    cuisinePreferences?: true
    nutritionFocus?: true
    maxCookTime?: true
    maxPrepTime?: true
    skillLevel?: true
    equipmentAvailable?: true
    preferredStores?: true
    maxStores?: true
    bulkBuyingOk?: true
    organicPreference?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to aggregate.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type GetUserPreferencesAggregateType<T extends UserPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreferences[P]>
      : GetScalarType<T[P], AggregateUserPreferences[P]>
  }




  export type UserPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithAggregationInput | UserPreferencesOrderByWithAggregationInput[]
    by: UserPreferencesScalarFieldEnum[] | UserPreferencesScalarFieldEnum
    having?: UserPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferencesCountAggregateInputType | true
    _avg?: UserPreferencesAvgAggregateInputType
    _sum?: UserPreferencesSumAggregateInputType
    _min?: UserPreferencesMinAggregateInputType
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type UserPreferencesGroupByOutputType = {
    id: string
    userId: string
    dietaryRestrictions: string
    cuisinePreferences: string
    nutritionFocus: string | null
    maxCookTime: number
    maxPrepTime: number
    skillLevel: string
    equipmentAvailable: string
    preferredStores: string
    maxStores: number
    bulkBuyingOk: boolean
    organicPreference: string
    createdAt: Date
    updatedAt: Date
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  type GetUserPreferencesGroupByPayload<T extends UserPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dietaryRestrictions?: boolean
    cuisinePreferences?: boolean
    nutritionFocus?: boolean
    maxCookTime?: boolean
    maxPrepTime?: boolean
    skillLevel?: boolean
    equipmentAvailable?: boolean
    preferredStores?: boolean
    maxStores?: boolean
    bulkBuyingOk?: boolean
    organicPreference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dietaryRestrictions?: boolean
    cuisinePreferences?: boolean
    nutritionFocus?: boolean
    maxCookTime?: boolean
    maxPrepTime?: boolean
    skillLevel?: boolean
    equipmentAvailable?: boolean
    preferredStores?: boolean
    maxStores?: boolean
    bulkBuyingOk?: boolean
    organicPreference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dietaryRestrictions?: boolean
    cuisinePreferences?: boolean
    nutritionFocus?: boolean
    maxCookTime?: boolean
    maxPrepTime?: boolean
    skillLevel?: boolean
    equipmentAvailable?: boolean
    preferredStores?: boolean
    maxStores?: boolean
    bulkBuyingOk?: boolean
    organicPreference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectScalar = {
    id?: boolean
    userId?: boolean
    dietaryRestrictions?: boolean
    cuisinePreferences?: boolean
    nutritionFocus?: boolean
    maxCookTime?: boolean
    maxPrepTime?: boolean
    skillLevel?: boolean
    equipmentAvailable?: boolean
    preferredStores?: boolean
    maxStores?: boolean
    bulkBuyingOk?: boolean
    organicPreference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPreferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dietaryRestrictions" | "cuisinePreferences" | "nutritionFocus" | "maxCookTime" | "maxPrepTime" | "skillLevel" | "equipmentAvailable" | "preferredStores" | "maxStores" | "bulkBuyingOk" | "organicPreference" | "createdAt" | "updatedAt", ExtArgs["result"]["userPreferences"]>
  export type UserPreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreferences"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      dietaryRestrictions: string
      cuisinePreferences: string
      nutritionFocus: string | null
      maxCookTime: number
      maxPrepTime: number
      skillLevel: string
      equipmentAvailable: string
      preferredStores: string
      maxStores: number
      bulkBuyingOk: boolean
      organicPreference: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPreferences"]>
    composites: {}
  }

  type UserPreferencesGetPayload<S extends boolean | null | undefined | UserPreferencesDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencesPayload, S>

  type UserPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferencesCountAggregateInputType | true
    }

  export interface UserPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreferences'], meta: { name: 'UserPreferences' } }
    /**
     * Find zero or one UserPreferences that matches the filter.
     * @param {UserPreferencesFindUniqueArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferencesFindUniqueArgs>(args: SelectSubset<T, UserPreferencesFindUniqueArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreferences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferencesFindUniqueOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferencesFindFirstArgs>(args?: SelectSubset<T, UserPreferencesFindFirstArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferencesFindManyArgs>(args?: SelectSubset<T, UserPreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreferences.
     * @param {UserPreferencesCreateArgs} args - Arguments to create a UserPreferences.
     * @example
     * // Create one UserPreferences
     * const UserPreferences = await prisma.userPreferences.create({
     *   data: {
     *     // ... data to create a UserPreferences
     *   }
     * })
     * 
     */
    create<T extends UserPreferencesCreateArgs>(args: SelectSubset<T, UserPreferencesCreateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferencesCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferencesCreateManyArgs>(args?: SelectSubset<T, UserPreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferencesCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreferences.
     * @param {UserPreferencesDeleteArgs} args - Arguments to delete one UserPreferences.
     * @example
     * // Delete one UserPreferences
     * const UserPreferences = await prisma.userPreferences.delete({
     *   where: {
     *     // ... filter to delete one UserPreferences
     *   }
     * })
     * 
     */
    delete<T extends UserPreferencesDeleteArgs>(args: SelectSubset<T, UserPreferencesDeleteArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreferences.
     * @param {UserPreferencesUpdateArgs} args - Arguments to update one UserPreferences.
     * @example
     * // Update one UserPreferences
     * const userPreferences = await prisma.userPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferencesUpdateArgs>(args: SelectSubset<T, UserPreferencesUpdateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferencesDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferencesDeleteManyArgs>(args?: SelectSubset<T, UserPreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferencesUpdateManyArgs>(args: SelectSubset<T, UserPreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferencesUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPreferencesUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreferences.
     * @param {UserPreferencesUpsertArgs} args - Arguments to update or create a UserPreferences.
     * @example
     * // Update or create a UserPreferences
     * const userPreferences = await prisma.userPreferences.upsert({
     *   create: {
     *     // ... data to create a UserPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreferences we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferencesUpsertArgs>(args: SelectSubset<T, UserPreferencesUpsertArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreferences.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferencesCountArgs>(
      args?: Subset<T, UserPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPreferencesAggregateArgs>(args: Subset<T, UserPreferencesAggregateArgs>): Prisma.PrismaPromise<GetUserPreferencesAggregateType<T>>

    /**
     * Group by UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreferences model
   */
  readonly fields: UserPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPreferences model
   */
  interface UserPreferencesFieldRefs {
    readonly id: FieldRef<"UserPreferences", 'String'>
    readonly userId: FieldRef<"UserPreferences", 'String'>
    readonly dietaryRestrictions: FieldRef<"UserPreferences", 'String'>
    readonly cuisinePreferences: FieldRef<"UserPreferences", 'String'>
    readonly nutritionFocus: FieldRef<"UserPreferences", 'String'>
    readonly maxCookTime: FieldRef<"UserPreferences", 'Int'>
    readonly maxPrepTime: FieldRef<"UserPreferences", 'Int'>
    readonly skillLevel: FieldRef<"UserPreferences", 'String'>
    readonly equipmentAvailable: FieldRef<"UserPreferences", 'String'>
    readonly preferredStores: FieldRef<"UserPreferences", 'String'>
    readonly maxStores: FieldRef<"UserPreferences", 'Int'>
    readonly bulkBuyingOk: FieldRef<"UserPreferences", 'Boolean'>
    readonly organicPreference: FieldRef<"UserPreferences", 'String'>
    readonly createdAt: FieldRef<"UserPreferences", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPreferences", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPreferences findUnique
   */
  export type UserPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findUniqueOrThrow
   */
  export type UserPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findFirst
   */
  export type UserPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findFirstOrThrow
   */
  export type UserPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findMany
   */
  export type UserPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences create
   */
  export type UserPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreferences.
     */
    data: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
  }

  /**
   * UserPreferences createMany
   */
  export type UserPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
  }

  /**
   * UserPreferences createManyAndReturn
   */
  export type UserPreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences update
   */
  export type UserPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreferences.
     */
    data: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
    /**
     * Choose, which UserPreferences to update.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences updateMany
   */
  export type UserPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreferences updateManyAndReturn
   */
  export type UserPreferencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences upsert
   */
  export type UserPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreferences to update in case it exists.
     */
    where: UserPreferencesWhereUniqueInput
    /**
     * In case the UserPreferences found by the `where` argument doesn't exist, create a new UserPreferences with this data.
     */
    create: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
    /**
     * In case the UserPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
  }

  /**
   * UserPreferences delete
   */
  export type UserPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter which UserPreferences to delete.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences deleteMany
   */
  export type UserPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreferences without action
   */
  export type UserPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
  }


  /**
   * Model UserAllergy
   */

  export type AggregateUserAllergy = {
    _count: UserAllergyCountAggregateOutputType | null
    _min: UserAllergyMinAggregateOutputType | null
    _max: UserAllergyMaxAggregateOutputType | null
  }

  export type UserAllergyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    allergen: string | null
    severity: string | null
    createdAt: Date | null
  }

  export type UserAllergyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    allergen: string | null
    severity: string | null
    createdAt: Date | null
  }

  export type UserAllergyCountAggregateOutputType = {
    id: number
    userId: number
    allergen: number
    severity: number
    createdAt: number
    _all: number
  }


  export type UserAllergyMinAggregateInputType = {
    id?: true
    userId?: true
    allergen?: true
    severity?: true
    createdAt?: true
  }

  export type UserAllergyMaxAggregateInputType = {
    id?: true
    userId?: true
    allergen?: true
    severity?: true
    createdAt?: true
  }

  export type UserAllergyCountAggregateInputType = {
    id?: true
    userId?: true
    allergen?: true
    severity?: true
    createdAt?: true
    _all?: true
  }

  export type UserAllergyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAllergy to aggregate.
     */
    where?: UserAllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAllergies to fetch.
     */
    orderBy?: UserAllergyOrderByWithRelationInput | UserAllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAllergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAllergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAllergies
    **/
    _count?: true | UserAllergyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAllergyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAllergyMaxAggregateInputType
  }

  export type GetUserAllergyAggregateType<T extends UserAllergyAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAllergy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAllergy[P]>
      : GetScalarType<T[P], AggregateUserAllergy[P]>
  }




  export type UserAllergyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAllergyWhereInput
    orderBy?: UserAllergyOrderByWithAggregationInput | UserAllergyOrderByWithAggregationInput[]
    by: UserAllergyScalarFieldEnum[] | UserAllergyScalarFieldEnum
    having?: UserAllergyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAllergyCountAggregateInputType | true
    _min?: UserAllergyMinAggregateInputType
    _max?: UserAllergyMaxAggregateInputType
  }

  export type UserAllergyGroupByOutputType = {
    id: string
    userId: string
    allergen: string
    severity: string
    createdAt: Date
    _count: UserAllergyCountAggregateOutputType | null
    _min: UserAllergyMinAggregateOutputType | null
    _max: UserAllergyMaxAggregateOutputType | null
  }

  type GetUserAllergyGroupByPayload<T extends UserAllergyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAllergyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAllergyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAllergyGroupByOutputType[P]>
            : GetScalarType<T[P], UserAllergyGroupByOutputType[P]>
        }
      >
    >


  export type UserAllergySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    allergen?: boolean
    severity?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAllergy"]>

  export type UserAllergySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    allergen?: boolean
    severity?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAllergy"]>

  export type UserAllergySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    allergen?: boolean
    severity?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAllergy"]>

  export type UserAllergySelectScalar = {
    id?: boolean
    userId?: boolean
    allergen?: boolean
    severity?: boolean
    createdAt?: boolean
  }

  export type UserAllergyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "allergen" | "severity" | "createdAt", ExtArgs["result"]["userAllergy"]>
  export type UserAllergyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAllergyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAllergyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserAllergyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAllergy"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      allergen: string
      severity: string
      createdAt: Date
    }, ExtArgs["result"]["userAllergy"]>
    composites: {}
  }

  type UserAllergyGetPayload<S extends boolean | null | undefined | UserAllergyDefaultArgs> = $Result.GetResult<Prisma.$UserAllergyPayload, S>

  type UserAllergyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAllergyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAllergyCountAggregateInputType | true
    }

  export interface UserAllergyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAllergy'], meta: { name: 'UserAllergy' } }
    /**
     * Find zero or one UserAllergy that matches the filter.
     * @param {UserAllergyFindUniqueArgs} args - Arguments to find a UserAllergy
     * @example
     * // Get one UserAllergy
     * const userAllergy = await prisma.userAllergy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAllergyFindUniqueArgs>(args: SelectSubset<T, UserAllergyFindUniqueArgs<ExtArgs>>): Prisma__UserAllergyClient<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAllergy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAllergyFindUniqueOrThrowArgs} args - Arguments to find a UserAllergy
     * @example
     * // Get one UserAllergy
     * const userAllergy = await prisma.userAllergy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAllergyFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAllergyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAllergyClient<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAllergy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAllergyFindFirstArgs} args - Arguments to find a UserAllergy
     * @example
     * // Get one UserAllergy
     * const userAllergy = await prisma.userAllergy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAllergyFindFirstArgs>(args?: SelectSubset<T, UserAllergyFindFirstArgs<ExtArgs>>): Prisma__UserAllergyClient<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAllergy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAllergyFindFirstOrThrowArgs} args - Arguments to find a UserAllergy
     * @example
     * // Get one UserAllergy
     * const userAllergy = await prisma.userAllergy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAllergyFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAllergyFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAllergyClient<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAllergies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAllergyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAllergies
     * const userAllergies = await prisma.userAllergy.findMany()
     * 
     * // Get first 10 UserAllergies
     * const userAllergies = await prisma.userAllergy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAllergyWithIdOnly = await prisma.userAllergy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAllergyFindManyArgs>(args?: SelectSubset<T, UserAllergyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAllergy.
     * @param {UserAllergyCreateArgs} args - Arguments to create a UserAllergy.
     * @example
     * // Create one UserAllergy
     * const UserAllergy = await prisma.userAllergy.create({
     *   data: {
     *     // ... data to create a UserAllergy
     *   }
     * })
     * 
     */
    create<T extends UserAllergyCreateArgs>(args: SelectSubset<T, UserAllergyCreateArgs<ExtArgs>>): Prisma__UserAllergyClient<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAllergies.
     * @param {UserAllergyCreateManyArgs} args - Arguments to create many UserAllergies.
     * @example
     * // Create many UserAllergies
     * const userAllergy = await prisma.userAllergy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAllergyCreateManyArgs>(args?: SelectSubset<T, UserAllergyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAllergies and returns the data saved in the database.
     * @param {UserAllergyCreateManyAndReturnArgs} args - Arguments to create many UserAllergies.
     * @example
     * // Create many UserAllergies
     * const userAllergy = await prisma.userAllergy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAllergies and only return the `id`
     * const userAllergyWithIdOnly = await prisma.userAllergy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAllergyCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAllergyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAllergy.
     * @param {UserAllergyDeleteArgs} args - Arguments to delete one UserAllergy.
     * @example
     * // Delete one UserAllergy
     * const UserAllergy = await prisma.userAllergy.delete({
     *   where: {
     *     // ... filter to delete one UserAllergy
     *   }
     * })
     * 
     */
    delete<T extends UserAllergyDeleteArgs>(args: SelectSubset<T, UserAllergyDeleteArgs<ExtArgs>>): Prisma__UserAllergyClient<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAllergy.
     * @param {UserAllergyUpdateArgs} args - Arguments to update one UserAllergy.
     * @example
     * // Update one UserAllergy
     * const userAllergy = await prisma.userAllergy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAllergyUpdateArgs>(args: SelectSubset<T, UserAllergyUpdateArgs<ExtArgs>>): Prisma__UserAllergyClient<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAllergies.
     * @param {UserAllergyDeleteManyArgs} args - Arguments to filter UserAllergies to delete.
     * @example
     * // Delete a few UserAllergies
     * const { count } = await prisma.userAllergy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAllergyDeleteManyArgs>(args?: SelectSubset<T, UserAllergyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAllergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAllergyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAllergies
     * const userAllergy = await prisma.userAllergy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAllergyUpdateManyArgs>(args: SelectSubset<T, UserAllergyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAllergies and returns the data updated in the database.
     * @param {UserAllergyUpdateManyAndReturnArgs} args - Arguments to update many UserAllergies.
     * @example
     * // Update many UserAllergies
     * const userAllergy = await prisma.userAllergy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAllergies and only return the `id`
     * const userAllergyWithIdOnly = await prisma.userAllergy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAllergyUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAllergyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAllergy.
     * @param {UserAllergyUpsertArgs} args - Arguments to update or create a UserAllergy.
     * @example
     * // Update or create a UserAllergy
     * const userAllergy = await prisma.userAllergy.upsert({
     *   create: {
     *     // ... data to create a UserAllergy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAllergy we want to update
     *   }
     * })
     */
    upsert<T extends UserAllergyUpsertArgs>(args: SelectSubset<T, UserAllergyUpsertArgs<ExtArgs>>): Prisma__UserAllergyClient<$Result.GetResult<Prisma.$UserAllergyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAllergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAllergyCountArgs} args - Arguments to filter UserAllergies to count.
     * @example
     * // Count the number of UserAllergies
     * const count = await prisma.userAllergy.count({
     *   where: {
     *     // ... the filter for the UserAllergies we want to count
     *   }
     * })
    **/
    count<T extends UserAllergyCountArgs>(
      args?: Subset<T, UserAllergyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAllergyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAllergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAllergyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAllergyAggregateArgs>(args: Subset<T, UserAllergyAggregateArgs>): Prisma.PrismaPromise<GetUserAllergyAggregateType<T>>

    /**
     * Group by UserAllergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAllergyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAllergyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAllergyGroupByArgs['orderBy'] }
        : { orderBy?: UserAllergyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAllergyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAllergyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAllergy model
   */
  readonly fields: UserAllergyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAllergy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAllergyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAllergy model
   */
  interface UserAllergyFieldRefs {
    readonly id: FieldRef<"UserAllergy", 'String'>
    readonly userId: FieldRef<"UserAllergy", 'String'>
    readonly allergen: FieldRef<"UserAllergy", 'String'>
    readonly severity: FieldRef<"UserAllergy", 'String'>
    readonly createdAt: FieldRef<"UserAllergy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAllergy findUnique
   */
  export type UserAllergyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * Filter, which UserAllergy to fetch.
     */
    where: UserAllergyWhereUniqueInput
  }

  /**
   * UserAllergy findUniqueOrThrow
   */
  export type UserAllergyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * Filter, which UserAllergy to fetch.
     */
    where: UserAllergyWhereUniqueInput
  }

  /**
   * UserAllergy findFirst
   */
  export type UserAllergyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * Filter, which UserAllergy to fetch.
     */
    where?: UserAllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAllergies to fetch.
     */
    orderBy?: UserAllergyOrderByWithRelationInput | UserAllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAllergies.
     */
    cursor?: UserAllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAllergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAllergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAllergies.
     */
    distinct?: UserAllergyScalarFieldEnum | UserAllergyScalarFieldEnum[]
  }

  /**
   * UserAllergy findFirstOrThrow
   */
  export type UserAllergyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * Filter, which UserAllergy to fetch.
     */
    where?: UserAllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAllergies to fetch.
     */
    orderBy?: UserAllergyOrderByWithRelationInput | UserAllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAllergies.
     */
    cursor?: UserAllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAllergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAllergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAllergies.
     */
    distinct?: UserAllergyScalarFieldEnum | UserAllergyScalarFieldEnum[]
  }

  /**
   * UserAllergy findMany
   */
  export type UserAllergyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * Filter, which UserAllergies to fetch.
     */
    where?: UserAllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAllergies to fetch.
     */
    orderBy?: UserAllergyOrderByWithRelationInput | UserAllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAllergies.
     */
    cursor?: UserAllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAllergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAllergies.
     */
    skip?: number
    distinct?: UserAllergyScalarFieldEnum | UserAllergyScalarFieldEnum[]
  }

  /**
   * UserAllergy create
   */
  export type UserAllergyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAllergy.
     */
    data: XOR<UserAllergyCreateInput, UserAllergyUncheckedCreateInput>
  }

  /**
   * UserAllergy createMany
   */
  export type UserAllergyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAllergies.
     */
    data: UserAllergyCreateManyInput | UserAllergyCreateManyInput[]
  }

  /**
   * UserAllergy createManyAndReturn
   */
  export type UserAllergyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * The data used to create many UserAllergies.
     */
    data: UserAllergyCreateManyInput | UserAllergyCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAllergy update
   */
  export type UserAllergyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAllergy.
     */
    data: XOR<UserAllergyUpdateInput, UserAllergyUncheckedUpdateInput>
    /**
     * Choose, which UserAllergy to update.
     */
    where: UserAllergyWhereUniqueInput
  }

  /**
   * UserAllergy updateMany
   */
  export type UserAllergyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAllergies.
     */
    data: XOR<UserAllergyUpdateManyMutationInput, UserAllergyUncheckedUpdateManyInput>
    /**
     * Filter which UserAllergies to update
     */
    where?: UserAllergyWhereInput
    /**
     * Limit how many UserAllergies to update.
     */
    limit?: number
  }

  /**
   * UserAllergy updateManyAndReturn
   */
  export type UserAllergyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * The data used to update UserAllergies.
     */
    data: XOR<UserAllergyUpdateManyMutationInput, UserAllergyUncheckedUpdateManyInput>
    /**
     * Filter which UserAllergies to update
     */
    where?: UserAllergyWhereInput
    /**
     * Limit how many UserAllergies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAllergy upsert
   */
  export type UserAllergyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAllergy to update in case it exists.
     */
    where: UserAllergyWhereUniqueInput
    /**
     * In case the UserAllergy found by the `where` argument doesn't exist, create a new UserAllergy with this data.
     */
    create: XOR<UserAllergyCreateInput, UserAllergyUncheckedCreateInput>
    /**
     * In case the UserAllergy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAllergyUpdateInput, UserAllergyUncheckedUpdateInput>
  }

  /**
   * UserAllergy delete
   */
  export type UserAllergyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
    /**
     * Filter which UserAllergy to delete.
     */
    where: UserAllergyWhereUniqueInput
  }

  /**
   * UserAllergy deleteMany
   */
  export type UserAllergyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAllergies to delete
     */
    where?: UserAllergyWhereInput
    /**
     * Limit how many UserAllergies to delete.
     */
    limit?: number
  }

  /**
   * UserAllergy without action
   */
  export type UserAllergyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAllergy
     */
    select?: UserAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAllergy
     */
    omit?: UserAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAllergyInclude<ExtArgs> | null
  }


  /**
   * Model FridgeItem
   */

  export type AggregateFridgeItem = {
    _count: FridgeItemCountAggregateOutputType | null
    _avg: FridgeItemAvgAggregateOutputType | null
    _sum: FridgeItemSumAggregateOutputType | null
    _min: FridgeItemMinAggregateOutputType | null
    _max: FridgeItemMaxAggregateOutputType | null
  }

  export type FridgeItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type FridgeItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type FridgeItemMinAggregateOutputType = {
    id: string | null
    userId: string | null
    itemName: string | null
    brand: string | null
    quantity: number | null
    unit: string | null
    expirationDate: Date | null
    category: string | null
    addedDate: Date | null
    lastUpdated: Date | null
  }

  export type FridgeItemMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    itemName: string | null
    brand: string | null
    quantity: number | null
    unit: string | null
    expirationDate: Date | null
    category: string | null
    addedDate: Date | null
    lastUpdated: Date | null
  }

  export type FridgeItemCountAggregateOutputType = {
    id: number
    userId: number
    itemName: number
    brand: number
    quantity: number
    unit: number
    expirationDate: number
    category: number
    addedDate: number
    lastUpdated: number
    _all: number
  }


  export type FridgeItemAvgAggregateInputType = {
    quantity?: true
  }

  export type FridgeItemSumAggregateInputType = {
    quantity?: true
  }

  export type FridgeItemMinAggregateInputType = {
    id?: true
    userId?: true
    itemName?: true
    brand?: true
    quantity?: true
    unit?: true
    expirationDate?: true
    category?: true
    addedDate?: true
    lastUpdated?: true
  }

  export type FridgeItemMaxAggregateInputType = {
    id?: true
    userId?: true
    itemName?: true
    brand?: true
    quantity?: true
    unit?: true
    expirationDate?: true
    category?: true
    addedDate?: true
    lastUpdated?: true
  }

  export type FridgeItemCountAggregateInputType = {
    id?: true
    userId?: true
    itemName?: true
    brand?: true
    quantity?: true
    unit?: true
    expirationDate?: true
    category?: true
    addedDate?: true
    lastUpdated?: true
    _all?: true
  }

  export type FridgeItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FridgeItem to aggregate.
     */
    where?: FridgeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FridgeItems to fetch.
     */
    orderBy?: FridgeItemOrderByWithRelationInput | FridgeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FridgeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FridgeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FridgeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FridgeItems
    **/
    _count?: true | FridgeItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FridgeItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FridgeItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FridgeItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FridgeItemMaxAggregateInputType
  }

  export type GetFridgeItemAggregateType<T extends FridgeItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFridgeItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFridgeItem[P]>
      : GetScalarType<T[P], AggregateFridgeItem[P]>
  }




  export type FridgeItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FridgeItemWhereInput
    orderBy?: FridgeItemOrderByWithAggregationInput | FridgeItemOrderByWithAggregationInput[]
    by: FridgeItemScalarFieldEnum[] | FridgeItemScalarFieldEnum
    having?: FridgeItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FridgeItemCountAggregateInputType | true
    _avg?: FridgeItemAvgAggregateInputType
    _sum?: FridgeItemSumAggregateInputType
    _min?: FridgeItemMinAggregateInputType
    _max?: FridgeItemMaxAggregateInputType
  }

  export type FridgeItemGroupByOutputType = {
    id: string
    userId: string
    itemName: string
    brand: string | null
    quantity: number
    unit: string
    expirationDate: Date | null
    category: string | null
    addedDate: Date
    lastUpdated: Date
    _count: FridgeItemCountAggregateOutputType | null
    _avg: FridgeItemAvgAggregateOutputType | null
    _sum: FridgeItemSumAggregateOutputType | null
    _min: FridgeItemMinAggregateOutputType | null
    _max: FridgeItemMaxAggregateOutputType | null
  }

  type GetFridgeItemGroupByPayload<T extends FridgeItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FridgeItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FridgeItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FridgeItemGroupByOutputType[P]>
            : GetScalarType<T[P], FridgeItemGroupByOutputType[P]>
        }
      >
    >


  export type FridgeItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemName?: boolean
    brand?: boolean
    quantity?: boolean
    unit?: boolean
    expirationDate?: boolean
    category?: boolean
    addedDate?: boolean
    lastUpdated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fridgeItem"]>

  export type FridgeItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemName?: boolean
    brand?: boolean
    quantity?: boolean
    unit?: boolean
    expirationDate?: boolean
    category?: boolean
    addedDate?: boolean
    lastUpdated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fridgeItem"]>

  export type FridgeItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemName?: boolean
    brand?: boolean
    quantity?: boolean
    unit?: boolean
    expirationDate?: boolean
    category?: boolean
    addedDate?: boolean
    lastUpdated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fridgeItem"]>

  export type FridgeItemSelectScalar = {
    id?: boolean
    userId?: boolean
    itemName?: boolean
    brand?: boolean
    quantity?: boolean
    unit?: boolean
    expirationDate?: boolean
    category?: boolean
    addedDate?: boolean
    lastUpdated?: boolean
  }

  export type FridgeItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "itemName" | "brand" | "quantity" | "unit" | "expirationDate" | "category" | "addedDate" | "lastUpdated", ExtArgs["result"]["fridgeItem"]>
  export type FridgeItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FridgeItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FridgeItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FridgeItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FridgeItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      itemName: string
      brand: string | null
      quantity: number
      unit: string
      expirationDate: Date | null
      category: string | null
      addedDate: Date
      lastUpdated: Date
    }, ExtArgs["result"]["fridgeItem"]>
    composites: {}
  }

  type FridgeItemGetPayload<S extends boolean | null | undefined | FridgeItemDefaultArgs> = $Result.GetResult<Prisma.$FridgeItemPayload, S>

  type FridgeItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FridgeItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FridgeItemCountAggregateInputType | true
    }

  export interface FridgeItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FridgeItem'], meta: { name: 'FridgeItem' } }
    /**
     * Find zero or one FridgeItem that matches the filter.
     * @param {FridgeItemFindUniqueArgs} args - Arguments to find a FridgeItem
     * @example
     * // Get one FridgeItem
     * const fridgeItem = await prisma.fridgeItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FridgeItemFindUniqueArgs>(args: SelectSubset<T, FridgeItemFindUniqueArgs<ExtArgs>>): Prisma__FridgeItemClient<$Result.GetResult<Prisma.$FridgeItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FridgeItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FridgeItemFindUniqueOrThrowArgs} args - Arguments to find a FridgeItem
     * @example
     * // Get one FridgeItem
     * const fridgeItem = await prisma.fridgeItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FridgeItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FridgeItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FridgeItemClient<$Result.GetResult<Prisma.$FridgeItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FridgeItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeItemFindFirstArgs} args - Arguments to find a FridgeItem
     * @example
     * // Get one FridgeItem
     * const fridgeItem = await prisma.fridgeItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FridgeItemFindFirstArgs>(args?: SelectSubset<T, FridgeItemFindFirstArgs<ExtArgs>>): Prisma__FridgeItemClient<$Result.GetResult<Prisma.$FridgeItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FridgeItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeItemFindFirstOrThrowArgs} args - Arguments to find a FridgeItem
     * @example
     * // Get one FridgeItem
     * const fridgeItem = await prisma.fridgeItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FridgeItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FridgeItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FridgeItemClient<$Result.GetResult<Prisma.$FridgeItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FridgeItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FridgeItems
     * const fridgeItems = await prisma.fridgeItem.findMany()
     * 
     * // Get first 10 FridgeItems
     * const fridgeItems = await prisma.fridgeItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fridgeItemWithIdOnly = await prisma.fridgeItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FridgeItemFindManyArgs>(args?: SelectSubset<T, FridgeItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FridgeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FridgeItem.
     * @param {FridgeItemCreateArgs} args - Arguments to create a FridgeItem.
     * @example
     * // Create one FridgeItem
     * const FridgeItem = await prisma.fridgeItem.create({
     *   data: {
     *     // ... data to create a FridgeItem
     *   }
     * })
     * 
     */
    create<T extends FridgeItemCreateArgs>(args: SelectSubset<T, FridgeItemCreateArgs<ExtArgs>>): Prisma__FridgeItemClient<$Result.GetResult<Prisma.$FridgeItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FridgeItems.
     * @param {FridgeItemCreateManyArgs} args - Arguments to create many FridgeItems.
     * @example
     * // Create many FridgeItems
     * const fridgeItem = await prisma.fridgeItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FridgeItemCreateManyArgs>(args?: SelectSubset<T, FridgeItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FridgeItems and returns the data saved in the database.
     * @param {FridgeItemCreateManyAndReturnArgs} args - Arguments to create many FridgeItems.
     * @example
     * // Create many FridgeItems
     * const fridgeItem = await prisma.fridgeItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FridgeItems and only return the `id`
     * const fridgeItemWithIdOnly = await prisma.fridgeItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FridgeItemCreateManyAndReturnArgs>(args?: SelectSubset<T, FridgeItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FridgeItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FridgeItem.
     * @param {FridgeItemDeleteArgs} args - Arguments to delete one FridgeItem.
     * @example
     * // Delete one FridgeItem
     * const FridgeItem = await prisma.fridgeItem.delete({
     *   where: {
     *     // ... filter to delete one FridgeItem
     *   }
     * })
     * 
     */
    delete<T extends FridgeItemDeleteArgs>(args: SelectSubset<T, FridgeItemDeleteArgs<ExtArgs>>): Prisma__FridgeItemClient<$Result.GetResult<Prisma.$FridgeItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FridgeItem.
     * @param {FridgeItemUpdateArgs} args - Arguments to update one FridgeItem.
     * @example
     * // Update one FridgeItem
     * const fridgeItem = await prisma.fridgeItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FridgeItemUpdateArgs>(args: SelectSubset<T, FridgeItemUpdateArgs<ExtArgs>>): Prisma__FridgeItemClient<$Result.GetResult<Prisma.$FridgeItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FridgeItems.
     * @param {FridgeItemDeleteManyArgs} args - Arguments to filter FridgeItems to delete.
     * @example
     * // Delete a few FridgeItems
     * const { count } = await prisma.fridgeItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FridgeItemDeleteManyArgs>(args?: SelectSubset<T, FridgeItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FridgeItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FridgeItems
     * const fridgeItem = await prisma.fridgeItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FridgeItemUpdateManyArgs>(args: SelectSubset<T, FridgeItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FridgeItems and returns the data updated in the database.
     * @param {FridgeItemUpdateManyAndReturnArgs} args - Arguments to update many FridgeItems.
     * @example
     * // Update many FridgeItems
     * const fridgeItem = await prisma.fridgeItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FridgeItems and only return the `id`
     * const fridgeItemWithIdOnly = await prisma.fridgeItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FridgeItemUpdateManyAndReturnArgs>(args: SelectSubset<T, FridgeItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FridgeItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FridgeItem.
     * @param {FridgeItemUpsertArgs} args - Arguments to update or create a FridgeItem.
     * @example
     * // Update or create a FridgeItem
     * const fridgeItem = await prisma.fridgeItem.upsert({
     *   create: {
     *     // ... data to create a FridgeItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FridgeItem we want to update
     *   }
     * })
     */
    upsert<T extends FridgeItemUpsertArgs>(args: SelectSubset<T, FridgeItemUpsertArgs<ExtArgs>>): Prisma__FridgeItemClient<$Result.GetResult<Prisma.$FridgeItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FridgeItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeItemCountArgs} args - Arguments to filter FridgeItems to count.
     * @example
     * // Count the number of FridgeItems
     * const count = await prisma.fridgeItem.count({
     *   where: {
     *     // ... the filter for the FridgeItems we want to count
     *   }
     * })
    **/
    count<T extends FridgeItemCountArgs>(
      args?: Subset<T, FridgeItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FridgeItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FridgeItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FridgeItemAggregateArgs>(args: Subset<T, FridgeItemAggregateArgs>): Prisma.PrismaPromise<GetFridgeItemAggregateType<T>>

    /**
     * Group by FridgeItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FridgeItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FridgeItemGroupByArgs['orderBy'] }
        : { orderBy?: FridgeItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FridgeItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFridgeItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FridgeItem model
   */
  readonly fields: FridgeItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FridgeItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FridgeItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FridgeItem model
   */
  interface FridgeItemFieldRefs {
    readonly id: FieldRef<"FridgeItem", 'String'>
    readonly userId: FieldRef<"FridgeItem", 'String'>
    readonly itemName: FieldRef<"FridgeItem", 'String'>
    readonly brand: FieldRef<"FridgeItem", 'String'>
    readonly quantity: FieldRef<"FridgeItem", 'Float'>
    readonly unit: FieldRef<"FridgeItem", 'String'>
    readonly expirationDate: FieldRef<"FridgeItem", 'DateTime'>
    readonly category: FieldRef<"FridgeItem", 'String'>
    readonly addedDate: FieldRef<"FridgeItem", 'DateTime'>
    readonly lastUpdated: FieldRef<"FridgeItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FridgeItem findUnique
   */
  export type FridgeItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeItem
     */
    select?: FridgeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FridgeItem
     */
    omit?: FridgeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeItemInclude<ExtArgs> | null
    /**
     * Filter, which FridgeItem to fetch.
     */
    where: FridgeItemWhereUniqueInput
  }

  /**
   * FridgeItem findUniqueOrThrow
   */
  export type FridgeItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeItem
     */
    select?: FridgeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FridgeItem
     */
    omit?: FridgeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeItemInclude<ExtArgs> | null
    /**
     * Filter, which FridgeItem to fetch.
     */
    where: FridgeItemWhereUniqueInput
  }

  /**
   * FridgeItem findFirst
   */
  export type FridgeItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeItem
     */
    select?: FridgeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FridgeItem
     */
    omit?: FridgeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeItemInclude<ExtArgs> | null
    /**
     * Filter, which FridgeItem to fetch.
     */
    where?: FridgeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FridgeItems to fetch.
     */
    orderBy?: FridgeItemOrderByWithRelationInput | FridgeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FridgeItems.
     */
    cursor?: FridgeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FridgeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FridgeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FridgeItems.
     */
    distinct?: FridgeItemScalarFieldEnum | FridgeItemScalarFieldEnum[]
  }

  /**
   * FridgeItem findFirstOrThrow
   */
  export type FridgeItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeItem
     */
    select?: FridgeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FridgeItem
     */
    omit?: FridgeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeItemInclude<ExtArgs> | null
    /**
     * Filter, which FridgeItem to fetch.
     */
    where?: FridgeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FridgeItems to fetch.
     */
    orderBy?: FridgeItemOrderByWithRelationInput | FridgeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FridgeItems.
     */
    cursor?: FridgeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FridgeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FridgeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FridgeItems.
     */
    distinct?: FridgeItemScalarFieldEnum | FridgeItemScalarFieldEnum[]
  }

  /**
   * FridgeItem findMany
   */
  export type FridgeItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeItem
     */
    select?: FridgeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FridgeItem
     */
    omit?: FridgeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeItemInclude<ExtArgs> | null
    /**
     * Filter, which FridgeItems to fetch.
     */
    where?: FridgeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FridgeItems to fetch.
     */
    orderBy?: FridgeItemOrderByWithRelationInput | FridgeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FridgeItems.
     */
    cursor?: FridgeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FridgeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FridgeItems.
     */
    skip?: number
    distinct?: FridgeItemScalarFieldEnum | FridgeItemScalarFieldEnum[]
  }

  /**
   * FridgeItem create
   */
  export type FridgeItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeItem
     */
    select?: FridgeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FridgeItem
     */
    omit?: FridgeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeItemInclude<ExtArgs> | null
    /**
     * The data needed to create a FridgeItem.
     */
    data: XOR<FridgeItemCreateInput, FridgeItemUncheckedCreateInput>
  }

  /**
   * FridgeItem createMany
   */
  export type FridgeItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FridgeItems.
     */
    data: FridgeItemCreateManyInput | FridgeItemCreateManyInput[]
  }

  /**
   * FridgeItem createManyAndReturn
   */
  export type FridgeItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeItem
     */
    select?: FridgeItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FridgeItem
     */
    omit?: FridgeItemOmit<ExtArgs> | null
    /**
     * The data used to create many FridgeItems.
     */
    data: FridgeItemCreateManyInput | FridgeItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FridgeItem update
   */
  export type FridgeItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeItem
     */
    select?: FridgeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FridgeItem
     */
    omit?: FridgeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeItemInclude<ExtArgs> | null
    /**
     * The data needed to update a FridgeItem.
     */
    data: XOR<FridgeItemUpdateInput, FridgeItemUncheckedUpdateInput>
    /**
     * Choose, which FridgeItem to update.
     */
    where: FridgeItemWhereUniqueInput
  }

  /**
   * FridgeItem updateMany
   */
  export type FridgeItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FridgeItems.
     */
    data: XOR<FridgeItemUpdateManyMutationInput, FridgeItemUncheckedUpdateManyInput>
    /**
     * Filter which FridgeItems to update
     */
    where?: FridgeItemWhereInput
    /**
     * Limit how many FridgeItems to update.
     */
    limit?: number
  }

  /**
   * FridgeItem updateManyAndReturn
   */
  export type FridgeItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeItem
     */
    select?: FridgeItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FridgeItem
     */
    omit?: FridgeItemOmit<ExtArgs> | null
    /**
     * The data used to update FridgeItems.
     */
    data: XOR<FridgeItemUpdateManyMutationInput, FridgeItemUncheckedUpdateManyInput>
    /**
     * Filter which FridgeItems to update
     */
    where?: FridgeItemWhereInput
    /**
     * Limit how many FridgeItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FridgeItem upsert
   */
  export type FridgeItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeItem
     */
    select?: FridgeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FridgeItem
     */
    omit?: FridgeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeItemInclude<ExtArgs> | null
    /**
     * The filter to search for the FridgeItem to update in case it exists.
     */
    where: FridgeItemWhereUniqueInput
    /**
     * In case the FridgeItem found by the `where` argument doesn't exist, create a new FridgeItem with this data.
     */
    create: XOR<FridgeItemCreateInput, FridgeItemUncheckedCreateInput>
    /**
     * In case the FridgeItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FridgeItemUpdateInput, FridgeItemUncheckedUpdateInput>
  }

  /**
   * FridgeItem delete
   */
  export type FridgeItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeItem
     */
    select?: FridgeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FridgeItem
     */
    omit?: FridgeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeItemInclude<ExtArgs> | null
    /**
     * Filter which FridgeItem to delete.
     */
    where: FridgeItemWhereUniqueInput
  }

  /**
   * FridgeItem deleteMany
   */
  export type FridgeItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FridgeItems to delete
     */
    where?: FridgeItemWhereInput
    /**
     * Limit how many FridgeItems to delete.
     */
    limit?: number
  }

  /**
   * FridgeItem without action
   */
  export type FridgeItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeItem
     */
    select?: FridgeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FridgeItem
     */
    omit?: FridgeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeItemInclude<ExtArgs> | null
  }


  /**
   * Model UserFavorite
   */

  export type AggregateUserFavorite = {
    _count: UserFavoriteCountAggregateOutputType | null
    _min: UserFavoriteMinAggregateOutputType | null
    _max: UserFavoriteMaxAggregateOutputType | null
  }

  export type UserFavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    itemId: string | null
    itemName: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type UserFavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    itemId: string | null
    itemName: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type UserFavoriteCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    itemId: number
    itemName: number
    notes: number
    createdAt: number
    _all: number
  }


  export type UserFavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    itemId?: true
    itemName?: true
    notes?: true
    createdAt?: true
  }

  export type UserFavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    itemId?: true
    itemName?: true
    notes?: true
    createdAt?: true
  }

  export type UserFavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    itemId?: true
    itemName?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type UserFavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavorite to aggregate.
     */
    where?: UserFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorites to fetch.
     */
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFavorites
    **/
    _count?: true | UserFavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFavoriteMaxAggregateInputType
  }

  export type GetUserFavoriteAggregateType<T extends UserFavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFavorite[P]>
      : GetScalarType<T[P], AggregateUserFavorite[P]>
  }




  export type UserFavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteWhereInput
    orderBy?: UserFavoriteOrderByWithAggregationInput | UserFavoriteOrderByWithAggregationInput[]
    by: UserFavoriteScalarFieldEnum[] | UserFavoriteScalarFieldEnum
    having?: UserFavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFavoriteCountAggregateInputType | true
    _min?: UserFavoriteMinAggregateInputType
    _max?: UserFavoriteMaxAggregateInputType
  }

  export type UserFavoriteGroupByOutputType = {
    id: string
    userId: string
    type: string
    itemId: string
    itemName: string
    notes: string | null
    createdAt: Date
    _count: UserFavoriteCountAggregateOutputType | null
    _min: UserFavoriteMinAggregateOutputType | null
    _max: UserFavoriteMaxAggregateOutputType | null
  }

  type GetUserFavoriteGroupByPayload<T extends UserFavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], UserFavoriteGroupByOutputType[P]>
        }
      >
    >


  export type UserFavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    itemId?: boolean
    itemName?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavorite"]>

  export type UserFavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    itemId?: boolean
    itemName?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavorite"]>

  export type UserFavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    itemId?: boolean
    itemName?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavorite"]>

  export type UserFavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    itemId?: boolean
    itemName?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type UserFavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "itemId" | "itemName" | "notes" | "createdAt", ExtArgs["result"]["userFavorite"]>
  export type UserFavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserFavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserFavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserFavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFavorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      itemId: string
      itemName: string
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["userFavorite"]>
    composites: {}
  }

  type UserFavoriteGetPayload<S extends boolean | null | undefined | UserFavoriteDefaultArgs> = $Result.GetResult<Prisma.$UserFavoritePayload, S>

  type UserFavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFavoriteCountAggregateInputType | true
    }

  export interface UserFavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFavorite'], meta: { name: 'UserFavorite' } }
    /**
     * Find zero or one UserFavorite that matches the filter.
     * @param {UserFavoriteFindUniqueArgs} args - Arguments to find a UserFavorite
     * @example
     * // Get one UserFavorite
     * const userFavorite = await prisma.userFavorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFavoriteFindUniqueArgs>(args: SelectSubset<T, UserFavoriteFindUniqueArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFavorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFavoriteFindUniqueOrThrowArgs} args - Arguments to find a UserFavorite
     * @example
     * // Get one UserFavorite
     * const userFavorite = await prisma.userFavorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFavorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteFindFirstArgs} args - Arguments to find a UserFavorite
     * @example
     * // Get one UserFavorite
     * const userFavorite = await prisma.userFavorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFavoriteFindFirstArgs>(args?: SelectSubset<T, UserFavoriteFindFirstArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFavorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteFindFirstOrThrowArgs} args - Arguments to find a UserFavorite
     * @example
     * // Get one UserFavorite
     * const userFavorite = await prisma.userFavorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFavorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFavorites
     * const userFavorites = await prisma.userFavorite.findMany()
     * 
     * // Get first 10 UserFavorites
     * const userFavorites = await prisma.userFavorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFavoriteWithIdOnly = await prisma.userFavorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFavoriteFindManyArgs>(args?: SelectSubset<T, UserFavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFavorite.
     * @param {UserFavoriteCreateArgs} args - Arguments to create a UserFavorite.
     * @example
     * // Create one UserFavorite
     * const UserFavorite = await prisma.userFavorite.create({
     *   data: {
     *     // ... data to create a UserFavorite
     *   }
     * })
     * 
     */
    create<T extends UserFavoriteCreateArgs>(args: SelectSubset<T, UserFavoriteCreateArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFavorites.
     * @param {UserFavoriteCreateManyArgs} args - Arguments to create many UserFavorites.
     * @example
     * // Create many UserFavorites
     * const userFavorite = await prisma.userFavorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFavoriteCreateManyArgs>(args?: SelectSubset<T, UserFavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFavorites and returns the data saved in the database.
     * @param {UserFavoriteCreateManyAndReturnArgs} args - Arguments to create many UserFavorites.
     * @example
     * // Create many UserFavorites
     * const userFavorite = await prisma.userFavorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFavorites and only return the `id`
     * const userFavoriteWithIdOnly = await prisma.userFavorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserFavorite.
     * @param {UserFavoriteDeleteArgs} args - Arguments to delete one UserFavorite.
     * @example
     * // Delete one UserFavorite
     * const UserFavorite = await prisma.userFavorite.delete({
     *   where: {
     *     // ... filter to delete one UserFavorite
     *   }
     * })
     * 
     */
    delete<T extends UserFavoriteDeleteArgs>(args: SelectSubset<T, UserFavoriteDeleteArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFavorite.
     * @param {UserFavoriteUpdateArgs} args - Arguments to update one UserFavorite.
     * @example
     * // Update one UserFavorite
     * const userFavorite = await prisma.userFavorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFavoriteUpdateArgs>(args: SelectSubset<T, UserFavoriteUpdateArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFavorites.
     * @param {UserFavoriteDeleteManyArgs} args - Arguments to filter UserFavorites to delete.
     * @example
     * // Delete a few UserFavorites
     * const { count } = await prisma.userFavorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFavoriteDeleteManyArgs>(args?: SelectSubset<T, UserFavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFavorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFavorites
     * const userFavorite = await prisma.userFavorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFavoriteUpdateManyArgs>(args: SelectSubset<T, UserFavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFavorites and returns the data updated in the database.
     * @param {UserFavoriteUpdateManyAndReturnArgs} args - Arguments to update many UserFavorites.
     * @example
     * // Update many UserFavorites
     * const userFavorite = await prisma.userFavorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserFavorites and only return the `id`
     * const userFavoriteWithIdOnly = await prisma.userFavorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserFavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, UserFavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserFavorite.
     * @param {UserFavoriteUpsertArgs} args - Arguments to update or create a UserFavorite.
     * @example
     * // Update or create a UserFavorite
     * const userFavorite = await prisma.userFavorite.upsert({
     *   create: {
     *     // ... data to create a UserFavorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFavorite we want to update
     *   }
     * })
     */
    upsert<T extends UserFavoriteUpsertArgs>(args: SelectSubset<T, UserFavoriteUpsertArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFavorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteCountArgs} args - Arguments to filter UserFavorites to count.
     * @example
     * // Count the number of UserFavorites
     * const count = await prisma.userFavorite.count({
     *   where: {
     *     // ... the filter for the UserFavorites we want to count
     *   }
     * })
    **/
    count<T extends UserFavoriteCountArgs>(
      args?: Subset<T, UserFavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFavorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFavoriteAggregateArgs>(args: Subset<T, UserFavoriteAggregateArgs>): Prisma.PrismaPromise<GetUserFavoriteAggregateType<T>>

    /**
     * Group by UserFavorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFavoriteGroupByArgs['orderBy'] }
        : { orderBy?: UserFavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFavorite model
   */
  readonly fields: UserFavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFavorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserFavorite model
   */
  interface UserFavoriteFieldRefs {
    readonly id: FieldRef<"UserFavorite", 'String'>
    readonly userId: FieldRef<"UserFavorite", 'String'>
    readonly type: FieldRef<"UserFavorite", 'String'>
    readonly itemId: FieldRef<"UserFavorite", 'String'>
    readonly itemName: FieldRef<"UserFavorite", 'String'>
    readonly notes: FieldRef<"UserFavorite", 'String'>
    readonly createdAt: FieldRef<"UserFavorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserFavorite findUnique
   */
  export type UserFavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorite to fetch.
     */
    where: UserFavoriteWhereUniqueInput
  }

  /**
   * UserFavorite findUniqueOrThrow
   */
  export type UserFavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorite to fetch.
     */
    where: UserFavoriteWhereUniqueInput
  }

  /**
   * UserFavorite findFirst
   */
  export type UserFavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorite to fetch.
     */
    where?: UserFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorites to fetch.
     */
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavorites.
     */
    cursor?: UserFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavorites.
     */
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * UserFavorite findFirstOrThrow
   */
  export type UserFavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorite to fetch.
     */
    where?: UserFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorites to fetch.
     */
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavorites.
     */
    cursor?: UserFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavorites.
     */
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * UserFavorite findMany
   */
  export type UserFavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorites to fetch.
     */
    where?: UserFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorites to fetch.
     */
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFavorites.
     */
    cursor?: UserFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorites.
     */
    skip?: number
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * UserFavorite create
   */
  export type UserFavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFavorite.
     */
    data: XOR<UserFavoriteCreateInput, UserFavoriteUncheckedCreateInput>
  }

  /**
   * UserFavorite createMany
   */
  export type UserFavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFavorites.
     */
    data: UserFavoriteCreateManyInput | UserFavoriteCreateManyInput[]
  }

  /**
   * UserFavorite createManyAndReturn
   */
  export type UserFavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many UserFavorites.
     */
    data: UserFavoriteCreateManyInput | UserFavoriteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFavorite update
   */
  export type UserFavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFavorite.
     */
    data: XOR<UserFavoriteUpdateInput, UserFavoriteUncheckedUpdateInput>
    /**
     * Choose, which UserFavorite to update.
     */
    where: UserFavoriteWhereUniqueInput
  }

  /**
   * UserFavorite updateMany
   */
  export type UserFavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFavorites.
     */
    data: XOR<UserFavoriteUpdateManyMutationInput, UserFavoriteUncheckedUpdateManyInput>
    /**
     * Filter which UserFavorites to update
     */
    where?: UserFavoriteWhereInput
    /**
     * Limit how many UserFavorites to update.
     */
    limit?: number
  }

  /**
   * UserFavorite updateManyAndReturn
   */
  export type UserFavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * The data used to update UserFavorites.
     */
    data: XOR<UserFavoriteUpdateManyMutationInput, UserFavoriteUncheckedUpdateManyInput>
    /**
     * Filter which UserFavorites to update
     */
    where?: UserFavoriteWhereInput
    /**
     * Limit how many UserFavorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFavorite upsert
   */
  export type UserFavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFavorite to update in case it exists.
     */
    where: UserFavoriteWhereUniqueInput
    /**
     * In case the UserFavorite found by the `where` argument doesn't exist, create a new UserFavorite with this data.
     */
    create: XOR<UserFavoriteCreateInput, UserFavoriteUncheckedCreateInput>
    /**
     * In case the UserFavorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFavoriteUpdateInput, UserFavoriteUncheckedUpdateInput>
  }

  /**
   * UserFavorite delete
   */
  export type UserFavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter which UserFavorite to delete.
     */
    where: UserFavoriteWhereUniqueInput
  }

  /**
   * UserFavorite deleteMany
   */
  export type UserFavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavorites to delete
     */
    where?: UserFavoriteWhereInput
    /**
     * Limit how many UserFavorites to delete.
     */
    limit?: number
  }

  /**
   * UserFavorite without action
   */
  export type UserFavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
  }


  /**
   * Model ShoppingSession
   */

  export type AggregateShoppingSession = {
    _count: ShoppingSessionCountAggregateOutputType | null
    _avg: ShoppingSessionAvgAggregateOutputType | null
    _sum: ShoppingSessionSumAggregateOutputType | null
    _min: ShoppingSessionMinAggregateOutputType | null
    _max: ShoppingSessionMaxAggregateOutputType | null
  }

  export type ShoppingSessionAvgAggregateOutputType = {
    totalBudget: number | null
    totalSpent: number | null
    totalSavings: number | null
  }

  export type ShoppingSessionSumAggregateOutputType = {
    totalBudget: number | null
    totalSpent: number | null
    totalSavings: number | null
  }

  export type ShoppingSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionDate: Date | null
    totalBudget: number | null
    totalSpent: number | null
    totalSavings: number | null
    notes: string | null
    completed: boolean | null
  }

  export type ShoppingSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionDate: Date | null
    totalBudget: number | null
    totalSpent: number | null
    totalSavings: number | null
    notes: string | null
    completed: boolean | null
  }

  export type ShoppingSessionCountAggregateOutputType = {
    id: number
    userId: number
    sessionDate: number
    totalBudget: number
    totalSpent: number
    totalSavings: number
    notes: number
    completed: number
    _all: number
  }


  export type ShoppingSessionAvgAggregateInputType = {
    totalBudget?: true
    totalSpent?: true
    totalSavings?: true
  }

  export type ShoppingSessionSumAggregateInputType = {
    totalBudget?: true
    totalSpent?: true
    totalSavings?: true
  }

  export type ShoppingSessionMinAggregateInputType = {
    id?: true
    userId?: true
    sessionDate?: true
    totalBudget?: true
    totalSpent?: true
    totalSavings?: true
    notes?: true
    completed?: true
  }

  export type ShoppingSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionDate?: true
    totalBudget?: true
    totalSpent?: true
    totalSavings?: true
    notes?: true
    completed?: true
  }

  export type ShoppingSessionCountAggregateInputType = {
    id?: true
    userId?: true
    sessionDate?: true
    totalBudget?: true
    totalSpent?: true
    totalSavings?: true
    notes?: true
    completed?: true
    _all?: true
  }

  export type ShoppingSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingSession to aggregate.
     */
    where?: ShoppingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingSessions to fetch.
     */
    orderBy?: ShoppingSessionOrderByWithRelationInput | ShoppingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShoppingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingSessions
    **/
    _count?: true | ShoppingSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShoppingSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShoppingSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingSessionMaxAggregateInputType
  }

  export type GetShoppingSessionAggregateType<T extends ShoppingSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingSession[P]>
      : GetScalarType<T[P], AggregateShoppingSession[P]>
  }




  export type ShoppingSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingSessionWhereInput
    orderBy?: ShoppingSessionOrderByWithAggregationInput | ShoppingSessionOrderByWithAggregationInput[]
    by: ShoppingSessionScalarFieldEnum[] | ShoppingSessionScalarFieldEnum
    having?: ShoppingSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingSessionCountAggregateInputType | true
    _avg?: ShoppingSessionAvgAggregateInputType
    _sum?: ShoppingSessionSumAggregateInputType
    _min?: ShoppingSessionMinAggregateInputType
    _max?: ShoppingSessionMaxAggregateInputType
  }

  export type ShoppingSessionGroupByOutputType = {
    id: string
    userId: string
    sessionDate: Date
    totalBudget: number | null
    totalSpent: number | null
    totalSavings: number | null
    notes: string | null
    completed: boolean
    _count: ShoppingSessionCountAggregateOutputType | null
    _avg: ShoppingSessionAvgAggregateOutputType | null
    _sum: ShoppingSessionSumAggregateOutputType | null
    _min: ShoppingSessionMinAggregateOutputType | null
    _max: ShoppingSessionMaxAggregateOutputType | null
  }

  type GetShoppingSessionGroupByPayload<T extends ShoppingSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingSessionGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionDate?: boolean
    totalBudget?: boolean
    totalSpent?: boolean
    totalSavings?: boolean
    notes?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipes?: boolean | ShoppingSession$recipesArgs<ExtArgs>
    shoppingList?: boolean | ShoppingSession$shoppingListArgs<ExtArgs>
    _count?: boolean | ShoppingSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingSession"]>

  export type ShoppingSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionDate?: boolean
    totalBudget?: boolean
    totalSpent?: boolean
    totalSavings?: boolean
    notes?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingSession"]>

  export type ShoppingSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionDate?: boolean
    totalBudget?: boolean
    totalSpent?: boolean
    totalSavings?: boolean
    notes?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingSession"]>

  export type ShoppingSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionDate?: boolean
    totalBudget?: boolean
    totalSpent?: boolean
    totalSavings?: boolean
    notes?: boolean
    completed?: boolean
  }

  export type ShoppingSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sessionDate" | "totalBudget" | "totalSpent" | "totalSavings" | "notes" | "completed", ExtArgs["result"]["shoppingSession"]>
  export type ShoppingSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipes?: boolean | ShoppingSession$recipesArgs<ExtArgs>
    shoppingList?: boolean | ShoppingSession$shoppingListArgs<ExtArgs>
    _count?: boolean | ShoppingSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShoppingSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShoppingSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShoppingSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShoppingSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      recipes: Prisma.$SessionRecipePayload<ExtArgs>[]
      shoppingList: Prisma.$ShoppingListItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sessionDate: Date
      totalBudget: number | null
      totalSpent: number | null
      totalSavings: number | null
      notes: string | null
      completed: boolean
    }, ExtArgs["result"]["shoppingSession"]>
    composites: {}
  }

  type ShoppingSessionGetPayload<S extends boolean | null | undefined | ShoppingSessionDefaultArgs> = $Result.GetResult<Prisma.$ShoppingSessionPayload, S>

  type ShoppingSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShoppingSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShoppingSessionCountAggregateInputType | true
    }

  export interface ShoppingSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShoppingSession'], meta: { name: 'ShoppingSession' } }
    /**
     * Find zero or one ShoppingSession that matches the filter.
     * @param {ShoppingSessionFindUniqueArgs} args - Arguments to find a ShoppingSession
     * @example
     * // Get one ShoppingSession
     * const shoppingSession = await prisma.shoppingSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShoppingSessionFindUniqueArgs>(args: SelectSubset<T, ShoppingSessionFindUniqueArgs<ExtArgs>>): Prisma__ShoppingSessionClient<$Result.GetResult<Prisma.$ShoppingSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShoppingSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShoppingSessionFindUniqueOrThrowArgs} args - Arguments to find a ShoppingSession
     * @example
     * // Get one ShoppingSession
     * const shoppingSession = await prisma.shoppingSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShoppingSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ShoppingSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShoppingSessionClient<$Result.GetResult<Prisma.$ShoppingSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingSessionFindFirstArgs} args - Arguments to find a ShoppingSession
     * @example
     * // Get one ShoppingSession
     * const shoppingSession = await prisma.shoppingSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShoppingSessionFindFirstArgs>(args?: SelectSubset<T, ShoppingSessionFindFirstArgs<ExtArgs>>): Prisma__ShoppingSessionClient<$Result.GetResult<Prisma.$ShoppingSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingSessionFindFirstOrThrowArgs} args - Arguments to find a ShoppingSession
     * @example
     * // Get one ShoppingSession
     * const shoppingSession = await prisma.shoppingSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShoppingSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ShoppingSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShoppingSessionClient<$Result.GetResult<Prisma.$ShoppingSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShoppingSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingSessions
     * const shoppingSessions = await prisma.shoppingSession.findMany()
     * 
     * // Get first 10 ShoppingSessions
     * const shoppingSessions = await prisma.shoppingSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingSessionWithIdOnly = await prisma.shoppingSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShoppingSessionFindManyArgs>(args?: SelectSubset<T, ShoppingSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShoppingSession.
     * @param {ShoppingSessionCreateArgs} args - Arguments to create a ShoppingSession.
     * @example
     * // Create one ShoppingSession
     * const ShoppingSession = await prisma.shoppingSession.create({
     *   data: {
     *     // ... data to create a ShoppingSession
     *   }
     * })
     * 
     */
    create<T extends ShoppingSessionCreateArgs>(args: SelectSubset<T, ShoppingSessionCreateArgs<ExtArgs>>): Prisma__ShoppingSessionClient<$Result.GetResult<Prisma.$ShoppingSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShoppingSessions.
     * @param {ShoppingSessionCreateManyArgs} args - Arguments to create many ShoppingSessions.
     * @example
     * // Create many ShoppingSessions
     * const shoppingSession = await prisma.shoppingSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShoppingSessionCreateManyArgs>(args?: SelectSubset<T, ShoppingSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShoppingSessions and returns the data saved in the database.
     * @param {ShoppingSessionCreateManyAndReturnArgs} args - Arguments to create many ShoppingSessions.
     * @example
     * // Create many ShoppingSessions
     * const shoppingSession = await prisma.shoppingSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShoppingSessions and only return the `id`
     * const shoppingSessionWithIdOnly = await prisma.shoppingSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShoppingSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ShoppingSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShoppingSession.
     * @param {ShoppingSessionDeleteArgs} args - Arguments to delete one ShoppingSession.
     * @example
     * // Delete one ShoppingSession
     * const ShoppingSession = await prisma.shoppingSession.delete({
     *   where: {
     *     // ... filter to delete one ShoppingSession
     *   }
     * })
     * 
     */
    delete<T extends ShoppingSessionDeleteArgs>(args: SelectSubset<T, ShoppingSessionDeleteArgs<ExtArgs>>): Prisma__ShoppingSessionClient<$Result.GetResult<Prisma.$ShoppingSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShoppingSession.
     * @param {ShoppingSessionUpdateArgs} args - Arguments to update one ShoppingSession.
     * @example
     * // Update one ShoppingSession
     * const shoppingSession = await prisma.shoppingSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShoppingSessionUpdateArgs>(args: SelectSubset<T, ShoppingSessionUpdateArgs<ExtArgs>>): Prisma__ShoppingSessionClient<$Result.GetResult<Prisma.$ShoppingSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShoppingSessions.
     * @param {ShoppingSessionDeleteManyArgs} args - Arguments to filter ShoppingSessions to delete.
     * @example
     * // Delete a few ShoppingSessions
     * const { count } = await prisma.shoppingSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShoppingSessionDeleteManyArgs>(args?: SelectSubset<T, ShoppingSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingSessions
     * const shoppingSession = await prisma.shoppingSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShoppingSessionUpdateManyArgs>(args: SelectSubset<T, ShoppingSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingSessions and returns the data updated in the database.
     * @param {ShoppingSessionUpdateManyAndReturnArgs} args - Arguments to update many ShoppingSessions.
     * @example
     * // Update many ShoppingSessions
     * const shoppingSession = await prisma.shoppingSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShoppingSessions and only return the `id`
     * const shoppingSessionWithIdOnly = await prisma.shoppingSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShoppingSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ShoppingSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShoppingSession.
     * @param {ShoppingSessionUpsertArgs} args - Arguments to update or create a ShoppingSession.
     * @example
     * // Update or create a ShoppingSession
     * const shoppingSession = await prisma.shoppingSession.upsert({
     *   create: {
     *     // ... data to create a ShoppingSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingSession we want to update
     *   }
     * })
     */
    upsert<T extends ShoppingSessionUpsertArgs>(args: SelectSubset<T, ShoppingSessionUpsertArgs<ExtArgs>>): Prisma__ShoppingSessionClient<$Result.GetResult<Prisma.$ShoppingSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShoppingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingSessionCountArgs} args - Arguments to filter ShoppingSessions to count.
     * @example
     * // Count the number of ShoppingSessions
     * const count = await prisma.shoppingSession.count({
     *   where: {
     *     // ... the filter for the ShoppingSessions we want to count
     *   }
     * })
    **/
    count<T extends ShoppingSessionCountArgs>(
      args?: Subset<T, ShoppingSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingSessionAggregateArgs>(args: Subset<T, ShoppingSessionAggregateArgs>): Prisma.PrismaPromise<GetShoppingSessionAggregateType<T>>

    /**
     * Group by ShoppingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShoppingSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingSessionGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShoppingSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShoppingSession model
   */
  readonly fields: ShoppingSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShoppingSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipes<T extends ShoppingSession$recipesArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingSession$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shoppingList<T extends ShoppingSession$shoppingListArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingSession$shoppingListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShoppingSession model
   */
  interface ShoppingSessionFieldRefs {
    readonly id: FieldRef<"ShoppingSession", 'String'>
    readonly userId: FieldRef<"ShoppingSession", 'String'>
    readonly sessionDate: FieldRef<"ShoppingSession", 'DateTime'>
    readonly totalBudget: FieldRef<"ShoppingSession", 'Float'>
    readonly totalSpent: FieldRef<"ShoppingSession", 'Float'>
    readonly totalSavings: FieldRef<"ShoppingSession", 'Float'>
    readonly notes: FieldRef<"ShoppingSession", 'String'>
    readonly completed: FieldRef<"ShoppingSession", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ShoppingSession findUnique
   */
  export type ShoppingSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSession
     */
    select?: ShoppingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingSession
     */
    omit?: ShoppingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingSession to fetch.
     */
    where: ShoppingSessionWhereUniqueInput
  }

  /**
   * ShoppingSession findUniqueOrThrow
   */
  export type ShoppingSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSession
     */
    select?: ShoppingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingSession
     */
    omit?: ShoppingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingSession to fetch.
     */
    where: ShoppingSessionWhereUniqueInput
  }

  /**
   * ShoppingSession findFirst
   */
  export type ShoppingSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSession
     */
    select?: ShoppingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingSession
     */
    omit?: ShoppingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingSession to fetch.
     */
    where?: ShoppingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingSessions to fetch.
     */
    orderBy?: ShoppingSessionOrderByWithRelationInput | ShoppingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingSessions.
     */
    cursor?: ShoppingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingSessions.
     */
    distinct?: ShoppingSessionScalarFieldEnum | ShoppingSessionScalarFieldEnum[]
  }

  /**
   * ShoppingSession findFirstOrThrow
   */
  export type ShoppingSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSession
     */
    select?: ShoppingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingSession
     */
    omit?: ShoppingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingSession to fetch.
     */
    where?: ShoppingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingSessions to fetch.
     */
    orderBy?: ShoppingSessionOrderByWithRelationInput | ShoppingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingSessions.
     */
    cursor?: ShoppingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingSessions.
     */
    distinct?: ShoppingSessionScalarFieldEnum | ShoppingSessionScalarFieldEnum[]
  }

  /**
   * ShoppingSession findMany
   */
  export type ShoppingSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSession
     */
    select?: ShoppingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingSession
     */
    omit?: ShoppingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingSessions to fetch.
     */
    where?: ShoppingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingSessions to fetch.
     */
    orderBy?: ShoppingSessionOrderByWithRelationInput | ShoppingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingSessions.
     */
    cursor?: ShoppingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingSessions.
     */
    skip?: number
    distinct?: ShoppingSessionScalarFieldEnum | ShoppingSessionScalarFieldEnum[]
  }

  /**
   * ShoppingSession create
   */
  export type ShoppingSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSession
     */
    select?: ShoppingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingSession
     */
    omit?: ShoppingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ShoppingSession.
     */
    data: XOR<ShoppingSessionCreateInput, ShoppingSessionUncheckedCreateInput>
  }

  /**
   * ShoppingSession createMany
   */
  export type ShoppingSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShoppingSessions.
     */
    data: ShoppingSessionCreateManyInput | ShoppingSessionCreateManyInput[]
  }

  /**
   * ShoppingSession createManyAndReturn
   */
  export type ShoppingSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSession
     */
    select?: ShoppingSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingSession
     */
    omit?: ShoppingSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ShoppingSessions.
     */
    data: ShoppingSessionCreateManyInput | ShoppingSessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingSession update
   */
  export type ShoppingSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSession
     */
    select?: ShoppingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingSession
     */
    omit?: ShoppingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ShoppingSession.
     */
    data: XOR<ShoppingSessionUpdateInput, ShoppingSessionUncheckedUpdateInput>
    /**
     * Choose, which ShoppingSession to update.
     */
    where: ShoppingSessionWhereUniqueInput
  }

  /**
   * ShoppingSession updateMany
   */
  export type ShoppingSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShoppingSessions.
     */
    data: XOR<ShoppingSessionUpdateManyMutationInput, ShoppingSessionUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingSessions to update
     */
    where?: ShoppingSessionWhereInput
    /**
     * Limit how many ShoppingSessions to update.
     */
    limit?: number
  }

  /**
   * ShoppingSession updateManyAndReturn
   */
  export type ShoppingSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSession
     */
    select?: ShoppingSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingSession
     */
    omit?: ShoppingSessionOmit<ExtArgs> | null
    /**
     * The data used to update ShoppingSessions.
     */
    data: XOR<ShoppingSessionUpdateManyMutationInput, ShoppingSessionUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingSessions to update
     */
    where?: ShoppingSessionWhereInput
    /**
     * Limit how many ShoppingSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingSession upsert
   */
  export type ShoppingSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSession
     */
    select?: ShoppingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingSession
     */
    omit?: ShoppingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ShoppingSession to update in case it exists.
     */
    where: ShoppingSessionWhereUniqueInput
    /**
     * In case the ShoppingSession found by the `where` argument doesn't exist, create a new ShoppingSession with this data.
     */
    create: XOR<ShoppingSessionCreateInput, ShoppingSessionUncheckedCreateInput>
    /**
     * In case the ShoppingSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShoppingSessionUpdateInput, ShoppingSessionUncheckedUpdateInput>
  }

  /**
   * ShoppingSession delete
   */
  export type ShoppingSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSession
     */
    select?: ShoppingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingSession
     */
    omit?: ShoppingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingSessionInclude<ExtArgs> | null
    /**
     * Filter which ShoppingSession to delete.
     */
    where: ShoppingSessionWhereUniqueInput
  }

  /**
   * ShoppingSession deleteMany
   */
  export type ShoppingSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingSessions to delete
     */
    where?: ShoppingSessionWhereInput
    /**
     * Limit how many ShoppingSessions to delete.
     */
    limit?: number
  }

  /**
   * ShoppingSession.recipes
   */
  export type ShoppingSession$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionRecipe
     */
    select?: SessionRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionRecipe
     */
    omit?: SessionRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionRecipeInclude<ExtArgs> | null
    where?: SessionRecipeWhereInput
    orderBy?: SessionRecipeOrderByWithRelationInput | SessionRecipeOrderByWithRelationInput[]
    cursor?: SessionRecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionRecipeScalarFieldEnum | SessionRecipeScalarFieldEnum[]
  }

  /**
   * ShoppingSession.shoppingList
   */
  export type ShoppingSession$shoppingListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    where?: ShoppingListItemWhereInput
    orderBy?: ShoppingListItemOrderByWithRelationInput | ShoppingListItemOrderByWithRelationInput[]
    cursor?: ShoppingListItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingListItemScalarFieldEnum | ShoppingListItemScalarFieldEnum[]
  }

  /**
   * ShoppingSession without action
   */
  export type ShoppingSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSession
     */
    select?: ShoppingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingSession
     */
    omit?: ShoppingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingSessionInclude<ExtArgs> | null
  }


  /**
   * Model SessionRecipe
   */

  export type AggregateSessionRecipe = {
    _count: SessionRecipeCountAggregateOutputType | null
    _avg: SessionRecipeAvgAggregateOutputType | null
    _sum: SessionRecipeSumAggregateOutputType | null
    _min: SessionRecipeMinAggregateOutputType | null
    _max: SessionRecipeMaxAggregateOutputType | null
  }

  export type SessionRecipeAvgAggregateOutputType = {
    servings: number | null
    costPerServing: number | null
  }

  export type SessionRecipeSumAggregateOutputType = {
    servings: number | null
    costPerServing: number | null
  }

  export type SessionRecipeMinAggregateOutputType = {
    id: string | null
    shoppingSessionId: string | null
    recipeName: string | null
    recipeId: string | null
    servings: number | null
    costPerServing: number | null
    selectedDate: Date | null
  }

  export type SessionRecipeMaxAggregateOutputType = {
    id: string | null
    shoppingSessionId: string | null
    recipeName: string | null
    recipeId: string | null
    servings: number | null
    costPerServing: number | null
    selectedDate: Date | null
  }

  export type SessionRecipeCountAggregateOutputType = {
    id: number
    shoppingSessionId: number
    recipeName: number
    recipeId: number
    servings: number
    costPerServing: number
    selectedDate: number
    _all: number
  }


  export type SessionRecipeAvgAggregateInputType = {
    servings?: true
    costPerServing?: true
  }

  export type SessionRecipeSumAggregateInputType = {
    servings?: true
    costPerServing?: true
  }

  export type SessionRecipeMinAggregateInputType = {
    id?: true
    shoppingSessionId?: true
    recipeName?: true
    recipeId?: true
    servings?: true
    costPerServing?: true
    selectedDate?: true
  }

  export type SessionRecipeMaxAggregateInputType = {
    id?: true
    shoppingSessionId?: true
    recipeName?: true
    recipeId?: true
    servings?: true
    costPerServing?: true
    selectedDate?: true
  }

  export type SessionRecipeCountAggregateInputType = {
    id?: true
    shoppingSessionId?: true
    recipeName?: true
    recipeId?: true
    servings?: true
    costPerServing?: true
    selectedDate?: true
    _all?: true
  }

  export type SessionRecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionRecipe to aggregate.
     */
    where?: SessionRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionRecipes to fetch.
     */
    orderBy?: SessionRecipeOrderByWithRelationInput | SessionRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionRecipes
    **/
    _count?: true | SessionRecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionRecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionRecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionRecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionRecipeMaxAggregateInputType
  }

  export type GetSessionRecipeAggregateType<T extends SessionRecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionRecipe[P]>
      : GetScalarType<T[P], AggregateSessionRecipe[P]>
  }




  export type SessionRecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionRecipeWhereInput
    orderBy?: SessionRecipeOrderByWithAggregationInput | SessionRecipeOrderByWithAggregationInput[]
    by: SessionRecipeScalarFieldEnum[] | SessionRecipeScalarFieldEnum
    having?: SessionRecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionRecipeCountAggregateInputType | true
    _avg?: SessionRecipeAvgAggregateInputType
    _sum?: SessionRecipeSumAggregateInputType
    _min?: SessionRecipeMinAggregateInputType
    _max?: SessionRecipeMaxAggregateInputType
  }

  export type SessionRecipeGroupByOutputType = {
    id: string
    shoppingSessionId: string
    recipeName: string
    recipeId: string | null
    servings: number
    costPerServing: number | null
    selectedDate: Date | null
    _count: SessionRecipeCountAggregateOutputType | null
    _avg: SessionRecipeAvgAggregateOutputType | null
    _sum: SessionRecipeSumAggregateOutputType | null
    _min: SessionRecipeMinAggregateOutputType | null
    _max: SessionRecipeMaxAggregateOutputType | null
  }

  type GetSessionRecipeGroupByPayload<T extends SessionRecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionRecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionRecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionRecipeGroupByOutputType[P]>
            : GetScalarType<T[P], SessionRecipeGroupByOutputType[P]>
        }
      >
    >


  export type SessionRecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shoppingSessionId?: boolean
    recipeName?: boolean
    recipeId?: boolean
    servings?: boolean
    costPerServing?: boolean
    selectedDate?: boolean
    shoppingSession?: boolean | ShoppingSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionRecipe"]>

  export type SessionRecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shoppingSessionId?: boolean
    recipeName?: boolean
    recipeId?: boolean
    servings?: boolean
    costPerServing?: boolean
    selectedDate?: boolean
    shoppingSession?: boolean | ShoppingSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionRecipe"]>

  export type SessionRecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shoppingSessionId?: boolean
    recipeName?: boolean
    recipeId?: boolean
    servings?: boolean
    costPerServing?: boolean
    selectedDate?: boolean
    shoppingSession?: boolean | ShoppingSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionRecipe"]>

  export type SessionRecipeSelectScalar = {
    id?: boolean
    shoppingSessionId?: boolean
    recipeName?: boolean
    recipeId?: boolean
    servings?: boolean
    costPerServing?: boolean
    selectedDate?: boolean
  }

  export type SessionRecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shoppingSessionId" | "recipeName" | "recipeId" | "servings" | "costPerServing" | "selectedDate", ExtArgs["result"]["sessionRecipe"]>
  export type SessionRecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingSession?: boolean | ShoppingSessionDefaultArgs<ExtArgs>
  }
  export type SessionRecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingSession?: boolean | ShoppingSessionDefaultArgs<ExtArgs>
  }
  export type SessionRecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingSession?: boolean | ShoppingSessionDefaultArgs<ExtArgs>
  }

  export type $SessionRecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionRecipe"
    objects: {
      shoppingSession: Prisma.$ShoppingSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shoppingSessionId: string
      recipeName: string
      recipeId: string | null
      servings: number
      costPerServing: number | null
      selectedDate: Date | null
    }, ExtArgs["result"]["sessionRecipe"]>
    composites: {}
  }

  type SessionRecipeGetPayload<S extends boolean | null | undefined | SessionRecipeDefaultArgs> = $Result.GetResult<Prisma.$SessionRecipePayload, S>

  type SessionRecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionRecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionRecipeCountAggregateInputType | true
    }

  export interface SessionRecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionRecipe'], meta: { name: 'SessionRecipe' } }
    /**
     * Find zero or one SessionRecipe that matches the filter.
     * @param {SessionRecipeFindUniqueArgs} args - Arguments to find a SessionRecipe
     * @example
     * // Get one SessionRecipe
     * const sessionRecipe = await prisma.sessionRecipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionRecipeFindUniqueArgs>(args: SelectSubset<T, SessionRecipeFindUniqueArgs<ExtArgs>>): Prisma__SessionRecipeClient<$Result.GetResult<Prisma.$SessionRecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionRecipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionRecipeFindUniqueOrThrowArgs} args - Arguments to find a SessionRecipe
     * @example
     * // Get one SessionRecipe
     * const sessionRecipe = await prisma.sessionRecipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionRecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionRecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionRecipeClient<$Result.GetResult<Prisma.$SessionRecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionRecipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionRecipeFindFirstArgs} args - Arguments to find a SessionRecipe
     * @example
     * // Get one SessionRecipe
     * const sessionRecipe = await prisma.sessionRecipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionRecipeFindFirstArgs>(args?: SelectSubset<T, SessionRecipeFindFirstArgs<ExtArgs>>): Prisma__SessionRecipeClient<$Result.GetResult<Prisma.$SessionRecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionRecipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionRecipeFindFirstOrThrowArgs} args - Arguments to find a SessionRecipe
     * @example
     * // Get one SessionRecipe
     * const sessionRecipe = await prisma.sessionRecipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionRecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionRecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionRecipeClient<$Result.GetResult<Prisma.$SessionRecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionRecipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionRecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionRecipes
     * const sessionRecipes = await prisma.sessionRecipe.findMany()
     * 
     * // Get first 10 SessionRecipes
     * const sessionRecipes = await prisma.sessionRecipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionRecipeWithIdOnly = await prisma.sessionRecipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionRecipeFindManyArgs>(args?: SelectSubset<T, SessionRecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionRecipe.
     * @param {SessionRecipeCreateArgs} args - Arguments to create a SessionRecipe.
     * @example
     * // Create one SessionRecipe
     * const SessionRecipe = await prisma.sessionRecipe.create({
     *   data: {
     *     // ... data to create a SessionRecipe
     *   }
     * })
     * 
     */
    create<T extends SessionRecipeCreateArgs>(args: SelectSubset<T, SessionRecipeCreateArgs<ExtArgs>>): Prisma__SessionRecipeClient<$Result.GetResult<Prisma.$SessionRecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionRecipes.
     * @param {SessionRecipeCreateManyArgs} args - Arguments to create many SessionRecipes.
     * @example
     * // Create many SessionRecipes
     * const sessionRecipe = await prisma.sessionRecipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionRecipeCreateManyArgs>(args?: SelectSubset<T, SessionRecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionRecipes and returns the data saved in the database.
     * @param {SessionRecipeCreateManyAndReturnArgs} args - Arguments to create many SessionRecipes.
     * @example
     * // Create many SessionRecipes
     * const sessionRecipe = await prisma.sessionRecipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionRecipes and only return the `id`
     * const sessionRecipeWithIdOnly = await prisma.sessionRecipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionRecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionRecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionRecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionRecipe.
     * @param {SessionRecipeDeleteArgs} args - Arguments to delete one SessionRecipe.
     * @example
     * // Delete one SessionRecipe
     * const SessionRecipe = await prisma.sessionRecipe.delete({
     *   where: {
     *     // ... filter to delete one SessionRecipe
     *   }
     * })
     * 
     */
    delete<T extends SessionRecipeDeleteArgs>(args: SelectSubset<T, SessionRecipeDeleteArgs<ExtArgs>>): Prisma__SessionRecipeClient<$Result.GetResult<Prisma.$SessionRecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionRecipe.
     * @param {SessionRecipeUpdateArgs} args - Arguments to update one SessionRecipe.
     * @example
     * // Update one SessionRecipe
     * const sessionRecipe = await prisma.sessionRecipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionRecipeUpdateArgs>(args: SelectSubset<T, SessionRecipeUpdateArgs<ExtArgs>>): Prisma__SessionRecipeClient<$Result.GetResult<Prisma.$SessionRecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionRecipes.
     * @param {SessionRecipeDeleteManyArgs} args - Arguments to filter SessionRecipes to delete.
     * @example
     * // Delete a few SessionRecipes
     * const { count } = await prisma.sessionRecipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionRecipeDeleteManyArgs>(args?: SelectSubset<T, SessionRecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionRecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionRecipes
     * const sessionRecipe = await prisma.sessionRecipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionRecipeUpdateManyArgs>(args: SelectSubset<T, SessionRecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionRecipes and returns the data updated in the database.
     * @param {SessionRecipeUpdateManyAndReturnArgs} args - Arguments to update many SessionRecipes.
     * @example
     * // Update many SessionRecipes
     * const sessionRecipe = await prisma.sessionRecipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionRecipes and only return the `id`
     * const sessionRecipeWithIdOnly = await prisma.sessionRecipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionRecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionRecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionRecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionRecipe.
     * @param {SessionRecipeUpsertArgs} args - Arguments to update or create a SessionRecipe.
     * @example
     * // Update or create a SessionRecipe
     * const sessionRecipe = await prisma.sessionRecipe.upsert({
     *   create: {
     *     // ... data to create a SessionRecipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionRecipe we want to update
     *   }
     * })
     */
    upsert<T extends SessionRecipeUpsertArgs>(args: SelectSubset<T, SessionRecipeUpsertArgs<ExtArgs>>): Prisma__SessionRecipeClient<$Result.GetResult<Prisma.$SessionRecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionRecipeCountArgs} args - Arguments to filter SessionRecipes to count.
     * @example
     * // Count the number of SessionRecipes
     * const count = await prisma.sessionRecipe.count({
     *   where: {
     *     // ... the filter for the SessionRecipes we want to count
     *   }
     * })
    **/
    count<T extends SessionRecipeCountArgs>(
      args?: Subset<T, SessionRecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionRecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionRecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionRecipeAggregateArgs>(args: Subset<T, SessionRecipeAggregateArgs>): Prisma.PrismaPromise<GetSessionRecipeAggregateType<T>>

    /**
     * Group by SessionRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionRecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionRecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionRecipeGroupByArgs['orderBy'] }
        : { orderBy?: SessionRecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionRecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionRecipe model
   */
  readonly fields: SessionRecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionRecipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionRecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shoppingSession<T extends ShoppingSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingSessionDefaultArgs<ExtArgs>>): Prisma__ShoppingSessionClient<$Result.GetResult<Prisma.$ShoppingSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SessionRecipe model
   */
  interface SessionRecipeFieldRefs {
    readonly id: FieldRef<"SessionRecipe", 'String'>
    readonly shoppingSessionId: FieldRef<"SessionRecipe", 'String'>
    readonly recipeName: FieldRef<"SessionRecipe", 'String'>
    readonly recipeId: FieldRef<"SessionRecipe", 'String'>
    readonly servings: FieldRef<"SessionRecipe", 'Int'>
    readonly costPerServing: FieldRef<"SessionRecipe", 'Float'>
    readonly selectedDate: FieldRef<"SessionRecipe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SessionRecipe findUnique
   */
  export type SessionRecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionRecipe
     */
    select?: SessionRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionRecipe
     */
    omit?: SessionRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionRecipeInclude<ExtArgs> | null
    /**
     * Filter, which SessionRecipe to fetch.
     */
    where: SessionRecipeWhereUniqueInput
  }

  /**
   * SessionRecipe findUniqueOrThrow
   */
  export type SessionRecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionRecipe
     */
    select?: SessionRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionRecipe
     */
    omit?: SessionRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionRecipeInclude<ExtArgs> | null
    /**
     * Filter, which SessionRecipe to fetch.
     */
    where: SessionRecipeWhereUniqueInput
  }

  /**
   * SessionRecipe findFirst
   */
  export type SessionRecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionRecipe
     */
    select?: SessionRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionRecipe
     */
    omit?: SessionRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionRecipeInclude<ExtArgs> | null
    /**
     * Filter, which SessionRecipe to fetch.
     */
    where?: SessionRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionRecipes to fetch.
     */
    orderBy?: SessionRecipeOrderByWithRelationInput | SessionRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionRecipes.
     */
    cursor?: SessionRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionRecipes.
     */
    distinct?: SessionRecipeScalarFieldEnum | SessionRecipeScalarFieldEnum[]
  }

  /**
   * SessionRecipe findFirstOrThrow
   */
  export type SessionRecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionRecipe
     */
    select?: SessionRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionRecipe
     */
    omit?: SessionRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionRecipeInclude<ExtArgs> | null
    /**
     * Filter, which SessionRecipe to fetch.
     */
    where?: SessionRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionRecipes to fetch.
     */
    orderBy?: SessionRecipeOrderByWithRelationInput | SessionRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionRecipes.
     */
    cursor?: SessionRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionRecipes.
     */
    distinct?: SessionRecipeScalarFieldEnum | SessionRecipeScalarFieldEnum[]
  }

  /**
   * SessionRecipe findMany
   */
  export type SessionRecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionRecipe
     */
    select?: SessionRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionRecipe
     */
    omit?: SessionRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionRecipeInclude<ExtArgs> | null
    /**
     * Filter, which SessionRecipes to fetch.
     */
    where?: SessionRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionRecipes to fetch.
     */
    orderBy?: SessionRecipeOrderByWithRelationInput | SessionRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionRecipes.
     */
    cursor?: SessionRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionRecipes.
     */
    skip?: number
    distinct?: SessionRecipeScalarFieldEnum | SessionRecipeScalarFieldEnum[]
  }

  /**
   * SessionRecipe create
   */
  export type SessionRecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionRecipe
     */
    select?: SessionRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionRecipe
     */
    omit?: SessionRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionRecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionRecipe.
     */
    data: XOR<SessionRecipeCreateInput, SessionRecipeUncheckedCreateInput>
  }

  /**
   * SessionRecipe createMany
   */
  export type SessionRecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionRecipes.
     */
    data: SessionRecipeCreateManyInput | SessionRecipeCreateManyInput[]
  }

  /**
   * SessionRecipe createManyAndReturn
   */
  export type SessionRecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionRecipe
     */
    select?: SessionRecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionRecipe
     */
    omit?: SessionRecipeOmit<ExtArgs> | null
    /**
     * The data used to create many SessionRecipes.
     */
    data: SessionRecipeCreateManyInput | SessionRecipeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionRecipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionRecipe update
   */
  export type SessionRecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionRecipe
     */
    select?: SessionRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionRecipe
     */
    omit?: SessionRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionRecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionRecipe.
     */
    data: XOR<SessionRecipeUpdateInput, SessionRecipeUncheckedUpdateInput>
    /**
     * Choose, which SessionRecipe to update.
     */
    where: SessionRecipeWhereUniqueInput
  }

  /**
   * SessionRecipe updateMany
   */
  export type SessionRecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionRecipes.
     */
    data: XOR<SessionRecipeUpdateManyMutationInput, SessionRecipeUncheckedUpdateManyInput>
    /**
     * Filter which SessionRecipes to update
     */
    where?: SessionRecipeWhereInput
    /**
     * Limit how many SessionRecipes to update.
     */
    limit?: number
  }

  /**
   * SessionRecipe updateManyAndReturn
   */
  export type SessionRecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionRecipe
     */
    select?: SessionRecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionRecipe
     */
    omit?: SessionRecipeOmit<ExtArgs> | null
    /**
     * The data used to update SessionRecipes.
     */
    data: XOR<SessionRecipeUpdateManyMutationInput, SessionRecipeUncheckedUpdateManyInput>
    /**
     * Filter which SessionRecipes to update
     */
    where?: SessionRecipeWhereInput
    /**
     * Limit how many SessionRecipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionRecipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionRecipe upsert
   */
  export type SessionRecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionRecipe
     */
    select?: SessionRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionRecipe
     */
    omit?: SessionRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionRecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionRecipe to update in case it exists.
     */
    where: SessionRecipeWhereUniqueInput
    /**
     * In case the SessionRecipe found by the `where` argument doesn't exist, create a new SessionRecipe with this data.
     */
    create: XOR<SessionRecipeCreateInput, SessionRecipeUncheckedCreateInput>
    /**
     * In case the SessionRecipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionRecipeUpdateInput, SessionRecipeUncheckedUpdateInput>
  }

  /**
   * SessionRecipe delete
   */
  export type SessionRecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionRecipe
     */
    select?: SessionRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionRecipe
     */
    omit?: SessionRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionRecipeInclude<ExtArgs> | null
    /**
     * Filter which SessionRecipe to delete.
     */
    where: SessionRecipeWhereUniqueInput
  }

  /**
   * SessionRecipe deleteMany
   */
  export type SessionRecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionRecipes to delete
     */
    where?: SessionRecipeWhereInput
    /**
     * Limit how many SessionRecipes to delete.
     */
    limit?: number
  }

  /**
   * SessionRecipe without action
   */
  export type SessionRecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionRecipe
     */
    select?: SessionRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionRecipe
     */
    omit?: SessionRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionRecipeInclude<ExtArgs> | null
  }


  /**
   * Model ShoppingListItem
   */

  export type AggregateShoppingListItem = {
    _count: ShoppingListItemCountAggregateOutputType | null
    _avg: ShoppingListItemAvgAggregateOutputType | null
    _sum: ShoppingListItemSumAggregateOutputType | null
    _min: ShoppingListItemMinAggregateOutputType | null
    _max: ShoppingListItemMaxAggregateOutputType | null
  }

  export type ShoppingListItemAvgAggregateOutputType = {
    quantity: number | null
    estimatedCost: number | null
    actualCost: number | null
  }

  export type ShoppingListItemSumAggregateOutputType = {
    quantity: number | null
    estimatedCost: number | null
    actualCost: number | null
  }

  export type ShoppingListItemMinAggregateOutputType = {
    id: string | null
    shoppingSessionId: string | null
    itemName: string | null
    quantity: number | null
    unit: string | null
    estimatedCost: number | null
    actualCost: number | null
    store: string | null
    brand: string | null
    purchased: boolean | null
    substituted: boolean | null
    substitutionNotes: string | null
  }

  export type ShoppingListItemMaxAggregateOutputType = {
    id: string | null
    shoppingSessionId: string | null
    itemName: string | null
    quantity: number | null
    unit: string | null
    estimatedCost: number | null
    actualCost: number | null
    store: string | null
    brand: string | null
    purchased: boolean | null
    substituted: boolean | null
    substitutionNotes: string | null
  }

  export type ShoppingListItemCountAggregateOutputType = {
    id: number
    shoppingSessionId: number
    itemName: number
    quantity: number
    unit: number
    estimatedCost: number
    actualCost: number
    store: number
    brand: number
    purchased: number
    substituted: number
    substitutionNotes: number
    _all: number
  }


  export type ShoppingListItemAvgAggregateInputType = {
    quantity?: true
    estimatedCost?: true
    actualCost?: true
  }

  export type ShoppingListItemSumAggregateInputType = {
    quantity?: true
    estimatedCost?: true
    actualCost?: true
  }

  export type ShoppingListItemMinAggregateInputType = {
    id?: true
    shoppingSessionId?: true
    itemName?: true
    quantity?: true
    unit?: true
    estimatedCost?: true
    actualCost?: true
    store?: true
    brand?: true
    purchased?: true
    substituted?: true
    substitutionNotes?: true
  }

  export type ShoppingListItemMaxAggregateInputType = {
    id?: true
    shoppingSessionId?: true
    itemName?: true
    quantity?: true
    unit?: true
    estimatedCost?: true
    actualCost?: true
    store?: true
    brand?: true
    purchased?: true
    substituted?: true
    substitutionNotes?: true
  }

  export type ShoppingListItemCountAggregateInputType = {
    id?: true
    shoppingSessionId?: true
    itemName?: true
    quantity?: true
    unit?: true
    estimatedCost?: true
    actualCost?: true
    store?: true
    brand?: true
    purchased?: true
    substituted?: true
    substitutionNotes?: true
    _all?: true
  }

  export type ShoppingListItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingListItem to aggregate.
     */
    where?: ShoppingListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListItems to fetch.
     */
    orderBy?: ShoppingListItemOrderByWithRelationInput | ShoppingListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShoppingListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingListItems
    **/
    _count?: true | ShoppingListItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShoppingListItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShoppingListItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingListItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingListItemMaxAggregateInputType
  }

  export type GetShoppingListItemAggregateType<T extends ShoppingListItemAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingListItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingListItem[P]>
      : GetScalarType<T[P], AggregateShoppingListItem[P]>
  }




  export type ShoppingListItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListItemWhereInput
    orderBy?: ShoppingListItemOrderByWithAggregationInput | ShoppingListItemOrderByWithAggregationInput[]
    by: ShoppingListItemScalarFieldEnum[] | ShoppingListItemScalarFieldEnum
    having?: ShoppingListItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingListItemCountAggregateInputType | true
    _avg?: ShoppingListItemAvgAggregateInputType
    _sum?: ShoppingListItemSumAggregateInputType
    _min?: ShoppingListItemMinAggregateInputType
    _max?: ShoppingListItemMaxAggregateInputType
  }

  export type ShoppingListItemGroupByOutputType = {
    id: string
    shoppingSessionId: string
    itemName: string
    quantity: number
    unit: string
    estimatedCost: number | null
    actualCost: number | null
    store: string | null
    brand: string | null
    purchased: boolean
    substituted: boolean
    substitutionNotes: string | null
    _count: ShoppingListItemCountAggregateOutputType | null
    _avg: ShoppingListItemAvgAggregateOutputType | null
    _sum: ShoppingListItemSumAggregateOutputType | null
    _min: ShoppingListItemMinAggregateOutputType | null
    _max: ShoppingListItemMaxAggregateOutputType | null
  }

  type GetShoppingListItemGroupByPayload<T extends ShoppingListItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingListItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingListItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingListItemGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingListItemGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingListItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shoppingSessionId?: boolean
    itemName?: boolean
    quantity?: boolean
    unit?: boolean
    estimatedCost?: boolean
    actualCost?: boolean
    store?: boolean
    brand?: boolean
    purchased?: boolean
    substituted?: boolean
    substitutionNotes?: boolean
    shoppingSession?: boolean | ShoppingSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingListItem"]>

  export type ShoppingListItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shoppingSessionId?: boolean
    itemName?: boolean
    quantity?: boolean
    unit?: boolean
    estimatedCost?: boolean
    actualCost?: boolean
    store?: boolean
    brand?: boolean
    purchased?: boolean
    substituted?: boolean
    substitutionNotes?: boolean
    shoppingSession?: boolean | ShoppingSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingListItem"]>

  export type ShoppingListItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shoppingSessionId?: boolean
    itemName?: boolean
    quantity?: boolean
    unit?: boolean
    estimatedCost?: boolean
    actualCost?: boolean
    store?: boolean
    brand?: boolean
    purchased?: boolean
    substituted?: boolean
    substitutionNotes?: boolean
    shoppingSession?: boolean | ShoppingSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingListItem"]>

  export type ShoppingListItemSelectScalar = {
    id?: boolean
    shoppingSessionId?: boolean
    itemName?: boolean
    quantity?: boolean
    unit?: boolean
    estimatedCost?: boolean
    actualCost?: boolean
    store?: boolean
    brand?: boolean
    purchased?: boolean
    substituted?: boolean
    substitutionNotes?: boolean
  }

  export type ShoppingListItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shoppingSessionId" | "itemName" | "quantity" | "unit" | "estimatedCost" | "actualCost" | "store" | "brand" | "purchased" | "substituted" | "substitutionNotes", ExtArgs["result"]["shoppingListItem"]>
  export type ShoppingListItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingSession?: boolean | ShoppingSessionDefaultArgs<ExtArgs>
  }
  export type ShoppingListItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingSession?: boolean | ShoppingSessionDefaultArgs<ExtArgs>
  }
  export type ShoppingListItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingSession?: boolean | ShoppingSessionDefaultArgs<ExtArgs>
  }

  export type $ShoppingListItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShoppingListItem"
    objects: {
      shoppingSession: Prisma.$ShoppingSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shoppingSessionId: string
      itemName: string
      quantity: number
      unit: string
      estimatedCost: number | null
      actualCost: number | null
      store: string | null
      brand: string | null
      purchased: boolean
      substituted: boolean
      substitutionNotes: string | null
    }, ExtArgs["result"]["shoppingListItem"]>
    composites: {}
  }

  type ShoppingListItemGetPayload<S extends boolean | null | undefined | ShoppingListItemDefaultArgs> = $Result.GetResult<Prisma.$ShoppingListItemPayload, S>

  type ShoppingListItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShoppingListItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShoppingListItemCountAggregateInputType | true
    }

  export interface ShoppingListItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShoppingListItem'], meta: { name: 'ShoppingListItem' } }
    /**
     * Find zero or one ShoppingListItem that matches the filter.
     * @param {ShoppingListItemFindUniqueArgs} args - Arguments to find a ShoppingListItem
     * @example
     * // Get one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShoppingListItemFindUniqueArgs>(args: SelectSubset<T, ShoppingListItemFindUniqueArgs<ExtArgs>>): Prisma__ShoppingListItemClient<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShoppingListItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShoppingListItemFindUniqueOrThrowArgs} args - Arguments to find a ShoppingListItem
     * @example
     * // Get one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShoppingListItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ShoppingListItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShoppingListItemClient<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingListItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemFindFirstArgs} args - Arguments to find a ShoppingListItem
     * @example
     * // Get one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShoppingListItemFindFirstArgs>(args?: SelectSubset<T, ShoppingListItemFindFirstArgs<ExtArgs>>): Prisma__ShoppingListItemClient<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingListItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemFindFirstOrThrowArgs} args - Arguments to find a ShoppingListItem
     * @example
     * // Get one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShoppingListItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ShoppingListItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShoppingListItemClient<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShoppingListItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingListItems
     * const shoppingListItems = await prisma.shoppingListItem.findMany()
     * 
     * // Get first 10 ShoppingListItems
     * const shoppingListItems = await prisma.shoppingListItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingListItemWithIdOnly = await prisma.shoppingListItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShoppingListItemFindManyArgs>(args?: SelectSubset<T, ShoppingListItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShoppingListItem.
     * @param {ShoppingListItemCreateArgs} args - Arguments to create a ShoppingListItem.
     * @example
     * // Create one ShoppingListItem
     * const ShoppingListItem = await prisma.shoppingListItem.create({
     *   data: {
     *     // ... data to create a ShoppingListItem
     *   }
     * })
     * 
     */
    create<T extends ShoppingListItemCreateArgs>(args: SelectSubset<T, ShoppingListItemCreateArgs<ExtArgs>>): Prisma__ShoppingListItemClient<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShoppingListItems.
     * @param {ShoppingListItemCreateManyArgs} args - Arguments to create many ShoppingListItems.
     * @example
     * // Create many ShoppingListItems
     * const shoppingListItem = await prisma.shoppingListItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShoppingListItemCreateManyArgs>(args?: SelectSubset<T, ShoppingListItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShoppingListItems and returns the data saved in the database.
     * @param {ShoppingListItemCreateManyAndReturnArgs} args - Arguments to create many ShoppingListItems.
     * @example
     * // Create many ShoppingListItems
     * const shoppingListItem = await prisma.shoppingListItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShoppingListItems and only return the `id`
     * const shoppingListItemWithIdOnly = await prisma.shoppingListItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShoppingListItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ShoppingListItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShoppingListItem.
     * @param {ShoppingListItemDeleteArgs} args - Arguments to delete one ShoppingListItem.
     * @example
     * // Delete one ShoppingListItem
     * const ShoppingListItem = await prisma.shoppingListItem.delete({
     *   where: {
     *     // ... filter to delete one ShoppingListItem
     *   }
     * })
     * 
     */
    delete<T extends ShoppingListItemDeleteArgs>(args: SelectSubset<T, ShoppingListItemDeleteArgs<ExtArgs>>): Prisma__ShoppingListItemClient<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShoppingListItem.
     * @param {ShoppingListItemUpdateArgs} args - Arguments to update one ShoppingListItem.
     * @example
     * // Update one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShoppingListItemUpdateArgs>(args: SelectSubset<T, ShoppingListItemUpdateArgs<ExtArgs>>): Prisma__ShoppingListItemClient<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShoppingListItems.
     * @param {ShoppingListItemDeleteManyArgs} args - Arguments to filter ShoppingListItems to delete.
     * @example
     * // Delete a few ShoppingListItems
     * const { count } = await prisma.shoppingListItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShoppingListItemDeleteManyArgs>(args?: SelectSubset<T, ShoppingListItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingListItems
     * const shoppingListItem = await prisma.shoppingListItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShoppingListItemUpdateManyArgs>(args: SelectSubset<T, ShoppingListItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingListItems and returns the data updated in the database.
     * @param {ShoppingListItemUpdateManyAndReturnArgs} args - Arguments to update many ShoppingListItems.
     * @example
     * // Update many ShoppingListItems
     * const shoppingListItem = await prisma.shoppingListItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShoppingListItems and only return the `id`
     * const shoppingListItemWithIdOnly = await prisma.shoppingListItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShoppingListItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ShoppingListItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShoppingListItem.
     * @param {ShoppingListItemUpsertArgs} args - Arguments to update or create a ShoppingListItem.
     * @example
     * // Update or create a ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.upsert({
     *   create: {
     *     // ... data to create a ShoppingListItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingListItem we want to update
     *   }
     * })
     */
    upsert<T extends ShoppingListItemUpsertArgs>(args: SelectSubset<T, ShoppingListItemUpsertArgs<ExtArgs>>): Prisma__ShoppingListItemClient<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShoppingListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemCountArgs} args - Arguments to filter ShoppingListItems to count.
     * @example
     * // Count the number of ShoppingListItems
     * const count = await prisma.shoppingListItem.count({
     *   where: {
     *     // ... the filter for the ShoppingListItems we want to count
     *   }
     * })
    **/
    count<T extends ShoppingListItemCountArgs>(
      args?: Subset<T, ShoppingListItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingListItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingListItemAggregateArgs>(args: Subset<T, ShoppingListItemAggregateArgs>): Prisma.PrismaPromise<GetShoppingListItemAggregateType<T>>

    /**
     * Group by ShoppingListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShoppingListItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingListItemGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingListItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShoppingListItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingListItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShoppingListItem model
   */
  readonly fields: ShoppingListItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingListItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShoppingListItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shoppingSession<T extends ShoppingSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingSessionDefaultArgs<ExtArgs>>): Prisma__ShoppingSessionClient<$Result.GetResult<Prisma.$ShoppingSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShoppingListItem model
   */
  interface ShoppingListItemFieldRefs {
    readonly id: FieldRef<"ShoppingListItem", 'String'>
    readonly shoppingSessionId: FieldRef<"ShoppingListItem", 'String'>
    readonly itemName: FieldRef<"ShoppingListItem", 'String'>
    readonly quantity: FieldRef<"ShoppingListItem", 'Float'>
    readonly unit: FieldRef<"ShoppingListItem", 'String'>
    readonly estimatedCost: FieldRef<"ShoppingListItem", 'Float'>
    readonly actualCost: FieldRef<"ShoppingListItem", 'Float'>
    readonly store: FieldRef<"ShoppingListItem", 'String'>
    readonly brand: FieldRef<"ShoppingListItem", 'String'>
    readonly purchased: FieldRef<"ShoppingListItem", 'Boolean'>
    readonly substituted: FieldRef<"ShoppingListItem", 'Boolean'>
    readonly substitutionNotes: FieldRef<"ShoppingListItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShoppingListItem findUnique
   */
  export type ShoppingListItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListItem to fetch.
     */
    where: ShoppingListItemWhereUniqueInput
  }

  /**
   * ShoppingListItem findUniqueOrThrow
   */
  export type ShoppingListItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListItem to fetch.
     */
    where: ShoppingListItemWhereUniqueInput
  }

  /**
   * ShoppingListItem findFirst
   */
  export type ShoppingListItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListItem to fetch.
     */
    where?: ShoppingListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListItems to fetch.
     */
    orderBy?: ShoppingListItemOrderByWithRelationInput | ShoppingListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingListItems.
     */
    cursor?: ShoppingListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingListItems.
     */
    distinct?: ShoppingListItemScalarFieldEnum | ShoppingListItemScalarFieldEnum[]
  }

  /**
   * ShoppingListItem findFirstOrThrow
   */
  export type ShoppingListItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListItem to fetch.
     */
    where?: ShoppingListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListItems to fetch.
     */
    orderBy?: ShoppingListItemOrderByWithRelationInput | ShoppingListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingListItems.
     */
    cursor?: ShoppingListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingListItems.
     */
    distinct?: ShoppingListItemScalarFieldEnum | ShoppingListItemScalarFieldEnum[]
  }

  /**
   * ShoppingListItem findMany
   */
  export type ShoppingListItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListItems to fetch.
     */
    where?: ShoppingListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListItems to fetch.
     */
    orderBy?: ShoppingListItemOrderByWithRelationInput | ShoppingListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingListItems.
     */
    cursor?: ShoppingListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListItems.
     */
    skip?: number
    distinct?: ShoppingListItemScalarFieldEnum | ShoppingListItemScalarFieldEnum[]
  }

  /**
   * ShoppingListItem create
   */
  export type ShoppingListItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ShoppingListItem.
     */
    data: XOR<ShoppingListItemCreateInput, ShoppingListItemUncheckedCreateInput>
  }

  /**
   * ShoppingListItem createMany
   */
  export type ShoppingListItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShoppingListItems.
     */
    data: ShoppingListItemCreateManyInput | ShoppingListItemCreateManyInput[]
  }

  /**
   * ShoppingListItem createManyAndReturn
   */
  export type ShoppingListItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * The data used to create many ShoppingListItems.
     */
    data: ShoppingListItemCreateManyInput | ShoppingListItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingListItem update
   */
  export type ShoppingListItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ShoppingListItem.
     */
    data: XOR<ShoppingListItemUpdateInput, ShoppingListItemUncheckedUpdateInput>
    /**
     * Choose, which ShoppingListItem to update.
     */
    where: ShoppingListItemWhereUniqueInput
  }

  /**
   * ShoppingListItem updateMany
   */
  export type ShoppingListItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShoppingListItems.
     */
    data: XOR<ShoppingListItemUpdateManyMutationInput, ShoppingListItemUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingListItems to update
     */
    where?: ShoppingListItemWhereInput
    /**
     * Limit how many ShoppingListItems to update.
     */
    limit?: number
  }

  /**
   * ShoppingListItem updateManyAndReturn
   */
  export type ShoppingListItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * The data used to update ShoppingListItems.
     */
    data: XOR<ShoppingListItemUpdateManyMutationInput, ShoppingListItemUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingListItems to update
     */
    where?: ShoppingListItemWhereInput
    /**
     * Limit how many ShoppingListItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingListItem upsert
   */
  export type ShoppingListItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ShoppingListItem to update in case it exists.
     */
    where: ShoppingListItemWhereUniqueInput
    /**
     * In case the ShoppingListItem found by the `where` argument doesn't exist, create a new ShoppingListItem with this data.
     */
    create: XOR<ShoppingListItemCreateInput, ShoppingListItemUncheckedCreateInput>
    /**
     * In case the ShoppingListItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShoppingListItemUpdateInput, ShoppingListItemUncheckedUpdateInput>
  }

  /**
   * ShoppingListItem delete
   */
  export type ShoppingListItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * Filter which ShoppingListItem to delete.
     */
    where: ShoppingListItemWhereUniqueInput
  }

  /**
   * ShoppingListItem deleteMany
   */
  export type ShoppingListItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingListItems to delete
     */
    where?: ShoppingListItemWhereInput
    /**
     * Limit how many ShoppingListItems to delete.
     */
    limit?: number
  }

  /**
   * ShoppingListItem without action
   */
  export type ShoppingListItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    email: 'email',
    zipCode: 'zipCode',
    familySize: 'familySize',
    weeklyBudget: 'weeklyBudget'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserPreferencesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dietaryRestrictions: 'dietaryRestrictions',
    cuisinePreferences: 'cuisinePreferences',
    nutritionFocus: 'nutritionFocus',
    maxCookTime: 'maxCookTime',
    maxPrepTime: 'maxPrepTime',
    skillLevel: 'skillLevel',
    equipmentAvailable: 'equipmentAvailable',
    preferredStores: 'preferredStores',
    maxStores: 'maxStores',
    bulkBuyingOk: 'bulkBuyingOk',
    organicPreference: 'organicPreference',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPreferencesScalarFieldEnum = (typeof UserPreferencesScalarFieldEnum)[keyof typeof UserPreferencesScalarFieldEnum]


  export const UserAllergyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    allergen: 'allergen',
    severity: 'severity',
    createdAt: 'createdAt'
  };

  export type UserAllergyScalarFieldEnum = (typeof UserAllergyScalarFieldEnum)[keyof typeof UserAllergyScalarFieldEnum]


  export const FridgeItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    itemName: 'itemName',
    brand: 'brand',
    quantity: 'quantity',
    unit: 'unit',
    expirationDate: 'expirationDate',
    category: 'category',
    addedDate: 'addedDate',
    lastUpdated: 'lastUpdated'
  };

  export type FridgeItemScalarFieldEnum = (typeof FridgeItemScalarFieldEnum)[keyof typeof FridgeItemScalarFieldEnum]


  export const UserFavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    itemId: 'itemId',
    itemName: 'itemName',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type UserFavoriteScalarFieldEnum = (typeof UserFavoriteScalarFieldEnum)[keyof typeof UserFavoriteScalarFieldEnum]


  export const ShoppingSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionDate: 'sessionDate',
    totalBudget: 'totalBudget',
    totalSpent: 'totalSpent',
    totalSavings: 'totalSavings',
    notes: 'notes',
    completed: 'completed'
  };

  export type ShoppingSessionScalarFieldEnum = (typeof ShoppingSessionScalarFieldEnum)[keyof typeof ShoppingSessionScalarFieldEnum]


  export const SessionRecipeScalarFieldEnum: {
    id: 'id',
    shoppingSessionId: 'shoppingSessionId',
    recipeName: 'recipeName',
    recipeId: 'recipeId',
    servings: 'servings',
    costPerServing: 'costPerServing',
    selectedDate: 'selectedDate'
  };

  export type SessionRecipeScalarFieldEnum = (typeof SessionRecipeScalarFieldEnum)[keyof typeof SessionRecipeScalarFieldEnum]


  export const ShoppingListItemScalarFieldEnum: {
    id: 'id',
    shoppingSessionId: 'shoppingSessionId',
    itemName: 'itemName',
    quantity: 'quantity',
    unit: 'unit',
    estimatedCost: 'estimatedCost',
    actualCost: 'actualCost',
    store: 'store',
    brand: 'brand',
    purchased: 'purchased',
    substituted: 'substituted',
    substitutionNotes: 'substitutionNotes'
  };

  export type ShoppingListItemScalarFieldEnum = (typeof ShoppingListItemScalarFieldEnum)[keyof typeof ShoppingListItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    zipCode?: StringNullableFilter<"User"> | string | null
    familySize?: IntFilter<"User"> | number
    weeklyBudget?: FloatNullableFilter<"User"> | number | null
    preferences?: XOR<UserPreferencesNullableScalarRelationFilter, UserPreferencesWhereInput> | null
    allergies?: UserAllergyListRelationFilter
    fridgeItems?: FridgeItemListRelationFilter
    favorites?: UserFavoriteListRelationFilter
    shoppingHistory?: ShoppingSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    familySize?: SortOrder
    weeklyBudget?: SortOrderInput | SortOrder
    preferences?: UserPreferencesOrderByWithRelationInput
    allergies?: UserAllergyOrderByRelationAggregateInput
    fridgeItems?: FridgeItemOrderByRelationAggregateInput
    favorites?: UserFavoriteOrderByRelationAggregateInput
    shoppingHistory?: ShoppingSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    zipCode?: StringNullableFilter<"User"> | string | null
    familySize?: IntFilter<"User"> | number
    weeklyBudget?: FloatNullableFilter<"User"> | number | null
    preferences?: XOR<UserPreferencesNullableScalarRelationFilter, UserPreferencesWhereInput> | null
    allergies?: UserAllergyListRelationFilter
    fridgeItems?: FridgeItemListRelationFilter
    favorites?: UserFavoriteListRelationFilter
    shoppingHistory?: ShoppingSessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    familySize?: SortOrder
    weeklyBudget?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    familySize?: IntWithAggregatesFilter<"User"> | number
    weeklyBudget?: FloatNullableWithAggregatesFilter<"User"> | number | null
  }

  export type UserPreferencesWhereInput = {
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    id?: StringFilter<"UserPreferences"> | string
    userId?: StringFilter<"UserPreferences"> | string
    dietaryRestrictions?: StringFilter<"UserPreferences"> | string
    cuisinePreferences?: StringFilter<"UserPreferences"> | string
    nutritionFocus?: StringNullableFilter<"UserPreferences"> | string | null
    maxCookTime?: IntFilter<"UserPreferences"> | number
    maxPrepTime?: IntFilter<"UserPreferences"> | number
    skillLevel?: StringFilter<"UserPreferences"> | string
    equipmentAvailable?: StringFilter<"UserPreferences"> | string
    preferredStores?: StringFilter<"UserPreferences"> | string
    maxStores?: IntFilter<"UserPreferences"> | number
    bulkBuyingOk?: BoolFilter<"UserPreferences"> | boolean
    organicPreference?: StringFilter<"UserPreferences"> | string
    createdAt?: DateTimeFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPreferencesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dietaryRestrictions?: SortOrder
    cuisinePreferences?: SortOrder
    nutritionFocus?: SortOrderInput | SortOrder
    maxCookTime?: SortOrder
    maxPrepTime?: SortOrder
    skillLevel?: SortOrder
    equipmentAvailable?: SortOrder
    preferredStores?: SortOrder
    maxStores?: SortOrder
    bulkBuyingOk?: SortOrder
    organicPreference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    dietaryRestrictions?: StringFilter<"UserPreferences"> | string
    cuisinePreferences?: StringFilter<"UserPreferences"> | string
    nutritionFocus?: StringNullableFilter<"UserPreferences"> | string | null
    maxCookTime?: IntFilter<"UserPreferences"> | number
    maxPrepTime?: IntFilter<"UserPreferences"> | number
    skillLevel?: StringFilter<"UserPreferences"> | string
    equipmentAvailable?: StringFilter<"UserPreferences"> | string
    preferredStores?: StringFilter<"UserPreferences"> | string
    maxStores?: IntFilter<"UserPreferences"> | number
    bulkBuyingOk?: BoolFilter<"UserPreferences"> | boolean
    organicPreference?: StringFilter<"UserPreferences"> | string
    createdAt?: DateTimeFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserPreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dietaryRestrictions?: SortOrder
    cuisinePreferences?: SortOrder
    nutritionFocus?: SortOrderInput | SortOrder
    maxCookTime?: SortOrder
    maxPrepTime?: SortOrder
    skillLevel?: SortOrder
    equipmentAvailable?: SortOrder
    preferredStores?: SortOrder
    maxStores?: SortOrder
    bulkBuyingOk?: SortOrder
    organicPreference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPreferencesCountOrderByAggregateInput
    _avg?: UserPreferencesAvgOrderByAggregateInput
    _max?: UserPreferencesMaxOrderByAggregateInput
    _min?: UserPreferencesMinOrderByAggregateInput
    _sum?: UserPreferencesSumOrderByAggregateInput
  }

  export type UserPreferencesScalarWhereWithAggregatesInput = {
    AND?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    OR?: UserPreferencesScalarWhereWithAggregatesInput[]
    NOT?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPreferences"> | string
    userId?: StringWithAggregatesFilter<"UserPreferences"> | string
    dietaryRestrictions?: StringWithAggregatesFilter<"UserPreferences"> | string
    cuisinePreferences?: StringWithAggregatesFilter<"UserPreferences"> | string
    nutritionFocus?: StringNullableWithAggregatesFilter<"UserPreferences"> | string | null
    maxCookTime?: IntWithAggregatesFilter<"UserPreferences"> | number
    maxPrepTime?: IntWithAggregatesFilter<"UserPreferences"> | number
    skillLevel?: StringWithAggregatesFilter<"UserPreferences"> | string
    equipmentAvailable?: StringWithAggregatesFilter<"UserPreferences"> | string
    preferredStores?: StringWithAggregatesFilter<"UserPreferences"> | string
    maxStores?: IntWithAggregatesFilter<"UserPreferences"> | number
    bulkBuyingOk?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    organicPreference?: StringWithAggregatesFilter<"UserPreferences"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPreferences"> | Date | string
  }

  export type UserAllergyWhereInput = {
    AND?: UserAllergyWhereInput | UserAllergyWhereInput[]
    OR?: UserAllergyWhereInput[]
    NOT?: UserAllergyWhereInput | UserAllergyWhereInput[]
    id?: StringFilter<"UserAllergy"> | string
    userId?: StringFilter<"UserAllergy"> | string
    allergen?: StringFilter<"UserAllergy"> | string
    severity?: StringFilter<"UserAllergy"> | string
    createdAt?: DateTimeFilter<"UserAllergy"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserAllergyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    allergen?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserAllergyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAllergyWhereInput | UserAllergyWhereInput[]
    OR?: UserAllergyWhereInput[]
    NOT?: UserAllergyWhereInput | UserAllergyWhereInput[]
    userId?: StringFilter<"UserAllergy"> | string
    allergen?: StringFilter<"UserAllergy"> | string
    severity?: StringFilter<"UserAllergy"> | string
    createdAt?: DateTimeFilter<"UserAllergy"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserAllergyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    allergen?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    _count?: UserAllergyCountOrderByAggregateInput
    _max?: UserAllergyMaxOrderByAggregateInput
    _min?: UserAllergyMinOrderByAggregateInput
  }

  export type UserAllergyScalarWhereWithAggregatesInput = {
    AND?: UserAllergyScalarWhereWithAggregatesInput | UserAllergyScalarWhereWithAggregatesInput[]
    OR?: UserAllergyScalarWhereWithAggregatesInput[]
    NOT?: UserAllergyScalarWhereWithAggregatesInput | UserAllergyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAllergy"> | string
    userId?: StringWithAggregatesFilter<"UserAllergy"> | string
    allergen?: StringWithAggregatesFilter<"UserAllergy"> | string
    severity?: StringWithAggregatesFilter<"UserAllergy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserAllergy"> | Date | string
  }

  export type FridgeItemWhereInput = {
    AND?: FridgeItemWhereInput | FridgeItemWhereInput[]
    OR?: FridgeItemWhereInput[]
    NOT?: FridgeItemWhereInput | FridgeItemWhereInput[]
    id?: StringFilter<"FridgeItem"> | string
    userId?: StringFilter<"FridgeItem"> | string
    itemName?: StringFilter<"FridgeItem"> | string
    brand?: StringNullableFilter<"FridgeItem"> | string | null
    quantity?: FloatFilter<"FridgeItem"> | number
    unit?: StringFilter<"FridgeItem"> | string
    expirationDate?: DateTimeNullableFilter<"FridgeItem"> | Date | string | null
    category?: StringNullableFilter<"FridgeItem"> | string | null
    addedDate?: DateTimeFilter<"FridgeItem"> | Date | string
    lastUpdated?: DateTimeFilter<"FridgeItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FridgeItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemName?: SortOrder
    brand?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    expirationDate?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    addedDate?: SortOrder
    lastUpdated?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FridgeItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FridgeItemWhereInput | FridgeItemWhereInput[]
    OR?: FridgeItemWhereInput[]
    NOT?: FridgeItemWhereInput | FridgeItemWhereInput[]
    userId?: StringFilter<"FridgeItem"> | string
    itemName?: StringFilter<"FridgeItem"> | string
    brand?: StringNullableFilter<"FridgeItem"> | string | null
    quantity?: FloatFilter<"FridgeItem"> | number
    unit?: StringFilter<"FridgeItem"> | string
    expirationDate?: DateTimeNullableFilter<"FridgeItem"> | Date | string | null
    category?: StringNullableFilter<"FridgeItem"> | string | null
    addedDate?: DateTimeFilter<"FridgeItem"> | Date | string
    lastUpdated?: DateTimeFilter<"FridgeItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FridgeItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemName?: SortOrder
    brand?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    expirationDate?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    addedDate?: SortOrder
    lastUpdated?: SortOrder
    _count?: FridgeItemCountOrderByAggregateInput
    _avg?: FridgeItemAvgOrderByAggregateInput
    _max?: FridgeItemMaxOrderByAggregateInput
    _min?: FridgeItemMinOrderByAggregateInput
    _sum?: FridgeItemSumOrderByAggregateInput
  }

  export type FridgeItemScalarWhereWithAggregatesInput = {
    AND?: FridgeItemScalarWhereWithAggregatesInput | FridgeItemScalarWhereWithAggregatesInput[]
    OR?: FridgeItemScalarWhereWithAggregatesInput[]
    NOT?: FridgeItemScalarWhereWithAggregatesInput | FridgeItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FridgeItem"> | string
    userId?: StringWithAggregatesFilter<"FridgeItem"> | string
    itemName?: StringWithAggregatesFilter<"FridgeItem"> | string
    brand?: StringNullableWithAggregatesFilter<"FridgeItem"> | string | null
    quantity?: FloatWithAggregatesFilter<"FridgeItem"> | number
    unit?: StringWithAggregatesFilter<"FridgeItem"> | string
    expirationDate?: DateTimeNullableWithAggregatesFilter<"FridgeItem"> | Date | string | null
    category?: StringNullableWithAggregatesFilter<"FridgeItem"> | string | null
    addedDate?: DateTimeWithAggregatesFilter<"FridgeItem"> | Date | string
    lastUpdated?: DateTimeWithAggregatesFilter<"FridgeItem"> | Date | string
  }

  export type UserFavoriteWhereInput = {
    AND?: UserFavoriteWhereInput | UserFavoriteWhereInput[]
    OR?: UserFavoriteWhereInput[]
    NOT?: UserFavoriteWhereInput | UserFavoriteWhereInput[]
    id?: StringFilter<"UserFavorite"> | string
    userId?: StringFilter<"UserFavorite"> | string
    type?: StringFilter<"UserFavorite"> | string
    itemId?: StringFilter<"UserFavorite"> | string
    itemName?: StringFilter<"UserFavorite"> | string
    notes?: StringNullableFilter<"UserFavorite"> | string | null
    createdAt?: DateTimeFilter<"UserFavorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserFavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserFavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_type_itemId?: UserFavoriteUserIdTypeItemIdCompoundUniqueInput
    AND?: UserFavoriteWhereInput | UserFavoriteWhereInput[]
    OR?: UserFavoriteWhereInput[]
    NOT?: UserFavoriteWhereInput | UserFavoriteWhereInput[]
    userId?: StringFilter<"UserFavorite"> | string
    type?: StringFilter<"UserFavorite"> | string
    itemId?: StringFilter<"UserFavorite"> | string
    itemName?: StringFilter<"UserFavorite"> | string
    notes?: StringNullableFilter<"UserFavorite"> | string | null
    createdAt?: DateTimeFilter<"UserFavorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_type_itemId">

  export type UserFavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserFavoriteCountOrderByAggregateInput
    _max?: UserFavoriteMaxOrderByAggregateInput
    _min?: UserFavoriteMinOrderByAggregateInput
  }

  export type UserFavoriteScalarWhereWithAggregatesInput = {
    AND?: UserFavoriteScalarWhereWithAggregatesInput | UserFavoriteScalarWhereWithAggregatesInput[]
    OR?: UserFavoriteScalarWhereWithAggregatesInput[]
    NOT?: UserFavoriteScalarWhereWithAggregatesInput | UserFavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFavorite"> | string
    userId?: StringWithAggregatesFilter<"UserFavorite"> | string
    type?: StringWithAggregatesFilter<"UserFavorite"> | string
    itemId?: StringWithAggregatesFilter<"UserFavorite"> | string
    itemName?: StringWithAggregatesFilter<"UserFavorite"> | string
    notes?: StringNullableWithAggregatesFilter<"UserFavorite"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserFavorite"> | Date | string
  }

  export type ShoppingSessionWhereInput = {
    AND?: ShoppingSessionWhereInput | ShoppingSessionWhereInput[]
    OR?: ShoppingSessionWhereInput[]
    NOT?: ShoppingSessionWhereInput | ShoppingSessionWhereInput[]
    id?: StringFilter<"ShoppingSession"> | string
    userId?: StringFilter<"ShoppingSession"> | string
    sessionDate?: DateTimeFilter<"ShoppingSession"> | Date | string
    totalBudget?: FloatNullableFilter<"ShoppingSession"> | number | null
    totalSpent?: FloatNullableFilter<"ShoppingSession"> | number | null
    totalSavings?: FloatNullableFilter<"ShoppingSession"> | number | null
    notes?: StringNullableFilter<"ShoppingSession"> | string | null
    completed?: BoolFilter<"ShoppingSession"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipes?: SessionRecipeListRelationFilter
    shoppingList?: ShoppingListItemListRelationFilter
  }

  export type ShoppingSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionDate?: SortOrder
    totalBudget?: SortOrderInput | SortOrder
    totalSpent?: SortOrderInput | SortOrder
    totalSavings?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    completed?: SortOrder
    user?: UserOrderByWithRelationInput
    recipes?: SessionRecipeOrderByRelationAggregateInput
    shoppingList?: ShoppingListItemOrderByRelationAggregateInput
  }

  export type ShoppingSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShoppingSessionWhereInput | ShoppingSessionWhereInput[]
    OR?: ShoppingSessionWhereInput[]
    NOT?: ShoppingSessionWhereInput | ShoppingSessionWhereInput[]
    userId?: StringFilter<"ShoppingSession"> | string
    sessionDate?: DateTimeFilter<"ShoppingSession"> | Date | string
    totalBudget?: FloatNullableFilter<"ShoppingSession"> | number | null
    totalSpent?: FloatNullableFilter<"ShoppingSession"> | number | null
    totalSavings?: FloatNullableFilter<"ShoppingSession"> | number | null
    notes?: StringNullableFilter<"ShoppingSession"> | string | null
    completed?: BoolFilter<"ShoppingSession"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipes?: SessionRecipeListRelationFilter
    shoppingList?: ShoppingListItemListRelationFilter
  }, "id">

  export type ShoppingSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionDate?: SortOrder
    totalBudget?: SortOrderInput | SortOrder
    totalSpent?: SortOrderInput | SortOrder
    totalSavings?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    completed?: SortOrder
    _count?: ShoppingSessionCountOrderByAggregateInput
    _avg?: ShoppingSessionAvgOrderByAggregateInput
    _max?: ShoppingSessionMaxOrderByAggregateInput
    _min?: ShoppingSessionMinOrderByAggregateInput
    _sum?: ShoppingSessionSumOrderByAggregateInput
  }

  export type ShoppingSessionScalarWhereWithAggregatesInput = {
    AND?: ShoppingSessionScalarWhereWithAggregatesInput | ShoppingSessionScalarWhereWithAggregatesInput[]
    OR?: ShoppingSessionScalarWhereWithAggregatesInput[]
    NOT?: ShoppingSessionScalarWhereWithAggregatesInput | ShoppingSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShoppingSession"> | string
    userId?: StringWithAggregatesFilter<"ShoppingSession"> | string
    sessionDate?: DateTimeWithAggregatesFilter<"ShoppingSession"> | Date | string
    totalBudget?: FloatNullableWithAggregatesFilter<"ShoppingSession"> | number | null
    totalSpent?: FloatNullableWithAggregatesFilter<"ShoppingSession"> | number | null
    totalSavings?: FloatNullableWithAggregatesFilter<"ShoppingSession"> | number | null
    notes?: StringNullableWithAggregatesFilter<"ShoppingSession"> | string | null
    completed?: BoolWithAggregatesFilter<"ShoppingSession"> | boolean
  }

  export type SessionRecipeWhereInput = {
    AND?: SessionRecipeWhereInput | SessionRecipeWhereInput[]
    OR?: SessionRecipeWhereInput[]
    NOT?: SessionRecipeWhereInput | SessionRecipeWhereInput[]
    id?: StringFilter<"SessionRecipe"> | string
    shoppingSessionId?: StringFilter<"SessionRecipe"> | string
    recipeName?: StringFilter<"SessionRecipe"> | string
    recipeId?: StringNullableFilter<"SessionRecipe"> | string | null
    servings?: IntFilter<"SessionRecipe"> | number
    costPerServing?: FloatNullableFilter<"SessionRecipe"> | number | null
    selectedDate?: DateTimeNullableFilter<"SessionRecipe"> | Date | string | null
    shoppingSession?: XOR<ShoppingSessionScalarRelationFilter, ShoppingSessionWhereInput>
  }

  export type SessionRecipeOrderByWithRelationInput = {
    id?: SortOrder
    shoppingSessionId?: SortOrder
    recipeName?: SortOrder
    recipeId?: SortOrderInput | SortOrder
    servings?: SortOrder
    costPerServing?: SortOrderInput | SortOrder
    selectedDate?: SortOrderInput | SortOrder
    shoppingSession?: ShoppingSessionOrderByWithRelationInput
  }

  export type SessionRecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionRecipeWhereInput | SessionRecipeWhereInput[]
    OR?: SessionRecipeWhereInput[]
    NOT?: SessionRecipeWhereInput | SessionRecipeWhereInput[]
    shoppingSessionId?: StringFilter<"SessionRecipe"> | string
    recipeName?: StringFilter<"SessionRecipe"> | string
    recipeId?: StringNullableFilter<"SessionRecipe"> | string | null
    servings?: IntFilter<"SessionRecipe"> | number
    costPerServing?: FloatNullableFilter<"SessionRecipe"> | number | null
    selectedDate?: DateTimeNullableFilter<"SessionRecipe"> | Date | string | null
    shoppingSession?: XOR<ShoppingSessionScalarRelationFilter, ShoppingSessionWhereInput>
  }, "id">

  export type SessionRecipeOrderByWithAggregationInput = {
    id?: SortOrder
    shoppingSessionId?: SortOrder
    recipeName?: SortOrder
    recipeId?: SortOrderInput | SortOrder
    servings?: SortOrder
    costPerServing?: SortOrderInput | SortOrder
    selectedDate?: SortOrderInput | SortOrder
    _count?: SessionRecipeCountOrderByAggregateInput
    _avg?: SessionRecipeAvgOrderByAggregateInput
    _max?: SessionRecipeMaxOrderByAggregateInput
    _min?: SessionRecipeMinOrderByAggregateInput
    _sum?: SessionRecipeSumOrderByAggregateInput
  }

  export type SessionRecipeScalarWhereWithAggregatesInput = {
    AND?: SessionRecipeScalarWhereWithAggregatesInput | SessionRecipeScalarWhereWithAggregatesInput[]
    OR?: SessionRecipeScalarWhereWithAggregatesInput[]
    NOT?: SessionRecipeScalarWhereWithAggregatesInput | SessionRecipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionRecipe"> | string
    shoppingSessionId?: StringWithAggregatesFilter<"SessionRecipe"> | string
    recipeName?: StringWithAggregatesFilter<"SessionRecipe"> | string
    recipeId?: StringNullableWithAggregatesFilter<"SessionRecipe"> | string | null
    servings?: IntWithAggregatesFilter<"SessionRecipe"> | number
    costPerServing?: FloatNullableWithAggregatesFilter<"SessionRecipe"> | number | null
    selectedDate?: DateTimeNullableWithAggregatesFilter<"SessionRecipe"> | Date | string | null
  }

  export type ShoppingListItemWhereInput = {
    AND?: ShoppingListItemWhereInput | ShoppingListItemWhereInput[]
    OR?: ShoppingListItemWhereInput[]
    NOT?: ShoppingListItemWhereInput | ShoppingListItemWhereInput[]
    id?: StringFilter<"ShoppingListItem"> | string
    shoppingSessionId?: StringFilter<"ShoppingListItem"> | string
    itemName?: StringFilter<"ShoppingListItem"> | string
    quantity?: FloatFilter<"ShoppingListItem"> | number
    unit?: StringFilter<"ShoppingListItem"> | string
    estimatedCost?: FloatNullableFilter<"ShoppingListItem"> | number | null
    actualCost?: FloatNullableFilter<"ShoppingListItem"> | number | null
    store?: StringNullableFilter<"ShoppingListItem"> | string | null
    brand?: StringNullableFilter<"ShoppingListItem"> | string | null
    purchased?: BoolFilter<"ShoppingListItem"> | boolean
    substituted?: BoolFilter<"ShoppingListItem"> | boolean
    substitutionNotes?: StringNullableFilter<"ShoppingListItem"> | string | null
    shoppingSession?: XOR<ShoppingSessionScalarRelationFilter, ShoppingSessionWhereInput>
  }

  export type ShoppingListItemOrderByWithRelationInput = {
    id?: SortOrder
    shoppingSessionId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    estimatedCost?: SortOrderInput | SortOrder
    actualCost?: SortOrderInput | SortOrder
    store?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    purchased?: SortOrder
    substituted?: SortOrder
    substitutionNotes?: SortOrderInput | SortOrder
    shoppingSession?: ShoppingSessionOrderByWithRelationInput
  }

  export type ShoppingListItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShoppingListItemWhereInput | ShoppingListItemWhereInput[]
    OR?: ShoppingListItemWhereInput[]
    NOT?: ShoppingListItemWhereInput | ShoppingListItemWhereInput[]
    shoppingSessionId?: StringFilter<"ShoppingListItem"> | string
    itemName?: StringFilter<"ShoppingListItem"> | string
    quantity?: FloatFilter<"ShoppingListItem"> | number
    unit?: StringFilter<"ShoppingListItem"> | string
    estimatedCost?: FloatNullableFilter<"ShoppingListItem"> | number | null
    actualCost?: FloatNullableFilter<"ShoppingListItem"> | number | null
    store?: StringNullableFilter<"ShoppingListItem"> | string | null
    brand?: StringNullableFilter<"ShoppingListItem"> | string | null
    purchased?: BoolFilter<"ShoppingListItem"> | boolean
    substituted?: BoolFilter<"ShoppingListItem"> | boolean
    substitutionNotes?: StringNullableFilter<"ShoppingListItem"> | string | null
    shoppingSession?: XOR<ShoppingSessionScalarRelationFilter, ShoppingSessionWhereInput>
  }, "id">

  export type ShoppingListItemOrderByWithAggregationInput = {
    id?: SortOrder
    shoppingSessionId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    estimatedCost?: SortOrderInput | SortOrder
    actualCost?: SortOrderInput | SortOrder
    store?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    purchased?: SortOrder
    substituted?: SortOrder
    substitutionNotes?: SortOrderInput | SortOrder
    _count?: ShoppingListItemCountOrderByAggregateInput
    _avg?: ShoppingListItemAvgOrderByAggregateInput
    _max?: ShoppingListItemMaxOrderByAggregateInput
    _min?: ShoppingListItemMinOrderByAggregateInput
    _sum?: ShoppingListItemSumOrderByAggregateInput
  }

  export type ShoppingListItemScalarWhereWithAggregatesInput = {
    AND?: ShoppingListItemScalarWhereWithAggregatesInput | ShoppingListItemScalarWhereWithAggregatesInput[]
    OR?: ShoppingListItemScalarWhereWithAggregatesInput[]
    NOT?: ShoppingListItemScalarWhereWithAggregatesInput | ShoppingListItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShoppingListItem"> | string
    shoppingSessionId?: StringWithAggregatesFilter<"ShoppingListItem"> | string
    itemName?: StringWithAggregatesFilter<"ShoppingListItem"> | string
    quantity?: FloatWithAggregatesFilter<"ShoppingListItem"> | number
    unit?: StringWithAggregatesFilter<"ShoppingListItem"> | string
    estimatedCost?: FloatNullableWithAggregatesFilter<"ShoppingListItem"> | number | null
    actualCost?: FloatNullableWithAggregatesFilter<"ShoppingListItem"> | number | null
    store?: StringNullableWithAggregatesFilter<"ShoppingListItem"> | string | null
    brand?: StringNullableWithAggregatesFilter<"ShoppingListItem"> | string | null
    purchased?: BoolWithAggregatesFilter<"ShoppingListItem"> | boolean
    substituted?: BoolWithAggregatesFilter<"ShoppingListItem"> | boolean
    substitutionNotes?: StringNullableWithAggregatesFilter<"ShoppingListItem"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    zipCode?: string | null
    familySize?: number
    weeklyBudget?: number | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    allergies?: UserAllergyCreateNestedManyWithoutUserInput
    fridgeItems?: FridgeItemCreateNestedManyWithoutUserInput
    favorites?: UserFavoriteCreateNestedManyWithoutUserInput
    shoppingHistory?: ShoppingSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    zipCode?: string | null
    familySize?: number
    weeklyBudget?: number | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    allergies?: UserAllergyUncheckedCreateNestedManyWithoutUserInput
    fridgeItems?: FridgeItemUncheckedCreateNestedManyWithoutUserInput
    favorites?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    shoppingHistory?: ShoppingSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySize?: IntFieldUpdateOperationsInput | number
    weeklyBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    allergies?: UserAllergyUpdateManyWithoutUserNestedInput
    fridgeItems?: FridgeItemUpdateManyWithoutUserNestedInput
    favorites?: UserFavoriteUpdateManyWithoutUserNestedInput
    shoppingHistory?: ShoppingSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySize?: IntFieldUpdateOperationsInput | number
    weeklyBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    allergies?: UserAllergyUncheckedUpdateManyWithoutUserNestedInput
    fridgeItems?: FridgeItemUncheckedUpdateManyWithoutUserNestedInput
    favorites?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    shoppingHistory?: ShoppingSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    zipCode?: string | null
    familySize?: number
    weeklyBudget?: number | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySize?: IntFieldUpdateOperationsInput | number
    weeklyBudget?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySize?: IntFieldUpdateOperationsInput | number
    weeklyBudget?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UserPreferencesCreateInput = {
    id?: string
    dietaryRestrictions?: string
    cuisinePreferences?: string
    nutritionFocus?: string | null
    maxCookTime?: number
    maxPrepTime?: number
    skillLevel?: string
    equipmentAvailable?: string
    preferredStores?: string
    maxStores?: number
    bulkBuyingOk?: boolean
    organicPreference?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type UserPreferencesUncheckedCreateInput = {
    id?: string
    userId: string
    dietaryRestrictions?: string
    cuisinePreferences?: string
    nutritionFocus?: string | null
    maxCookTime?: number
    maxPrepTime?: number
    skillLevel?: string
    equipmentAvailable?: string
    preferredStores?: string
    maxStores?: number
    bulkBuyingOk?: boolean
    organicPreference?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dietaryRestrictions?: StringFieldUpdateOperationsInput | string
    cuisinePreferences?: StringFieldUpdateOperationsInput | string
    nutritionFocus?: NullableStringFieldUpdateOperationsInput | string | null
    maxCookTime?: IntFieldUpdateOperationsInput | number
    maxPrepTime?: IntFieldUpdateOperationsInput | number
    skillLevel?: StringFieldUpdateOperationsInput | string
    equipmentAvailable?: StringFieldUpdateOperationsInput | string
    preferredStores?: StringFieldUpdateOperationsInput | string
    maxStores?: IntFieldUpdateOperationsInput | number
    bulkBuyingOk?: BoolFieldUpdateOperationsInput | boolean
    organicPreference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dietaryRestrictions?: StringFieldUpdateOperationsInput | string
    cuisinePreferences?: StringFieldUpdateOperationsInput | string
    nutritionFocus?: NullableStringFieldUpdateOperationsInput | string | null
    maxCookTime?: IntFieldUpdateOperationsInput | number
    maxPrepTime?: IntFieldUpdateOperationsInput | number
    skillLevel?: StringFieldUpdateOperationsInput | string
    equipmentAvailable?: StringFieldUpdateOperationsInput | string
    preferredStores?: StringFieldUpdateOperationsInput | string
    maxStores?: IntFieldUpdateOperationsInput | number
    bulkBuyingOk?: BoolFieldUpdateOperationsInput | boolean
    organicPreference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesCreateManyInput = {
    id?: string
    userId: string
    dietaryRestrictions?: string
    cuisinePreferences?: string
    nutritionFocus?: string | null
    maxCookTime?: number
    maxPrepTime?: number
    skillLevel?: string
    equipmentAvailable?: string
    preferredStores?: string
    maxStores?: number
    bulkBuyingOk?: boolean
    organicPreference?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dietaryRestrictions?: StringFieldUpdateOperationsInput | string
    cuisinePreferences?: StringFieldUpdateOperationsInput | string
    nutritionFocus?: NullableStringFieldUpdateOperationsInput | string | null
    maxCookTime?: IntFieldUpdateOperationsInput | number
    maxPrepTime?: IntFieldUpdateOperationsInput | number
    skillLevel?: StringFieldUpdateOperationsInput | string
    equipmentAvailable?: StringFieldUpdateOperationsInput | string
    preferredStores?: StringFieldUpdateOperationsInput | string
    maxStores?: IntFieldUpdateOperationsInput | number
    bulkBuyingOk?: BoolFieldUpdateOperationsInput | boolean
    organicPreference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dietaryRestrictions?: StringFieldUpdateOperationsInput | string
    cuisinePreferences?: StringFieldUpdateOperationsInput | string
    nutritionFocus?: NullableStringFieldUpdateOperationsInput | string | null
    maxCookTime?: IntFieldUpdateOperationsInput | number
    maxPrepTime?: IntFieldUpdateOperationsInput | number
    skillLevel?: StringFieldUpdateOperationsInput | string
    equipmentAvailable?: StringFieldUpdateOperationsInput | string
    preferredStores?: StringFieldUpdateOperationsInput | string
    maxStores?: IntFieldUpdateOperationsInput | number
    bulkBuyingOk?: BoolFieldUpdateOperationsInput | boolean
    organicPreference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAllergyCreateInput = {
    id?: string
    allergen: string
    severity: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAllergiesInput
  }

  export type UserAllergyUncheckedCreateInput = {
    id?: string
    userId: string
    allergen: string
    severity: string
    createdAt?: Date | string
  }

  export type UserAllergyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    allergen?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAllergiesNestedInput
  }

  export type UserAllergyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    allergen?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAllergyCreateManyInput = {
    id?: string
    userId: string
    allergen: string
    severity: string
    createdAt?: Date | string
  }

  export type UserAllergyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    allergen?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAllergyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    allergen?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FridgeItemCreateInput = {
    id?: string
    itemName: string
    brand?: string | null
    quantity: number
    unit: string
    expirationDate?: Date | string | null
    category?: string | null
    addedDate?: Date | string
    lastUpdated?: Date | string
    user: UserCreateNestedOneWithoutFridgeItemsInput
  }

  export type FridgeItemUncheckedCreateInput = {
    id?: string
    userId: string
    itemName: string
    brand?: string | null
    quantity: number
    unit: string
    expirationDate?: Date | string | null
    category?: string | null
    addedDate?: Date | string
    lastUpdated?: Date | string
  }

  export type FridgeItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    addedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFridgeItemsNestedInput
  }

  export type FridgeItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    addedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FridgeItemCreateManyInput = {
    id?: string
    userId: string
    itemName: string
    brand?: string | null
    quantity: number
    unit: string
    expirationDate?: Date | string | null
    category?: string | null
    addedDate?: Date | string
    lastUpdated?: Date | string
  }

  export type FridgeItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    addedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FridgeItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    addedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteCreateInput = {
    id?: string
    type: string
    itemId: string
    itemName: string
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type UserFavoriteUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    itemId: string
    itemName: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type UserFavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type UserFavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteCreateManyInput = {
    id?: string
    userId: string
    type: string
    itemId: string
    itemName: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type UserFavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingSessionCreateInput = {
    id?: string
    sessionDate?: Date | string
    totalBudget?: number | null
    totalSpent?: number | null
    totalSavings?: number | null
    notes?: string | null
    completed?: boolean
    user: UserCreateNestedOneWithoutShoppingHistoryInput
    recipes?: SessionRecipeCreateNestedManyWithoutShoppingSessionInput
    shoppingList?: ShoppingListItemCreateNestedManyWithoutShoppingSessionInput
  }

  export type ShoppingSessionUncheckedCreateInput = {
    id?: string
    userId: string
    sessionDate?: Date | string
    totalBudget?: number | null
    totalSpent?: number | null
    totalSavings?: number | null
    notes?: string | null
    completed?: boolean
    recipes?: SessionRecipeUncheckedCreateNestedManyWithoutShoppingSessionInput
    shoppingList?: ShoppingListItemUncheckedCreateNestedManyWithoutShoppingSessionInput
  }

  export type ShoppingSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutShoppingHistoryNestedInput
    recipes?: SessionRecipeUpdateManyWithoutShoppingSessionNestedInput
    shoppingList?: ShoppingListItemUpdateManyWithoutShoppingSessionNestedInput
  }

  export type ShoppingSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    recipes?: SessionRecipeUncheckedUpdateManyWithoutShoppingSessionNestedInput
    shoppingList?: ShoppingListItemUncheckedUpdateManyWithoutShoppingSessionNestedInput
  }

  export type ShoppingSessionCreateManyInput = {
    id?: string
    userId: string
    sessionDate?: Date | string
    totalBudget?: number | null
    totalSpent?: number | null
    totalSavings?: number | null
    notes?: string | null
    completed?: boolean
  }

  export type ShoppingSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionRecipeCreateInput = {
    id?: string
    recipeName: string
    recipeId?: string | null
    servings: number
    costPerServing?: number | null
    selectedDate?: Date | string | null
    shoppingSession: ShoppingSessionCreateNestedOneWithoutRecipesInput
  }

  export type SessionRecipeUncheckedCreateInput = {
    id?: string
    shoppingSessionId: string
    recipeName: string
    recipeId?: string | null
    servings: number
    costPerServing?: number | null
    selectedDate?: Date | string | null
  }

  export type SessionRecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeName?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: IntFieldUpdateOperationsInput | number
    costPerServing?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shoppingSession?: ShoppingSessionUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type SessionRecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingSessionId?: StringFieldUpdateOperationsInput | string
    recipeName?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: IntFieldUpdateOperationsInput | number
    costPerServing?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionRecipeCreateManyInput = {
    id?: string
    shoppingSessionId: string
    recipeName: string
    recipeId?: string | null
    servings: number
    costPerServing?: number | null
    selectedDate?: Date | string | null
  }

  export type SessionRecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeName?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: IntFieldUpdateOperationsInput | number
    costPerServing?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionRecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingSessionId?: StringFieldUpdateOperationsInput | string
    recipeName?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: IntFieldUpdateOperationsInput | number
    costPerServing?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShoppingListItemCreateInput = {
    id?: string
    itemName: string
    quantity: number
    unit: string
    estimatedCost?: number | null
    actualCost?: number | null
    store?: string | null
    brand?: string | null
    purchased?: boolean
    substituted?: boolean
    substitutionNotes?: string | null
    shoppingSession: ShoppingSessionCreateNestedOneWithoutShoppingListInput
  }

  export type ShoppingListItemUncheckedCreateInput = {
    id?: string
    shoppingSessionId: string
    itemName: string
    quantity: number
    unit: string
    estimatedCost?: number | null
    actualCost?: number | null
    store?: string | null
    brand?: string | null
    purchased?: boolean
    substituted?: boolean
    substitutionNotes?: string | null
  }

  export type ShoppingListItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    actualCost?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    substituted?: BoolFieldUpdateOperationsInput | boolean
    substitutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    shoppingSession?: ShoppingSessionUpdateOneRequiredWithoutShoppingListNestedInput
  }

  export type ShoppingListItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingSessionId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    actualCost?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    substituted?: BoolFieldUpdateOperationsInput | boolean
    substitutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShoppingListItemCreateManyInput = {
    id?: string
    shoppingSessionId: string
    itemName: string
    quantity: number
    unit: string
    estimatedCost?: number | null
    actualCost?: number | null
    store?: string | null
    brand?: string | null
    purchased?: boolean
    substituted?: boolean
    substitutionNotes?: string | null
  }

  export type ShoppingListItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    actualCost?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    substituted?: BoolFieldUpdateOperationsInput | boolean
    substitutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShoppingListItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingSessionId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    actualCost?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    substituted?: BoolFieldUpdateOperationsInput | boolean
    substitutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserPreferencesNullableScalarRelationFilter = {
    is?: UserPreferencesWhereInput | null
    isNot?: UserPreferencesWhereInput | null
  }

  export type UserAllergyListRelationFilter = {
    every?: UserAllergyWhereInput
    some?: UserAllergyWhereInput
    none?: UserAllergyWhereInput
  }

  export type FridgeItemListRelationFilter = {
    every?: FridgeItemWhereInput
    some?: FridgeItemWhereInput
    none?: FridgeItemWhereInput
  }

  export type UserFavoriteListRelationFilter = {
    every?: UserFavoriteWhereInput
    some?: UserFavoriteWhereInput
    none?: UserFavoriteWhereInput
  }

  export type ShoppingSessionListRelationFilter = {
    every?: ShoppingSessionWhereInput
    some?: ShoppingSessionWhereInput
    none?: ShoppingSessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserAllergyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FridgeItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShoppingSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    zipCode?: SortOrder
    familySize?: SortOrder
    weeklyBudget?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    familySize?: SortOrder
    weeklyBudget?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    zipCode?: SortOrder
    familySize?: SortOrder
    weeklyBudget?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    zipCode?: SortOrder
    familySize?: SortOrder
    weeklyBudget?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    familySize?: SortOrder
    weeklyBudget?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserPreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dietaryRestrictions?: SortOrder
    cuisinePreferences?: SortOrder
    nutritionFocus?: SortOrder
    maxCookTime?: SortOrder
    maxPrepTime?: SortOrder
    skillLevel?: SortOrder
    equipmentAvailable?: SortOrder
    preferredStores?: SortOrder
    maxStores?: SortOrder
    bulkBuyingOk?: SortOrder
    organicPreference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesAvgOrderByAggregateInput = {
    maxCookTime?: SortOrder
    maxPrepTime?: SortOrder
    maxStores?: SortOrder
  }

  export type UserPreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dietaryRestrictions?: SortOrder
    cuisinePreferences?: SortOrder
    nutritionFocus?: SortOrder
    maxCookTime?: SortOrder
    maxPrepTime?: SortOrder
    skillLevel?: SortOrder
    equipmentAvailable?: SortOrder
    preferredStores?: SortOrder
    maxStores?: SortOrder
    bulkBuyingOk?: SortOrder
    organicPreference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dietaryRestrictions?: SortOrder
    cuisinePreferences?: SortOrder
    nutritionFocus?: SortOrder
    maxCookTime?: SortOrder
    maxPrepTime?: SortOrder
    skillLevel?: SortOrder
    equipmentAvailable?: SortOrder
    preferredStores?: SortOrder
    maxStores?: SortOrder
    bulkBuyingOk?: SortOrder
    organicPreference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesSumOrderByAggregateInput = {
    maxCookTime?: SortOrder
    maxPrepTime?: SortOrder
    maxStores?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserAllergyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    allergen?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAllergyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    allergen?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAllergyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    allergen?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FridgeItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemName?: SortOrder
    brand?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    expirationDate?: SortOrder
    category?: SortOrder
    addedDate?: SortOrder
    lastUpdated?: SortOrder
  }

  export type FridgeItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type FridgeItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemName?: SortOrder
    brand?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    expirationDate?: SortOrder
    category?: SortOrder
    addedDate?: SortOrder
    lastUpdated?: SortOrder
  }

  export type FridgeItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemName?: SortOrder
    brand?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    expirationDate?: SortOrder
    category?: SortOrder
    addedDate?: SortOrder
    lastUpdated?: SortOrder
  }

  export type FridgeItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserFavoriteUserIdTypeItemIdCompoundUniqueInput = {
    userId: string
    type: string
    itemId: string
  }

  export type UserFavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionRecipeListRelationFilter = {
    every?: SessionRecipeWhereInput
    some?: SessionRecipeWhereInput
    none?: SessionRecipeWhereInput
  }

  export type ShoppingListItemListRelationFilter = {
    every?: ShoppingListItemWhereInput
    some?: ShoppingListItemWhereInput
    none?: ShoppingListItemWhereInput
  }

  export type SessionRecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShoppingListItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShoppingSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionDate?: SortOrder
    totalBudget?: SortOrder
    totalSpent?: SortOrder
    totalSavings?: SortOrder
    notes?: SortOrder
    completed?: SortOrder
  }

  export type ShoppingSessionAvgOrderByAggregateInput = {
    totalBudget?: SortOrder
    totalSpent?: SortOrder
    totalSavings?: SortOrder
  }

  export type ShoppingSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionDate?: SortOrder
    totalBudget?: SortOrder
    totalSpent?: SortOrder
    totalSavings?: SortOrder
    notes?: SortOrder
    completed?: SortOrder
  }

  export type ShoppingSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionDate?: SortOrder
    totalBudget?: SortOrder
    totalSpent?: SortOrder
    totalSavings?: SortOrder
    notes?: SortOrder
    completed?: SortOrder
  }

  export type ShoppingSessionSumOrderByAggregateInput = {
    totalBudget?: SortOrder
    totalSpent?: SortOrder
    totalSavings?: SortOrder
  }

  export type ShoppingSessionScalarRelationFilter = {
    is?: ShoppingSessionWhereInput
    isNot?: ShoppingSessionWhereInput
  }

  export type SessionRecipeCountOrderByAggregateInput = {
    id?: SortOrder
    shoppingSessionId?: SortOrder
    recipeName?: SortOrder
    recipeId?: SortOrder
    servings?: SortOrder
    costPerServing?: SortOrder
    selectedDate?: SortOrder
  }

  export type SessionRecipeAvgOrderByAggregateInput = {
    servings?: SortOrder
    costPerServing?: SortOrder
  }

  export type SessionRecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    shoppingSessionId?: SortOrder
    recipeName?: SortOrder
    recipeId?: SortOrder
    servings?: SortOrder
    costPerServing?: SortOrder
    selectedDate?: SortOrder
  }

  export type SessionRecipeMinOrderByAggregateInput = {
    id?: SortOrder
    shoppingSessionId?: SortOrder
    recipeName?: SortOrder
    recipeId?: SortOrder
    servings?: SortOrder
    costPerServing?: SortOrder
    selectedDate?: SortOrder
  }

  export type SessionRecipeSumOrderByAggregateInput = {
    servings?: SortOrder
    costPerServing?: SortOrder
  }

  export type ShoppingListItemCountOrderByAggregateInput = {
    id?: SortOrder
    shoppingSessionId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    estimatedCost?: SortOrder
    actualCost?: SortOrder
    store?: SortOrder
    brand?: SortOrder
    purchased?: SortOrder
    substituted?: SortOrder
    substitutionNotes?: SortOrder
  }

  export type ShoppingListItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    estimatedCost?: SortOrder
    actualCost?: SortOrder
  }

  export type ShoppingListItemMaxOrderByAggregateInput = {
    id?: SortOrder
    shoppingSessionId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    estimatedCost?: SortOrder
    actualCost?: SortOrder
    store?: SortOrder
    brand?: SortOrder
    purchased?: SortOrder
    substituted?: SortOrder
    substitutionNotes?: SortOrder
  }

  export type ShoppingListItemMinOrderByAggregateInput = {
    id?: SortOrder
    shoppingSessionId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    estimatedCost?: SortOrder
    actualCost?: SortOrder
    store?: SortOrder
    brand?: SortOrder
    purchased?: SortOrder
    substituted?: SortOrder
    substitutionNotes?: SortOrder
  }

  export type ShoppingListItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    estimatedCost?: SortOrder
    actualCost?: SortOrder
  }

  export type UserPreferencesCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type UserAllergyCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAllergyCreateWithoutUserInput, UserAllergyUncheckedCreateWithoutUserInput> | UserAllergyCreateWithoutUserInput[] | UserAllergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAllergyCreateOrConnectWithoutUserInput | UserAllergyCreateOrConnectWithoutUserInput[]
    createMany?: UserAllergyCreateManyUserInputEnvelope
    connect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
  }

  export type FridgeItemCreateNestedManyWithoutUserInput = {
    create?: XOR<FridgeItemCreateWithoutUserInput, FridgeItemUncheckedCreateWithoutUserInput> | FridgeItemCreateWithoutUserInput[] | FridgeItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FridgeItemCreateOrConnectWithoutUserInput | FridgeItemCreateOrConnectWithoutUserInput[]
    createMany?: FridgeItemCreateManyUserInputEnvelope
    connect?: FridgeItemWhereUniqueInput | FridgeItemWhereUniqueInput[]
  }

  export type UserFavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput> | UserFavoriteCreateWithoutUserInput[] | UserFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutUserInput | UserFavoriteCreateOrConnectWithoutUserInput[]
    createMany?: UserFavoriteCreateManyUserInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type ShoppingSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<ShoppingSessionCreateWithoutUserInput, ShoppingSessionUncheckedCreateWithoutUserInput> | ShoppingSessionCreateWithoutUserInput[] | ShoppingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingSessionCreateOrConnectWithoutUserInput | ShoppingSessionCreateOrConnectWithoutUserInput[]
    createMany?: ShoppingSessionCreateManyUserInputEnvelope
    connect?: ShoppingSessionWhereUniqueInput | ShoppingSessionWhereUniqueInput[]
  }

  export type UserPreferencesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type UserAllergyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAllergyCreateWithoutUserInput, UserAllergyUncheckedCreateWithoutUserInput> | UserAllergyCreateWithoutUserInput[] | UserAllergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAllergyCreateOrConnectWithoutUserInput | UserAllergyCreateOrConnectWithoutUserInput[]
    createMany?: UserAllergyCreateManyUserInputEnvelope
    connect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
  }

  export type FridgeItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FridgeItemCreateWithoutUserInput, FridgeItemUncheckedCreateWithoutUserInput> | FridgeItemCreateWithoutUserInput[] | FridgeItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FridgeItemCreateOrConnectWithoutUserInput | FridgeItemCreateOrConnectWithoutUserInput[]
    createMany?: FridgeItemCreateManyUserInputEnvelope
    connect?: FridgeItemWhereUniqueInput | FridgeItemWhereUniqueInput[]
  }

  export type UserFavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput> | UserFavoriteCreateWithoutUserInput[] | UserFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutUserInput | UserFavoriteCreateOrConnectWithoutUserInput[]
    createMany?: UserFavoriteCreateManyUserInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type ShoppingSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShoppingSessionCreateWithoutUserInput, ShoppingSessionUncheckedCreateWithoutUserInput> | ShoppingSessionCreateWithoutUserInput[] | ShoppingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingSessionCreateOrConnectWithoutUserInput | ShoppingSessionCreateOrConnectWithoutUserInput[]
    createMany?: ShoppingSessionCreateManyUserInputEnvelope
    connect?: ShoppingSessionWhereUniqueInput | ShoppingSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserPreferencesUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserAllergyUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAllergyCreateWithoutUserInput, UserAllergyUncheckedCreateWithoutUserInput> | UserAllergyCreateWithoutUserInput[] | UserAllergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAllergyCreateOrConnectWithoutUserInput | UserAllergyCreateOrConnectWithoutUserInput[]
    upsert?: UserAllergyUpsertWithWhereUniqueWithoutUserInput | UserAllergyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAllergyCreateManyUserInputEnvelope
    set?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    disconnect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    delete?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    connect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    update?: UserAllergyUpdateWithWhereUniqueWithoutUserInput | UserAllergyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAllergyUpdateManyWithWhereWithoutUserInput | UserAllergyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAllergyScalarWhereInput | UserAllergyScalarWhereInput[]
  }

  export type FridgeItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<FridgeItemCreateWithoutUserInput, FridgeItemUncheckedCreateWithoutUserInput> | FridgeItemCreateWithoutUserInput[] | FridgeItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FridgeItemCreateOrConnectWithoutUserInput | FridgeItemCreateOrConnectWithoutUserInput[]
    upsert?: FridgeItemUpsertWithWhereUniqueWithoutUserInput | FridgeItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FridgeItemCreateManyUserInputEnvelope
    set?: FridgeItemWhereUniqueInput | FridgeItemWhereUniqueInput[]
    disconnect?: FridgeItemWhereUniqueInput | FridgeItemWhereUniqueInput[]
    delete?: FridgeItemWhereUniqueInput | FridgeItemWhereUniqueInput[]
    connect?: FridgeItemWhereUniqueInput | FridgeItemWhereUniqueInput[]
    update?: FridgeItemUpdateWithWhereUniqueWithoutUserInput | FridgeItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FridgeItemUpdateManyWithWhereWithoutUserInput | FridgeItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FridgeItemScalarWhereInput | FridgeItemScalarWhereInput[]
  }

  export type UserFavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput> | UserFavoriteCreateWithoutUserInput[] | UserFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutUserInput | UserFavoriteCreateOrConnectWithoutUserInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutUserInput | UserFavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavoriteCreateManyUserInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutUserInput | UserFavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutUserInput | UserFavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type ShoppingSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShoppingSessionCreateWithoutUserInput, ShoppingSessionUncheckedCreateWithoutUserInput> | ShoppingSessionCreateWithoutUserInput[] | ShoppingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingSessionCreateOrConnectWithoutUserInput | ShoppingSessionCreateOrConnectWithoutUserInput[]
    upsert?: ShoppingSessionUpsertWithWhereUniqueWithoutUserInput | ShoppingSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShoppingSessionCreateManyUserInputEnvelope
    set?: ShoppingSessionWhereUniqueInput | ShoppingSessionWhereUniqueInput[]
    disconnect?: ShoppingSessionWhereUniqueInput | ShoppingSessionWhereUniqueInput[]
    delete?: ShoppingSessionWhereUniqueInput | ShoppingSessionWhereUniqueInput[]
    connect?: ShoppingSessionWhereUniqueInput | ShoppingSessionWhereUniqueInput[]
    update?: ShoppingSessionUpdateWithWhereUniqueWithoutUserInput | ShoppingSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShoppingSessionUpdateManyWithWhereWithoutUserInput | ShoppingSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShoppingSessionScalarWhereInput | ShoppingSessionScalarWhereInput[]
  }

  export type UserPreferencesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserAllergyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAllergyCreateWithoutUserInput, UserAllergyUncheckedCreateWithoutUserInput> | UserAllergyCreateWithoutUserInput[] | UserAllergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAllergyCreateOrConnectWithoutUserInput | UserAllergyCreateOrConnectWithoutUserInput[]
    upsert?: UserAllergyUpsertWithWhereUniqueWithoutUserInput | UserAllergyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAllergyCreateManyUserInputEnvelope
    set?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    disconnect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    delete?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    connect?: UserAllergyWhereUniqueInput | UserAllergyWhereUniqueInput[]
    update?: UserAllergyUpdateWithWhereUniqueWithoutUserInput | UserAllergyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAllergyUpdateManyWithWhereWithoutUserInput | UserAllergyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAllergyScalarWhereInput | UserAllergyScalarWhereInput[]
  }

  export type FridgeItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FridgeItemCreateWithoutUserInput, FridgeItemUncheckedCreateWithoutUserInput> | FridgeItemCreateWithoutUserInput[] | FridgeItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FridgeItemCreateOrConnectWithoutUserInput | FridgeItemCreateOrConnectWithoutUserInput[]
    upsert?: FridgeItemUpsertWithWhereUniqueWithoutUserInput | FridgeItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FridgeItemCreateManyUserInputEnvelope
    set?: FridgeItemWhereUniqueInput | FridgeItemWhereUniqueInput[]
    disconnect?: FridgeItemWhereUniqueInput | FridgeItemWhereUniqueInput[]
    delete?: FridgeItemWhereUniqueInput | FridgeItemWhereUniqueInput[]
    connect?: FridgeItemWhereUniqueInput | FridgeItemWhereUniqueInput[]
    update?: FridgeItemUpdateWithWhereUniqueWithoutUserInput | FridgeItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FridgeItemUpdateManyWithWhereWithoutUserInput | FridgeItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FridgeItemScalarWhereInput | FridgeItemScalarWhereInput[]
  }

  export type UserFavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput> | UserFavoriteCreateWithoutUserInput[] | UserFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutUserInput | UserFavoriteCreateOrConnectWithoutUserInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutUserInput | UserFavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavoriteCreateManyUserInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutUserInput | UserFavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutUserInput | UserFavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type ShoppingSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShoppingSessionCreateWithoutUserInput, ShoppingSessionUncheckedCreateWithoutUserInput> | ShoppingSessionCreateWithoutUserInput[] | ShoppingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingSessionCreateOrConnectWithoutUserInput | ShoppingSessionCreateOrConnectWithoutUserInput[]
    upsert?: ShoppingSessionUpsertWithWhereUniqueWithoutUserInput | ShoppingSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShoppingSessionCreateManyUserInputEnvelope
    set?: ShoppingSessionWhereUniqueInput | ShoppingSessionWhereUniqueInput[]
    disconnect?: ShoppingSessionWhereUniqueInput | ShoppingSessionWhereUniqueInput[]
    delete?: ShoppingSessionWhereUniqueInput | ShoppingSessionWhereUniqueInput[]
    connect?: ShoppingSessionWhereUniqueInput | ShoppingSessionWhereUniqueInput[]
    update?: ShoppingSessionUpdateWithWhereUniqueWithoutUserInput | ShoppingSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShoppingSessionUpdateManyWithWhereWithoutUserInput | ShoppingSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShoppingSessionScalarWhereInput | ShoppingSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserCreateNestedOneWithoutAllergiesInput = {
    create?: XOR<UserCreateWithoutAllergiesInput, UserUncheckedCreateWithoutAllergiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAllergiesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAllergiesNestedInput = {
    create?: XOR<UserCreateWithoutAllergiesInput, UserUncheckedCreateWithoutAllergiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAllergiesInput
    upsert?: UserUpsertWithoutAllergiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAllergiesInput, UserUpdateWithoutAllergiesInput>, UserUncheckedUpdateWithoutAllergiesInput>
  }

  export type UserCreateNestedOneWithoutFridgeItemsInput = {
    create?: XOR<UserCreateWithoutFridgeItemsInput, UserUncheckedCreateWithoutFridgeItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFridgeItemsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutFridgeItemsNestedInput = {
    create?: XOR<UserCreateWithoutFridgeItemsInput, UserUncheckedCreateWithoutFridgeItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFridgeItemsInput
    upsert?: UserUpsertWithoutFridgeItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFridgeItemsInput, UserUpdateWithoutFridgeItemsInput>, UserUncheckedUpdateWithoutFridgeItemsInput>
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserCreateNestedOneWithoutShoppingHistoryInput = {
    create?: XOR<UserCreateWithoutShoppingHistoryInput, UserUncheckedCreateWithoutShoppingHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutShoppingHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type SessionRecipeCreateNestedManyWithoutShoppingSessionInput = {
    create?: XOR<SessionRecipeCreateWithoutShoppingSessionInput, SessionRecipeUncheckedCreateWithoutShoppingSessionInput> | SessionRecipeCreateWithoutShoppingSessionInput[] | SessionRecipeUncheckedCreateWithoutShoppingSessionInput[]
    connectOrCreate?: SessionRecipeCreateOrConnectWithoutShoppingSessionInput | SessionRecipeCreateOrConnectWithoutShoppingSessionInput[]
    createMany?: SessionRecipeCreateManyShoppingSessionInputEnvelope
    connect?: SessionRecipeWhereUniqueInput | SessionRecipeWhereUniqueInput[]
  }

  export type ShoppingListItemCreateNestedManyWithoutShoppingSessionInput = {
    create?: XOR<ShoppingListItemCreateWithoutShoppingSessionInput, ShoppingListItemUncheckedCreateWithoutShoppingSessionInput> | ShoppingListItemCreateWithoutShoppingSessionInput[] | ShoppingListItemUncheckedCreateWithoutShoppingSessionInput[]
    connectOrCreate?: ShoppingListItemCreateOrConnectWithoutShoppingSessionInput | ShoppingListItemCreateOrConnectWithoutShoppingSessionInput[]
    createMany?: ShoppingListItemCreateManyShoppingSessionInputEnvelope
    connect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
  }

  export type SessionRecipeUncheckedCreateNestedManyWithoutShoppingSessionInput = {
    create?: XOR<SessionRecipeCreateWithoutShoppingSessionInput, SessionRecipeUncheckedCreateWithoutShoppingSessionInput> | SessionRecipeCreateWithoutShoppingSessionInput[] | SessionRecipeUncheckedCreateWithoutShoppingSessionInput[]
    connectOrCreate?: SessionRecipeCreateOrConnectWithoutShoppingSessionInput | SessionRecipeCreateOrConnectWithoutShoppingSessionInput[]
    createMany?: SessionRecipeCreateManyShoppingSessionInputEnvelope
    connect?: SessionRecipeWhereUniqueInput | SessionRecipeWhereUniqueInput[]
  }

  export type ShoppingListItemUncheckedCreateNestedManyWithoutShoppingSessionInput = {
    create?: XOR<ShoppingListItemCreateWithoutShoppingSessionInput, ShoppingListItemUncheckedCreateWithoutShoppingSessionInput> | ShoppingListItemCreateWithoutShoppingSessionInput[] | ShoppingListItemUncheckedCreateWithoutShoppingSessionInput[]
    connectOrCreate?: ShoppingListItemCreateOrConnectWithoutShoppingSessionInput | ShoppingListItemCreateOrConnectWithoutShoppingSessionInput[]
    createMany?: ShoppingListItemCreateManyShoppingSessionInputEnvelope
    connect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutShoppingHistoryNestedInput = {
    create?: XOR<UserCreateWithoutShoppingHistoryInput, UserUncheckedCreateWithoutShoppingHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutShoppingHistoryInput
    upsert?: UserUpsertWithoutShoppingHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShoppingHistoryInput, UserUpdateWithoutShoppingHistoryInput>, UserUncheckedUpdateWithoutShoppingHistoryInput>
  }

  export type SessionRecipeUpdateManyWithoutShoppingSessionNestedInput = {
    create?: XOR<SessionRecipeCreateWithoutShoppingSessionInput, SessionRecipeUncheckedCreateWithoutShoppingSessionInput> | SessionRecipeCreateWithoutShoppingSessionInput[] | SessionRecipeUncheckedCreateWithoutShoppingSessionInput[]
    connectOrCreate?: SessionRecipeCreateOrConnectWithoutShoppingSessionInput | SessionRecipeCreateOrConnectWithoutShoppingSessionInput[]
    upsert?: SessionRecipeUpsertWithWhereUniqueWithoutShoppingSessionInput | SessionRecipeUpsertWithWhereUniqueWithoutShoppingSessionInput[]
    createMany?: SessionRecipeCreateManyShoppingSessionInputEnvelope
    set?: SessionRecipeWhereUniqueInput | SessionRecipeWhereUniqueInput[]
    disconnect?: SessionRecipeWhereUniqueInput | SessionRecipeWhereUniqueInput[]
    delete?: SessionRecipeWhereUniqueInput | SessionRecipeWhereUniqueInput[]
    connect?: SessionRecipeWhereUniqueInput | SessionRecipeWhereUniqueInput[]
    update?: SessionRecipeUpdateWithWhereUniqueWithoutShoppingSessionInput | SessionRecipeUpdateWithWhereUniqueWithoutShoppingSessionInput[]
    updateMany?: SessionRecipeUpdateManyWithWhereWithoutShoppingSessionInput | SessionRecipeUpdateManyWithWhereWithoutShoppingSessionInput[]
    deleteMany?: SessionRecipeScalarWhereInput | SessionRecipeScalarWhereInput[]
  }

  export type ShoppingListItemUpdateManyWithoutShoppingSessionNestedInput = {
    create?: XOR<ShoppingListItemCreateWithoutShoppingSessionInput, ShoppingListItemUncheckedCreateWithoutShoppingSessionInput> | ShoppingListItemCreateWithoutShoppingSessionInput[] | ShoppingListItemUncheckedCreateWithoutShoppingSessionInput[]
    connectOrCreate?: ShoppingListItemCreateOrConnectWithoutShoppingSessionInput | ShoppingListItemCreateOrConnectWithoutShoppingSessionInput[]
    upsert?: ShoppingListItemUpsertWithWhereUniqueWithoutShoppingSessionInput | ShoppingListItemUpsertWithWhereUniqueWithoutShoppingSessionInput[]
    createMany?: ShoppingListItemCreateManyShoppingSessionInputEnvelope
    set?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    disconnect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    delete?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    connect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    update?: ShoppingListItemUpdateWithWhereUniqueWithoutShoppingSessionInput | ShoppingListItemUpdateWithWhereUniqueWithoutShoppingSessionInput[]
    updateMany?: ShoppingListItemUpdateManyWithWhereWithoutShoppingSessionInput | ShoppingListItemUpdateManyWithWhereWithoutShoppingSessionInput[]
    deleteMany?: ShoppingListItemScalarWhereInput | ShoppingListItemScalarWhereInput[]
  }

  export type SessionRecipeUncheckedUpdateManyWithoutShoppingSessionNestedInput = {
    create?: XOR<SessionRecipeCreateWithoutShoppingSessionInput, SessionRecipeUncheckedCreateWithoutShoppingSessionInput> | SessionRecipeCreateWithoutShoppingSessionInput[] | SessionRecipeUncheckedCreateWithoutShoppingSessionInput[]
    connectOrCreate?: SessionRecipeCreateOrConnectWithoutShoppingSessionInput | SessionRecipeCreateOrConnectWithoutShoppingSessionInput[]
    upsert?: SessionRecipeUpsertWithWhereUniqueWithoutShoppingSessionInput | SessionRecipeUpsertWithWhereUniqueWithoutShoppingSessionInput[]
    createMany?: SessionRecipeCreateManyShoppingSessionInputEnvelope
    set?: SessionRecipeWhereUniqueInput | SessionRecipeWhereUniqueInput[]
    disconnect?: SessionRecipeWhereUniqueInput | SessionRecipeWhereUniqueInput[]
    delete?: SessionRecipeWhereUniqueInput | SessionRecipeWhereUniqueInput[]
    connect?: SessionRecipeWhereUniqueInput | SessionRecipeWhereUniqueInput[]
    update?: SessionRecipeUpdateWithWhereUniqueWithoutShoppingSessionInput | SessionRecipeUpdateWithWhereUniqueWithoutShoppingSessionInput[]
    updateMany?: SessionRecipeUpdateManyWithWhereWithoutShoppingSessionInput | SessionRecipeUpdateManyWithWhereWithoutShoppingSessionInput[]
    deleteMany?: SessionRecipeScalarWhereInput | SessionRecipeScalarWhereInput[]
  }

  export type ShoppingListItemUncheckedUpdateManyWithoutShoppingSessionNestedInput = {
    create?: XOR<ShoppingListItemCreateWithoutShoppingSessionInput, ShoppingListItemUncheckedCreateWithoutShoppingSessionInput> | ShoppingListItemCreateWithoutShoppingSessionInput[] | ShoppingListItemUncheckedCreateWithoutShoppingSessionInput[]
    connectOrCreate?: ShoppingListItemCreateOrConnectWithoutShoppingSessionInput | ShoppingListItemCreateOrConnectWithoutShoppingSessionInput[]
    upsert?: ShoppingListItemUpsertWithWhereUniqueWithoutShoppingSessionInput | ShoppingListItemUpsertWithWhereUniqueWithoutShoppingSessionInput[]
    createMany?: ShoppingListItemCreateManyShoppingSessionInputEnvelope
    set?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    disconnect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    delete?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    connect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    update?: ShoppingListItemUpdateWithWhereUniqueWithoutShoppingSessionInput | ShoppingListItemUpdateWithWhereUniqueWithoutShoppingSessionInput[]
    updateMany?: ShoppingListItemUpdateManyWithWhereWithoutShoppingSessionInput | ShoppingListItemUpdateManyWithWhereWithoutShoppingSessionInput[]
    deleteMany?: ShoppingListItemScalarWhereInput | ShoppingListItemScalarWhereInput[]
  }

  export type ShoppingSessionCreateNestedOneWithoutRecipesInput = {
    create?: XOR<ShoppingSessionCreateWithoutRecipesInput, ShoppingSessionUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: ShoppingSessionCreateOrConnectWithoutRecipesInput
    connect?: ShoppingSessionWhereUniqueInput
  }

  export type ShoppingSessionUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<ShoppingSessionCreateWithoutRecipesInput, ShoppingSessionUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: ShoppingSessionCreateOrConnectWithoutRecipesInput
    upsert?: ShoppingSessionUpsertWithoutRecipesInput
    connect?: ShoppingSessionWhereUniqueInput
    update?: XOR<XOR<ShoppingSessionUpdateToOneWithWhereWithoutRecipesInput, ShoppingSessionUpdateWithoutRecipesInput>, ShoppingSessionUncheckedUpdateWithoutRecipesInput>
  }

  export type ShoppingSessionCreateNestedOneWithoutShoppingListInput = {
    create?: XOR<ShoppingSessionCreateWithoutShoppingListInput, ShoppingSessionUncheckedCreateWithoutShoppingListInput>
    connectOrCreate?: ShoppingSessionCreateOrConnectWithoutShoppingListInput
    connect?: ShoppingSessionWhereUniqueInput
  }

  export type ShoppingSessionUpdateOneRequiredWithoutShoppingListNestedInput = {
    create?: XOR<ShoppingSessionCreateWithoutShoppingListInput, ShoppingSessionUncheckedCreateWithoutShoppingListInput>
    connectOrCreate?: ShoppingSessionCreateOrConnectWithoutShoppingListInput
    upsert?: ShoppingSessionUpsertWithoutShoppingListInput
    connect?: ShoppingSessionWhereUniqueInput
    update?: XOR<XOR<ShoppingSessionUpdateToOneWithWhereWithoutShoppingListInput, ShoppingSessionUpdateWithoutShoppingListInput>, ShoppingSessionUncheckedUpdateWithoutShoppingListInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserPreferencesCreateWithoutUserInput = {
    id?: string
    dietaryRestrictions?: string
    cuisinePreferences?: string
    nutritionFocus?: string | null
    maxCookTime?: number
    maxPrepTime?: number
    skillLevel?: string
    equipmentAvailable?: string
    preferredStores?: string
    maxStores?: number
    bulkBuyingOk?: boolean
    organicPreference?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesUncheckedCreateWithoutUserInput = {
    id?: string
    dietaryRestrictions?: string
    cuisinePreferences?: string
    nutritionFocus?: string | null
    maxCookTime?: number
    maxPrepTime?: number
    skillLevel?: string
    equipmentAvailable?: string
    preferredStores?: string
    maxStores?: number
    bulkBuyingOk?: boolean
    organicPreference?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesCreateOrConnectWithoutUserInput = {
    where: UserPreferencesWhereUniqueInput
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
  }

  export type UserAllergyCreateWithoutUserInput = {
    id?: string
    allergen: string
    severity: string
    createdAt?: Date | string
  }

  export type UserAllergyUncheckedCreateWithoutUserInput = {
    id?: string
    allergen: string
    severity: string
    createdAt?: Date | string
  }

  export type UserAllergyCreateOrConnectWithoutUserInput = {
    where: UserAllergyWhereUniqueInput
    create: XOR<UserAllergyCreateWithoutUserInput, UserAllergyUncheckedCreateWithoutUserInput>
  }

  export type UserAllergyCreateManyUserInputEnvelope = {
    data: UserAllergyCreateManyUserInput | UserAllergyCreateManyUserInput[]
  }

  export type FridgeItemCreateWithoutUserInput = {
    id?: string
    itemName: string
    brand?: string | null
    quantity: number
    unit: string
    expirationDate?: Date | string | null
    category?: string | null
    addedDate?: Date | string
    lastUpdated?: Date | string
  }

  export type FridgeItemUncheckedCreateWithoutUserInput = {
    id?: string
    itemName: string
    brand?: string | null
    quantity: number
    unit: string
    expirationDate?: Date | string | null
    category?: string | null
    addedDate?: Date | string
    lastUpdated?: Date | string
  }

  export type FridgeItemCreateOrConnectWithoutUserInput = {
    where: FridgeItemWhereUniqueInput
    create: XOR<FridgeItemCreateWithoutUserInput, FridgeItemUncheckedCreateWithoutUserInput>
  }

  export type FridgeItemCreateManyUserInputEnvelope = {
    data: FridgeItemCreateManyUserInput | FridgeItemCreateManyUserInput[]
  }

  export type UserFavoriteCreateWithoutUserInput = {
    id?: string
    type: string
    itemId: string
    itemName: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type UserFavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    itemId: string
    itemName: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type UserFavoriteCreateOrConnectWithoutUserInput = {
    where: UserFavoriteWhereUniqueInput
    create: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput>
  }

  export type UserFavoriteCreateManyUserInputEnvelope = {
    data: UserFavoriteCreateManyUserInput | UserFavoriteCreateManyUserInput[]
  }

  export type ShoppingSessionCreateWithoutUserInput = {
    id?: string
    sessionDate?: Date | string
    totalBudget?: number | null
    totalSpent?: number | null
    totalSavings?: number | null
    notes?: string | null
    completed?: boolean
    recipes?: SessionRecipeCreateNestedManyWithoutShoppingSessionInput
    shoppingList?: ShoppingListItemCreateNestedManyWithoutShoppingSessionInput
  }

  export type ShoppingSessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionDate?: Date | string
    totalBudget?: number | null
    totalSpent?: number | null
    totalSavings?: number | null
    notes?: string | null
    completed?: boolean
    recipes?: SessionRecipeUncheckedCreateNestedManyWithoutShoppingSessionInput
    shoppingList?: ShoppingListItemUncheckedCreateNestedManyWithoutShoppingSessionInput
  }

  export type ShoppingSessionCreateOrConnectWithoutUserInput = {
    where: ShoppingSessionWhereUniqueInput
    create: XOR<ShoppingSessionCreateWithoutUserInput, ShoppingSessionUncheckedCreateWithoutUserInput>
  }

  export type ShoppingSessionCreateManyUserInputEnvelope = {
    data: ShoppingSessionCreateManyUserInput | ShoppingSessionCreateManyUserInput[]
  }

  export type UserPreferencesUpsertWithoutUserInput = {
    update: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    where?: UserPreferencesWhereInput
  }

  export type UserPreferencesUpdateToOneWithWhereWithoutUserInput = {
    where?: UserPreferencesWhereInput
    data: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferencesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dietaryRestrictions?: StringFieldUpdateOperationsInput | string
    cuisinePreferences?: StringFieldUpdateOperationsInput | string
    nutritionFocus?: NullableStringFieldUpdateOperationsInput | string | null
    maxCookTime?: IntFieldUpdateOperationsInput | number
    maxPrepTime?: IntFieldUpdateOperationsInput | number
    skillLevel?: StringFieldUpdateOperationsInput | string
    equipmentAvailable?: StringFieldUpdateOperationsInput | string
    preferredStores?: StringFieldUpdateOperationsInput | string
    maxStores?: IntFieldUpdateOperationsInput | number
    bulkBuyingOk?: BoolFieldUpdateOperationsInput | boolean
    organicPreference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dietaryRestrictions?: StringFieldUpdateOperationsInput | string
    cuisinePreferences?: StringFieldUpdateOperationsInput | string
    nutritionFocus?: NullableStringFieldUpdateOperationsInput | string | null
    maxCookTime?: IntFieldUpdateOperationsInput | number
    maxPrepTime?: IntFieldUpdateOperationsInput | number
    skillLevel?: StringFieldUpdateOperationsInput | string
    equipmentAvailable?: StringFieldUpdateOperationsInput | string
    preferredStores?: StringFieldUpdateOperationsInput | string
    maxStores?: IntFieldUpdateOperationsInput | number
    bulkBuyingOk?: BoolFieldUpdateOperationsInput | boolean
    organicPreference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAllergyUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAllergyWhereUniqueInput
    update: XOR<UserAllergyUpdateWithoutUserInput, UserAllergyUncheckedUpdateWithoutUserInput>
    create: XOR<UserAllergyCreateWithoutUserInput, UserAllergyUncheckedCreateWithoutUserInput>
  }

  export type UserAllergyUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAllergyWhereUniqueInput
    data: XOR<UserAllergyUpdateWithoutUserInput, UserAllergyUncheckedUpdateWithoutUserInput>
  }

  export type UserAllergyUpdateManyWithWhereWithoutUserInput = {
    where: UserAllergyScalarWhereInput
    data: XOR<UserAllergyUpdateManyMutationInput, UserAllergyUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAllergyScalarWhereInput = {
    AND?: UserAllergyScalarWhereInput | UserAllergyScalarWhereInput[]
    OR?: UserAllergyScalarWhereInput[]
    NOT?: UserAllergyScalarWhereInput | UserAllergyScalarWhereInput[]
    id?: StringFilter<"UserAllergy"> | string
    userId?: StringFilter<"UserAllergy"> | string
    allergen?: StringFilter<"UserAllergy"> | string
    severity?: StringFilter<"UserAllergy"> | string
    createdAt?: DateTimeFilter<"UserAllergy"> | Date | string
  }

  export type FridgeItemUpsertWithWhereUniqueWithoutUserInput = {
    where: FridgeItemWhereUniqueInput
    update: XOR<FridgeItemUpdateWithoutUserInput, FridgeItemUncheckedUpdateWithoutUserInput>
    create: XOR<FridgeItemCreateWithoutUserInput, FridgeItemUncheckedCreateWithoutUserInput>
  }

  export type FridgeItemUpdateWithWhereUniqueWithoutUserInput = {
    where: FridgeItemWhereUniqueInput
    data: XOR<FridgeItemUpdateWithoutUserInput, FridgeItemUncheckedUpdateWithoutUserInput>
  }

  export type FridgeItemUpdateManyWithWhereWithoutUserInput = {
    where: FridgeItemScalarWhereInput
    data: XOR<FridgeItemUpdateManyMutationInput, FridgeItemUncheckedUpdateManyWithoutUserInput>
  }

  export type FridgeItemScalarWhereInput = {
    AND?: FridgeItemScalarWhereInput | FridgeItemScalarWhereInput[]
    OR?: FridgeItemScalarWhereInput[]
    NOT?: FridgeItemScalarWhereInput | FridgeItemScalarWhereInput[]
    id?: StringFilter<"FridgeItem"> | string
    userId?: StringFilter<"FridgeItem"> | string
    itemName?: StringFilter<"FridgeItem"> | string
    brand?: StringNullableFilter<"FridgeItem"> | string | null
    quantity?: FloatFilter<"FridgeItem"> | number
    unit?: StringFilter<"FridgeItem"> | string
    expirationDate?: DateTimeNullableFilter<"FridgeItem"> | Date | string | null
    category?: StringNullableFilter<"FridgeItem"> | string | null
    addedDate?: DateTimeFilter<"FridgeItem"> | Date | string
    lastUpdated?: DateTimeFilter<"FridgeItem"> | Date | string
  }

  export type UserFavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFavoriteWhereUniqueInput
    update: XOR<UserFavoriteUpdateWithoutUserInput, UserFavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput>
  }

  export type UserFavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFavoriteWhereUniqueInput
    data: XOR<UserFavoriteUpdateWithoutUserInput, UserFavoriteUncheckedUpdateWithoutUserInput>
  }

  export type UserFavoriteUpdateManyWithWhereWithoutUserInput = {
    where: UserFavoriteScalarWhereInput
    data: XOR<UserFavoriteUpdateManyMutationInput, UserFavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFavoriteScalarWhereInput = {
    AND?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
    OR?: UserFavoriteScalarWhereInput[]
    NOT?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
    id?: StringFilter<"UserFavorite"> | string
    userId?: StringFilter<"UserFavorite"> | string
    type?: StringFilter<"UserFavorite"> | string
    itemId?: StringFilter<"UserFavorite"> | string
    itemName?: StringFilter<"UserFavorite"> | string
    notes?: StringNullableFilter<"UserFavorite"> | string | null
    createdAt?: DateTimeFilter<"UserFavorite"> | Date | string
  }

  export type ShoppingSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: ShoppingSessionWhereUniqueInput
    update: XOR<ShoppingSessionUpdateWithoutUserInput, ShoppingSessionUncheckedUpdateWithoutUserInput>
    create: XOR<ShoppingSessionCreateWithoutUserInput, ShoppingSessionUncheckedCreateWithoutUserInput>
  }

  export type ShoppingSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: ShoppingSessionWhereUniqueInput
    data: XOR<ShoppingSessionUpdateWithoutUserInput, ShoppingSessionUncheckedUpdateWithoutUserInput>
  }

  export type ShoppingSessionUpdateManyWithWhereWithoutUserInput = {
    where: ShoppingSessionScalarWhereInput
    data: XOR<ShoppingSessionUpdateManyMutationInput, ShoppingSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type ShoppingSessionScalarWhereInput = {
    AND?: ShoppingSessionScalarWhereInput | ShoppingSessionScalarWhereInput[]
    OR?: ShoppingSessionScalarWhereInput[]
    NOT?: ShoppingSessionScalarWhereInput | ShoppingSessionScalarWhereInput[]
    id?: StringFilter<"ShoppingSession"> | string
    userId?: StringFilter<"ShoppingSession"> | string
    sessionDate?: DateTimeFilter<"ShoppingSession"> | Date | string
    totalBudget?: FloatNullableFilter<"ShoppingSession"> | number | null
    totalSpent?: FloatNullableFilter<"ShoppingSession"> | number | null
    totalSavings?: FloatNullableFilter<"ShoppingSession"> | number | null
    notes?: StringNullableFilter<"ShoppingSession"> | string | null
    completed?: BoolFilter<"ShoppingSession"> | boolean
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    zipCode?: string | null
    familySize?: number
    weeklyBudget?: number | null
    allergies?: UserAllergyCreateNestedManyWithoutUserInput
    fridgeItems?: FridgeItemCreateNestedManyWithoutUserInput
    favorites?: UserFavoriteCreateNestedManyWithoutUserInput
    shoppingHistory?: ShoppingSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    zipCode?: string | null
    familySize?: number
    weeklyBudget?: number | null
    allergies?: UserAllergyUncheckedCreateNestedManyWithoutUserInput
    fridgeItems?: FridgeItemUncheckedCreateNestedManyWithoutUserInput
    favorites?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    shoppingHistory?: ShoppingSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySize?: IntFieldUpdateOperationsInput | number
    weeklyBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    allergies?: UserAllergyUpdateManyWithoutUserNestedInput
    fridgeItems?: FridgeItemUpdateManyWithoutUserNestedInput
    favorites?: UserFavoriteUpdateManyWithoutUserNestedInput
    shoppingHistory?: ShoppingSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySize?: IntFieldUpdateOperationsInput | number
    weeklyBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    allergies?: UserAllergyUncheckedUpdateManyWithoutUserNestedInput
    fridgeItems?: FridgeItemUncheckedUpdateManyWithoutUserNestedInput
    favorites?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    shoppingHistory?: ShoppingSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAllergiesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    zipCode?: string | null
    familySize?: number
    weeklyBudget?: number | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    fridgeItems?: FridgeItemCreateNestedManyWithoutUserInput
    favorites?: UserFavoriteCreateNestedManyWithoutUserInput
    shoppingHistory?: ShoppingSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAllergiesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    zipCode?: string | null
    familySize?: number
    weeklyBudget?: number | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    fridgeItems?: FridgeItemUncheckedCreateNestedManyWithoutUserInput
    favorites?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    shoppingHistory?: ShoppingSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAllergiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAllergiesInput, UserUncheckedCreateWithoutAllergiesInput>
  }

  export type UserUpsertWithoutAllergiesInput = {
    update: XOR<UserUpdateWithoutAllergiesInput, UserUncheckedUpdateWithoutAllergiesInput>
    create: XOR<UserCreateWithoutAllergiesInput, UserUncheckedCreateWithoutAllergiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAllergiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAllergiesInput, UserUncheckedUpdateWithoutAllergiesInput>
  }

  export type UserUpdateWithoutAllergiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySize?: IntFieldUpdateOperationsInput | number
    weeklyBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    fridgeItems?: FridgeItemUpdateManyWithoutUserNestedInput
    favorites?: UserFavoriteUpdateManyWithoutUserNestedInput
    shoppingHistory?: ShoppingSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAllergiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySize?: IntFieldUpdateOperationsInput | number
    weeklyBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    fridgeItems?: FridgeItemUncheckedUpdateManyWithoutUserNestedInput
    favorites?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    shoppingHistory?: ShoppingSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFridgeItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    zipCode?: string | null
    familySize?: number
    weeklyBudget?: number | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    allergies?: UserAllergyCreateNestedManyWithoutUserInput
    favorites?: UserFavoriteCreateNestedManyWithoutUserInput
    shoppingHistory?: ShoppingSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFridgeItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    zipCode?: string | null
    familySize?: number
    weeklyBudget?: number | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    allergies?: UserAllergyUncheckedCreateNestedManyWithoutUserInput
    favorites?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    shoppingHistory?: ShoppingSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFridgeItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFridgeItemsInput, UserUncheckedCreateWithoutFridgeItemsInput>
  }

  export type UserUpsertWithoutFridgeItemsInput = {
    update: XOR<UserUpdateWithoutFridgeItemsInput, UserUncheckedUpdateWithoutFridgeItemsInput>
    create: XOR<UserCreateWithoutFridgeItemsInput, UserUncheckedCreateWithoutFridgeItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFridgeItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFridgeItemsInput, UserUncheckedUpdateWithoutFridgeItemsInput>
  }

  export type UserUpdateWithoutFridgeItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySize?: IntFieldUpdateOperationsInput | number
    weeklyBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    allergies?: UserAllergyUpdateManyWithoutUserNestedInput
    favorites?: UserFavoriteUpdateManyWithoutUserNestedInput
    shoppingHistory?: ShoppingSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFridgeItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySize?: IntFieldUpdateOperationsInput | number
    weeklyBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    allergies?: UserAllergyUncheckedUpdateManyWithoutUserNestedInput
    favorites?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    shoppingHistory?: ShoppingSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFavoritesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    zipCode?: string | null
    familySize?: number
    weeklyBudget?: number | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    allergies?: UserAllergyCreateNestedManyWithoutUserInput
    fridgeItems?: FridgeItemCreateNestedManyWithoutUserInput
    shoppingHistory?: ShoppingSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    zipCode?: string | null
    familySize?: number
    weeklyBudget?: number | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    allergies?: UserAllergyUncheckedCreateNestedManyWithoutUserInput
    fridgeItems?: FridgeItemUncheckedCreateNestedManyWithoutUserInput
    shoppingHistory?: ShoppingSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySize?: IntFieldUpdateOperationsInput | number
    weeklyBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    allergies?: UserAllergyUpdateManyWithoutUserNestedInput
    fridgeItems?: FridgeItemUpdateManyWithoutUserNestedInput
    shoppingHistory?: ShoppingSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySize?: IntFieldUpdateOperationsInput | number
    weeklyBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    allergies?: UserAllergyUncheckedUpdateManyWithoutUserNestedInput
    fridgeItems?: FridgeItemUncheckedUpdateManyWithoutUserNestedInput
    shoppingHistory?: ShoppingSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutShoppingHistoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    zipCode?: string | null
    familySize?: number
    weeklyBudget?: number | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    allergies?: UserAllergyCreateNestedManyWithoutUserInput
    fridgeItems?: FridgeItemCreateNestedManyWithoutUserInput
    favorites?: UserFavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShoppingHistoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    zipCode?: string | null
    familySize?: number
    weeklyBudget?: number | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    allergies?: UserAllergyUncheckedCreateNestedManyWithoutUserInput
    fridgeItems?: FridgeItemUncheckedCreateNestedManyWithoutUserInput
    favorites?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShoppingHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShoppingHistoryInput, UserUncheckedCreateWithoutShoppingHistoryInput>
  }

  export type SessionRecipeCreateWithoutShoppingSessionInput = {
    id?: string
    recipeName: string
    recipeId?: string | null
    servings: number
    costPerServing?: number | null
    selectedDate?: Date | string | null
  }

  export type SessionRecipeUncheckedCreateWithoutShoppingSessionInput = {
    id?: string
    recipeName: string
    recipeId?: string | null
    servings: number
    costPerServing?: number | null
    selectedDate?: Date | string | null
  }

  export type SessionRecipeCreateOrConnectWithoutShoppingSessionInput = {
    where: SessionRecipeWhereUniqueInput
    create: XOR<SessionRecipeCreateWithoutShoppingSessionInput, SessionRecipeUncheckedCreateWithoutShoppingSessionInput>
  }

  export type SessionRecipeCreateManyShoppingSessionInputEnvelope = {
    data: SessionRecipeCreateManyShoppingSessionInput | SessionRecipeCreateManyShoppingSessionInput[]
  }

  export type ShoppingListItemCreateWithoutShoppingSessionInput = {
    id?: string
    itemName: string
    quantity: number
    unit: string
    estimatedCost?: number | null
    actualCost?: number | null
    store?: string | null
    brand?: string | null
    purchased?: boolean
    substituted?: boolean
    substitutionNotes?: string | null
  }

  export type ShoppingListItemUncheckedCreateWithoutShoppingSessionInput = {
    id?: string
    itemName: string
    quantity: number
    unit: string
    estimatedCost?: number | null
    actualCost?: number | null
    store?: string | null
    brand?: string | null
    purchased?: boolean
    substituted?: boolean
    substitutionNotes?: string | null
  }

  export type ShoppingListItemCreateOrConnectWithoutShoppingSessionInput = {
    where: ShoppingListItemWhereUniqueInput
    create: XOR<ShoppingListItemCreateWithoutShoppingSessionInput, ShoppingListItemUncheckedCreateWithoutShoppingSessionInput>
  }

  export type ShoppingListItemCreateManyShoppingSessionInputEnvelope = {
    data: ShoppingListItemCreateManyShoppingSessionInput | ShoppingListItemCreateManyShoppingSessionInput[]
  }

  export type UserUpsertWithoutShoppingHistoryInput = {
    update: XOR<UserUpdateWithoutShoppingHistoryInput, UserUncheckedUpdateWithoutShoppingHistoryInput>
    create: XOR<UserCreateWithoutShoppingHistoryInput, UserUncheckedCreateWithoutShoppingHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShoppingHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShoppingHistoryInput, UserUncheckedUpdateWithoutShoppingHistoryInput>
  }

  export type UserUpdateWithoutShoppingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySize?: IntFieldUpdateOperationsInput | number
    weeklyBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    allergies?: UserAllergyUpdateManyWithoutUserNestedInput
    fridgeItems?: FridgeItemUpdateManyWithoutUserNestedInput
    favorites?: UserFavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShoppingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySize?: IntFieldUpdateOperationsInput | number
    weeklyBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    allergies?: UserAllergyUncheckedUpdateManyWithoutUserNestedInput
    fridgeItems?: FridgeItemUncheckedUpdateManyWithoutUserNestedInput
    favorites?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionRecipeUpsertWithWhereUniqueWithoutShoppingSessionInput = {
    where: SessionRecipeWhereUniqueInput
    update: XOR<SessionRecipeUpdateWithoutShoppingSessionInput, SessionRecipeUncheckedUpdateWithoutShoppingSessionInput>
    create: XOR<SessionRecipeCreateWithoutShoppingSessionInput, SessionRecipeUncheckedCreateWithoutShoppingSessionInput>
  }

  export type SessionRecipeUpdateWithWhereUniqueWithoutShoppingSessionInput = {
    where: SessionRecipeWhereUniqueInput
    data: XOR<SessionRecipeUpdateWithoutShoppingSessionInput, SessionRecipeUncheckedUpdateWithoutShoppingSessionInput>
  }

  export type SessionRecipeUpdateManyWithWhereWithoutShoppingSessionInput = {
    where: SessionRecipeScalarWhereInput
    data: XOR<SessionRecipeUpdateManyMutationInput, SessionRecipeUncheckedUpdateManyWithoutShoppingSessionInput>
  }

  export type SessionRecipeScalarWhereInput = {
    AND?: SessionRecipeScalarWhereInput | SessionRecipeScalarWhereInput[]
    OR?: SessionRecipeScalarWhereInput[]
    NOT?: SessionRecipeScalarWhereInput | SessionRecipeScalarWhereInput[]
    id?: StringFilter<"SessionRecipe"> | string
    shoppingSessionId?: StringFilter<"SessionRecipe"> | string
    recipeName?: StringFilter<"SessionRecipe"> | string
    recipeId?: StringNullableFilter<"SessionRecipe"> | string | null
    servings?: IntFilter<"SessionRecipe"> | number
    costPerServing?: FloatNullableFilter<"SessionRecipe"> | number | null
    selectedDate?: DateTimeNullableFilter<"SessionRecipe"> | Date | string | null
  }

  export type ShoppingListItemUpsertWithWhereUniqueWithoutShoppingSessionInput = {
    where: ShoppingListItemWhereUniqueInput
    update: XOR<ShoppingListItemUpdateWithoutShoppingSessionInput, ShoppingListItemUncheckedUpdateWithoutShoppingSessionInput>
    create: XOR<ShoppingListItemCreateWithoutShoppingSessionInput, ShoppingListItemUncheckedCreateWithoutShoppingSessionInput>
  }

  export type ShoppingListItemUpdateWithWhereUniqueWithoutShoppingSessionInput = {
    where: ShoppingListItemWhereUniqueInput
    data: XOR<ShoppingListItemUpdateWithoutShoppingSessionInput, ShoppingListItemUncheckedUpdateWithoutShoppingSessionInput>
  }

  export type ShoppingListItemUpdateManyWithWhereWithoutShoppingSessionInput = {
    where: ShoppingListItemScalarWhereInput
    data: XOR<ShoppingListItemUpdateManyMutationInput, ShoppingListItemUncheckedUpdateManyWithoutShoppingSessionInput>
  }

  export type ShoppingListItemScalarWhereInput = {
    AND?: ShoppingListItemScalarWhereInput | ShoppingListItemScalarWhereInput[]
    OR?: ShoppingListItemScalarWhereInput[]
    NOT?: ShoppingListItemScalarWhereInput | ShoppingListItemScalarWhereInput[]
    id?: StringFilter<"ShoppingListItem"> | string
    shoppingSessionId?: StringFilter<"ShoppingListItem"> | string
    itemName?: StringFilter<"ShoppingListItem"> | string
    quantity?: FloatFilter<"ShoppingListItem"> | number
    unit?: StringFilter<"ShoppingListItem"> | string
    estimatedCost?: FloatNullableFilter<"ShoppingListItem"> | number | null
    actualCost?: FloatNullableFilter<"ShoppingListItem"> | number | null
    store?: StringNullableFilter<"ShoppingListItem"> | string | null
    brand?: StringNullableFilter<"ShoppingListItem"> | string | null
    purchased?: BoolFilter<"ShoppingListItem"> | boolean
    substituted?: BoolFilter<"ShoppingListItem"> | boolean
    substitutionNotes?: StringNullableFilter<"ShoppingListItem"> | string | null
  }

  export type ShoppingSessionCreateWithoutRecipesInput = {
    id?: string
    sessionDate?: Date | string
    totalBudget?: number | null
    totalSpent?: number | null
    totalSavings?: number | null
    notes?: string | null
    completed?: boolean
    user: UserCreateNestedOneWithoutShoppingHistoryInput
    shoppingList?: ShoppingListItemCreateNestedManyWithoutShoppingSessionInput
  }

  export type ShoppingSessionUncheckedCreateWithoutRecipesInput = {
    id?: string
    userId: string
    sessionDate?: Date | string
    totalBudget?: number | null
    totalSpent?: number | null
    totalSavings?: number | null
    notes?: string | null
    completed?: boolean
    shoppingList?: ShoppingListItemUncheckedCreateNestedManyWithoutShoppingSessionInput
  }

  export type ShoppingSessionCreateOrConnectWithoutRecipesInput = {
    where: ShoppingSessionWhereUniqueInput
    create: XOR<ShoppingSessionCreateWithoutRecipesInput, ShoppingSessionUncheckedCreateWithoutRecipesInput>
  }

  export type ShoppingSessionUpsertWithoutRecipesInput = {
    update: XOR<ShoppingSessionUpdateWithoutRecipesInput, ShoppingSessionUncheckedUpdateWithoutRecipesInput>
    create: XOR<ShoppingSessionCreateWithoutRecipesInput, ShoppingSessionUncheckedCreateWithoutRecipesInput>
    where?: ShoppingSessionWhereInput
  }

  export type ShoppingSessionUpdateToOneWithWhereWithoutRecipesInput = {
    where?: ShoppingSessionWhereInput
    data: XOR<ShoppingSessionUpdateWithoutRecipesInput, ShoppingSessionUncheckedUpdateWithoutRecipesInput>
  }

  export type ShoppingSessionUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutShoppingHistoryNestedInput
    shoppingList?: ShoppingListItemUpdateManyWithoutShoppingSessionNestedInput
  }

  export type ShoppingSessionUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    shoppingList?: ShoppingListItemUncheckedUpdateManyWithoutShoppingSessionNestedInput
  }

  export type ShoppingSessionCreateWithoutShoppingListInput = {
    id?: string
    sessionDate?: Date | string
    totalBudget?: number | null
    totalSpent?: number | null
    totalSavings?: number | null
    notes?: string | null
    completed?: boolean
    user: UserCreateNestedOneWithoutShoppingHistoryInput
    recipes?: SessionRecipeCreateNestedManyWithoutShoppingSessionInput
  }

  export type ShoppingSessionUncheckedCreateWithoutShoppingListInput = {
    id?: string
    userId: string
    sessionDate?: Date | string
    totalBudget?: number | null
    totalSpent?: number | null
    totalSavings?: number | null
    notes?: string | null
    completed?: boolean
    recipes?: SessionRecipeUncheckedCreateNestedManyWithoutShoppingSessionInput
  }

  export type ShoppingSessionCreateOrConnectWithoutShoppingListInput = {
    where: ShoppingSessionWhereUniqueInput
    create: XOR<ShoppingSessionCreateWithoutShoppingListInput, ShoppingSessionUncheckedCreateWithoutShoppingListInput>
  }

  export type ShoppingSessionUpsertWithoutShoppingListInput = {
    update: XOR<ShoppingSessionUpdateWithoutShoppingListInput, ShoppingSessionUncheckedUpdateWithoutShoppingListInput>
    create: XOR<ShoppingSessionCreateWithoutShoppingListInput, ShoppingSessionUncheckedCreateWithoutShoppingListInput>
    where?: ShoppingSessionWhereInput
  }

  export type ShoppingSessionUpdateToOneWithWhereWithoutShoppingListInput = {
    where?: ShoppingSessionWhereInput
    data: XOR<ShoppingSessionUpdateWithoutShoppingListInput, ShoppingSessionUncheckedUpdateWithoutShoppingListInput>
  }

  export type ShoppingSessionUpdateWithoutShoppingListInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutShoppingHistoryNestedInput
    recipes?: SessionRecipeUpdateManyWithoutShoppingSessionNestedInput
  }

  export type ShoppingSessionUncheckedUpdateWithoutShoppingListInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    recipes?: SessionRecipeUncheckedUpdateManyWithoutShoppingSessionNestedInput
  }

  export type UserAllergyCreateManyUserInput = {
    id?: string
    allergen: string
    severity: string
    createdAt?: Date | string
  }

  export type FridgeItemCreateManyUserInput = {
    id?: string
    itemName: string
    brand?: string | null
    quantity: number
    unit: string
    expirationDate?: Date | string | null
    category?: string | null
    addedDate?: Date | string
    lastUpdated?: Date | string
  }

  export type UserFavoriteCreateManyUserInput = {
    id?: string
    type: string
    itemId: string
    itemName: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type ShoppingSessionCreateManyUserInput = {
    id?: string
    sessionDate?: Date | string
    totalBudget?: number | null
    totalSpent?: number | null
    totalSavings?: number | null
    notes?: string | null
    completed?: boolean
  }

  export type UserAllergyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    allergen?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAllergyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    allergen?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAllergyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    allergen?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FridgeItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    addedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FridgeItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    addedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FridgeItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    addedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    recipes?: SessionRecipeUpdateManyWithoutShoppingSessionNestedInput
    shoppingList?: ShoppingListItemUpdateManyWithoutShoppingSessionNestedInput
  }

  export type ShoppingSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    recipes?: SessionRecipeUncheckedUpdateManyWithoutShoppingSessionNestedInput
    shoppingList?: ShoppingListItemUncheckedUpdateManyWithoutShoppingSessionNestedInput
  }

  export type ShoppingSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    totalSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionRecipeCreateManyShoppingSessionInput = {
    id?: string
    recipeName: string
    recipeId?: string | null
    servings: number
    costPerServing?: number | null
    selectedDate?: Date | string | null
  }

  export type ShoppingListItemCreateManyShoppingSessionInput = {
    id?: string
    itemName: string
    quantity: number
    unit: string
    estimatedCost?: number | null
    actualCost?: number | null
    store?: string | null
    brand?: string | null
    purchased?: boolean
    substituted?: boolean
    substitutionNotes?: string | null
  }

  export type SessionRecipeUpdateWithoutShoppingSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeName?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: IntFieldUpdateOperationsInput | number
    costPerServing?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionRecipeUncheckedUpdateWithoutShoppingSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeName?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: IntFieldUpdateOperationsInput | number
    costPerServing?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionRecipeUncheckedUpdateManyWithoutShoppingSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeName?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: IntFieldUpdateOperationsInput | number
    costPerServing?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShoppingListItemUpdateWithoutShoppingSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    actualCost?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    substituted?: BoolFieldUpdateOperationsInput | boolean
    substitutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShoppingListItemUncheckedUpdateWithoutShoppingSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    actualCost?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    substituted?: BoolFieldUpdateOperationsInput | boolean
    substitutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShoppingListItemUncheckedUpdateManyWithoutShoppingSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    actualCost?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    substituted?: BoolFieldUpdateOperationsInput | boolean
    substitutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}