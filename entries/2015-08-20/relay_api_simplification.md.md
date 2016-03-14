# Relay Api Simplification

I felt like Containers, Routes, and RootContainer could all be combined into one. Container Components should define their data needs in fully formed queries. The parent components should not need to access the data needs of the child to define it's own data needs. The Container would have access to props and state when defining the query. Ideally, I would like to do away with
`variables` as that is quite vague.

I also felt like my "dumb" components shouldn't know about `this.props.relay`. Mutations should be handled in Containers and the Container should pass a callback prop to dump components that can be called to trigger a mutation.

I don't think that Mutations should have to define a fat query. Relay should
know based on the data needs defined in the component and the result of the
mutation what needs to happen.
