export const loadState = () => {
  if (typeof window !== 'undefined') {
    try {
      const serializedState = localStorage.getItem('state')
      console.log('loadState', serializedState)
      if (serializedState === null) {
        return undefined
      }
      return JSON.parse(serializedState)
    } catch (err) {
      console.error(err)
    }
  }
}

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    console.log('saveState', serializedState)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.error(err)
  }
}
