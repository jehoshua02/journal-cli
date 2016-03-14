An API should support both underscore and camel case.

But what about the extra performance impact of normalization? And how does the
API know what to return (denormalization)? What if the input is mixed casing?

Perhaps a naive implementation would suffice. On input, all keys would be normalized.
The first key would be looked at to determine the casing the client is using and it
is assumed that's the casing the client will want back. This should satisfy all sane
use cases. The mixed use case is not sane and clients should decide what casing they
want and stop being wishy washy.

But that leads me to wonder if the api should just support one casing and if supporting
multiple casing types is wishy washy too and if the API should just decide what casing
they want and stop being wishy washy?

If the API designer would look at how other APIs are designed and what casing they use
maybe we can quietly establish the convention. We don't have to normalize. The API gets
a performance win. And clients will bear the burden of normalization or conform.

Eventually, hopefully, all clients and APIs will share the same casing style and this
ceases to be a concern.
