# $resetUserVar
Resets a user variable back to it's default value *(the one inputted in the app)* for every user, or just the provided user.

> 🧙‍♂️ Use this function wisely!


## Usage
```
$resetUserVar[variableName;(userID)]
```

### Parameters
- `variableName` `(Type: String || Flag: Required)`: The name of the variable to reset.
- `userID` `(Type: Snowflake || Flag: Optional)`: The user to reset the variable for. If no user is provided, the variable will be reset for **everyone**.
