# Push Notification using Expo

## Dev - Setup
`expo install expo-notifications`

## Testing
### Android
Close the Expo app, use https://expo.dev/notifications to send a notification.
### IOS
You may need to (re-)configure your credential:
Enter
```
expo credentials:manager
```
end follow the instruction.

#### Troubleshooting
1. 
```
Authentication with Apple Developer Portal failed!
UnexpectedAppleResponse: Apple provided the following error info:
Your developer account needs to be updated.  Please visit Apple Developer Registration.
    at Object.parseAppStoreResponse (/usr/local/lib/node_modules/expo-cli/node_modules/@expo/apple-utils/build/index.js:1:1021327)
    at getTeamsAsync (/usr/local/lib/node_modules/expo-cli/node_modules/@expo/apple-utils/build/index.js:1:1025028)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at Object.selectTeamAsync (/usr/local/lib/node_modules/expo-cli/node_modules/@expo/apple-utils/build/index.js:1:1025335)
    at Object.validateSessionAsync (/usr/local/lib/node_modules/expo-cli/node_modules/@expo/apple-utils/build/index.js:1:902823)
    at Object.loginWithUserCredentialsAsync (/usr/local/lib/node_modules/expo-cli/node_modules/@expo/apple-utils/build/index.js:1:872044)
    at loginWithUserCredentialsAsync (/usr/local/lib/node_modules/expo-cli/src/appleApi/authenticate.ts:133:22)
    at loginAsync (/usr/local/lib/node_modules/expo-cli/src/appleApi/authenticate.ts:92:12)
    at authenticateAsync (/usr/local/lib/node_modules/expo-cli/src/appleApi/authenticate.ts:152:23)
    at Context.ensureAppleCtx (/usr/local/lib/node_modules/expo-cli/src/credentials/context.ts:83:24) {
```
Need to login to https://developer.apple.com/ and accept their latest policy update.

2.
```
Authentication with Apple Developer Portal failed!
Error: You have no team associated with your Apple account, cannot proceed.
(Do you have a paid Apple Developer account?)
    at promptForTeamAsync (/usr/local/lib/node_modules/expo-cli/node_modules/@expo/apple-utils/build/index.js:1:1025680)
    at Object.selectTeamAsync (/usr/local/lib/node_modules/expo-cli/node_modules/@expo/apple-utils/build/index.js:1:1025542)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at Object.validateSessionAsync (/usr/local/lib/node_modules/expo-cli/node_modules/@expo/apple-utils/build/index.js:1:902823)
    at Object.loginWithUserCredentialsAsync (/usr/local/lib/node_modules/expo-cli/node_modules/@expo/apple-utils/build/index.js:1:872044)
    at loginWithUserCredentialsAsync (/usr/local/lib/node_modules/expo-cli/src/appleApi/authenticate.ts:133:22)
    at loginAsync (/usr/local/lib/node_modules/expo-cli/src/appleApi/authenticate.ts:92:12)
    at authenticateAsync (/usr/local/lib/node_modules/expo-cli/src/appleApi/authenticate.ts:152:23)
    at Context.ensureAppleCtx (/usr/local/lib/node_modules/expo-cli/src/credentials/context.ts:83:24)
    at generatePushKey (/usr/local/lib/node_modules/expo-cli/src/credentials/views/IosPushCredentials.ts:508:3)
```



## Docs
* https://docs.expo.dev/push-notifications/overview/