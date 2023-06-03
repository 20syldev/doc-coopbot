# $serverEmojis
Returns all emojis of the provided guild.

## Syntax
```
$serverEmojis[Guild ID;Separator]
```

### Parameters
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The guild from which to return emojis.
- `Separator` `(Type: String || Flag: Emptiable)`: The separator to separate the emojis with.

## Example
```
$nomention
$serverEmojis[$guildID; ]
```
![example](https://user-images.githubusercontent.com/95774950/202883215-04ca23ce-b9c4-4828-ac98-22b0dd69e731.png)
