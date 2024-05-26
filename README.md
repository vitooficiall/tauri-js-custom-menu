### MacOS custom menu bar
This menu bar is a custom component to use in tauri js with, the `decorations: false` flag in `tauri.conf.json`, and the tauri js api

## Config to use
2. Set all properties below in `src-tauri/tauri.conf.json`
  ```json
"tauri": {
    "allowlist": {
      "window": {
        "maximize": true,
        "minimize": true,
        "close": true,
      }
    },
    "windows": [
      {
        "decorations": false
      }
    ]
}
```
  


## Requirements
- Next Js / React Js
- [Tauri Js](https://tauri.app/) and [Tauri Api](https://tauri.app/v1/api/js/window)
- flag `"decorations": false` in `src-tauri/tauri.conf.json`

## Support
- [✅] Tauri Js
- [✅] Next Js
- [✅] React Js

## Feature
- [✅] Maximize Window
- [✅] Minimize Window
- [✅] Close Window
- [✅] Hover Buttons
- [✅] Window Focus
- [✅] Tauri Drag Region
