import { useState, useEffect } from 'react'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path)
    setCurrentPath(path)
  }

  if (currentPath === '/cadastro') {
    return <RegisterPage onNavigateToLogin={() => navigateTo('/')} />
  }

  return <LoginPage onNavigateToRegister={() => navigateTo('/cadastro')} />
}

export default App
