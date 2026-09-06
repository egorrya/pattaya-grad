
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model LandingPage
 * 
 */
export type LandingPage = $Result.DefaultSelection<Prisma.$LandingPagePayload>
/**
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model LandingContent
 * 
 */
export type LandingContent = $Result.DefaultSelection<Prisma.$LandingContentPayload>
/**
 * Model QuizBotSettings
 * 
 */
export type QuizBotSettings = $Result.DefaultSelection<Prisma.$QuizBotSettingsPayload>
/**
 * Model QuizBotSession
 * 
 */
export type QuizBotSession = $Result.DefaultSelection<Prisma.$QuizBotSessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Channel: {
  whatsapp: 'whatsapp',
  telegram: 'telegram'
};

export type Channel = (typeof Channel)[keyof typeof Channel]


export const LeadSource: {
  site: 'site',
  telegram_bot: 'telegram_bot'
};

export type LeadSource = (typeof LeadSource)[keyof typeof LeadSource]

}

export type Channel = $Enums.Channel

export const Channel: typeof $Enums.Channel

export type LeadSource = $Enums.LeadSource

export const LeadSource: typeof $Enums.LeadSource

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more LandingPages
 * const landingPages = await prisma.landingPage.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more LandingPages
   * const landingPages = await prisma.landingPage.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.landingPage`: Exposes CRUD operations for the **LandingPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LandingPages
    * const landingPages = await prisma.landingPage.findMany()
    * ```
    */
  get landingPage(): Prisma.LandingPageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.landingContent`: Exposes CRUD operations for the **LandingContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LandingContents
    * const landingContents = await prisma.landingContent.findMany()
    * ```
    */
  get landingContent(): Prisma.LandingContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizBotSettings`: Exposes CRUD operations for the **QuizBotSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizBotSettings
    * const quizBotSettings = await prisma.quizBotSettings.findMany()
    * ```
    */
  get quizBotSettings(): Prisma.QuizBotSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizBotSession`: Exposes CRUD operations for the **QuizBotSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizBotSessions
    * const quizBotSessions = await prisma.quizBotSession.findMany()
    * ```
    */
  get quizBotSession(): Prisma.QuizBotSessionDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    LandingPage: 'LandingPage',
    Lead: 'Lead',
    LandingContent: 'LandingContent',
    QuizBotSettings: 'QuizBotSettings',
    QuizBotSession: 'QuizBotSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "landingPage" | "lead" | "landingContent" | "quizBotSettings" | "quizBotSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      LandingPage: {
        payload: Prisma.$LandingPagePayload<ExtArgs>
        fields: Prisma.LandingPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LandingPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LandingPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>
          }
          findFirst: {
            args: Prisma.LandingPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LandingPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>
          }
          findMany: {
            args: Prisma.LandingPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>[]
          }
          create: {
            args: Prisma.LandingPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>
          }
          createMany: {
            args: Prisma.LandingPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LandingPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>[]
          }
          delete: {
            args: Prisma.LandingPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>
          }
          update: {
            args: Prisma.LandingPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>
          }
          deleteMany: {
            args: Prisma.LandingPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LandingPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LandingPageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>[]
          }
          upsert: {
            args: Prisma.LandingPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>
          }
          aggregate: {
            args: Prisma.LandingPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLandingPage>
          }
          groupBy: {
            args: Prisma.LandingPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandingPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LandingPageCountArgs<ExtArgs>
            result: $Utils.Optional<LandingPageCountAggregateOutputType> | number
          }
        }
      }
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      LandingContent: {
        payload: Prisma.$LandingContentPayload<ExtArgs>
        fields: Prisma.LandingContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LandingContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LandingContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>
          }
          findFirst: {
            args: Prisma.LandingContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LandingContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>
          }
          findMany: {
            args: Prisma.LandingContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>[]
          }
          create: {
            args: Prisma.LandingContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>
          }
          createMany: {
            args: Prisma.LandingContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LandingContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>[]
          }
          delete: {
            args: Prisma.LandingContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>
          }
          update: {
            args: Prisma.LandingContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>
          }
          deleteMany: {
            args: Prisma.LandingContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LandingContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LandingContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>[]
          }
          upsert: {
            args: Prisma.LandingContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingContentPayload>
          }
          aggregate: {
            args: Prisma.LandingContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLandingContent>
          }
          groupBy: {
            args: Prisma.LandingContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandingContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.LandingContentCountArgs<ExtArgs>
            result: $Utils.Optional<LandingContentCountAggregateOutputType> | number
          }
        }
      }
      QuizBotSettings: {
        payload: Prisma.$QuizBotSettingsPayload<ExtArgs>
        fields: Prisma.QuizBotSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizBotSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizBotSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSettingsPayload>
          }
          findFirst: {
            args: Prisma.QuizBotSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizBotSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSettingsPayload>
          }
          findMany: {
            args: Prisma.QuizBotSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSettingsPayload>[]
          }
          create: {
            args: Prisma.QuizBotSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSettingsPayload>
          }
          createMany: {
            args: Prisma.QuizBotSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizBotSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSettingsPayload>[]
          }
          delete: {
            args: Prisma.QuizBotSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSettingsPayload>
          }
          update: {
            args: Prisma.QuizBotSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSettingsPayload>
          }
          deleteMany: {
            args: Prisma.QuizBotSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizBotSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizBotSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSettingsPayload>[]
          }
          upsert: {
            args: Prisma.QuizBotSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSettingsPayload>
          }
          aggregate: {
            args: Prisma.QuizBotSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizBotSettings>
          }
          groupBy: {
            args: Prisma.QuizBotSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizBotSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizBotSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<QuizBotSettingsCountAggregateOutputType> | number
          }
        }
      }
      QuizBotSession: {
        payload: Prisma.$QuizBotSessionPayload<ExtArgs>
        fields: Prisma.QuizBotSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizBotSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizBotSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSessionPayload>
          }
          findFirst: {
            args: Prisma.QuizBotSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizBotSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSessionPayload>
          }
          findMany: {
            args: Prisma.QuizBotSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSessionPayload>[]
          }
          create: {
            args: Prisma.QuizBotSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSessionPayload>
          }
          createMany: {
            args: Prisma.QuizBotSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizBotSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSessionPayload>[]
          }
          delete: {
            args: Prisma.QuizBotSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSessionPayload>
          }
          update: {
            args: Prisma.QuizBotSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSessionPayload>
          }
          deleteMany: {
            args: Prisma.QuizBotSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizBotSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizBotSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSessionPayload>[]
          }
          upsert: {
            args: Prisma.QuizBotSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBotSessionPayload>
          }
          aggregate: {
            args: Prisma.QuizBotSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizBotSession>
          }
          groupBy: {
            args: Prisma.QuizBotSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizBotSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizBotSessionCountArgs<ExtArgs>
            result: $Utils.Optional<QuizBotSessionCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    landingPage?: LandingPageOmit
    lead?: LeadOmit
    landingContent?: LandingContentOmit
    quizBotSettings?: QuizBotSettingsOmit
    quizBotSession?: QuizBotSessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type LandingPageCountOutputType
   */

  export type LandingPageCountOutputType = {
    leads: number
  }

  export type LandingPageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | LandingPageCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * LandingPageCountOutputType without action
   */
  export type LandingPageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPageCountOutputType
     */
    select?: LandingPageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LandingPageCountOutputType without action
   */
  export type LandingPageCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model LandingPage
   */

  export type AggregateLandingPage = {
    _count: LandingPageCountAggregateOutputType | null
    _min: LandingPageMinAggregateOutputType | null
    _max: LandingPageMaxAggregateOutputType | null
  }

  export type LandingPageMinAggregateOutputType = {
    id: string | null
    urlPath: string | null
    name: string | null
    headerPhrase: string | null
    heroImage: string | null
    heroHeading: string | null
    heroDescription: string | null
    heroSupport: string | null
    buttonLabel: string | null
    contact: string | null
    videoUrl: string | null
    nextScreenTitle: string | null
    nextScreenDescription: string | null
    nextScreenQuestion: string | null
    telegramEnabled: boolean | null
    whatsappEnabled: boolean | null
    customScript: string | null
    telegramBotToken: string | null
    telegramChatIds: string | null
    logoPath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LandingPageMaxAggregateOutputType = {
    id: string | null
    urlPath: string | null
    name: string | null
    headerPhrase: string | null
    heroImage: string | null
    heroHeading: string | null
    heroDescription: string | null
    heroSupport: string | null
    buttonLabel: string | null
    contact: string | null
    videoUrl: string | null
    nextScreenTitle: string | null
    nextScreenDescription: string | null
    nextScreenQuestion: string | null
    telegramEnabled: boolean | null
    whatsappEnabled: boolean | null
    customScript: string | null
    telegramBotToken: string | null
    telegramChatIds: string | null
    logoPath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LandingPageCountAggregateOutputType = {
    id: number
    urlPath: number
    name: number
    headerPhrase: number
    heroImage: number
    heroHeading: number
    heroDescription: number
    heroSupport: number
    buttonLabel: number
    contact: number
    videoUrl: number
    nextScreenTitle: number
    nextScreenDescription: number
    nextScreenQuestion: number
    telegramEnabled: number
    whatsappEnabled: number
    customScript: number
    telegramBotToken: number
    telegramChatIds: number
    logoPath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LandingPageMinAggregateInputType = {
    id?: true
    urlPath?: true
    name?: true
    headerPhrase?: true
    heroImage?: true
    heroHeading?: true
    heroDescription?: true
    heroSupport?: true
    buttonLabel?: true
    contact?: true
    videoUrl?: true
    nextScreenTitle?: true
    nextScreenDescription?: true
    nextScreenQuestion?: true
    telegramEnabled?: true
    whatsappEnabled?: true
    customScript?: true
    telegramBotToken?: true
    telegramChatIds?: true
    logoPath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LandingPageMaxAggregateInputType = {
    id?: true
    urlPath?: true
    name?: true
    headerPhrase?: true
    heroImage?: true
    heroHeading?: true
    heroDescription?: true
    heroSupport?: true
    buttonLabel?: true
    contact?: true
    videoUrl?: true
    nextScreenTitle?: true
    nextScreenDescription?: true
    nextScreenQuestion?: true
    telegramEnabled?: true
    whatsappEnabled?: true
    customScript?: true
    telegramBotToken?: true
    telegramChatIds?: true
    logoPath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LandingPageCountAggregateInputType = {
    id?: true
    urlPath?: true
    name?: true
    headerPhrase?: true
    heroImage?: true
    heroHeading?: true
    heroDescription?: true
    heroSupport?: true
    buttonLabel?: true
    contact?: true
    videoUrl?: true
    nextScreenTitle?: true
    nextScreenDescription?: true
    nextScreenQuestion?: true
    telegramEnabled?: true
    whatsappEnabled?: true
    customScript?: true
    telegramBotToken?: true
    telegramChatIds?: true
    logoPath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LandingPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LandingPage to aggregate.
     */
    where?: LandingPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandingPages to fetch.
     */
    orderBy?: LandingPageOrderByWithRelationInput | LandingPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LandingPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandingPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandingPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LandingPages
    **/
    _count?: true | LandingPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandingPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandingPageMaxAggregateInputType
  }

  export type GetLandingPageAggregateType<T extends LandingPageAggregateArgs> = {
        [P in keyof T & keyof AggregateLandingPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLandingPage[P]>
      : GetScalarType<T[P], AggregateLandingPage[P]>
  }




  export type LandingPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandingPageWhereInput
    orderBy?: LandingPageOrderByWithAggregationInput | LandingPageOrderByWithAggregationInput[]
    by: LandingPageScalarFieldEnum[] | LandingPageScalarFieldEnum
    having?: LandingPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandingPageCountAggregateInputType | true
    _min?: LandingPageMinAggregateInputType
    _max?: LandingPageMaxAggregateInputType
  }

  export type LandingPageGroupByOutputType = {
    id: string
    urlPath: string
    name: string
    headerPhrase: string
    heroImage: string | null
    heroHeading: string
    heroDescription: string
    heroSupport: string
    buttonLabel: string
    contact: string
    videoUrl: string
    nextScreenTitle: string
    nextScreenDescription: string
    nextScreenQuestion: string
    telegramEnabled: boolean
    whatsappEnabled: boolean
    customScript: string | null
    telegramBotToken: string | null
    telegramChatIds: string | null
    logoPath: string
    createdAt: Date
    updatedAt: Date
    _count: LandingPageCountAggregateOutputType | null
    _min: LandingPageMinAggregateOutputType | null
    _max: LandingPageMaxAggregateOutputType | null
  }

  type GetLandingPageGroupByPayload<T extends LandingPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LandingPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandingPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandingPageGroupByOutputType[P]>
            : GetScalarType<T[P], LandingPageGroupByOutputType[P]>
        }
      >
    >


  export type LandingPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urlPath?: boolean
    name?: boolean
    headerPhrase?: boolean
    heroImage?: boolean
    heroHeading?: boolean
    heroDescription?: boolean
    heroSupport?: boolean
    buttonLabel?: boolean
    contact?: boolean
    videoUrl?: boolean
    nextScreenTitle?: boolean
    nextScreenDescription?: boolean
    nextScreenQuestion?: boolean
    telegramEnabled?: boolean
    whatsappEnabled?: boolean
    customScript?: boolean
    telegramBotToken?: boolean
    telegramChatIds?: boolean
    logoPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    leads?: boolean | LandingPage$leadsArgs<ExtArgs>
    _count?: boolean | LandingPageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["landingPage"]>

  export type LandingPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urlPath?: boolean
    name?: boolean
    headerPhrase?: boolean
    heroImage?: boolean
    heroHeading?: boolean
    heroDescription?: boolean
    heroSupport?: boolean
    buttonLabel?: boolean
    contact?: boolean
    videoUrl?: boolean
    nextScreenTitle?: boolean
    nextScreenDescription?: boolean
    nextScreenQuestion?: boolean
    telegramEnabled?: boolean
    whatsappEnabled?: boolean
    customScript?: boolean
    telegramBotToken?: boolean
    telegramChatIds?: boolean
    logoPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["landingPage"]>

  export type LandingPageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urlPath?: boolean
    name?: boolean
    headerPhrase?: boolean
    heroImage?: boolean
    heroHeading?: boolean
    heroDescription?: boolean
    heroSupport?: boolean
    buttonLabel?: boolean
    contact?: boolean
    videoUrl?: boolean
    nextScreenTitle?: boolean
    nextScreenDescription?: boolean
    nextScreenQuestion?: boolean
    telegramEnabled?: boolean
    whatsappEnabled?: boolean
    customScript?: boolean
    telegramBotToken?: boolean
    telegramChatIds?: boolean
    logoPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["landingPage"]>

  export type LandingPageSelectScalar = {
    id?: boolean
    urlPath?: boolean
    name?: boolean
    headerPhrase?: boolean
    heroImage?: boolean
    heroHeading?: boolean
    heroDescription?: boolean
    heroSupport?: boolean
    buttonLabel?: boolean
    contact?: boolean
    videoUrl?: boolean
    nextScreenTitle?: boolean
    nextScreenDescription?: boolean
    nextScreenQuestion?: boolean
    telegramEnabled?: boolean
    whatsappEnabled?: boolean
    customScript?: boolean
    telegramBotToken?: boolean
    telegramChatIds?: boolean
    logoPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LandingPageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "urlPath" | "name" | "headerPhrase" | "heroImage" | "heroHeading" | "heroDescription" | "heroSupport" | "buttonLabel" | "contact" | "videoUrl" | "nextScreenTitle" | "nextScreenDescription" | "nextScreenQuestion" | "telegramEnabled" | "whatsappEnabled" | "customScript" | "telegramBotToken" | "telegramChatIds" | "logoPath" | "createdAt" | "updatedAt", ExtArgs["result"]["landingPage"]>
  export type LandingPageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | LandingPage$leadsArgs<ExtArgs>
    _count?: boolean | LandingPageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LandingPageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LandingPageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LandingPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LandingPage"
    objects: {
      leads: Prisma.$LeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      urlPath: string
      name: string
      headerPhrase: string
      heroImage: string | null
      heroHeading: string
      heroDescription: string
      heroSupport: string
      buttonLabel: string
      contact: string
      videoUrl: string
      nextScreenTitle: string
      nextScreenDescription: string
      nextScreenQuestion: string
      telegramEnabled: boolean
      whatsappEnabled: boolean
      customScript: string | null
      telegramBotToken: string | null
      telegramChatIds: string | null
      logoPath: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["landingPage"]>
    composites: {}
  }

  type LandingPageGetPayload<S extends boolean | null | undefined | LandingPageDefaultArgs> = $Result.GetResult<Prisma.$LandingPagePayload, S>

  type LandingPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LandingPageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LandingPageCountAggregateInputType | true
    }

  export interface LandingPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LandingPage'], meta: { name: 'LandingPage' } }
    /**
     * Find zero or one LandingPage that matches the filter.
     * @param {LandingPageFindUniqueArgs} args - Arguments to find a LandingPage
     * @example
     * // Get one LandingPage
     * const landingPage = await prisma.landingPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LandingPageFindUniqueArgs>(args: SelectSubset<T, LandingPageFindUniqueArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LandingPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LandingPageFindUniqueOrThrowArgs} args - Arguments to find a LandingPage
     * @example
     * // Get one LandingPage
     * const landingPage = await prisma.landingPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LandingPageFindUniqueOrThrowArgs>(args: SelectSubset<T, LandingPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LandingPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingPageFindFirstArgs} args - Arguments to find a LandingPage
     * @example
     * // Get one LandingPage
     * const landingPage = await prisma.landingPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LandingPageFindFirstArgs>(args?: SelectSubset<T, LandingPageFindFirstArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LandingPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingPageFindFirstOrThrowArgs} args - Arguments to find a LandingPage
     * @example
     * // Get one LandingPage
     * const landingPage = await prisma.landingPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LandingPageFindFirstOrThrowArgs>(args?: SelectSubset<T, LandingPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LandingPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LandingPages
     * const landingPages = await prisma.landingPage.findMany()
     * 
     * // Get first 10 LandingPages
     * const landingPages = await prisma.landingPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landingPageWithIdOnly = await prisma.landingPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LandingPageFindManyArgs>(args?: SelectSubset<T, LandingPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LandingPage.
     * @param {LandingPageCreateArgs} args - Arguments to create a LandingPage.
     * @example
     * // Create one LandingPage
     * const LandingPage = await prisma.landingPage.create({
     *   data: {
     *     // ... data to create a LandingPage
     *   }
     * })
     * 
     */
    create<T extends LandingPageCreateArgs>(args: SelectSubset<T, LandingPageCreateArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LandingPages.
     * @param {LandingPageCreateManyArgs} args - Arguments to create many LandingPages.
     * @example
     * // Create many LandingPages
     * const landingPage = await prisma.landingPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LandingPageCreateManyArgs>(args?: SelectSubset<T, LandingPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LandingPages and returns the data saved in the database.
     * @param {LandingPageCreateManyAndReturnArgs} args - Arguments to create many LandingPages.
     * @example
     * // Create many LandingPages
     * const landingPage = await prisma.landingPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LandingPages and only return the `id`
     * const landingPageWithIdOnly = await prisma.landingPage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LandingPageCreateManyAndReturnArgs>(args?: SelectSubset<T, LandingPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LandingPage.
     * @param {LandingPageDeleteArgs} args - Arguments to delete one LandingPage.
     * @example
     * // Delete one LandingPage
     * const LandingPage = await prisma.landingPage.delete({
     *   where: {
     *     // ... filter to delete one LandingPage
     *   }
     * })
     * 
     */
    delete<T extends LandingPageDeleteArgs>(args: SelectSubset<T, LandingPageDeleteArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LandingPage.
     * @param {LandingPageUpdateArgs} args - Arguments to update one LandingPage.
     * @example
     * // Update one LandingPage
     * const landingPage = await prisma.landingPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LandingPageUpdateArgs>(args: SelectSubset<T, LandingPageUpdateArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LandingPages.
     * @param {LandingPageDeleteManyArgs} args - Arguments to filter LandingPages to delete.
     * @example
     * // Delete a few LandingPages
     * const { count } = await prisma.landingPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LandingPageDeleteManyArgs>(args?: SelectSubset<T, LandingPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LandingPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LandingPages
     * const landingPage = await prisma.landingPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LandingPageUpdateManyArgs>(args: SelectSubset<T, LandingPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LandingPages and returns the data updated in the database.
     * @param {LandingPageUpdateManyAndReturnArgs} args - Arguments to update many LandingPages.
     * @example
     * // Update many LandingPages
     * const landingPage = await prisma.landingPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LandingPages and only return the `id`
     * const landingPageWithIdOnly = await prisma.landingPage.updateManyAndReturn({
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
    updateManyAndReturn<T extends LandingPageUpdateManyAndReturnArgs>(args: SelectSubset<T, LandingPageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LandingPage.
     * @param {LandingPageUpsertArgs} args - Arguments to update or create a LandingPage.
     * @example
     * // Update or create a LandingPage
     * const landingPage = await prisma.landingPage.upsert({
     *   create: {
     *     // ... data to create a LandingPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LandingPage we want to update
     *   }
     * })
     */
    upsert<T extends LandingPageUpsertArgs>(args: SelectSubset<T, LandingPageUpsertArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LandingPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingPageCountArgs} args - Arguments to filter LandingPages to count.
     * @example
     * // Count the number of LandingPages
     * const count = await prisma.landingPage.count({
     *   where: {
     *     // ... the filter for the LandingPages we want to count
     *   }
     * })
    **/
    count<T extends LandingPageCountArgs>(
      args?: Subset<T, LandingPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandingPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LandingPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LandingPageAggregateArgs>(args: Subset<T, LandingPageAggregateArgs>): Prisma.PrismaPromise<GetLandingPageAggregateType<T>>

    /**
     * Group by LandingPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingPageGroupByArgs} args - Group by arguments.
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
      T extends LandingPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandingPageGroupByArgs['orderBy'] }
        : { orderBy?: LandingPageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LandingPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandingPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LandingPage model
   */
  readonly fields: LandingPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LandingPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LandingPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leads<T extends LandingPage$leadsArgs<ExtArgs> = {}>(args?: Subset<T, LandingPage$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LandingPage model
   */
  interface LandingPageFieldRefs {
    readonly id: FieldRef<"LandingPage", 'String'>
    readonly urlPath: FieldRef<"LandingPage", 'String'>
    readonly name: FieldRef<"LandingPage", 'String'>
    readonly headerPhrase: FieldRef<"LandingPage", 'String'>
    readonly heroImage: FieldRef<"LandingPage", 'String'>
    readonly heroHeading: FieldRef<"LandingPage", 'String'>
    readonly heroDescription: FieldRef<"LandingPage", 'String'>
    readonly heroSupport: FieldRef<"LandingPage", 'String'>
    readonly buttonLabel: FieldRef<"LandingPage", 'String'>
    readonly contact: FieldRef<"LandingPage", 'String'>
    readonly videoUrl: FieldRef<"LandingPage", 'String'>
    readonly nextScreenTitle: FieldRef<"LandingPage", 'String'>
    readonly nextScreenDescription: FieldRef<"LandingPage", 'String'>
    readonly nextScreenQuestion: FieldRef<"LandingPage", 'String'>
    readonly telegramEnabled: FieldRef<"LandingPage", 'Boolean'>
    readonly whatsappEnabled: FieldRef<"LandingPage", 'Boolean'>
    readonly customScript: FieldRef<"LandingPage", 'String'>
    readonly telegramBotToken: FieldRef<"LandingPage", 'String'>
    readonly telegramChatIds: FieldRef<"LandingPage", 'String'>
    readonly logoPath: FieldRef<"LandingPage", 'String'>
    readonly createdAt: FieldRef<"LandingPage", 'DateTime'>
    readonly updatedAt: FieldRef<"LandingPage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LandingPage findUnique
   */
  export type LandingPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * Filter, which LandingPage to fetch.
     */
    where: LandingPageWhereUniqueInput
  }

  /**
   * LandingPage findUniqueOrThrow
   */
  export type LandingPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * Filter, which LandingPage to fetch.
     */
    where: LandingPageWhereUniqueInput
  }

  /**
   * LandingPage findFirst
   */
  export type LandingPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * Filter, which LandingPage to fetch.
     */
    where?: LandingPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandingPages to fetch.
     */
    orderBy?: LandingPageOrderByWithRelationInput | LandingPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LandingPages.
     */
    cursor?: LandingPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandingPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandingPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LandingPages.
     */
    distinct?: LandingPageScalarFieldEnum | LandingPageScalarFieldEnum[]
  }

  /**
   * LandingPage findFirstOrThrow
   */
  export type LandingPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * Filter, which LandingPage to fetch.
     */
    where?: LandingPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandingPages to fetch.
     */
    orderBy?: LandingPageOrderByWithRelationInput | LandingPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LandingPages.
     */
    cursor?: LandingPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandingPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandingPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LandingPages.
     */
    distinct?: LandingPageScalarFieldEnum | LandingPageScalarFieldEnum[]
  }

  /**
   * LandingPage findMany
   */
  export type LandingPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * Filter, which LandingPages to fetch.
     */
    where?: LandingPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandingPages to fetch.
     */
    orderBy?: LandingPageOrderByWithRelationInput | LandingPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LandingPages.
     */
    cursor?: LandingPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandingPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandingPages.
     */
    skip?: number
    distinct?: LandingPageScalarFieldEnum | LandingPageScalarFieldEnum[]
  }

  /**
   * LandingPage create
   */
  export type LandingPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * The data needed to create a LandingPage.
     */
    data: XOR<LandingPageCreateInput, LandingPageUncheckedCreateInput>
  }

  /**
   * LandingPage createMany
   */
  export type LandingPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LandingPages.
     */
    data: LandingPageCreateManyInput | LandingPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LandingPage createManyAndReturn
   */
  export type LandingPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * The data used to create many LandingPages.
     */
    data: LandingPageCreateManyInput | LandingPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LandingPage update
   */
  export type LandingPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * The data needed to update a LandingPage.
     */
    data: XOR<LandingPageUpdateInput, LandingPageUncheckedUpdateInput>
    /**
     * Choose, which LandingPage to update.
     */
    where: LandingPageWhereUniqueInput
  }

  /**
   * LandingPage updateMany
   */
  export type LandingPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LandingPages.
     */
    data: XOR<LandingPageUpdateManyMutationInput, LandingPageUncheckedUpdateManyInput>
    /**
     * Filter which LandingPages to update
     */
    where?: LandingPageWhereInput
    /**
     * Limit how many LandingPages to update.
     */
    limit?: number
  }

  /**
   * LandingPage updateManyAndReturn
   */
  export type LandingPageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * The data used to update LandingPages.
     */
    data: XOR<LandingPageUpdateManyMutationInput, LandingPageUncheckedUpdateManyInput>
    /**
     * Filter which LandingPages to update
     */
    where?: LandingPageWhereInput
    /**
     * Limit how many LandingPages to update.
     */
    limit?: number
  }

  /**
   * LandingPage upsert
   */
  export type LandingPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * The filter to search for the LandingPage to update in case it exists.
     */
    where: LandingPageWhereUniqueInput
    /**
     * In case the LandingPage found by the `where` argument doesn't exist, create a new LandingPage with this data.
     */
    create: XOR<LandingPageCreateInput, LandingPageUncheckedCreateInput>
    /**
     * In case the LandingPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LandingPageUpdateInput, LandingPageUncheckedUpdateInput>
  }

  /**
   * LandingPage delete
   */
  export type LandingPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * Filter which LandingPage to delete.
     */
    where: LandingPageWhereUniqueInput
  }

  /**
   * LandingPage deleteMany
   */
  export type LandingPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LandingPages to delete
     */
    where?: LandingPageWhereInput
    /**
     * Limit how many LandingPages to delete.
     */
    limit?: number
  }

  /**
   * LandingPage.leads
   */
  export type LandingPage$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * LandingPage without action
   */
  export type LandingPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
  }


  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    channel: $Enums.Channel | null
    source: $Enums.LeadSource | null
    contact: string | null
    message: string | null
    telegramUserId: string | null
    telegramUsername: string | null
    telegramFirstName: string | null
    telegramLastName: string | null
    ipAddress: string | null
    country: string | null
    landingPageId: string | null
    pagePath: string | null
    utmSource: string | null
    utmMedium: string | null
    utmCampaign: string | null
    utmContent: string | null
    utmTerm: string | null
    gclid: string | null
    gbraid: string | null
    wbraid: string | null
    fbclid: string | null
    createdAt: Date | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    channel: $Enums.Channel | null
    source: $Enums.LeadSource | null
    contact: string | null
    message: string | null
    telegramUserId: string | null
    telegramUsername: string | null
    telegramFirstName: string | null
    telegramLastName: string | null
    ipAddress: string | null
    country: string | null
    landingPageId: string | null
    pagePath: string | null
    utmSource: string | null
    utmMedium: string | null
    utmCampaign: string | null
    utmContent: string | null
    utmTerm: string | null
    gclid: string | null
    gbraid: string | null
    wbraid: string | null
    fbclid: string | null
    createdAt: Date | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    channel: number
    source: number
    contact: number
    message: number
    telegramUserId: number
    telegramUsername: number
    telegramFirstName: number
    telegramLastName: number
    ipAddress: number
    country: number
    landingPageId: number
    pagePath: number
    utmSource: number
    utmMedium: number
    utmCampaign: number
    utmContent: number
    utmTerm: number
    gclid: number
    gbraid: number
    wbraid: number
    fbclid: number
    createdAt: number
    _all: number
  }


  export type LeadMinAggregateInputType = {
    id?: true
    channel?: true
    source?: true
    contact?: true
    message?: true
    telegramUserId?: true
    telegramUsername?: true
    telegramFirstName?: true
    telegramLastName?: true
    ipAddress?: true
    country?: true
    landingPageId?: true
    pagePath?: true
    utmSource?: true
    utmMedium?: true
    utmCampaign?: true
    utmContent?: true
    utmTerm?: true
    gclid?: true
    gbraid?: true
    wbraid?: true
    fbclid?: true
    createdAt?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    channel?: true
    source?: true
    contact?: true
    message?: true
    telegramUserId?: true
    telegramUsername?: true
    telegramFirstName?: true
    telegramLastName?: true
    ipAddress?: true
    country?: true
    landingPageId?: true
    pagePath?: true
    utmSource?: true
    utmMedium?: true
    utmCampaign?: true
    utmContent?: true
    utmTerm?: true
    gclid?: true
    gbraid?: true
    wbraid?: true
    fbclid?: true
    createdAt?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    channel?: true
    source?: true
    contact?: true
    message?: true
    telegramUserId?: true
    telegramUsername?: true
    telegramFirstName?: true
    telegramLastName?: true
    ipAddress?: true
    country?: true
    landingPageId?: true
    pagePath?: true
    utmSource?: true
    utmMedium?: true
    utmCampaign?: true
    utmContent?: true
    utmTerm?: true
    gclid?: true
    gbraid?: true
    wbraid?: true
    fbclid?: true
    createdAt?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: string
    channel: $Enums.Channel
    source: $Enums.LeadSource
    contact: string
    message: string | null
    telegramUserId: string | null
    telegramUsername: string | null
    telegramFirstName: string | null
    telegramLastName: string | null
    ipAddress: string | null
    country: string | null
    landingPageId: string | null
    pagePath: string | null
    utmSource: string | null
    utmMedium: string | null
    utmCampaign: string | null
    utmContent: string | null
    utmTerm: string | null
    gclid: string | null
    gbraid: string | null
    wbraid: string | null
    fbclid: string | null
    createdAt: Date
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channel?: boolean
    source?: boolean
    contact?: boolean
    message?: boolean
    telegramUserId?: boolean
    telegramUsername?: boolean
    telegramFirstName?: boolean
    telegramLastName?: boolean
    ipAddress?: boolean
    country?: boolean
    landingPageId?: boolean
    pagePath?: boolean
    utmSource?: boolean
    utmMedium?: boolean
    utmCampaign?: boolean
    utmContent?: boolean
    utmTerm?: boolean
    gclid?: boolean
    gbraid?: boolean
    wbraid?: boolean
    fbclid?: boolean
    createdAt?: boolean
    landingPage?: boolean | Lead$landingPageArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channel?: boolean
    source?: boolean
    contact?: boolean
    message?: boolean
    telegramUserId?: boolean
    telegramUsername?: boolean
    telegramFirstName?: boolean
    telegramLastName?: boolean
    ipAddress?: boolean
    country?: boolean
    landingPageId?: boolean
    pagePath?: boolean
    utmSource?: boolean
    utmMedium?: boolean
    utmCampaign?: boolean
    utmContent?: boolean
    utmTerm?: boolean
    gclid?: boolean
    gbraid?: boolean
    wbraid?: boolean
    fbclid?: boolean
    createdAt?: boolean
    landingPage?: boolean | Lead$landingPageArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channel?: boolean
    source?: boolean
    contact?: boolean
    message?: boolean
    telegramUserId?: boolean
    telegramUsername?: boolean
    telegramFirstName?: boolean
    telegramLastName?: boolean
    ipAddress?: boolean
    country?: boolean
    landingPageId?: boolean
    pagePath?: boolean
    utmSource?: boolean
    utmMedium?: boolean
    utmCampaign?: boolean
    utmContent?: boolean
    utmTerm?: boolean
    gclid?: boolean
    gbraid?: boolean
    wbraid?: boolean
    fbclid?: boolean
    createdAt?: boolean
    landingPage?: boolean | Lead$landingPageArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    channel?: boolean
    source?: boolean
    contact?: boolean
    message?: boolean
    telegramUserId?: boolean
    telegramUsername?: boolean
    telegramFirstName?: boolean
    telegramLastName?: boolean
    ipAddress?: boolean
    country?: boolean
    landingPageId?: boolean
    pagePath?: boolean
    utmSource?: boolean
    utmMedium?: boolean
    utmCampaign?: boolean
    utmContent?: boolean
    utmTerm?: boolean
    gclid?: boolean
    gbraid?: boolean
    wbraid?: boolean
    fbclid?: boolean
    createdAt?: boolean
  }

  export type LeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "channel" | "source" | "contact" | "message" | "telegramUserId" | "telegramUsername" | "telegramFirstName" | "telegramLastName" | "ipAddress" | "country" | "landingPageId" | "pagePath" | "utmSource" | "utmMedium" | "utmCampaign" | "utmContent" | "utmTerm" | "gclid" | "gbraid" | "wbraid" | "fbclid" | "createdAt", ExtArgs["result"]["lead"]>
  export type LeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landingPage?: boolean | Lead$landingPageArgs<ExtArgs>
  }
  export type LeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landingPage?: boolean | Lead$landingPageArgs<ExtArgs>
  }
  export type LeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landingPage?: boolean | Lead$landingPageArgs<ExtArgs>
  }

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {
      landingPage: Prisma.$LandingPagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      channel: $Enums.Channel
      source: $Enums.LeadSource
      contact: string
      message: string | null
      telegramUserId: string | null
      telegramUsername: string | null
      telegramFirstName: string | null
      telegramLastName: string | null
      ipAddress: string | null
      country: string | null
      landingPageId: string | null
      pagePath: string | null
      utmSource: string | null
      utmMedium: string | null
      utmCampaign: string | null
      utmContent: string | null
      utmTerm: string | null
      gclid: string | null
      gbraid: string | null
      wbraid: string | null
      fbclid: string | null
      createdAt: Date
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeadUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
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
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    landingPage<T extends Lead$landingPageArgs<ExtArgs> = {}>(args?: Subset<T, Lead$landingPageArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Lead model
   */
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'String'>
    readonly channel: FieldRef<"Lead", 'Channel'>
    readonly source: FieldRef<"Lead", 'LeadSource'>
    readonly contact: FieldRef<"Lead", 'String'>
    readonly message: FieldRef<"Lead", 'String'>
    readonly telegramUserId: FieldRef<"Lead", 'String'>
    readonly telegramUsername: FieldRef<"Lead", 'String'>
    readonly telegramFirstName: FieldRef<"Lead", 'String'>
    readonly telegramLastName: FieldRef<"Lead", 'String'>
    readonly ipAddress: FieldRef<"Lead", 'String'>
    readonly country: FieldRef<"Lead", 'String'>
    readonly landingPageId: FieldRef<"Lead", 'String'>
    readonly pagePath: FieldRef<"Lead", 'String'>
    readonly utmSource: FieldRef<"Lead", 'String'>
    readonly utmMedium: FieldRef<"Lead", 'String'>
    readonly utmCampaign: FieldRef<"Lead", 'String'>
    readonly utmContent: FieldRef<"Lead", 'String'>
    readonly utmTerm: FieldRef<"Lead", 'String'>
    readonly gclid: FieldRef<"Lead", 'String'>
    readonly gbraid: FieldRef<"Lead", 'String'>
    readonly wbraid: FieldRef<"Lead", 'String'>
    readonly fbclid: FieldRef<"Lead", 'String'>
    readonly createdAt: FieldRef<"Lead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead updateManyAndReturn
   */
  export type LeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Lead.landingPage
   */
  export type Lead$landingPageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    where?: LandingPageWhereInput
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
  }


  /**
   * Model LandingContent
   */

  export type AggregateLandingContent = {
    _count: LandingContentCountAggregateOutputType | null
    _min: LandingContentMinAggregateOutputType | null
    _max: LandingContentMaxAggregateOutputType | null
  }

  export type LandingContentMinAggregateOutputType = {
    id: string | null
    defaultLandingName: string | null
    headerPhrase: string | null
    heroImage: string | null
    heroHeading: string | null
    heroDescription: string | null
    heroSupport: string | null
    buttonLabel: string | null
    contact: string | null
    videoUrl: string | null
    nextScreenTitle: string | null
    nextScreenDescription: string | null
    nextScreenQuestion: string | null
    telegramEnabled: boolean | null
    whatsappEnabled: boolean | null
    customScript: string | null
    telegramBotToken: string | null
    telegramChatIds: string | null
    logoPath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LandingContentMaxAggregateOutputType = {
    id: string | null
    defaultLandingName: string | null
    headerPhrase: string | null
    heroImage: string | null
    heroHeading: string | null
    heroDescription: string | null
    heroSupport: string | null
    buttonLabel: string | null
    contact: string | null
    videoUrl: string | null
    nextScreenTitle: string | null
    nextScreenDescription: string | null
    nextScreenQuestion: string | null
    telegramEnabled: boolean | null
    whatsappEnabled: boolean | null
    customScript: string | null
    telegramBotToken: string | null
    telegramChatIds: string | null
    logoPath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LandingContentCountAggregateOutputType = {
    id: number
    defaultLandingName: number
    headerPhrase: number
    heroImage: number
    heroHeading: number
    heroDescription: number
    heroSupport: number
    buttonLabel: number
    contact: number
    videoUrl: number
    nextScreenTitle: number
    nextScreenDescription: number
    nextScreenQuestion: number
    telegramEnabled: number
    whatsappEnabled: number
    customScript: number
    telegramBotToken: number
    telegramChatIds: number
    logoPath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LandingContentMinAggregateInputType = {
    id?: true
    defaultLandingName?: true
    headerPhrase?: true
    heroImage?: true
    heroHeading?: true
    heroDescription?: true
    heroSupport?: true
    buttonLabel?: true
    contact?: true
    videoUrl?: true
    nextScreenTitle?: true
    nextScreenDescription?: true
    nextScreenQuestion?: true
    telegramEnabled?: true
    whatsappEnabled?: true
    customScript?: true
    telegramBotToken?: true
    telegramChatIds?: true
    logoPath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LandingContentMaxAggregateInputType = {
    id?: true
    defaultLandingName?: true
    headerPhrase?: true
    heroImage?: true
    heroHeading?: true
    heroDescription?: true
    heroSupport?: true
    buttonLabel?: true
    contact?: true
    videoUrl?: true
    nextScreenTitle?: true
    nextScreenDescription?: true
    nextScreenQuestion?: true
    telegramEnabled?: true
    whatsappEnabled?: true
    customScript?: true
    telegramBotToken?: true
    telegramChatIds?: true
    logoPath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LandingContentCountAggregateInputType = {
    id?: true
    defaultLandingName?: true
    headerPhrase?: true
    heroImage?: true
    heroHeading?: true
    heroDescription?: true
    heroSupport?: true
    buttonLabel?: true
    contact?: true
    videoUrl?: true
    nextScreenTitle?: true
    nextScreenDescription?: true
    nextScreenQuestion?: true
    telegramEnabled?: true
    whatsappEnabled?: true
    customScript?: true
    telegramBotToken?: true
    telegramChatIds?: true
    logoPath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LandingContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LandingContent to aggregate.
     */
    where?: LandingContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandingContents to fetch.
     */
    orderBy?: LandingContentOrderByWithRelationInput | LandingContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LandingContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandingContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandingContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LandingContents
    **/
    _count?: true | LandingContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandingContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandingContentMaxAggregateInputType
  }

  export type GetLandingContentAggregateType<T extends LandingContentAggregateArgs> = {
        [P in keyof T & keyof AggregateLandingContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLandingContent[P]>
      : GetScalarType<T[P], AggregateLandingContent[P]>
  }




  export type LandingContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandingContentWhereInput
    orderBy?: LandingContentOrderByWithAggregationInput | LandingContentOrderByWithAggregationInput[]
    by: LandingContentScalarFieldEnum[] | LandingContentScalarFieldEnum
    having?: LandingContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandingContentCountAggregateInputType | true
    _min?: LandingContentMinAggregateInputType
    _max?: LandingContentMaxAggregateInputType
  }

  export type LandingContentGroupByOutputType = {
    id: string
    defaultLandingName: string
    headerPhrase: string
    heroImage: string | null
    heroHeading: string
    heroDescription: string
    heroSupport: string
    buttonLabel: string
    contact: string
    videoUrl: string
    nextScreenTitle: string
    nextScreenDescription: string
    nextScreenQuestion: string
    telegramEnabled: boolean
    whatsappEnabled: boolean
    customScript: string | null
    telegramBotToken: string | null
    telegramChatIds: string | null
    logoPath: string
    createdAt: Date
    updatedAt: Date
    _count: LandingContentCountAggregateOutputType | null
    _min: LandingContentMinAggregateOutputType | null
    _max: LandingContentMaxAggregateOutputType | null
  }

  type GetLandingContentGroupByPayload<T extends LandingContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LandingContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandingContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandingContentGroupByOutputType[P]>
            : GetScalarType<T[P], LandingContentGroupByOutputType[P]>
        }
      >
    >


  export type LandingContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    defaultLandingName?: boolean
    headerPhrase?: boolean
    heroImage?: boolean
    heroHeading?: boolean
    heroDescription?: boolean
    heroSupport?: boolean
    buttonLabel?: boolean
    contact?: boolean
    videoUrl?: boolean
    nextScreenTitle?: boolean
    nextScreenDescription?: boolean
    nextScreenQuestion?: boolean
    telegramEnabled?: boolean
    whatsappEnabled?: boolean
    customScript?: boolean
    telegramBotToken?: boolean
    telegramChatIds?: boolean
    logoPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["landingContent"]>

  export type LandingContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    defaultLandingName?: boolean
    headerPhrase?: boolean
    heroImage?: boolean
    heroHeading?: boolean
    heroDescription?: boolean
    heroSupport?: boolean
    buttonLabel?: boolean
    contact?: boolean
    videoUrl?: boolean
    nextScreenTitle?: boolean
    nextScreenDescription?: boolean
    nextScreenQuestion?: boolean
    telegramEnabled?: boolean
    whatsappEnabled?: boolean
    customScript?: boolean
    telegramBotToken?: boolean
    telegramChatIds?: boolean
    logoPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["landingContent"]>

  export type LandingContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    defaultLandingName?: boolean
    headerPhrase?: boolean
    heroImage?: boolean
    heroHeading?: boolean
    heroDescription?: boolean
    heroSupport?: boolean
    buttonLabel?: boolean
    contact?: boolean
    videoUrl?: boolean
    nextScreenTitle?: boolean
    nextScreenDescription?: boolean
    nextScreenQuestion?: boolean
    telegramEnabled?: boolean
    whatsappEnabled?: boolean
    customScript?: boolean
    telegramBotToken?: boolean
    telegramChatIds?: boolean
    logoPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["landingContent"]>

  export type LandingContentSelectScalar = {
    id?: boolean
    defaultLandingName?: boolean
    headerPhrase?: boolean
    heroImage?: boolean
    heroHeading?: boolean
    heroDescription?: boolean
    heroSupport?: boolean
    buttonLabel?: boolean
    contact?: boolean
    videoUrl?: boolean
    nextScreenTitle?: boolean
    nextScreenDescription?: boolean
    nextScreenQuestion?: boolean
    telegramEnabled?: boolean
    whatsappEnabled?: boolean
    customScript?: boolean
    telegramBotToken?: boolean
    telegramChatIds?: boolean
    logoPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LandingContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "defaultLandingName" | "headerPhrase" | "heroImage" | "heroHeading" | "heroDescription" | "heroSupport" | "buttonLabel" | "contact" | "videoUrl" | "nextScreenTitle" | "nextScreenDescription" | "nextScreenQuestion" | "telegramEnabled" | "whatsappEnabled" | "customScript" | "telegramBotToken" | "telegramChatIds" | "logoPath" | "createdAt" | "updatedAt", ExtArgs["result"]["landingContent"]>

  export type $LandingContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LandingContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      defaultLandingName: string
      headerPhrase: string
      heroImage: string | null
      heroHeading: string
      heroDescription: string
      heroSupport: string
      buttonLabel: string
      contact: string
      videoUrl: string
      nextScreenTitle: string
      nextScreenDescription: string
      nextScreenQuestion: string
      telegramEnabled: boolean
      whatsappEnabled: boolean
      customScript: string | null
      telegramBotToken: string | null
      telegramChatIds: string | null
      logoPath: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["landingContent"]>
    composites: {}
  }

  type LandingContentGetPayload<S extends boolean | null | undefined | LandingContentDefaultArgs> = $Result.GetResult<Prisma.$LandingContentPayload, S>

  type LandingContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LandingContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LandingContentCountAggregateInputType | true
    }

  export interface LandingContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LandingContent'], meta: { name: 'LandingContent' } }
    /**
     * Find zero or one LandingContent that matches the filter.
     * @param {LandingContentFindUniqueArgs} args - Arguments to find a LandingContent
     * @example
     * // Get one LandingContent
     * const landingContent = await prisma.landingContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LandingContentFindUniqueArgs>(args: SelectSubset<T, LandingContentFindUniqueArgs<ExtArgs>>): Prisma__LandingContentClient<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LandingContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LandingContentFindUniqueOrThrowArgs} args - Arguments to find a LandingContent
     * @example
     * // Get one LandingContent
     * const landingContent = await prisma.landingContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LandingContentFindUniqueOrThrowArgs>(args: SelectSubset<T, LandingContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LandingContentClient<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LandingContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingContentFindFirstArgs} args - Arguments to find a LandingContent
     * @example
     * // Get one LandingContent
     * const landingContent = await prisma.landingContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LandingContentFindFirstArgs>(args?: SelectSubset<T, LandingContentFindFirstArgs<ExtArgs>>): Prisma__LandingContentClient<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LandingContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingContentFindFirstOrThrowArgs} args - Arguments to find a LandingContent
     * @example
     * // Get one LandingContent
     * const landingContent = await prisma.landingContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LandingContentFindFirstOrThrowArgs>(args?: SelectSubset<T, LandingContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__LandingContentClient<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LandingContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LandingContents
     * const landingContents = await prisma.landingContent.findMany()
     * 
     * // Get first 10 LandingContents
     * const landingContents = await prisma.landingContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landingContentWithIdOnly = await prisma.landingContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LandingContentFindManyArgs>(args?: SelectSubset<T, LandingContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LandingContent.
     * @param {LandingContentCreateArgs} args - Arguments to create a LandingContent.
     * @example
     * // Create one LandingContent
     * const LandingContent = await prisma.landingContent.create({
     *   data: {
     *     // ... data to create a LandingContent
     *   }
     * })
     * 
     */
    create<T extends LandingContentCreateArgs>(args: SelectSubset<T, LandingContentCreateArgs<ExtArgs>>): Prisma__LandingContentClient<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LandingContents.
     * @param {LandingContentCreateManyArgs} args - Arguments to create many LandingContents.
     * @example
     * // Create many LandingContents
     * const landingContent = await prisma.landingContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LandingContentCreateManyArgs>(args?: SelectSubset<T, LandingContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LandingContents and returns the data saved in the database.
     * @param {LandingContentCreateManyAndReturnArgs} args - Arguments to create many LandingContents.
     * @example
     * // Create many LandingContents
     * const landingContent = await prisma.landingContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LandingContents and only return the `id`
     * const landingContentWithIdOnly = await prisma.landingContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LandingContentCreateManyAndReturnArgs>(args?: SelectSubset<T, LandingContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LandingContent.
     * @param {LandingContentDeleteArgs} args - Arguments to delete one LandingContent.
     * @example
     * // Delete one LandingContent
     * const LandingContent = await prisma.landingContent.delete({
     *   where: {
     *     // ... filter to delete one LandingContent
     *   }
     * })
     * 
     */
    delete<T extends LandingContentDeleteArgs>(args: SelectSubset<T, LandingContentDeleteArgs<ExtArgs>>): Prisma__LandingContentClient<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LandingContent.
     * @param {LandingContentUpdateArgs} args - Arguments to update one LandingContent.
     * @example
     * // Update one LandingContent
     * const landingContent = await prisma.landingContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LandingContentUpdateArgs>(args: SelectSubset<T, LandingContentUpdateArgs<ExtArgs>>): Prisma__LandingContentClient<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LandingContents.
     * @param {LandingContentDeleteManyArgs} args - Arguments to filter LandingContents to delete.
     * @example
     * // Delete a few LandingContents
     * const { count } = await prisma.landingContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LandingContentDeleteManyArgs>(args?: SelectSubset<T, LandingContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LandingContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LandingContents
     * const landingContent = await prisma.landingContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LandingContentUpdateManyArgs>(args: SelectSubset<T, LandingContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LandingContents and returns the data updated in the database.
     * @param {LandingContentUpdateManyAndReturnArgs} args - Arguments to update many LandingContents.
     * @example
     * // Update many LandingContents
     * const landingContent = await prisma.landingContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LandingContents and only return the `id`
     * const landingContentWithIdOnly = await prisma.landingContent.updateManyAndReturn({
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
    updateManyAndReturn<T extends LandingContentUpdateManyAndReturnArgs>(args: SelectSubset<T, LandingContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LandingContent.
     * @param {LandingContentUpsertArgs} args - Arguments to update or create a LandingContent.
     * @example
     * // Update or create a LandingContent
     * const landingContent = await prisma.landingContent.upsert({
     *   create: {
     *     // ... data to create a LandingContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LandingContent we want to update
     *   }
     * })
     */
    upsert<T extends LandingContentUpsertArgs>(args: SelectSubset<T, LandingContentUpsertArgs<ExtArgs>>): Prisma__LandingContentClient<$Result.GetResult<Prisma.$LandingContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LandingContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingContentCountArgs} args - Arguments to filter LandingContents to count.
     * @example
     * // Count the number of LandingContents
     * const count = await prisma.landingContent.count({
     *   where: {
     *     // ... the filter for the LandingContents we want to count
     *   }
     * })
    **/
    count<T extends LandingContentCountArgs>(
      args?: Subset<T, LandingContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandingContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LandingContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LandingContentAggregateArgs>(args: Subset<T, LandingContentAggregateArgs>): Prisma.PrismaPromise<GetLandingContentAggregateType<T>>

    /**
     * Group by LandingContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingContentGroupByArgs} args - Group by arguments.
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
      T extends LandingContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandingContentGroupByArgs['orderBy'] }
        : { orderBy?: LandingContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LandingContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandingContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LandingContent model
   */
  readonly fields: LandingContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LandingContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LandingContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the LandingContent model
   */
  interface LandingContentFieldRefs {
    readonly id: FieldRef<"LandingContent", 'String'>
    readonly defaultLandingName: FieldRef<"LandingContent", 'String'>
    readonly headerPhrase: FieldRef<"LandingContent", 'String'>
    readonly heroImage: FieldRef<"LandingContent", 'String'>
    readonly heroHeading: FieldRef<"LandingContent", 'String'>
    readonly heroDescription: FieldRef<"LandingContent", 'String'>
    readonly heroSupport: FieldRef<"LandingContent", 'String'>
    readonly buttonLabel: FieldRef<"LandingContent", 'String'>
    readonly contact: FieldRef<"LandingContent", 'String'>
    readonly videoUrl: FieldRef<"LandingContent", 'String'>
    readonly nextScreenTitle: FieldRef<"LandingContent", 'String'>
    readonly nextScreenDescription: FieldRef<"LandingContent", 'String'>
    readonly nextScreenQuestion: FieldRef<"LandingContent", 'String'>
    readonly telegramEnabled: FieldRef<"LandingContent", 'Boolean'>
    readonly whatsappEnabled: FieldRef<"LandingContent", 'Boolean'>
    readonly customScript: FieldRef<"LandingContent", 'String'>
    readonly telegramBotToken: FieldRef<"LandingContent", 'String'>
    readonly telegramChatIds: FieldRef<"LandingContent", 'String'>
    readonly logoPath: FieldRef<"LandingContent", 'String'>
    readonly createdAt: FieldRef<"LandingContent", 'DateTime'>
    readonly updatedAt: FieldRef<"LandingContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LandingContent findUnique
   */
  export type LandingContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * Filter, which LandingContent to fetch.
     */
    where: LandingContentWhereUniqueInput
  }

  /**
   * LandingContent findUniqueOrThrow
   */
  export type LandingContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * Filter, which LandingContent to fetch.
     */
    where: LandingContentWhereUniqueInput
  }

  /**
   * LandingContent findFirst
   */
  export type LandingContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * Filter, which LandingContent to fetch.
     */
    where?: LandingContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandingContents to fetch.
     */
    orderBy?: LandingContentOrderByWithRelationInput | LandingContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LandingContents.
     */
    cursor?: LandingContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandingContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandingContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LandingContents.
     */
    distinct?: LandingContentScalarFieldEnum | LandingContentScalarFieldEnum[]
  }

  /**
   * LandingContent findFirstOrThrow
   */
  export type LandingContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * Filter, which LandingContent to fetch.
     */
    where?: LandingContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandingContents to fetch.
     */
    orderBy?: LandingContentOrderByWithRelationInput | LandingContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LandingContents.
     */
    cursor?: LandingContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandingContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandingContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LandingContents.
     */
    distinct?: LandingContentScalarFieldEnum | LandingContentScalarFieldEnum[]
  }

  /**
   * LandingContent findMany
   */
  export type LandingContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * Filter, which LandingContents to fetch.
     */
    where?: LandingContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandingContents to fetch.
     */
    orderBy?: LandingContentOrderByWithRelationInput | LandingContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LandingContents.
     */
    cursor?: LandingContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandingContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandingContents.
     */
    skip?: number
    distinct?: LandingContentScalarFieldEnum | LandingContentScalarFieldEnum[]
  }

  /**
   * LandingContent create
   */
  export type LandingContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * The data needed to create a LandingContent.
     */
    data: XOR<LandingContentCreateInput, LandingContentUncheckedCreateInput>
  }

  /**
   * LandingContent createMany
   */
  export type LandingContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LandingContents.
     */
    data: LandingContentCreateManyInput | LandingContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LandingContent createManyAndReturn
   */
  export type LandingContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * The data used to create many LandingContents.
     */
    data: LandingContentCreateManyInput | LandingContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LandingContent update
   */
  export type LandingContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * The data needed to update a LandingContent.
     */
    data: XOR<LandingContentUpdateInput, LandingContentUncheckedUpdateInput>
    /**
     * Choose, which LandingContent to update.
     */
    where: LandingContentWhereUniqueInput
  }

  /**
   * LandingContent updateMany
   */
  export type LandingContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LandingContents.
     */
    data: XOR<LandingContentUpdateManyMutationInput, LandingContentUncheckedUpdateManyInput>
    /**
     * Filter which LandingContents to update
     */
    where?: LandingContentWhereInput
    /**
     * Limit how many LandingContents to update.
     */
    limit?: number
  }

  /**
   * LandingContent updateManyAndReturn
   */
  export type LandingContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * The data used to update LandingContents.
     */
    data: XOR<LandingContentUpdateManyMutationInput, LandingContentUncheckedUpdateManyInput>
    /**
     * Filter which LandingContents to update
     */
    where?: LandingContentWhereInput
    /**
     * Limit how many LandingContents to update.
     */
    limit?: number
  }

  /**
   * LandingContent upsert
   */
  export type LandingContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * The filter to search for the LandingContent to update in case it exists.
     */
    where: LandingContentWhereUniqueInput
    /**
     * In case the LandingContent found by the `where` argument doesn't exist, create a new LandingContent with this data.
     */
    create: XOR<LandingContentCreateInput, LandingContentUncheckedCreateInput>
    /**
     * In case the LandingContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LandingContentUpdateInput, LandingContentUncheckedUpdateInput>
  }

  /**
   * LandingContent delete
   */
  export type LandingContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
    /**
     * Filter which LandingContent to delete.
     */
    where: LandingContentWhereUniqueInput
  }

  /**
   * LandingContent deleteMany
   */
  export type LandingContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LandingContents to delete
     */
    where?: LandingContentWhereInput
    /**
     * Limit how many LandingContents to delete.
     */
    limit?: number
  }

  /**
   * LandingContent without action
   */
  export type LandingContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingContent
     */
    select?: LandingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingContent
     */
    omit?: LandingContentOmit<ExtArgs> | null
  }


  /**
   * Model QuizBotSettings
   */

  export type AggregateQuizBotSettings = {
    _count: QuizBotSettingsCountAggregateOutputType | null
    _min: QuizBotSettingsMinAggregateOutputType | null
    _max: QuizBotSettingsMaxAggregateOutputType | null
  }

  export type QuizBotSettingsMinAggregateOutputType = {
    id: string | null
    enabled: boolean | null
    welcomeMessage: string | null
    startButtonLabel: string | null
    completionMessage: string | null
    managerContactUrl: string | null
    channelUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizBotSettingsMaxAggregateOutputType = {
    id: string | null
    enabled: boolean | null
    welcomeMessage: string | null
    startButtonLabel: string | null
    completionMessage: string | null
    managerContactUrl: string | null
    channelUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizBotSettingsCountAggregateOutputType = {
    id: number
    enabled: number
    welcomeMessage: number
    startButtonLabel: number
    completionMessage: number
    managerContactUrl: number
    channelUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizBotSettingsMinAggregateInputType = {
    id?: true
    enabled?: true
    welcomeMessage?: true
    startButtonLabel?: true
    completionMessage?: true
    managerContactUrl?: true
    channelUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizBotSettingsMaxAggregateInputType = {
    id?: true
    enabled?: true
    welcomeMessage?: true
    startButtonLabel?: true
    completionMessage?: true
    managerContactUrl?: true
    channelUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizBotSettingsCountAggregateInputType = {
    id?: true
    enabled?: true
    welcomeMessage?: true
    startButtonLabel?: true
    completionMessage?: true
    managerContactUrl?: true
    channelUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizBotSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizBotSettings to aggregate.
     */
    where?: QuizBotSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizBotSettings to fetch.
     */
    orderBy?: QuizBotSettingsOrderByWithRelationInput | QuizBotSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizBotSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizBotSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizBotSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizBotSettings
    **/
    _count?: true | QuizBotSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizBotSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizBotSettingsMaxAggregateInputType
  }

  export type GetQuizBotSettingsAggregateType<T extends QuizBotSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizBotSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizBotSettings[P]>
      : GetScalarType<T[P], AggregateQuizBotSettings[P]>
  }




  export type QuizBotSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizBotSettingsWhereInput
    orderBy?: QuizBotSettingsOrderByWithAggregationInput | QuizBotSettingsOrderByWithAggregationInput[]
    by: QuizBotSettingsScalarFieldEnum[] | QuizBotSettingsScalarFieldEnum
    having?: QuizBotSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizBotSettingsCountAggregateInputType | true
    _min?: QuizBotSettingsMinAggregateInputType
    _max?: QuizBotSettingsMaxAggregateInputType
  }

  export type QuizBotSettingsGroupByOutputType = {
    id: string
    enabled: boolean
    welcomeMessage: string
    startButtonLabel: string
    completionMessage: string
    managerContactUrl: string | null
    channelUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuizBotSettingsCountAggregateOutputType | null
    _min: QuizBotSettingsMinAggregateOutputType | null
    _max: QuizBotSettingsMaxAggregateOutputType | null
  }

  type GetQuizBotSettingsGroupByPayload<T extends QuizBotSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizBotSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizBotSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizBotSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], QuizBotSettingsGroupByOutputType[P]>
        }
      >
    >


  export type QuizBotSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enabled?: boolean
    welcomeMessage?: boolean
    startButtonLabel?: boolean
    completionMessage?: boolean
    managerContactUrl?: boolean
    channelUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["quizBotSettings"]>

  export type QuizBotSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enabled?: boolean
    welcomeMessage?: boolean
    startButtonLabel?: boolean
    completionMessage?: boolean
    managerContactUrl?: boolean
    channelUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["quizBotSettings"]>

  export type QuizBotSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enabled?: boolean
    welcomeMessage?: boolean
    startButtonLabel?: boolean
    completionMessage?: boolean
    managerContactUrl?: boolean
    channelUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["quizBotSettings"]>

  export type QuizBotSettingsSelectScalar = {
    id?: boolean
    enabled?: boolean
    welcomeMessage?: boolean
    startButtonLabel?: boolean
    completionMessage?: boolean
    managerContactUrl?: boolean
    channelUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuizBotSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enabled" | "welcomeMessage" | "startButtonLabel" | "completionMessage" | "managerContactUrl" | "channelUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["quizBotSettings"]>

  export type $QuizBotSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizBotSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      enabled: boolean
      welcomeMessage: string
      startButtonLabel: string
      completionMessage: string
      managerContactUrl: string | null
      channelUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quizBotSettings"]>
    composites: {}
  }

  type QuizBotSettingsGetPayload<S extends boolean | null | undefined | QuizBotSettingsDefaultArgs> = $Result.GetResult<Prisma.$QuizBotSettingsPayload, S>

  type QuizBotSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizBotSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizBotSettingsCountAggregateInputType | true
    }

  export interface QuizBotSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizBotSettings'], meta: { name: 'QuizBotSettings' } }
    /**
     * Find zero or one QuizBotSettings that matches the filter.
     * @param {QuizBotSettingsFindUniqueArgs} args - Arguments to find a QuizBotSettings
     * @example
     * // Get one QuizBotSettings
     * const quizBotSettings = await prisma.quizBotSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizBotSettingsFindUniqueArgs>(args: SelectSubset<T, QuizBotSettingsFindUniqueArgs<ExtArgs>>): Prisma__QuizBotSettingsClient<$Result.GetResult<Prisma.$QuizBotSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizBotSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizBotSettingsFindUniqueOrThrowArgs} args - Arguments to find a QuizBotSettings
     * @example
     * // Get one QuizBotSettings
     * const quizBotSettings = await prisma.quizBotSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizBotSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizBotSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizBotSettingsClient<$Result.GetResult<Prisma.$QuizBotSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizBotSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBotSettingsFindFirstArgs} args - Arguments to find a QuizBotSettings
     * @example
     * // Get one QuizBotSettings
     * const quizBotSettings = await prisma.quizBotSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizBotSettingsFindFirstArgs>(args?: SelectSubset<T, QuizBotSettingsFindFirstArgs<ExtArgs>>): Prisma__QuizBotSettingsClient<$Result.GetResult<Prisma.$QuizBotSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizBotSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBotSettingsFindFirstOrThrowArgs} args - Arguments to find a QuizBotSettings
     * @example
     * // Get one QuizBotSettings
     * const quizBotSettings = await prisma.quizBotSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizBotSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizBotSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizBotSettingsClient<$Result.GetResult<Prisma.$QuizBotSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizBotSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBotSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizBotSettings
     * const quizBotSettings = await prisma.quizBotSettings.findMany()
     * 
     * // Get first 10 QuizBotSettings
     * const quizBotSettings = await prisma.quizBotSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizBotSettingsWithIdOnly = await prisma.quizBotSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizBotSettingsFindManyArgs>(args?: SelectSubset<T, QuizBotSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizBotSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizBotSettings.
     * @param {QuizBotSettingsCreateArgs} args - Arguments to create a QuizBotSettings.
     * @example
     * // Create one QuizBotSettings
     * const QuizBotSettings = await prisma.quizBotSettings.create({
     *   data: {
     *     // ... data to create a QuizBotSettings
     *   }
     * })
     * 
     */
    create<T extends QuizBotSettingsCreateArgs>(args: SelectSubset<T, QuizBotSettingsCreateArgs<ExtArgs>>): Prisma__QuizBotSettingsClient<$Result.GetResult<Prisma.$QuizBotSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizBotSettings.
     * @param {QuizBotSettingsCreateManyArgs} args - Arguments to create many QuizBotSettings.
     * @example
     * // Create many QuizBotSettings
     * const quizBotSettings = await prisma.quizBotSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizBotSettingsCreateManyArgs>(args?: SelectSubset<T, QuizBotSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizBotSettings and returns the data saved in the database.
     * @param {QuizBotSettingsCreateManyAndReturnArgs} args - Arguments to create many QuizBotSettings.
     * @example
     * // Create many QuizBotSettings
     * const quizBotSettings = await prisma.quizBotSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizBotSettings and only return the `id`
     * const quizBotSettingsWithIdOnly = await prisma.quizBotSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizBotSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizBotSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizBotSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizBotSettings.
     * @param {QuizBotSettingsDeleteArgs} args - Arguments to delete one QuizBotSettings.
     * @example
     * // Delete one QuizBotSettings
     * const QuizBotSettings = await prisma.quizBotSettings.delete({
     *   where: {
     *     // ... filter to delete one QuizBotSettings
     *   }
     * })
     * 
     */
    delete<T extends QuizBotSettingsDeleteArgs>(args: SelectSubset<T, QuizBotSettingsDeleteArgs<ExtArgs>>): Prisma__QuizBotSettingsClient<$Result.GetResult<Prisma.$QuizBotSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizBotSettings.
     * @param {QuizBotSettingsUpdateArgs} args - Arguments to update one QuizBotSettings.
     * @example
     * // Update one QuizBotSettings
     * const quizBotSettings = await prisma.quizBotSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizBotSettingsUpdateArgs>(args: SelectSubset<T, QuizBotSettingsUpdateArgs<ExtArgs>>): Prisma__QuizBotSettingsClient<$Result.GetResult<Prisma.$QuizBotSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizBotSettings.
     * @param {QuizBotSettingsDeleteManyArgs} args - Arguments to filter QuizBotSettings to delete.
     * @example
     * // Delete a few QuizBotSettings
     * const { count } = await prisma.quizBotSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizBotSettingsDeleteManyArgs>(args?: SelectSubset<T, QuizBotSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizBotSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBotSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizBotSettings
     * const quizBotSettings = await prisma.quizBotSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizBotSettingsUpdateManyArgs>(args: SelectSubset<T, QuizBotSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizBotSettings and returns the data updated in the database.
     * @param {QuizBotSettingsUpdateManyAndReturnArgs} args - Arguments to update many QuizBotSettings.
     * @example
     * // Update many QuizBotSettings
     * const quizBotSettings = await prisma.quizBotSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizBotSettings and only return the `id`
     * const quizBotSettingsWithIdOnly = await prisma.quizBotSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizBotSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizBotSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizBotSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizBotSettings.
     * @param {QuizBotSettingsUpsertArgs} args - Arguments to update or create a QuizBotSettings.
     * @example
     * // Update or create a QuizBotSettings
     * const quizBotSettings = await prisma.quizBotSettings.upsert({
     *   create: {
     *     // ... data to create a QuizBotSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizBotSettings we want to update
     *   }
     * })
     */
    upsert<T extends QuizBotSettingsUpsertArgs>(args: SelectSubset<T, QuizBotSettingsUpsertArgs<ExtArgs>>): Prisma__QuizBotSettingsClient<$Result.GetResult<Prisma.$QuizBotSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizBotSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBotSettingsCountArgs} args - Arguments to filter QuizBotSettings to count.
     * @example
     * // Count the number of QuizBotSettings
     * const count = await prisma.quizBotSettings.count({
     *   where: {
     *     // ... the filter for the QuizBotSettings we want to count
     *   }
     * })
    **/
    count<T extends QuizBotSettingsCountArgs>(
      args?: Subset<T, QuizBotSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizBotSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizBotSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBotSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizBotSettingsAggregateArgs>(args: Subset<T, QuizBotSettingsAggregateArgs>): Prisma.PrismaPromise<GetQuizBotSettingsAggregateType<T>>

    /**
     * Group by QuizBotSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBotSettingsGroupByArgs} args - Group by arguments.
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
      T extends QuizBotSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizBotSettingsGroupByArgs['orderBy'] }
        : { orderBy?: QuizBotSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizBotSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizBotSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizBotSettings model
   */
  readonly fields: QuizBotSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizBotSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizBotSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the QuizBotSettings model
   */
  interface QuizBotSettingsFieldRefs {
    readonly id: FieldRef<"QuizBotSettings", 'String'>
    readonly enabled: FieldRef<"QuizBotSettings", 'Boolean'>
    readonly welcomeMessage: FieldRef<"QuizBotSettings", 'String'>
    readonly startButtonLabel: FieldRef<"QuizBotSettings", 'String'>
    readonly completionMessage: FieldRef<"QuizBotSettings", 'String'>
    readonly managerContactUrl: FieldRef<"QuizBotSettings", 'String'>
    readonly channelUrl: FieldRef<"QuizBotSettings", 'String'>
    readonly createdAt: FieldRef<"QuizBotSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"QuizBotSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizBotSettings findUnique
   */
  export type QuizBotSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSettings
     */
    select?: QuizBotSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSettings
     */
    omit?: QuizBotSettingsOmit<ExtArgs> | null
    /**
     * Filter, which QuizBotSettings to fetch.
     */
    where: QuizBotSettingsWhereUniqueInput
  }

  /**
   * QuizBotSettings findUniqueOrThrow
   */
  export type QuizBotSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSettings
     */
    select?: QuizBotSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSettings
     */
    omit?: QuizBotSettingsOmit<ExtArgs> | null
    /**
     * Filter, which QuizBotSettings to fetch.
     */
    where: QuizBotSettingsWhereUniqueInput
  }

  /**
   * QuizBotSettings findFirst
   */
  export type QuizBotSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSettings
     */
    select?: QuizBotSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSettings
     */
    omit?: QuizBotSettingsOmit<ExtArgs> | null
    /**
     * Filter, which QuizBotSettings to fetch.
     */
    where?: QuizBotSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizBotSettings to fetch.
     */
    orderBy?: QuizBotSettingsOrderByWithRelationInput | QuizBotSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizBotSettings.
     */
    cursor?: QuizBotSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizBotSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizBotSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizBotSettings.
     */
    distinct?: QuizBotSettingsScalarFieldEnum | QuizBotSettingsScalarFieldEnum[]
  }

  /**
   * QuizBotSettings findFirstOrThrow
   */
  export type QuizBotSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSettings
     */
    select?: QuizBotSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSettings
     */
    omit?: QuizBotSettingsOmit<ExtArgs> | null
    /**
     * Filter, which QuizBotSettings to fetch.
     */
    where?: QuizBotSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizBotSettings to fetch.
     */
    orderBy?: QuizBotSettingsOrderByWithRelationInput | QuizBotSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizBotSettings.
     */
    cursor?: QuizBotSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizBotSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizBotSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizBotSettings.
     */
    distinct?: QuizBotSettingsScalarFieldEnum | QuizBotSettingsScalarFieldEnum[]
  }

  /**
   * QuizBotSettings findMany
   */
  export type QuizBotSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSettings
     */
    select?: QuizBotSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSettings
     */
    omit?: QuizBotSettingsOmit<ExtArgs> | null
    /**
     * Filter, which QuizBotSettings to fetch.
     */
    where?: QuizBotSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizBotSettings to fetch.
     */
    orderBy?: QuizBotSettingsOrderByWithRelationInput | QuizBotSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizBotSettings.
     */
    cursor?: QuizBotSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizBotSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizBotSettings.
     */
    skip?: number
    distinct?: QuizBotSettingsScalarFieldEnum | QuizBotSettingsScalarFieldEnum[]
  }

  /**
   * QuizBotSettings create
   */
  export type QuizBotSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSettings
     */
    select?: QuizBotSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSettings
     */
    omit?: QuizBotSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a QuizBotSettings.
     */
    data: XOR<QuizBotSettingsCreateInput, QuizBotSettingsUncheckedCreateInput>
  }

  /**
   * QuizBotSettings createMany
   */
  export type QuizBotSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizBotSettings.
     */
    data: QuizBotSettingsCreateManyInput | QuizBotSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizBotSettings createManyAndReturn
   */
  export type QuizBotSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSettings
     */
    select?: QuizBotSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSettings
     */
    omit?: QuizBotSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many QuizBotSettings.
     */
    data: QuizBotSettingsCreateManyInput | QuizBotSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizBotSettings update
   */
  export type QuizBotSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSettings
     */
    select?: QuizBotSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSettings
     */
    omit?: QuizBotSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a QuizBotSettings.
     */
    data: XOR<QuizBotSettingsUpdateInput, QuizBotSettingsUncheckedUpdateInput>
    /**
     * Choose, which QuizBotSettings to update.
     */
    where: QuizBotSettingsWhereUniqueInput
  }

  /**
   * QuizBotSettings updateMany
   */
  export type QuizBotSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizBotSettings.
     */
    data: XOR<QuizBotSettingsUpdateManyMutationInput, QuizBotSettingsUncheckedUpdateManyInput>
    /**
     * Filter which QuizBotSettings to update
     */
    where?: QuizBotSettingsWhereInput
    /**
     * Limit how many QuizBotSettings to update.
     */
    limit?: number
  }

  /**
   * QuizBotSettings updateManyAndReturn
   */
  export type QuizBotSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSettings
     */
    select?: QuizBotSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSettings
     */
    omit?: QuizBotSettingsOmit<ExtArgs> | null
    /**
     * The data used to update QuizBotSettings.
     */
    data: XOR<QuizBotSettingsUpdateManyMutationInput, QuizBotSettingsUncheckedUpdateManyInput>
    /**
     * Filter which QuizBotSettings to update
     */
    where?: QuizBotSettingsWhereInput
    /**
     * Limit how many QuizBotSettings to update.
     */
    limit?: number
  }

  /**
   * QuizBotSettings upsert
   */
  export type QuizBotSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSettings
     */
    select?: QuizBotSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSettings
     */
    omit?: QuizBotSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the QuizBotSettings to update in case it exists.
     */
    where: QuizBotSettingsWhereUniqueInput
    /**
     * In case the QuizBotSettings found by the `where` argument doesn't exist, create a new QuizBotSettings with this data.
     */
    create: XOR<QuizBotSettingsCreateInput, QuizBotSettingsUncheckedCreateInput>
    /**
     * In case the QuizBotSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizBotSettingsUpdateInput, QuizBotSettingsUncheckedUpdateInput>
  }

  /**
   * QuizBotSettings delete
   */
  export type QuizBotSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSettings
     */
    select?: QuizBotSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSettings
     */
    omit?: QuizBotSettingsOmit<ExtArgs> | null
    /**
     * Filter which QuizBotSettings to delete.
     */
    where: QuizBotSettingsWhereUniqueInput
  }

  /**
   * QuizBotSettings deleteMany
   */
  export type QuizBotSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizBotSettings to delete
     */
    where?: QuizBotSettingsWhereInput
    /**
     * Limit how many QuizBotSettings to delete.
     */
    limit?: number
  }

  /**
   * QuizBotSettings without action
   */
  export type QuizBotSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSettings
     */
    select?: QuizBotSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSettings
     */
    omit?: QuizBotSettingsOmit<ExtArgs> | null
  }


  /**
   * Model QuizBotSession
   */

  export type AggregateQuizBotSession = {
    _count: QuizBotSessionCountAggregateOutputType | null
    _min: QuizBotSessionMinAggregateOutputType | null
    _max: QuizBotSessionMaxAggregateOutputType | null
  }

  export type QuizBotSessionMinAggregateOutputType = {
    id: string | null
    chatId: string | null
    telegramUserId: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    step: string | null
    startParam: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizBotSessionMaxAggregateOutputType = {
    id: string | null
    chatId: string | null
    telegramUserId: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    step: string | null
    startParam: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizBotSessionCountAggregateOutputType = {
    id: number
    chatId: number
    telegramUserId: number
    username: number
    firstName: number
    lastName: number
    step: number
    startParam: number
    answers: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizBotSessionMinAggregateInputType = {
    id?: true
    chatId?: true
    telegramUserId?: true
    username?: true
    firstName?: true
    lastName?: true
    step?: true
    startParam?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizBotSessionMaxAggregateInputType = {
    id?: true
    chatId?: true
    telegramUserId?: true
    username?: true
    firstName?: true
    lastName?: true
    step?: true
    startParam?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizBotSessionCountAggregateInputType = {
    id?: true
    chatId?: true
    telegramUserId?: true
    username?: true
    firstName?: true
    lastName?: true
    step?: true
    startParam?: true
    answers?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizBotSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizBotSession to aggregate.
     */
    where?: QuizBotSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizBotSessions to fetch.
     */
    orderBy?: QuizBotSessionOrderByWithRelationInput | QuizBotSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizBotSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizBotSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizBotSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizBotSessions
    **/
    _count?: true | QuizBotSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizBotSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizBotSessionMaxAggregateInputType
  }

  export type GetQuizBotSessionAggregateType<T extends QuizBotSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizBotSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizBotSession[P]>
      : GetScalarType<T[P], AggregateQuizBotSession[P]>
  }




  export type QuizBotSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizBotSessionWhereInput
    orderBy?: QuizBotSessionOrderByWithAggregationInput | QuizBotSessionOrderByWithAggregationInput[]
    by: QuizBotSessionScalarFieldEnum[] | QuizBotSessionScalarFieldEnum
    having?: QuizBotSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizBotSessionCountAggregateInputType | true
    _min?: QuizBotSessionMinAggregateInputType
    _max?: QuizBotSessionMaxAggregateInputType
  }

  export type QuizBotSessionGroupByOutputType = {
    id: string
    chatId: string
    telegramUserId: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    step: string
    startParam: string | null
    answers: JsonValue
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: QuizBotSessionCountAggregateOutputType | null
    _min: QuizBotSessionMinAggregateOutputType | null
    _max: QuizBotSessionMaxAggregateOutputType | null
  }

  type GetQuizBotSessionGroupByPayload<T extends QuizBotSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizBotSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizBotSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizBotSessionGroupByOutputType[P]>
            : GetScalarType<T[P], QuizBotSessionGroupByOutputType[P]>
        }
      >
    >


  export type QuizBotSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    telegramUserId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    step?: boolean
    startParam?: boolean
    answers?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["quizBotSession"]>

  export type QuizBotSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    telegramUserId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    step?: boolean
    startParam?: boolean
    answers?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["quizBotSession"]>

  export type QuizBotSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    telegramUserId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    step?: boolean
    startParam?: boolean
    answers?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["quizBotSession"]>

  export type QuizBotSessionSelectScalar = {
    id?: boolean
    chatId?: boolean
    telegramUserId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    step?: boolean
    startParam?: boolean
    answers?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuizBotSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "telegramUserId" | "username" | "firstName" | "lastName" | "step" | "startParam" | "answers" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["quizBotSession"]>

  export type $QuizBotSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizBotSession"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatId: string
      telegramUserId: string | null
      username: string | null
      firstName: string | null
      lastName: string | null
      step: string
      startParam: string | null
      answers: Prisma.JsonValue
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quizBotSession"]>
    composites: {}
  }

  type QuizBotSessionGetPayload<S extends boolean | null | undefined | QuizBotSessionDefaultArgs> = $Result.GetResult<Prisma.$QuizBotSessionPayload, S>

  type QuizBotSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizBotSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizBotSessionCountAggregateInputType | true
    }

  export interface QuizBotSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizBotSession'], meta: { name: 'QuizBotSession' } }
    /**
     * Find zero or one QuizBotSession that matches the filter.
     * @param {QuizBotSessionFindUniqueArgs} args - Arguments to find a QuizBotSession
     * @example
     * // Get one QuizBotSession
     * const quizBotSession = await prisma.quizBotSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizBotSessionFindUniqueArgs>(args: SelectSubset<T, QuizBotSessionFindUniqueArgs<ExtArgs>>): Prisma__QuizBotSessionClient<$Result.GetResult<Prisma.$QuizBotSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizBotSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizBotSessionFindUniqueOrThrowArgs} args - Arguments to find a QuizBotSession
     * @example
     * // Get one QuizBotSession
     * const quizBotSession = await prisma.quizBotSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizBotSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizBotSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizBotSessionClient<$Result.GetResult<Prisma.$QuizBotSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizBotSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBotSessionFindFirstArgs} args - Arguments to find a QuizBotSession
     * @example
     * // Get one QuizBotSession
     * const quizBotSession = await prisma.quizBotSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizBotSessionFindFirstArgs>(args?: SelectSubset<T, QuizBotSessionFindFirstArgs<ExtArgs>>): Prisma__QuizBotSessionClient<$Result.GetResult<Prisma.$QuizBotSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizBotSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBotSessionFindFirstOrThrowArgs} args - Arguments to find a QuizBotSession
     * @example
     * // Get one QuizBotSession
     * const quizBotSession = await prisma.quizBotSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizBotSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizBotSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizBotSessionClient<$Result.GetResult<Prisma.$QuizBotSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizBotSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBotSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizBotSessions
     * const quizBotSessions = await prisma.quizBotSession.findMany()
     * 
     * // Get first 10 QuizBotSessions
     * const quizBotSessions = await prisma.quizBotSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizBotSessionWithIdOnly = await prisma.quizBotSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizBotSessionFindManyArgs>(args?: SelectSubset<T, QuizBotSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizBotSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizBotSession.
     * @param {QuizBotSessionCreateArgs} args - Arguments to create a QuizBotSession.
     * @example
     * // Create one QuizBotSession
     * const QuizBotSession = await prisma.quizBotSession.create({
     *   data: {
     *     // ... data to create a QuizBotSession
     *   }
     * })
     * 
     */
    create<T extends QuizBotSessionCreateArgs>(args: SelectSubset<T, QuizBotSessionCreateArgs<ExtArgs>>): Prisma__QuizBotSessionClient<$Result.GetResult<Prisma.$QuizBotSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizBotSessions.
     * @param {QuizBotSessionCreateManyArgs} args - Arguments to create many QuizBotSessions.
     * @example
     * // Create many QuizBotSessions
     * const quizBotSession = await prisma.quizBotSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizBotSessionCreateManyArgs>(args?: SelectSubset<T, QuizBotSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizBotSessions and returns the data saved in the database.
     * @param {QuizBotSessionCreateManyAndReturnArgs} args - Arguments to create many QuizBotSessions.
     * @example
     * // Create many QuizBotSessions
     * const quizBotSession = await prisma.quizBotSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizBotSessions and only return the `id`
     * const quizBotSessionWithIdOnly = await prisma.quizBotSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizBotSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizBotSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizBotSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizBotSession.
     * @param {QuizBotSessionDeleteArgs} args - Arguments to delete one QuizBotSession.
     * @example
     * // Delete one QuizBotSession
     * const QuizBotSession = await prisma.quizBotSession.delete({
     *   where: {
     *     // ... filter to delete one QuizBotSession
     *   }
     * })
     * 
     */
    delete<T extends QuizBotSessionDeleteArgs>(args: SelectSubset<T, QuizBotSessionDeleteArgs<ExtArgs>>): Prisma__QuizBotSessionClient<$Result.GetResult<Prisma.$QuizBotSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizBotSession.
     * @param {QuizBotSessionUpdateArgs} args - Arguments to update one QuizBotSession.
     * @example
     * // Update one QuizBotSession
     * const quizBotSession = await prisma.quizBotSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizBotSessionUpdateArgs>(args: SelectSubset<T, QuizBotSessionUpdateArgs<ExtArgs>>): Prisma__QuizBotSessionClient<$Result.GetResult<Prisma.$QuizBotSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizBotSessions.
     * @param {QuizBotSessionDeleteManyArgs} args - Arguments to filter QuizBotSessions to delete.
     * @example
     * // Delete a few QuizBotSessions
     * const { count } = await prisma.quizBotSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizBotSessionDeleteManyArgs>(args?: SelectSubset<T, QuizBotSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizBotSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBotSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizBotSessions
     * const quizBotSession = await prisma.quizBotSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizBotSessionUpdateManyArgs>(args: SelectSubset<T, QuizBotSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizBotSessions and returns the data updated in the database.
     * @param {QuizBotSessionUpdateManyAndReturnArgs} args - Arguments to update many QuizBotSessions.
     * @example
     * // Update many QuizBotSessions
     * const quizBotSession = await prisma.quizBotSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizBotSessions and only return the `id`
     * const quizBotSessionWithIdOnly = await prisma.quizBotSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizBotSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizBotSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizBotSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizBotSession.
     * @param {QuizBotSessionUpsertArgs} args - Arguments to update or create a QuizBotSession.
     * @example
     * // Update or create a QuizBotSession
     * const quizBotSession = await prisma.quizBotSession.upsert({
     *   create: {
     *     // ... data to create a QuizBotSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizBotSession we want to update
     *   }
     * })
     */
    upsert<T extends QuizBotSessionUpsertArgs>(args: SelectSubset<T, QuizBotSessionUpsertArgs<ExtArgs>>): Prisma__QuizBotSessionClient<$Result.GetResult<Prisma.$QuizBotSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizBotSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBotSessionCountArgs} args - Arguments to filter QuizBotSessions to count.
     * @example
     * // Count the number of QuizBotSessions
     * const count = await prisma.quizBotSession.count({
     *   where: {
     *     // ... the filter for the QuizBotSessions we want to count
     *   }
     * })
    **/
    count<T extends QuizBotSessionCountArgs>(
      args?: Subset<T, QuizBotSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizBotSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizBotSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBotSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizBotSessionAggregateArgs>(args: Subset<T, QuizBotSessionAggregateArgs>): Prisma.PrismaPromise<GetQuizBotSessionAggregateType<T>>

    /**
     * Group by QuizBotSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBotSessionGroupByArgs} args - Group by arguments.
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
      T extends QuizBotSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizBotSessionGroupByArgs['orderBy'] }
        : { orderBy?: QuizBotSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizBotSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizBotSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizBotSession model
   */
  readonly fields: QuizBotSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizBotSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizBotSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the QuizBotSession model
   */
  interface QuizBotSessionFieldRefs {
    readonly id: FieldRef<"QuizBotSession", 'String'>
    readonly chatId: FieldRef<"QuizBotSession", 'String'>
    readonly telegramUserId: FieldRef<"QuizBotSession", 'String'>
    readonly username: FieldRef<"QuizBotSession", 'String'>
    readonly firstName: FieldRef<"QuizBotSession", 'String'>
    readonly lastName: FieldRef<"QuizBotSession", 'String'>
    readonly step: FieldRef<"QuizBotSession", 'String'>
    readonly startParam: FieldRef<"QuizBotSession", 'String'>
    readonly answers: FieldRef<"QuizBotSession", 'Json'>
    readonly completedAt: FieldRef<"QuizBotSession", 'DateTime'>
    readonly createdAt: FieldRef<"QuizBotSession", 'DateTime'>
    readonly updatedAt: FieldRef<"QuizBotSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizBotSession findUnique
   */
  export type QuizBotSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSession
     */
    select?: QuizBotSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSession
     */
    omit?: QuizBotSessionOmit<ExtArgs> | null
    /**
     * Filter, which QuizBotSession to fetch.
     */
    where: QuizBotSessionWhereUniqueInput
  }

  /**
   * QuizBotSession findUniqueOrThrow
   */
  export type QuizBotSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSession
     */
    select?: QuizBotSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSession
     */
    omit?: QuizBotSessionOmit<ExtArgs> | null
    /**
     * Filter, which QuizBotSession to fetch.
     */
    where: QuizBotSessionWhereUniqueInput
  }

  /**
   * QuizBotSession findFirst
   */
  export type QuizBotSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSession
     */
    select?: QuizBotSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSession
     */
    omit?: QuizBotSessionOmit<ExtArgs> | null
    /**
     * Filter, which QuizBotSession to fetch.
     */
    where?: QuizBotSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizBotSessions to fetch.
     */
    orderBy?: QuizBotSessionOrderByWithRelationInput | QuizBotSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizBotSessions.
     */
    cursor?: QuizBotSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizBotSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizBotSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizBotSessions.
     */
    distinct?: QuizBotSessionScalarFieldEnum | QuizBotSessionScalarFieldEnum[]
  }

  /**
   * QuizBotSession findFirstOrThrow
   */
  export type QuizBotSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSession
     */
    select?: QuizBotSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSession
     */
    omit?: QuizBotSessionOmit<ExtArgs> | null
    /**
     * Filter, which QuizBotSession to fetch.
     */
    where?: QuizBotSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizBotSessions to fetch.
     */
    orderBy?: QuizBotSessionOrderByWithRelationInput | QuizBotSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizBotSessions.
     */
    cursor?: QuizBotSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizBotSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizBotSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizBotSessions.
     */
    distinct?: QuizBotSessionScalarFieldEnum | QuizBotSessionScalarFieldEnum[]
  }

  /**
   * QuizBotSession findMany
   */
  export type QuizBotSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSession
     */
    select?: QuizBotSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSession
     */
    omit?: QuizBotSessionOmit<ExtArgs> | null
    /**
     * Filter, which QuizBotSessions to fetch.
     */
    where?: QuizBotSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizBotSessions to fetch.
     */
    orderBy?: QuizBotSessionOrderByWithRelationInput | QuizBotSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizBotSessions.
     */
    cursor?: QuizBotSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizBotSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizBotSessions.
     */
    skip?: number
    distinct?: QuizBotSessionScalarFieldEnum | QuizBotSessionScalarFieldEnum[]
  }

  /**
   * QuizBotSession create
   */
  export type QuizBotSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSession
     */
    select?: QuizBotSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSession
     */
    omit?: QuizBotSessionOmit<ExtArgs> | null
    /**
     * The data needed to create a QuizBotSession.
     */
    data: XOR<QuizBotSessionCreateInput, QuizBotSessionUncheckedCreateInput>
  }

  /**
   * QuizBotSession createMany
   */
  export type QuizBotSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizBotSessions.
     */
    data: QuizBotSessionCreateManyInput | QuizBotSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizBotSession createManyAndReturn
   */
  export type QuizBotSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSession
     */
    select?: QuizBotSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSession
     */
    omit?: QuizBotSessionOmit<ExtArgs> | null
    /**
     * The data used to create many QuizBotSessions.
     */
    data: QuizBotSessionCreateManyInput | QuizBotSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizBotSession update
   */
  export type QuizBotSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSession
     */
    select?: QuizBotSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSession
     */
    omit?: QuizBotSessionOmit<ExtArgs> | null
    /**
     * The data needed to update a QuizBotSession.
     */
    data: XOR<QuizBotSessionUpdateInput, QuizBotSessionUncheckedUpdateInput>
    /**
     * Choose, which QuizBotSession to update.
     */
    where: QuizBotSessionWhereUniqueInput
  }

  /**
   * QuizBotSession updateMany
   */
  export type QuizBotSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizBotSessions.
     */
    data: XOR<QuizBotSessionUpdateManyMutationInput, QuizBotSessionUncheckedUpdateManyInput>
    /**
     * Filter which QuizBotSessions to update
     */
    where?: QuizBotSessionWhereInput
    /**
     * Limit how many QuizBotSessions to update.
     */
    limit?: number
  }

  /**
   * QuizBotSession updateManyAndReturn
   */
  export type QuizBotSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSession
     */
    select?: QuizBotSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSession
     */
    omit?: QuizBotSessionOmit<ExtArgs> | null
    /**
     * The data used to update QuizBotSessions.
     */
    data: XOR<QuizBotSessionUpdateManyMutationInput, QuizBotSessionUncheckedUpdateManyInput>
    /**
     * Filter which QuizBotSessions to update
     */
    where?: QuizBotSessionWhereInput
    /**
     * Limit how many QuizBotSessions to update.
     */
    limit?: number
  }

  /**
   * QuizBotSession upsert
   */
  export type QuizBotSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSession
     */
    select?: QuizBotSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSession
     */
    omit?: QuizBotSessionOmit<ExtArgs> | null
    /**
     * The filter to search for the QuizBotSession to update in case it exists.
     */
    where: QuizBotSessionWhereUniqueInput
    /**
     * In case the QuizBotSession found by the `where` argument doesn't exist, create a new QuizBotSession with this data.
     */
    create: XOR<QuizBotSessionCreateInput, QuizBotSessionUncheckedCreateInput>
    /**
     * In case the QuizBotSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizBotSessionUpdateInput, QuizBotSessionUncheckedUpdateInput>
  }

  /**
   * QuizBotSession delete
   */
  export type QuizBotSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSession
     */
    select?: QuizBotSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSession
     */
    omit?: QuizBotSessionOmit<ExtArgs> | null
    /**
     * Filter which QuizBotSession to delete.
     */
    where: QuizBotSessionWhereUniqueInput
  }

  /**
   * QuizBotSession deleteMany
   */
  export type QuizBotSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizBotSessions to delete
     */
    where?: QuizBotSessionWhereInput
    /**
     * Limit how many QuizBotSessions to delete.
     */
    limit?: number
  }

  /**
   * QuizBotSession without action
   */
  export type QuizBotSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBotSession
     */
    select?: QuizBotSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBotSession
     */
    omit?: QuizBotSessionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LandingPageScalarFieldEnum: {
    id: 'id',
    urlPath: 'urlPath',
    name: 'name',
    headerPhrase: 'headerPhrase',
    heroImage: 'heroImage',
    heroHeading: 'heroHeading',
    heroDescription: 'heroDescription',
    heroSupport: 'heroSupport',
    buttonLabel: 'buttonLabel',
    contact: 'contact',
    videoUrl: 'videoUrl',
    nextScreenTitle: 'nextScreenTitle',
    nextScreenDescription: 'nextScreenDescription',
    nextScreenQuestion: 'nextScreenQuestion',
    telegramEnabled: 'telegramEnabled',
    whatsappEnabled: 'whatsappEnabled',
    customScript: 'customScript',
    telegramBotToken: 'telegramBotToken',
    telegramChatIds: 'telegramChatIds',
    logoPath: 'logoPath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LandingPageScalarFieldEnum = (typeof LandingPageScalarFieldEnum)[keyof typeof LandingPageScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    channel: 'channel',
    source: 'source',
    contact: 'contact',
    message: 'message',
    telegramUserId: 'telegramUserId',
    telegramUsername: 'telegramUsername',
    telegramFirstName: 'telegramFirstName',
    telegramLastName: 'telegramLastName',
    ipAddress: 'ipAddress',
    country: 'country',
    landingPageId: 'landingPageId',
    pagePath: 'pagePath',
    utmSource: 'utmSource',
    utmMedium: 'utmMedium',
    utmCampaign: 'utmCampaign',
    utmContent: 'utmContent',
    utmTerm: 'utmTerm',
    gclid: 'gclid',
    gbraid: 'gbraid',
    wbraid: 'wbraid',
    fbclid: 'fbclid',
    createdAt: 'createdAt'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const LandingContentScalarFieldEnum: {
    id: 'id',
    defaultLandingName: 'defaultLandingName',
    headerPhrase: 'headerPhrase',
    heroImage: 'heroImage',
    heroHeading: 'heroHeading',
    heroDescription: 'heroDescription',
    heroSupport: 'heroSupport',
    buttonLabel: 'buttonLabel',
    contact: 'contact',
    videoUrl: 'videoUrl',
    nextScreenTitle: 'nextScreenTitle',
    nextScreenDescription: 'nextScreenDescription',
    nextScreenQuestion: 'nextScreenQuestion',
    telegramEnabled: 'telegramEnabled',
    whatsappEnabled: 'whatsappEnabled',
    customScript: 'customScript',
    telegramBotToken: 'telegramBotToken',
    telegramChatIds: 'telegramChatIds',
    logoPath: 'logoPath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LandingContentScalarFieldEnum = (typeof LandingContentScalarFieldEnum)[keyof typeof LandingContentScalarFieldEnum]


  export const QuizBotSettingsScalarFieldEnum: {
    id: 'id',
    enabled: 'enabled',
    welcomeMessage: 'welcomeMessage',
    startButtonLabel: 'startButtonLabel',
    completionMessage: 'completionMessage',
    managerContactUrl: 'managerContactUrl',
    channelUrl: 'channelUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizBotSettingsScalarFieldEnum = (typeof QuizBotSettingsScalarFieldEnum)[keyof typeof QuizBotSettingsScalarFieldEnum]


  export const QuizBotSessionScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    telegramUserId: 'telegramUserId',
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    step: 'step',
    startParam: 'startParam',
    answers: 'answers',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizBotSessionScalarFieldEnum = (typeof QuizBotSessionScalarFieldEnum)[keyof typeof QuizBotSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Channel'
   */
  export type EnumChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Channel'>
    


  /**
   * Reference to a field of type 'Channel[]'
   */
  export type ListEnumChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Channel[]'>
    


  /**
   * Reference to a field of type 'LeadSource'
   */
  export type EnumLeadSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadSource'>
    


  /**
   * Reference to a field of type 'LeadSource[]'
   */
  export type ListEnumLeadSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadSource[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type LandingPageWhereInput = {
    AND?: LandingPageWhereInput | LandingPageWhereInput[]
    OR?: LandingPageWhereInput[]
    NOT?: LandingPageWhereInput | LandingPageWhereInput[]
    id?: StringFilter<"LandingPage"> | string
    urlPath?: StringFilter<"LandingPage"> | string
    name?: StringFilter<"LandingPage"> | string
    headerPhrase?: StringFilter<"LandingPage"> | string
    heroImage?: StringNullableFilter<"LandingPage"> | string | null
    heroHeading?: StringFilter<"LandingPage"> | string
    heroDescription?: StringFilter<"LandingPage"> | string
    heroSupport?: StringFilter<"LandingPage"> | string
    buttonLabel?: StringFilter<"LandingPage"> | string
    contact?: StringFilter<"LandingPage"> | string
    videoUrl?: StringFilter<"LandingPage"> | string
    nextScreenTitle?: StringFilter<"LandingPage"> | string
    nextScreenDescription?: StringFilter<"LandingPage"> | string
    nextScreenQuestion?: StringFilter<"LandingPage"> | string
    telegramEnabled?: BoolFilter<"LandingPage"> | boolean
    whatsappEnabled?: BoolFilter<"LandingPage"> | boolean
    customScript?: StringNullableFilter<"LandingPage"> | string | null
    telegramBotToken?: StringNullableFilter<"LandingPage"> | string | null
    telegramChatIds?: StringNullableFilter<"LandingPage"> | string | null
    logoPath?: StringFilter<"LandingPage"> | string
    createdAt?: DateTimeFilter<"LandingPage"> | Date | string
    updatedAt?: DateTimeFilter<"LandingPage"> | Date | string
    leads?: LeadListRelationFilter
  }

  export type LandingPageOrderByWithRelationInput = {
    id?: SortOrder
    urlPath?: SortOrder
    name?: SortOrder
    headerPhrase?: SortOrder
    heroImage?: SortOrderInput | SortOrder
    heroHeading?: SortOrder
    heroDescription?: SortOrder
    heroSupport?: SortOrder
    buttonLabel?: SortOrder
    contact?: SortOrder
    videoUrl?: SortOrder
    nextScreenTitle?: SortOrder
    nextScreenDescription?: SortOrder
    nextScreenQuestion?: SortOrder
    telegramEnabled?: SortOrder
    whatsappEnabled?: SortOrder
    customScript?: SortOrderInput | SortOrder
    telegramBotToken?: SortOrderInput | SortOrder
    telegramChatIds?: SortOrderInput | SortOrder
    logoPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    leads?: LeadOrderByRelationAggregateInput
  }

  export type LandingPageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    urlPath?: string
    AND?: LandingPageWhereInput | LandingPageWhereInput[]
    OR?: LandingPageWhereInput[]
    NOT?: LandingPageWhereInput | LandingPageWhereInput[]
    name?: StringFilter<"LandingPage"> | string
    headerPhrase?: StringFilter<"LandingPage"> | string
    heroImage?: StringNullableFilter<"LandingPage"> | string | null
    heroHeading?: StringFilter<"LandingPage"> | string
    heroDescription?: StringFilter<"LandingPage"> | string
    heroSupport?: StringFilter<"LandingPage"> | string
    buttonLabel?: StringFilter<"LandingPage"> | string
    contact?: StringFilter<"LandingPage"> | string
    videoUrl?: StringFilter<"LandingPage"> | string
    nextScreenTitle?: StringFilter<"LandingPage"> | string
    nextScreenDescription?: StringFilter<"LandingPage"> | string
    nextScreenQuestion?: StringFilter<"LandingPage"> | string
    telegramEnabled?: BoolFilter<"LandingPage"> | boolean
    whatsappEnabled?: BoolFilter<"LandingPage"> | boolean
    customScript?: StringNullableFilter<"LandingPage"> | string | null
    telegramBotToken?: StringNullableFilter<"LandingPage"> | string | null
    telegramChatIds?: StringNullableFilter<"LandingPage"> | string | null
    logoPath?: StringFilter<"LandingPage"> | string
    createdAt?: DateTimeFilter<"LandingPage"> | Date | string
    updatedAt?: DateTimeFilter<"LandingPage"> | Date | string
    leads?: LeadListRelationFilter
  }, "id" | "urlPath">

  export type LandingPageOrderByWithAggregationInput = {
    id?: SortOrder
    urlPath?: SortOrder
    name?: SortOrder
    headerPhrase?: SortOrder
    heroImage?: SortOrderInput | SortOrder
    heroHeading?: SortOrder
    heroDescription?: SortOrder
    heroSupport?: SortOrder
    buttonLabel?: SortOrder
    contact?: SortOrder
    videoUrl?: SortOrder
    nextScreenTitle?: SortOrder
    nextScreenDescription?: SortOrder
    nextScreenQuestion?: SortOrder
    telegramEnabled?: SortOrder
    whatsappEnabled?: SortOrder
    customScript?: SortOrderInput | SortOrder
    telegramBotToken?: SortOrderInput | SortOrder
    telegramChatIds?: SortOrderInput | SortOrder
    logoPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LandingPageCountOrderByAggregateInput
    _max?: LandingPageMaxOrderByAggregateInput
    _min?: LandingPageMinOrderByAggregateInput
  }

  export type LandingPageScalarWhereWithAggregatesInput = {
    AND?: LandingPageScalarWhereWithAggregatesInput | LandingPageScalarWhereWithAggregatesInput[]
    OR?: LandingPageScalarWhereWithAggregatesInput[]
    NOT?: LandingPageScalarWhereWithAggregatesInput | LandingPageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LandingPage"> | string
    urlPath?: StringWithAggregatesFilter<"LandingPage"> | string
    name?: StringWithAggregatesFilter<"LandingPage"> | string
    headerPhrase?: StringWithAggregatesFilter<"LandingPage"> | string
    heroImage?: StringNullableWithAggregatesFilter<"LandingPage"> | string | null
    heroHeading?: StringWithAggregatesFilter<"LandingPage"> | string
    heroDescription?: StringWithAggregatesFilter<"LandingPage"> | string
    heroSupport?: StringWithAggregatesFilter<"LandingPage"> | string
    buttonLabel?: StringWithAggregatesFilter<"LandingPage"> | string
    contact?: StringWithAggregatesFilter<"LandingPage"> | string
    videoUrl?: StringWithAggregatesFilter<"LandingPage"> | string
    nextScreenTitle?: StringWithAggregatesFilter<"LandingPage"> | string
    nextScreenDescription?: StringWithAggregatesFilter<"LandingPage"> | string
    nextScreenQuestion?: StringWithAggregatesFilter<"LandingPage"> | string
    telegramEnabled?: BoolWithAggregatesFilter<"LandingPage"> | boolean
    whatsappEnabled?: BoolWithAggregatesFilter<"LandingPage"> | boolean
    customScript?: StringNullableWithAggregatesFilter<"LandingPage"> | string | null
    telegramBotToken?: StringNullableWithAggregatesFilter<"LandingPage"> | string | null
    telegramChatIds?: StringNullableWithAggregatesFilter<"LandingPage"> | string | null
    logoPath?: StringWithAggregatesFilter<"LandingPage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LandingPage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LandingPage"> | Date | string
  }

  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: StringFilter<"Lead"> | string
    channel?: EnumChannelFilter<"Lead"> | $Enums.Channel
    source?: EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource
    contact?: StringFilter<"Lead"> | string
    message?: StringNullableFilter<"Lead"> | string | null
    telegramUserId?: StringNullableFilter<"Lead"> | string | null
    telegramUsername?: StringNullableFilter<"Lead"> | string | null
    telegramFirstName?: StringNullableFilter<"Lead"> | string | null
    telegramLastName?: StringNullableFilter<"Lead"> | string | null
    ipAddress?: StringNullableFilter<"Lead"> | string | null
    country?: StringNullableFilter<"Lead"> | string | null
    landingPageId?: StringNullableFilter<"Lead"> | string | null
    pagePath?: StringNullableFilter<"Lead"> | string | null
    utmSource?: StringNullableFilter<"Lead"> | string | null
    utmMedium?: StringNullableFilter<"Lead"> | string | null
    utmCampaign?: StringNullableFilter<"Lead"> | string | null
    utmContent?: StringNullableFilter<"Lead"> | string | null
    utmTerm?: StringNullableFilter<"Lead"> | string | null
    gclid?: StringNullableFilter<"Lead"> | string | null
    gbraid?: StringNullableFilter<"Lead"> | string | null
    wbraid?: StringNullableFilter<"Lead"> | string | null
    fbclid?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    landingPage?: XOR<LandingPageNullableScalarRelationFilter, LandingPageWhereInput> | null
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    channel?: SortOrder
    source?: SortOrder
    contact?: SortOrder
    message?: SortOrderInput | SortOrder
    telegramUserId?: SortOrderInput | SortOrder
    telegramUsername?: SortOrderInput | SortOrder
    telegramFirstName?: SortOrderInput | SortOrder
    telegramLastName?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    landingPageId?: SortOrderInput | SortOrder
    pagePath?: SortOrderInput | SortOrder
    utmSource?: SortOrderInput | SortOrder
    utmMedium?: SortOrderInput | SortOrder
    utmCampaign?: SortOrderInput | SortOrder
    utmContent?: SortOrderInput | SortOrder
    utmTerm?: SortOrderInput | SortOrder
    gclid?: SortOrderInput | SortOrder
    gbraid?: SortOrderInput | SortOrder
    wbraid?: SortOrderInput | SortOrder
    fbclid?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    landingPage?: LandingPageOrderByWithRelationInput
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    channel?: EnumChannelFilter<"Lead"> | $Enums.Channel
    source?: EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource
    contact?: StringFilter<"Lead"> | string
    message?: StringNullableFilter<"Lead"> | string | null
    telegramUserId?: StringNullableFilter<"Lead"> | string | null
    telegramUsername?: StringNullableFilter<"Lead"> | string | null
    telegramFirstName?: StringNullableFilter<"Lead"> | string | null
    telegramLastName?: StringNullableFilter<"Lead"> | string | null
    ipAddress?: StringNullableFilter<"Lead"> | string | null
    country?: StringNullableFilter<"Lead"> | string | null
    landingPageId?: StringNullableFilter<"Lead"> | string | null
    pagePath?: StringNullableFilter<"Lead"> | string | null
    utmSource?: StringNullableFilter<"Lead"> | string | null
    utmMedium?: StringNullableFilter<"Lead"> | string | null
    utmCampaign?: StringNullableFilter<"Lead"> | string | null
    utmContent?: StringNullableFilter<"Lead"> | string | null
    utmTerm?: StringNullableFilter<"Lead"> | string | null
    gclid?: StringNullableFilter<"Lead"> | string | null
    gbraid?: StringNullableFilter<"Lead"> | string | null
    wbraid?: StringNullableFilter<"Lead"> | string | null
    fbclid?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    landingPage?: XOR<LandingPageNullableScalarRelationFilter, LandingPageWhereInput> | null
  }, "id">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    channel?: SortOrder
    source?: SortOrder
    contact?: SortOrder
    message?: SortOrderInput | SortOrder
    telegramUserId?: SortOrderInput | SortOrder
    telegramUsername?: SortOrderInput | SortOrder
    telegramFirstName?: SortOrderInput | SortOrder
    telegramLastName?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    landingPageId?: SortOrderInput | SortOrder
    pagePath?: SortOrderInput | SortOrder
    utmSource?: SortOrderInput | SortOrder
    utmMedium?: SortOrderInput | SortOrder
    utmCampaign?: SortOrderInput | SortOrder
    utmContent?: SortOrderInput | SortOrder
    utmTerm?: SortOrderInput | SortOrder
    gclid?: SortOrderInput | SortOrder
    gbraid?: SortOrderInput | SortOrder
    wbraid?: SortOrderInput | SortOrder
    fbclid?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lead"> | string
    channel?: EnumChannelWithAggregatesFilter<"Lead"> | $Enums.Channel
    source?: EnumLeadSourceWithAggregatesFilter<"Lead"> | $Enums.LeadSource
    contact?: StringWithAggregatesFilter<"Lead"> | string
    message?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    telegramUserId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    telegramUsername?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    telegramFirstName?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    telegramLastName?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    country?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    landingPageId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    pagePath?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    utmSource?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    utmMedium?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    utmCampaign?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    utmContent?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    utmTerm?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    gclid?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    gbraid?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    wbraid?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    fbclid?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
  }

  export type LandingContentWhereInput = {
    AND?: LandingContentWhereInput | LandingContentWhereInput[]
    OR?: LandingContentWhereInput[]
    NOT?: LandingContentWhereInput | LandingContentWhereInput[]
    id?: StringFilter<"LandingContent"> | string
    defaultLandingName?: StringFilter<"LandingContent"> | string
    headerPhrase?: StringFilter<"LandingContent"> | string
    heroImage?: StringNullableFilter<"LandingContent"> | string | null
    heroHeading?: StringFilter<"LandingContent"> | string
    heroDescription?: StringFilter<"LandingContent"> | string
    heroSupport?: StringFilter<"LandingContent"> | string
    buttonLabel?: StringFilter<"LandingContent"> | string
    contact?: StringFilter<"LandingContent"> | string
    videoUrl?: StringFilter<"LandingContent"> | string
    nextScreenTitle?: StringFilter<"LandingContent"> | string
    nextScreenDescription?: StringFilter<"LandingContent"> | string
    nextScreenQuestion?: StringFilter<"LandingContent"> | string
    telegramEnabled?: BoolFilter<"LandingContent"> | boolean
    whatsappEnabled?: BoolFilter<"LandingContent"> | boolean
    customScript?: StringNullableFilter<"LandingContent"> | string | null
    telegramBotToken?: StringNullableFilter<"LandingContent"> | string | null
    telegramChatIds?: StringNullableFilter<"LandingContent"> | string | null
    logoPath?: StringFilter<"LandingContent"> | string
    createdAt?: DateTimeFilter<"LandingContent"> | Date | string
    updatedAt?: DateTimeFilter<"LandingContent"> | Date | string
  }

  export type LandingContentOrderByWithRelationInput = {
    id?: SortOrder
    defaultLandingName?: SortOrder
    headerPhrase?: SortOrder
    heroImage?: SortOrderInput | SortOrder
    heroHeading?: SortOrder
    heroDescription?: SortOrder
    heroSupport?: SortOrder
    buttonLabel?: SortOrder
    contact?: SortOrder
    videoUrl?: SortOrder
    nextScreenTitle?: SortOrder
    nextScreenDescription?: SortOrder
    nextScreenQuestion?: SortOrder
    telegramEnabled?: SortOrder
    whatsappEnabled?: SortOrder
    customScript?: SortOrderInput | SortOrder
    telegramBotToken?: SortOrderInput | SortOrder
    telegramChatIds?: SortOrderInput | SortOrder
    logoPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LandingContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LandingContentWhereInput | LandingContentWhereInput[]
    OR?: LandingContentWhereInput[]
    NOT?: LandingContentWhereInput | LandingContentWhereInput[]
    defaultLandingName?: StringFilter<"LandingContent"> | string
    headerPhrase?: StringFilter<"LandingContent"> | string
    heroImage?: StringNullableFilter<"LandingContent"> | string | null
    heroHeading?: StringFilter<"LandingContent"> | string
    heroDescription?: StringFilter<"LandingContent"> | string
    heroSupport?: StringFilter<"LandingContent"> | string
    buttonLabel?: StringFilter<"LandingContent"> | string
    contact?: StringFilter<"LandingContent"> | string
    videoUrl?: StringFilter<"LandingContent"> | string
    nextScreenTitle?: StringFilter<"LandingContent"> | string
    nextScreenDescription?: StringFilter<"LandingContent"> | string
    nextScreenQuestion?: StringFilter<"LandingContent"> | string
    telegramEnabled?: BoolFilter<"LandingContent"> | boolean
    whatsappEnabled?: BoolFilter<"LandingContent"> | boolean
    customScript?: StringNullableFilter<"LandingContent"> | string | null
    telegramBotToken?: StringNullableFilter<"LandingContent"> | string | null
    telegramChatIds?: StringNullableFilter<"LandingContent"> | string | null
    logoPath?: StringFilter<"LandingContent"> | string
    createdAt?: DateTimeFilter<"LandingContent"> | Date | string
    updatedAt?: DateTimeFilter<"LandingContent"> | Date | string
  }, "id">

  export type LandingContentOrderByWithAggregationInput = {
    id?: SortOrder
    defaultLandingName?: SortOrder
    headerPhrase?: SortOrder
    heroImage?: SortOrderInput | SortOrder
    heroHeading?: SortOrder
    heroDescription?: SortOrder
    heroSupport?: SortOrder
    buttonLabel?: SortOrder
    contact?: SortOrder
    videoUrl?: SortOrder
    nextScreenTitle?: SortOrder
    nextScreenDescription?: SortOrder
    nextScreenQuestion?: SortOrder
    telegramEnabled?: SortOrder
    whatsappEnabled?: SortOrder
    customScript?: SortOrderInput | SortOrder
    telegramBotToken?: SortOrderInput | SortOrder
    telegramChatIds?: SortOrderInput | SortOrder
    logoPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LandingContentCountOrderByAggregateInput
    _max?: LandingContentMaxOrderByAggregateInput
    _min?: LandingContentMinOrderByAggregateInput
  }

  export type LandingContentScalarWhereWithAggregatesInput = {
    AND?: LandingContentScalarWhereWithAggregatesInput | LandingContentScalarWhereWithAggregatesInput[]
    OR?: LandingContentScalarWhereWithAggregatesInput[]
    NOT?: LandingContentScalarWhereWithAggregatesInput | LandingContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LandingContent"> | string
    defaultLandingName?: StringWithAggregatesFilter<"LandingContent"> | string
    headerPhrase?: StringWithAggregatesFilter<"LandingContent"> | string
    heroImage?: StringNullableWithAggregatesFilter<"LandingContent"> | string | null
    heroHeading?: StringWithAggregatesFilter<"LandingContent"> | string
    heroDescription?: StringWithAggregatesFilter<"LandingContent"> | string
    heroSupport?: StringWithAggregatesFilter<"LandingContent"> | string
    buttonLabel?: StringWithAggregatesFilter<"LandingContent"> | string
    contact?: StringWithAggregatesFilter<"LandingContent"> | string
    videoUrl?: StringWithAggregatesFilter<"LandingContent"> | string
    nextScreenTitle?: StringWithAggregatesFilter<"LandingContent"> | string
    nextScreenDescription?: StringWithAggregatesFilter<"LandingContent"> | string
    nextScreenQuestion?: StringWithAggregatesFilter<"LandingContent"> | string
    telegramEnabled?: BoolWithAggregatesFilter<"LandingContent"> | boolean
    whatsappEnabled?: BoolWithAggregatesFilter<"LandingContent"> | boolean
    customScript?: StringNullableWithAggregatesFilter<"LandingContent"> | string | null
    telegramBotToken?: StringNullableWithAggregatesFilter<"LandingContent"> | string | null
    telegramChatIds?: StringNullableWithAggregatesFilter<"LandingContent"> | string | null
    logoPath?: StringWithAggregatesFilter<"LandingContent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LandingContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LandingContent"> | Date | string
  }

  export type QuizBotSettingsWhereInput = {
    AND?: QuizBotSettingsWhereInput | QuizBotSettingsWhereInput[]
    OR?: QuizBotSettingsWhereInput[]
    NOT?: QuizBotSettingsWhereInput | QuizBotSettingsWhereInput[]
    id?: StringFilter<"QuizBotSettings"> | string
    enabled?: BoolFilter<"QuizBotSettings"> | boolean
    welcomeMessage?: StringFilter<"QuizBotSettings"> | string
    startButtonLabel?: StringFilter<"QuizBotSettings"> | string
    completionMessage?: StringFilter<"QuizBotSettings"> | string
    managerContactUrl?: StringNullableFilter<"QuizBotSettings"> | string | null
    channelUrl?: StringNullableFilter<"QuizBotSettings"> | string | null
    createdAt?: DateTimeFilter<"QuizBotSettings"> | Date | string
    updatedAt?: DateTimeFilter<"QuizBotSettings"> | Date | string
  }

  export type QuizBotSettingsOrderByWithRelationInput = {
    id?: SortOrder
    enabled?: SortOrder
    welcomeMessage?: SortOrder
    startButtonLabel?: SortOrder
    completionMessage?: SortOrder
    managerContactUrl?: SortOrderInput | SortOrder
    channelUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizBotSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizBotSettingsWhereInput | QuizBotSettingsWhereInput[]
    OR?: QuizBotSettingsWhereInput[]
    NOT?: QuizBotSettingsWhereInput | QuizBotSettingsWhereInput[]
    enabled?: BoolFilter<"QuizBotSettings"> | boolean
    welcomeMessage?: StringFilter<"QuizBotSettings"> | string
    startButtonLabel?: StringFilter<"QuizBotSettings"> | string
    completionMessage?: StringFilter<"QuizBotSettings"> | string
    managerContactUrl?: StringNullableFilter<"QuizBotSettings"> | string | null
    channelUrl?: StringNullableFilter<"QuizBotSettings"> | string | null
    createdAt?: DateTimeFilter<"QuizBotSettings"> | Date | string
    updatedAt?: DateTimeFilter<"QuizBotSettings"> | Date | string
  }, "id">

  export type QuizBotSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    enabled?: SortOrder
    welcomeMessage?: SortOrder
    startButtonLabel?: SortOrder
    completionMessage?: SortOrder
    managerContactUrl?: SortOrderInput | SortOrder
    channelUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizBotSettingsCountOrderByAggregateInput
    _max?: QuizBotSettingsMaxOrderByAggregateInput
    _min?: QuizBotSettingsMinOrderByAggregateInput
  }

  export type QuizBotSettingsScalarWhereWithAggregatesInput = {
    AND?: QuizBotSettingsScalarWhereWithAggregatesInput | QuizBotSettingsScalarWhereWithAggregatesInput[]
    OR?: QuizBotSettingsScalarWhereWithAggregatesInput[]
    NOT?: QuizBotSettingsScalarWhereWithAggregatesInput | QuizBotSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizBotSettings"> | string
    enabled?: BoolWithAggregatesFilter<"QuizBotSettings"> | boolean
    welcomeMessage?: StringWithAggregatesFilter<"QuizBotSettings"> | string
    startButtonLabel?: StringWithAggregatesFilter<"QuizBotSettings"> | string
    completionMessage?: StringWithAggregatesFilter<"QuizBotSettings"> | string
    managerContactUrl?: StringNullableWithAggregatesFilter<"QuizBotSettings"> | string | null
    channelUrl?: StringNullableWithAggregatesFilter<"QuizBotSettings"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuizBotSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuizBotSettings"> | Date | string
  }

  export type QuizBotSessionWhereInput = {
    AND?: QuizBotSessionWhereInput | QuizBotSessionWhereInput[]
    OR?: QuizBotSessionWhereInput[]
    NOT?: QuizBotSessionWhereInput | QuizBotSessionWhereInput[]
    id?: StringFilter<"QuizBotSession"> | string
    chatId?: StringFilter<"QuizBotSession"> | string
    telegramUserId?: StringNullableFilter<"QuizBotSession"> | string | null
    username?: StringNullableFilter<"QuizBotSession"> | string | null
    firstName?: StringNullableFilter<"QuizBotSession"> | string | null
    lastName?: StringNullableFilter<"QuizBotSession"> | string | null
    step?: StringFilter<"QuizBotSession"> | string
    startParam?: StringNullableFilter<"QuizBotSession"> | string | null
    answers?: JsonFilter<"QuizBotSession">
    completedAt?: DateTimeNullableFilter<"QuizBotSession"> | Date | string | null
    createdAt?: DateTimeFilter<"QuizBotSession"> | Date | string
    updatedAt?: DateTimeFilter<"QuizBotSession"> | Date | string
  }

  export type QuizBotSessionOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    telegramUserId?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    step?: SortOrder
    startParam?: SortOrderInput | SortOrder
    answers?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizBotSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chatId?: string
    AND?: QuizBotSessionWhereInput | QuizBotSessionWhereInput[]
    OR?: QuizBotSessionWhereInput[]
    NOT?: QuizBotSessionWhereInput | QuizBotSessionWhereInput[]
    telegramUserId?: StringNullableFilter<"QuizBotSession"> | string | null
    username?: StringNullableFilter<"QuizBotSession"> | string | null
    firstName?: StringNullableFilter<"QuizBotSession"> | string | null
    lastName?: StringNullableFilter<"QuizBotSession"> | string | null
    step?: StringFilter<"QuizBotSession"> | string
    startParam?: StringNullableFilter<"QuizBotSession"> | string | null
    answers?: JsonFilter<"QuizBotSession">
    completedAt?: DateTimeNullableFilter<"QuizBotSession"> | Date | string | null
    createdAt?: DateTimeFilter<"QuizBotSession"> | Date | string
    updatedAt?: DateTimeFilter<"QuizBotSession"> | Date | string
  }, "id" | "chatId">

  export type QuizBotSessionOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    telegramUserId?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    step?: SortOrder
    startParam?: SortOrderInput | SortOrder
    answers?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizBotSessionCountOrderByAggregateInput
    _max?: QuizBotSessionMaxOrderByAggregateInput
    _min?: QuizBotSessionMinOrderByAggregateInput
  }

  export type QuizBotSessionScalarWhereWithAggregatesInput = {
    AND?: QuizBotSessionScalarWhereWithAggregatesInput | QuizBotSessionScalarWhereWithAggregatesInput[]
    OR?: QuizBotSessionScalarWhereWithAggregatesInput[]
    NOT?: QuizBotSessionScalarWhereWithAggregatesInput | QuizBotSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizBotSession"> | string
    chatId?: StringWithAggregatesFilter<"QuizBotSession"> | string
    telegramUserId?: StringNullableWithAggregatesFilter<"QuizBotSession"> | string | null
    username?: StringNullableWithAggregatesFilter<"QuizBotSession"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"QuizBotSession"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"QuizBotSession"> | string | null
    step?: StringWithAggregatesFilter<"QuizBotSession"> | string
    startParam?: StringNullableWithAggregatesFilter<"QuizBotSession"> | string | null
    answers?: JsonWithAggregatesFilter<"QuizBotSession">
    completedAt?: DateTimeNullableWithAggregatesFilter<"QuizBotSession"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuizBotSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuizBotSession"> | Date | string
  }

  export type LandingPageCreateInput = {
    id?: string
    urlPath: string
    name: string
    headerPhrase: string
    heroImage?: string | null
    heroHeading: string
    heroDescription: string
    heroSupport: string
    buttonLabel: string
    contact: string
    videoUrl: string
    nextScreenTitle: string
    nextScreenDescription: string
    nextScreenQuestion: string
    telegramEnabled?: boolean
    whatsappEnabled?: boolean
    customScript?: string | null
    telegramBotToken?: string | null
    telegramChatIds?: string | null
    logoPath?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutLandingPageInput
  }

  export type LandingPageUncheckedCreateInput = {
    id?: string
    urlPath: string
    name: string
    headerPhrase: string
    heroImage?: string | null
    heroHeading: string
    heroDescription: string
    heroSupport: string
    buttonLabel: string
    contact: string
    videoUrl: string
    nextScreenTitle: string
    nextScreenDescription: string
    nextScreenQuestion: string
    telegramEnabled?: boolean
    whatsappEnabled?: boolean
    customScript?: string | null
    telegramBotToken?: string | null
    telegramChatIds?: string | null
    logoPath?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutLandingPageInput
  }

  export type LandingPageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPath?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headerPhrase?: StringFieldUpdateOperationsInput | string
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroHeading?: StringFieldUpdateOperationsInput | string
    heroDescription?: StringFieldUpdateOperationsInput | string
    heroSupport?: StringFieldUpdateOperationsInput | string
    buttonLabel?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    nextScreenTitle?: StringFieldUpdateOperationsInput | string
    nextScreenDescription?: StringFieldUpdateOperationsInput | string
    nextScreenQuestion?: StringFieldUpdateOperationsInput | string
    telegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    customScript?: NullableStringFieldUpdateOperationsInput | string | null
    telegramBotToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatIds?: NullableStringFieldUpdateOperationsInput | string | null
    logoPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutLandingPageNestedInput
  }

  export type LandingPageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPath?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headerPhrase?: StringFieldUpdateOperationsInput | string
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroHeading?: StringFieldUpdateOperationsInput | string
    heroDescription?: StringFieldUpdateOperationsInput | string
    heroSupport?: StringFieldUpdateOperationsInput | string
    buttonLabel?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    nextScreenTitle?: StringFieldUpdateOperationsInput | string
    nextScreenDescription?: StringFieldUpdateOperationsInput | string
    nextScreenQuestion?: StringFieldUpdateOperationsInput | string
    telegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    customScript?: NullableStringFieldUpdateOperationsInput | string | null
    telegramBotToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatIds?: NullableStringFieldUpdateOperationsInput | string | null
    logoPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutLandingPageNestedInput
  }

  export type LandingPageCreateManyInput = {
    id?: string
    urlPath: string
    name: string
    headerPhrase: string
    heroImage?: string | null
    heroHeading: string
    heroDescription: string
    heroSupport: string
    buttonLabel: string
    contact: string
    videoUrl: string
    nextScreenTitle: string
    nextScreenDescription: string
    nextScreenQuestion: string
    telegramEnabled?: boolean
    whatsappEnabled?: boolean
    customScript?: string | null
    telegramBotToken?: string | null
    telegramChatIds?: string | null
    logoPath?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LandingPageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPath?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headerPhrase?: StringFieldUpdateOperationsInput | string
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroHeading?: StringFieldUpdateOperationsInput | string
    heroDescription?: StringFieldUpdateOperationsInput | string
    heroSupport?: StringFieldUpdateOperationsInput | string
    buttonLabel?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    nextScreenTitle?: StringFieldUpdateOperationsInput | string
    nextScreenDescription?: StringFieldUpdateOperationsInput | string
    nextScreenQuestion?: StringFieldUpdateOperationsInput | string
    telegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    customScript?: NullableStringFieldUpdateOperationsInput | string | null
    telegramBotToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatIds?: NullableStringFieldUpdateOperationsInput | string | null
    logoPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandingPageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPath?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headerPhrase?: StringFieldUpdateOperationsInput | string
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroHeading?: StringFieldUpdateOperationsInput | string
    heroDescription?: StringFieldUpdateOperationsInput | string
    heroSupport?: StringFieldUpdateOperationsInput | string
    buttonLabel?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    nextScreenTitle?: StringFieldUpdateOperationsInput | string
    nextScreenDescription?: StringFieldUpdateOperationsInput | string
    nextScreenQuestion?: StringFieldUpdateOperationsInput | string
    telegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    customScript?: NullableStringFieldUpdateOperationsInput | string | null
    telegramBotToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatIds?: NullableStringFieldUpdateOperationsInput | string | null
    logoPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateInput = {
    id?: string
    channel: $Enums.Channel
    source?: $Enums.LeadSource
    contact: string
    message?: string | null
    telegramUserId?: string | null
    telegramUsername?: string | null
    telegramFirstName?: string | null
    telegramLastName?: string | null
    ipAddress?: string | null
    country?: string | null
    pagePath?: string | null
    utmSource?: string | null
    utmMedium?: string | null
    utmCampaign?: string | null
    utmContent?: string | null
    utmTerm?: string | null
    gclid?: string | null
    gbraid?: string | null
    wbraid?: string | null
    fbclid?: string | null
    createdAt?: Date | string
    landingPage?: LandingPageCreateNestedOneWithoutLeadsInput
  }

  export type LeadUncheckedCreateInput = {
    id?: string
    channel: $Enums.Channel
    source?: $Enums.LeadSource
    contact: string
    message?: string | null
    telegramUserId?: string | null
    telegramUsername?: string | null
    telegramFirstName?: string | null
    telegramLastName?: string | null
    ipAddress?: string | null
    country?: string | null
    landingPageId?: string | null
    pagePath?: string | null
    utmSource?: string | null
    utmMedium?: string | null
    utmCampaign?: string | null
    utmContent?: string | null
    utmTerm?: string | null
    gclid?: string | null
    gbraid?: string | null
    wbraid?: string | null
    fbclid?: string | null
    createdAt?: Date | string
  }

  export type LeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    contact?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLastName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pagePath?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    utmContent?: NullableStringFieldUpdateOperationsInput | string | null
    utmTerm?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    gbraid?: NullableStringFieldUpdateOperationsInput | string | null
    wbraid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    landingPage?: LandingPageUpdateOneWithoutLeadsNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    contact?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLastName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    landingPageId?: NullableStringFieldUpdateOperationsInput | string | null
    pagePath?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    utmContent?: NullableStringFieldUpdateOperationsInput | string | null
    utmTerm?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    gbraid?: NullableStringFieldUpdateOperationsInput | string | null
    wbraid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateManyInput = {
    id?: string
    channel: $Enums.Channel
    source?: $Enums.LeadSource
    contact: string
    message?: string | null
    telegramUserId?: string | null
    telegramUsername?: string | null
    telegramFirstName?: string | null
    telegramLastName?: string | null
    ipAddress?: string | null
    country?: string | null
    landingPageId?: string | null
    pagePath?: string | null
    utmSource?: string | null
    utmMedium?: string | null
    utmCampaign?: string | null
    utmContent?: string | null
    utmTerm?: string | null
    gclid?: string | null
    gbraid?: string | null
    wbraid?: string | null
    fbclid?: string | null
    createdAt?: Date | string
  }

  export type LeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    contact?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLastName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pagePath?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    utmContent?: NullableStringFieldUpdateOperationsInput | string | null
    utmTerm?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    gbraid?: NullableStringFieldUpdateOperationsInput | string | null
    wbraid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    contact?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLastName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    landingPageId?: NullableStringFieldUpdateOperationsInput | string | null
    pagePath?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    utmContent?: NullableStringFieldUpdateOperationsInput | string | null
    utmTerm?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    gbraid?: NullableStringFieldUpdateOperationsInput | string | null
    wbraid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandingContentCreateInput = {
    id: string
    defaultLandingName?: string
    headerPhrase: string
    heroImage?: string | null
    heroHeading: string
    heroDescription: string
    heroSupport: string
    buttonLabel: string
    contact: string
    videoUrl: string
    nextScreenTitle: string
    nextScreenDescription: string
    nextScreenQuestion: string
    telegramEnabled?: boolean
    whatsappEnabled?: boolean
    customScript?: string | null
    telegramBotToken?: string | null
    telegramChatIds?: string | null
    logoPath?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LandingContentUncheckedCreateInput = {
    id: string
    defaultLandingName?: string
    headerPhrase: string
    heroImage?: string | null
    heroHeading: string
    heroDescription: string
    heroSupport: string
    buttonLabel: string
    contact: string
    videoUrl: string
    nextScreenTitle: string
    nextScreenDescription: string
    nextScreenQuestion: string
    telegramEnabled?: boolean
    whatsappEnabled?: boolean
    customScript?: string | null
    telegramBotToken?: string | null
    telegramChatIds?: string | null
    logoPath?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LandingContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultLandingName?: StringFieldUpdateOperationsInput | string
    headerPhrase?: StringFieldUpdateOperationsInput | string
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroHeading?: StringFieldUpdateOperationsInput | string
    heroDescription?: StringFieldUpdateOperationsInput | string
    heroSupport?: StringFieldUpdateOperationsInput | string
    buttonLabel?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    nextScreenTitle?: StringFieldUpdateOperationsInput | string
    nextScreenDescription?: StringFieldUpdateOperationsInput | string
    nextScreenQuestion?: StringFieldUpdateOperationsInput | string
    telegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    customScript?: NullableStringFieldUpdateOperationsInput | string | null
    telegramBotToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatIds?: NullableStringFieldUpdateOperationsInput | string | null
    logoPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandingContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultLandingName?: StringFieldUpdateOperationsInput | string
    headerPhrase?: StringFieldUpdateOperationsInput | string
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroHeading?: StringFieldUpdateOperationsInput | string
    heroDescription?: StringFieldUpdateOperationsInput | string
    heroSupport?: StringFieldUpdateOperationsInput | string
    buttonLabel?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    nextScreenTitle?: StringFieldUpdateOperationsInput | string
    nextScreenDescription?: StringFieldUpdateOperationsInput | string
    nextScreenQuestion?: StringFieldUpdateOperationsInput | string
    telegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    customScript?: NullableStringFieldUpdateOperationsInput | string | null
    telegramBotToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatIds?: NullableStringFieldUpdateOperationsInput | string | null
    logoPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandingContentCreateManyInput = {
    id: string
    defaultLandingName?: string
    headerPhrase: string
    heroImage?: string | null
    heroHeading: string
    heroDescription: string
    heroSupport: string
    buttonLabel: string
    contact: string
    videoUrl: string
    nextScreenTitle: string
    nextScreenDescription: string
    nextScreenQuestion: string
    telegramEnabled?: boolean
    whatsappEnabled?: boolean
    customScript?: string | null
    telegramBotToken?: string | null
    telegramChatIds?: string | null
    logoPath?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LandingContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultLandingName?: StringFieldUpdateOperationsInput | string
    headerPhrase?: StringFieldUpdateOperationsInput | string
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroHeading?: StringFieldUpdateOperationsInput | string
    heroDescription?: StringFieldUpdateOperationsInput | string
    heroSupport?: StringFieldUpdateOperationsInput | string
    buttonLabel?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    nextScreenTitle?: StringFieldUpdateOperationsInput | string
    nextScreenDescription?: StringFieldUpdateOperationsInput | string
    nextScreenQuestion?: StringFieldUpdateOperationsInput | string
    telegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    customScript?: NullableStringFieldUpdateOperationsInput | string | null
    telegramBotToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatIds?: NullableStringFieldUpdateOperationsInput | string | null
    logoPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandingContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultLandingName?: StringFieldUpdateOperationsInput | string
    headerPhrase?: StringFieldUpdateOperationsInput | string
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroHeading?: StringFieldUpdateOperationsInput | string
    heroDescription?: StringFieldUpdateOperationsInput | string
    heroSupport?: StringFieldUpdateOperationsInput | string
    buttonLabel?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    nextScreenTitle?: StringFieldUpdateOperationsInput | string
    nextScreenDescription?: StringFieldUpdateOperationsInput | string
    nextScreenQuestion?: StringFieldUpdateOperationsInput | string
    telegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    customScript?: NullableStringFieldUpdateOperationsInput | string | null
    telegramBotToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatIds?: NullableStringFieldUpdateOperationsInput | string | null
    logoPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizBotSettingsCreateInput = {
    id: string
    enabled?: boolean
    welcomeMessage: string
    startButtonLabel?: string
    completionMessage: string
    managerContactUrl?: string | null
    channelUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizBotSettingsUncheckedCreateInput = {
    id: string
    enabled?: boolean
    welcomeMessage: string
    startButtonLabel?: string
    completionMessage: string
    managerContactUrl?: string | null
    channelUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizBotSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    startButtonLabel?: StringFieldUpdateOperationsInput | string
    completionMessage?: StringFieldUpdateOperationsInput | string
    managerContactUrl?: NullableStringFieldUpdateOperationsInput | string | null
    channelUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizBotSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    startButtonLabel?: StringFieldUpdateOperationsInput | string
    completionMessage?: StringFieldUpdateOperationsInput | string
    managerContactUrl?: NullableStringFieldUpdateOperationsInput | string | null
    channelUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizBotSettingsCreateManyInput = {
    id: string
    enabled?: boolean
    welcomeMessage: string
    startButtonLabel?: string
    completionMessage: string
    managerContactUrl?: string | null
    channelUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizBotSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    startButtonLabel?: StringFieldUpdateOperationsInput | string
    completionMessage?: StringFieldUpdateOperationsInput | string
    managerContactUrl?: NullableStringFieldUpdateOperationsInput | string | null
    channelUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizBotSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    startButtonLabel?: StringFieldUpdateOperationsInput | string
    completionMessage?: StringFieldUpdateOperationsInput | string
    managerContactUrl?: NullableStringFieldUpdateOperationsInput | string | null
    channelUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizBotSessionCreateInput = {
    id?: string
    chatId: string
    telegramUserId?: string | null
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    step?: string
    startParam?: string | null
    answers?: JsonNullValueInput | InputJsonValue
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizBotSessionUncheckedCreateInput = {
    id?: string
    chatId: string
    telegramUserId?: string | null
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    step?: string
    startParam?: string | null
    answers?: JsonNullValueInput | InputJsonValue
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizBotSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    step?: StringFieldUpdateOperationsInput | string
    startParam?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: JsonNullValueInput | InputJsonValue
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizBotSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    step?: StringFieldUpdateOperationsInput | string
    startParam?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: JsonNullValueInput | InputJsonValue
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizBotSessionCreateManyInput = {
    id?: string
    chatId: string
    telegramUserId?: string | null
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    step?: string
    startParam?: string | null
    answers?: JsonNullValueInput | InputJsonValue
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizBotSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    step?: StringFieldUpdateOperationsInput | string
    startParam?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: JsonNullValueInput | InputJsonValue
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizBotSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    step?: StringFieldUpdateOperationsInput | string
    startParam?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: JsonNullValueInput | InputJsonValue
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LeadListRelationFilter = {
    every?: LeadWhereInput
    some?: LeadWhereInput
    none?: LeadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LandingPageCountOrderByAggregateInput = {
    id?: SortOrder
    urlPath?: SortOrder
    name?: SortOrder
    headerPhrase?: SortOrder
    heroImage?: SortOrder
    heroHeading?: SortOrder
    heroDescription?: SortOrder
    heroSupport?: SortOrder
    buttonLabel?: SortOrder
    contact?: SortOrder
    videoUrl?: SortOrder
    nextScreenTitle?: SortOrder
    nextScreenDescription?: SortOrder
    nextScreenQuestion?: SortOrder
    telegramEnabled?: SortOrder
    whatsappEnabled?: SortOrder
    customScript?: SortOrder
    telegramBotToken?: SortOrder
    telegramChatIds?: SortOrder
    logoPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LandingPageMaxOrderByAggregateInput = {
    id?: SortOrder
    urlPath?: SortOrder
    name?: SortOrder
    headerPhrase?: SortOrder
    heroImage?: SortOrder
    heroHeading?: SortOrder
    heroDescription?: SortOrder
    heroSupport?: SortOrder
    buttonLabel?: SortOrder
    contact?: SortOrder
    videoUrl?: SortOrder
    nextScreenTitle?: SortOrder
    nextScreenDescription?: SortOrder
    nextScreenQuestion?: SortOrder
    telegramEnabled?: SortOrder
    whatsappEnabled?: SortOrder
    customScript?: SortOrder
    telegramBotToken?: SortOrder
    telegramChatIds?: SortOrder
    logoPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LandingPageMinOrderByAggregateInput = {
    id?: SortOrder
    urlPath?: SortOrder
    name?: SortOrder
    headerPhrase?: SortOrder
    heroImage?: SortOrder
    heroHeading?: SortOrder
    heroDescription?: SortOrder
    heroSupport?: SortOrder
    buttonLabel?: SortOrder
    contact?: SortOrder
    videoUrl?: SortOrder
    nextScreenTitle?: SortOrder
    nextScreenDescription?: SortOrder
    nextScreenQuestion?: SortOrder
    telegramEnabled?: SortOrder
    whatsappEnabled?: SortOrder
    customScript?: SortOrder
    telegramBotToken?: SortOrder
    telegramChatIds?: SortOrder
    logoPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.Channel | EnumChannelFieldRefInput<$PrismaModel>
    in?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelFilter<$PrismaModel> | $Enums.Channel
  }

  export type EnumLeadSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadSourceFilter<$PrismaModel> | $Enums.LeadSource
  }

  export type LandingPageNullableScalarRelationFilter = {
    is?: LandingPageWhereInput | null
    isNot?: LandingPageWhereInput | null
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
    source?: SortOrder
    contact?: SortOrder
    message?: SortOrder
    telegramUserId?: SortOrder
    telegramUsername?: SortOrder
    telegramFirstName?: SortOrder
    telegramLastName?: SortOrder
    ipAddress?: SortOrder
    country?: SortOrder
    landingPageId?: SortOrder
    pagePath?: SortOrder
    utmSource?: SortOrder
    utmMedium?: SortOrder
    utmCampaign?: SortOrder
    utmContent?: SortOrder
    utmTerm?: SortOrder
    gclid?: SortOrder
    gbraid?: SortOrder
    wbraid?: SortOrder
    fbclid?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
    source?: SortOrder
    contact?: SortOrder
    message?: SortOrder
    telegramUserId?: SortOrder
    telegramUsername?: SortOrder
    telegramFirstName?: SortOrder
    telegramLastName?: SortOrder
    ipAddress?: SortOrder
    country?: SortOrder
    landingPageId?: SortOrder
    pagePath?: SortOrder
    utmSource?: SortOrder
    utmMedium?: SortOrder
    utmCampaign?: SortOrder
    utmContent?: SortOrder
    utmTerm?: SortOrder
    gclid?: SortOrder
    gbraid?: SortOrder
    wbraid?: SortOrder
    fbclid?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
    source?: SortOrder
    contact?: SortOrder
    message?: SortOrder
    telegramUserId?: SortOrder
    telegramUsername?: SortOrder
    telegramFirstName?: SortOrder
    telegramLastName?: SortOrder
    ipAddress?: SortOrder
    country?: SortOrder
    landingPageId?: SortOrder
    pagePath?: SortOrder
    utmSource?: SortOrder
    utmMedium?: SortOrder
    utmCampaign?: SortOrder
    utmContent?: SortOrder
    utmTerm?: SortOrder
    gclid?: SortOrder
    gbraid?: SortOrder
    wbraid?: SortOrder
    fbclid?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Channel | EnumChannelFieldRefInput<$PrismaModel>
    in?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelWithAggregatesFilter<$PrismaModel> | $Enums.Channel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelFilter<$PrismaModel>
    _max?: NestedEnumChannelFilter<$PrismaModel>
  }

  export type EnumLeadSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadSourceWithAggregatesFilter<$PrismaModel> | $Enums.LeadSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadSourceFilter<$PrismaModel>
    _max?: NestedEnumLeadSourceFilter<$PrismaModel>
  }

  export type LandingContentCountOrderByAggregateInput = {
    id?: SortOrder
    defaultLandingName?: SortOrder
    headerPhrase?: SortOrder
    heroImage?: SortOrder
    heroHeading?: SortOrder
    heroDescription?: SortOrder
    heroSupport?: SortOrder
    buttonLabel?: SortOrder
    contact?: SortOrder
    videoUrl?: SortOrder
    nextScreenTitle?: SortOrder
    nextScreenDescription?: SortOrder
    nextScreenQuestion?: SortOrder
    telegramEnabled?: SortOrder
    whatsappEnabled?: SortOrder
    customScript?: SortOrder
    telegramBotToken?: SortOrder
    telegramChatIds?: SortOrder
    logoPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LandingContentMaxOrderByAggregateInput = {
    id?: SortOrder
    defaultLandingName?: SortOrder
    headerPhrase?: SortOrder
    heroImage?: SortOrder
    heroHeading?: SortOrder
    heroDescription?: SortOrder
    heroSupport?: SortOrder
    buttonLabel?: SortOrder
    contact?: SortOrder
    videoUrl?: SortOrder
    nextScreenTitle?: SortOrder
    nextScreenDescription?: SortOrder
    nextScreenQuestion?: SortOrder
    telegramEnabled?: SortOrder
    whatsappEnabled?: SortOrder
    customScript?: SortOrder
    telegramBotToken?: SortOrder
    telegramChatIds?: SortOrder
    logoPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LandingContentMinOrderByAggregateInput = {
    id?: SortOrder
    defaultLandingName?: SortOrder
    headerPhrase?: SortOrder
    heroImage?: SortOrder
    heroHeading?: SortOrder
    heroDescription?: SortOrder
    heroSupport?: SortOrder
    buttonLabel?: SortOrder
    contact?: SortOrder
    videoUrl?: SortOrder
    nextScreenTitle?: SortOrder
    nextScreenDescription?: SortOrder
    nextScreenQuestion?: SortOrder
    telegramEnabled?: SortOrder
    whatsappEnabled?: SortOrder
    customScript?: SortOrder
    telegramBotToken?: SortOrder
    telegramChatIds?: SortOrder
    logoPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizBotSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    enabled?: SortOrder
    welcomeMessage?: SortOrder
    startButtonLabel?: SortOrder
    completionMessage?: SortOrder
    managerContactUrl?: SortOrder
    channelUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizBotSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    enabled?: SortOrder
    welcomeMessage?: SortOrder
    startButtonLabel?: SortOrder
    completionMessage?: SortOrder
    managerContactUrl?: SortOrder
    channelUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizBotSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    enabled?: SortOrder
    welcomeMessage?: SortOrder
    startButtonLabel?: SortOrder
    completionMessage?: SortOrder
    managerContactUrl?: SortOrder
    channelUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type QuizBotSessionCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    telegramUserId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    step?: SortOrder
    startParam?: SortOrder
    answers?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizBotSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    telegramUserId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    step?: SortOrder
    startParam?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizBotSessionMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    telegramUserId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    step?: SortOrder
    startParam?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LeadCreateNestedManyWithoutLandingPageInput = {
    create?: XOR<LeadCreateWithoutLandingPageInput, LeadUncheckedCreateWithoutLandingPageInput> | LeadCreateWithoutLandingPageInput[] | LeadUncheckedCreateWithoutLandingPageInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutLandingPageInput | LeadCreateOrConnectWithoutLandingPageInput[]
    createMany?: LeadCreateManyLandingPageInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutLandingPageInput = {
    create?: XOR<LeadCreateWithoutLandingPageInput, LeadUncheckedCreateWithoutLandingPageInput> | LeadCreateWithoutLandingPageInput[] | LeadUncheckedCreateWithoutLandingPageInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutLandingPageInput | LeadCreateOrConnectWithoutLandingPageInput[]
    createMany?: LeadCreateManyLandingPageInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LeadUpdateManyWithoutLandingPageNestedInput = {
    create?: XOR<LeadCreateWithoutLandingPageInput, LeadUncheckedCreateWithoutLandingPageInput> | LeadCreateWithoutLandingPageInput[] | LeadUncheckedCreateWithoutLandingPageInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutLandingPageInput | LeadCreateOrConnectWithoutLandingPageInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutLandingPageInput | LeadUpsertWithWhereUniqueWithoutLandingPageInput[]
    createMany?: LeadCreateManyLandingPageInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutLandingPageInput | LeadUpdateWithWhereUniqueWithoutLandingPageInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutLandingPageInput | LeadUpdateManyWithWhereWithoutLandingPageInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutLandingPageNestedInput = {
    create?: XOR<LeadCreateWithoutLandingPageInput, LeadUncheckedCreateWithoutLandingPageInput> | LeadCreateWithoutLandingPageInput[] | LeadUncheckedCreateWithoutLandingPageInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutLandingPageInput | LeadCreateOrConnectWithoutLandingPageInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutLandingPageInput | LeadUpsertWithWhereUniqueWithoutLandingPageInput[]
    createMany?: LeadCreateManyLandingPageInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutLandingPageInput | LeadUpdateWithWhereUniqueWithoutLandingPageInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutLandingPageInput | LeadUpdateManyWithWhereWithoutLandingPageInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type LandingPageCreateNestedOneWithoutLeadsInput = {
    create?: XOR<LandingPageCreateWithoutLeadsInput, LandingPageUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: LandingPageCreateOrConnectWithoutLeadsInput
    connect?: LandingPageWhereUniqueInput
  }

  export type EnumChannelFieldUpdateOperationsInput = {
    set?: $Enums.Channel
  }

  export type EnumLeadSourceFieldUpdateOperationsInput = {
    set?: $Enums.LeadSource
  }

  export type LandingPageUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<LandingPageCreateWithoutLeadsInput, LandingPageUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: LandingPageCreateOrConnectWithoutLeadsInput
    upsert?: LandingPageUpsertWithoutLeadsInput
    disconnect?: LandingPageWhereInput | boolean
    delete?: LandingPageWhereInput | boolean
    connect?: LandingPageWhereUniqueInput
    update?: XOR<XOR<LandingPageUpdateToOneWithWhereWithoutLeadsInput, LandingPageUpdateWithoutLeadsInput>, LandingPageUncheckedUpdateWithoutLeadsInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.Channel | EnumChannelFieldRefInput<$PrismaModel>
    in?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelFilter<$PrismaModel> | $Enums.Channel
  }

  export type NestedEnumLeadSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadSourceFilter<$PrismaModel> | $Enums.LeadSource
  }

  export type NestedEnumChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Channel | EnumChannelFieldRefInput<$PrismaModel>
    in?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelWithAggregatesFilter<$PrismaModel> | $Enums.Channel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelFilter<$PrismaModel>
    _max?: NestedEnumChannelFilter<$PrismaModel>
  }

  export type NestedEnumLeadSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadSourceWithAggregatesFilter<$PrismaModel> | $Enums.LeadSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadSourceFilter<$PrismaModel>
    _max?: NestedEnumLeadSourceFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LeadCreateWithoutLandingPageInput = {
    id?: string
    channel: $Enums.Channel
    source?: $Enums.LeadSource
    contact: string
    message?: string | null
    telegramUserId?: string | null
    telegramUsername?: string | null
    telegramFirstName?: string | null
    telegramLastName?: string | null
    ipAddress?: string | null
    country?: string | null
    pagePath?: string | null
    utmSource?: string | null
    utmMedium?: string | null
    utmCampaign?: string | null
    utmContent?: string | null
    utmTerm?: string | null
    gclid?: string | null
    gbraid?: string | null
    wbraid?: string | null
    fbclid?: string | null
    createdAt?: Date | string
  }

  export type LeadUncheckedCreateWithoutLandingPageInput = {
    id?: string
    channel: $Enums.Channel
    source?: $Enums.LeadSource
    contact: string
    message?: string | null
    telegramUserId?: string | null
    telegramUsername?: string | null
    telegramFirstName?: string | null
    telegramLastName?: string | null
    ipAddress?: string | null
    country?: string | null
    pagePath?: string | null
    utmSource?: string | null
    utmMedium?: string | null
    utmCampaign?: string | null
    utmContent?: string | null
    utmTerm?: string | null
    gclid?: string | null
    gbraid?: string | null
    wbraid?: string | null
    fbclid?: string | null
    createdAt?: Date | string
  }

  export type LeadCreateOrConnectWithoutLandingPageInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutLandingPageInput, LeadUncheckedCreateWithoutLandingPageInput>
  }

  export type LeadCreateManyLandingPageInputEnvelope = {
    data: LeadCreateManyLandingPageInput | LeadCreateManyLandingPageInput[]
    skipDuplicates?: boolean
  }

  export type LeadUpsertWithWhereUniqueWithoutLandingPageInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutLandingPageInput, LeadUncheckedUpdateWithoutLandingPageInput>
    create: XOR<LeadCreateWithoutLandingPageInput, LeadUncheckedCreateWithoutLandingPageInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutLandingPageInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutLandingPageInput, LeadUncheckedUpdateWithoutLandingPageInput>
  }

  export type LeadUpdateManyWithWhereWithoutLandingPageInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutLandingPageInput>
  }

  export type LeadScalarWhereInput = {
    AND?: LeadScalarWhereInput | LeadScalarWhereInput[]
    OR?: LeadScalarWhereInput[]
    NOT?: LeadScalarWhereInput | LeadScalarWhereInput[]
    id?: StringFilter<"Lead"> | string
    channel?: EnumChannelFilter<"Lead"> | $Enums.Channel
    source?: EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource
    contact?: StringFilter<"Lead"> | string
    message?: StringNullableFilter<"Lead"> | string | null
    telegramUserId?: StringNullableFilter<"Lead"> | string | null
    telegramUsername?: StringNullableFilter<"Lead"> | string | null
    telegramFirstName?: StringNullableFilter<"Lead"> | string | null
    telegramLastName?: StringNullableFilter<"Lead"> | string | null
    ipAddress?: StringNullableFilter<"Lead"> | string | null
    country?: StringNullableFilter<"Lead"> | string | null
    landingPageId?: StringNullableFilter<"Lead"> | string | null
    pagePath?: StringNullableFilter<"Lead"> | string | null
    utmSource?: StringNullableFilter<"Lead"> | string | null
    utmMedium?: StringNullableFilter<"Lead"> | string | null
    utmCampaign?: StringNullableFilter<"Lead"> | string | null
    utmContent?: StringNullableFilter<"Lead"> | string | null
    utmTerm?: StringNullableFilter<"Lead"> | string | null
    gclid?: StringNullableFilter<"Lead"> | string | null
    gbraid?: StringNullableFilter<"Lead"> | string | null
    wbraid?: StringNullableFilter<"Lead"> | string | null
    fbclid?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
  }

  export type LandingPageCreateWithoutLeadsInput = {
    id?: string
    urlPath: string
    name: string
    headerPhrase: string
    heroImage?: string | null
    heroHeading: string
    heroDescription: string
    heroSupport: string
    buttonLabel: string
    contact: string
    videoUrl: string
    nextScreenTitle: string
    nextScreenDescription: string
    nextScreenQuestion: string
    telegramEnabled?: boolean
    whatsappEnabled?: boolean
    customScript?: string | null
    telegramBotToken?: string | null
    telegramChatIds?: string | null
    logoPath?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LandingPageUncheckedCreateWithoutLeadsInput = {
    id?: string
    urlPath: string
    name: string
    headerPhrase: string
    heroImage?: string | null
    heroHeading: string
    heroDescription: string
    heroSupport: string
    buttonLabel: string
    contact: string
    videoUrl: string
    nextScreenTitle: string
    nextScreenDescription: string
    nextScreenQuestion: string
    telegramEnabled?: boolean
    whatsappEnabled?: boolean
    customScript?: string | null
    telegramBotToken?: string | null
    telegramChatIds?: string | null
    logoPath?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LandingPageCreateOrConnectWithoutLeadsInput = {
    where: LandingPageWhereUniqueInput
    create: XOR<LandingPageCreateWithoutLeadsInput, LandingPageUncheckedCreateWithoutLeadsInput>
  }

  export type LandingPageUpsertWithoutLeadsInput = {
    update: XOR<LandingPageUpdateWithoutLeadsInput, LandingPageUncheckedUpdateWithoutLeadsInput>
    create: XOR<LandingPageCreateWithoutLeadsInput, LandingPageUncheckedCreateWithoutLeadsInput>
    where?: LandingPageWhereInput
  }

  export type LandingPageUpdateToOneWithWhereWithoutLeadsInput = {
    where?: LandingPageWhereInput
    data: XOR<LandingPageUpdateWithoutLeadsInput, LandingPageUncheckedUpdateWithoutLeadsInput>
  }

  export type LandingPageUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPath?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headerPhrase?: StringFieldUpdateOperationsInput | string
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroHeading?: StringFieldUpdateOperationsInput | string
    heroDescription?: StringFieldUpdateOperationsInput | string
    heroSupport?: StringFieldUpdateOperationsInput | string
    buttonLabel?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    nextScreenTitle?: StringFieldUpdateOperationsInput | string
    nextScreenDescription?: StringFieldUpdateOperationsInput | string
    nextScreenQuestion?: StringFieldUpdateOperationsInput | string
    telegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    customScript?: NullableStringFieldUpdateOperationsInput | string | null
    telegramBotToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatIds?: NullableStringFieldUpdateOperationsInput | string | null
    logoPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandingPageUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPath?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    headerPhrase?: StringFieldUpdateOperationsInput | string
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroHeading?: StringFieldUpdateOperationsInput | string
    heroDescription?: StringFieldUpdateOperationsInput | string
    heroSupport?: StringFieldUpdateOperationsInput | string
    buttonLabel?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    nextScreenTitle?: StringFieldUpdateOperationsInput | string
    nextScreenDescription?: StringFieldUpdateOperationsInput | string
    nextScreenQuestion?: StringFieldUpdateOperationsInput | string
    telegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    whatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    customScript?: NullableStringFieldUpdateOperationsInput | string | null
    telegramBotToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatIds?: NullableStringFieldUpdateOperationsInput | string | null
    logoPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateManyLandingPageInput = {
    id?: string
    channel: $Enums.Channel
    source?: $Enums.LeadSource
    contact: string
    message?: string | null
    telegramUserId?: string | null
    telegramUsername?: string | null
    telegramFirstName?: string | null
    telegramLastName?: string | null
    ipAddress?: string | null
    country?: string | null
    pagePath?: string | null
    utmSource?: string | null
    utmMedium?: string | null
    utmCampaign?: string | null
    utmContent?: string | null
    utmTerm?: string | null
    gclid?: string | null
    gbraid?: string | null
    wbraid?: string | null
    fbclid?: string | null
    createdAt?: Date | string
  }

  export type LeadUpdateWithoutLandingPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    contact?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLastName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pagePath?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    utmContent?: NullableStringFieldUpdateOperationsInput | string | null
    utmTerm?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    gbraid?: NullableStringFieldUpdateOperationsInput | string | null
    wbraid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateWithoutLandingPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    contact?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLastName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pagePath?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    utmContent?: NullableStringFieldUpdateOperationsInput | string | null
    utmTerm?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    gbraid?: NullableStringFieldUpdateOperationsInput | string | null
    wbraid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyWithoutLandingPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    contact?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLastName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pagePath?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    utmContent?: NullableStringFieldUpdateOperationsInput | string | null
    utmTerm?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    gbraid?: NullableStringFieldUpdateOperationsInput | string | null
    wbraid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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