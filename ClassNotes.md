How does passport work?

- We need to authenticate strategies
- Auth happens in our Application middleware
- to implement tokens (JWT), there has to be a passport strategy for it.
- passport is required in our express routes.

What is our authentication requirements?

- username and/or email, password
  - ** passport-local module **
- store our username, password into our own local db (for us, that's postgres) --> local storage
  - ** passport-local module **
- we want our passwords to be encrypted before we store them in our local db
  - **bcrypt** for password encryption
- after successful sign-in
  - be able to validate the credentials THROUGH the JSON WEB TOKEN which is passed in through in the Authorization request header
  - we're looking for a passport strategy for jwt
  - ** passport-jwt **
- upon signing in
  - generate a token that gets passed back to the client
  - ** jsonwebtoken **


Install these dependencies

```
npm install --save passport passport-local bcrypt passport-jwt jsonwebtoken
```

## Steps for selecting (new) libraries

1. Figure out the workflow first: what is the workflow you want to implement in your app? "What do you want?"
2. "What are you doing? What do you need to do?" (Rubber Duck). FIGURE OUT YOUR REQUIREMENTS FIRST. Fully list them. Eventually treat them as a checklist.
3. For every single requirement (you listed), research on how to meet those requirements (google your requirements!). Look for project dependencies that would meet our requirements.
  - depends on our existing application framework.
  - Because we're using Node/Express, our packages are packaged as NPM dependencies (or also yarn). Question: what do our project dependencies look like, given the tech stack we chose?
    - Ruby on Rails --> RubyForge.net, Ruby gems registry
    - Node --> NPM Registry
    ^ these are all called package mangement systems, package registries, module systems
4. How we pick a module:
  - reputable authors, good research
  - up to date projects: looking at the last commit timestamp
    - issues: how are they maintained
    - pull requests: is this well improved regularly?
    - example projects
    - consider the learning curve: get a feel for the docs
5. Eventually picking a module from the NPM registry.

