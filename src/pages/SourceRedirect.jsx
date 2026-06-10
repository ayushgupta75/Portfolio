import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function SourceRedirect() {
  const { source } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (source) sessionStorage.setItem('visit_source', source)
    navigate('/', { replace: true })
  }, [source, navigate])

  return null
}
