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
    const sidePane = document.querySelector('.side-pane')

    if (sidePane) {
      isMenuActive && sidePane.classList.add('active')
      !isMenuActive && sidePane.classList.remove('active')
    }
  })

  return {
    isMenuActive,
    setIsMenuActive
  }
}

export default useMenu
