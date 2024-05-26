'use client'

import React, { useState } from 'react'

import { IoCloseOutline } from 'react-icons/io5'
import { HiMiniMinus } from 'react-icons/hi2'
import { RiExpandUpDownFill } from 'react-icons/ri'

export default function HeaderBar() {
  const [hovering, setHovering] = useState<boolean>(false)
  const [windowFocused, setWindowFocused] = useState<boolean>(false)

  React.useEffect(() => {
    let unlisten: (() => void) | undefined
    ;(async () => {
      const { appWindow } = await import('@tauri-apps/api/window')

      unlisten = await appWindow.onFocusChanged(({ payload: focused }) => {
        setWindowFocused(focused)
      })
    })()

    return () => {
      unlisten?.()
    }
  }, [])

  const maximizeWindow = React.useCallback(async () => {
    const { appWindow } = await import('@tauri-apps/api/window')
    await appWindow.maximize()
  }, [])

  const minimizeWindow = React.useCallback(async () => {
    const { appWindow } = await import('@tauri-apps/api/window')
    await appWindow.minimize()
  }, [])

  const closeWindow = React.useCallback(async () => {
    const { appWindow } = await import('@tauri-apps/api/window')
    await appWindow.close()
  }, [])

  return (
    <nav
      data-tauri-drag-region
      className="flex gap-2 fixed bottom-[calc(100vh-theme(spacing.10))] left-0 right-0 top-0"
    >
      <div className="flex items-center gap-2 p-4 pt-6">
        <button
          type="button"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className={`flex justify-center items-center w-3 h-3 rounded-full 
          cursor-auto ${windowFocused ? 'bg-[#fe5e57]' : 'bg-[#3a3a3a]'}
          `}
          onClick={closeWindow}
        >
          {hovering && <IoCloseOutline className="text-[#a20809]" />}
        </button>
        <button
          type="button"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className={`flex justify-center items-center w-3 h-3 rounded-full 
            cursor-auto ${windowFocused ? 'bg-[#ffbc2f]' : 'bg-[#3a3a3a]'} 
          `}
          onClick={minimizeWindow}
        >
          {hovering && <HiMiniMinus className="text-[##b3710b]" />}
        </button>
        <button
          type="button"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className={`flex justify-center items-center w-3 h-3 rounded-full 
            cursor-auto ${windowFocused ? 'bg-[#27c840]' : 'bg-[#3a3a3a]'} 
          `}
          onClick={maximizeWindow}
        >
          {hovering && (
            <RiExpandUpDownFill className="text-#006201 -rotate-45" />
          )}
        </button>
      </div>
    </nav>
  )
}
