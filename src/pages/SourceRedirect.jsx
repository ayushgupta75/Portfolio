import { useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

export default function SourceRedirect() {
  const { source } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (source) sessionStorage.setItem('visit_source', source)
    const destination = location.pathname.replace(/\/from\/[^/]+$/, '') || '/'
    navigate(destination, { replace: true })
  }, [source, navigate, location])

  return null
}
