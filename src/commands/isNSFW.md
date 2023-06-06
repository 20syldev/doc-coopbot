# $isNSFW
Returns whether the provided channel is NSFW (not-safe-for-work) or not.
> 🧙‍♂️ 'true' means the channel is NSFW, 'false' means it isn't.

## Usage
```
$isNSFW[channelID]
```

### Parameters
- `channelID` `(Type: Snowflake || Flag: Required)`: The channel to check.

## Example
```
$nomention
Is <#$channelID> NSFW?: `$isNSFW[$channelID]`
```

![example](https://user-images.githubusercontent.com/69215413/123517430-dd270280-d66e-11eb-95cb-4edb5a9ed78c.png)
