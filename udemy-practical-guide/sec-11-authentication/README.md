## Notes:

The firebase Realtime Database may need a new Rules setting in order to access. For example: cleaning up the authentication requirements.

The original rules are:

```
{
  "rules": {
    ".read": "now < 1656363600000",  // 2022-6-28
    ".write": "now < 1656363600000",  // 2022-6-28
  }
}
```

The rules for using authentication in the URL are:

```
{
  "rules": {
    ".read": "auth.uid != null",
    ".write": "auth.uid != null"
  }
}
```
