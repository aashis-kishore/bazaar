import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface UseMenuReturn {
  isMenuActive: boolean
  setIsMenuActive: Dispatch<SetStateAction<boolean>>
}

interface UseMenu {
  (initState?: boolean): UseMenuReturn
}

const useMenu: UseMenu = (initState = false) => {
  const [isMenuActive, setIsMenuActive] = useState(initState)

  useEffect(() => {
    const menuPane = document.querySelector('.menu-pane')
    const mainPane = document.querySelector('.main-pane')

    if (menuPane && mainPane) {
      isMenuActive && menuPane.classList.add('active')
      !isMenuActive && menuPane.classList.remove('active')

      isMenuActive && mainPane.classList.remove('active')
      !isMenuActive && mainPane.classList.add('active')
    }
  })

  return {
    isMenuActive,
    setIsMenuActive
  }
}

export default useMenu
