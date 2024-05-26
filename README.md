### MacOS custom menu bar

This menu bar is a custom component with macOS design to use in tauri js with next js or react js

![alt text](https://github.com/vitooficiall/tauri-js-custom-menu/blob/main/screenshot.png)

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
