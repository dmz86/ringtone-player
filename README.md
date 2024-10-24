# ringtone-controller

Play and stop system ringtone

## Install

```bash
npm install ringtone-controller
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`playRingtone()`](#playringtone)
* [`stopRingtone()`](#stopringtone)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### playRingtone()

```typescript
playRingtone() => Promise<{ result: boolean; }>
```

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

--------------------


### stopRingtone()

```typescript
stopRingtone() => Promise<{ result: boolean; }>
```

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

--------------------

</docgen-api>
