import { useEffect } from 'react'

function classifyReferrer(referrer) {
  if (!referrer) return { source: 'direct', medium: 'none' }
  try {
    const host = new URL(referrer).hostname
    if (host.includes('linkedin.com')) return { source: 'linkedin', medium: 'social' }
    if (host.includes('github.com'))   return { source: 'github',   medium: 'referral' }
    if (host.includes('google.com'))   return { source: 'google',   medium: 'organic' }
    return { source: host, medium: 'referral' }
  } catch {
    return { source: 'unknown', medium: 'none' }
  }
}

export function useVisitTracker() {
  useEffect(() => {
    if (sessionStorage.getItem('visit_tracked')) return
    sessionStorage.setItem('visit_tracked', '1')

    const redirectSource = sessionStorage.getItem('visit_source')
    sessionStorage.removeItem('visit_source')

    const params      = new URLSearchParams(window.location.search)
    const utmSource   = params.get('utm_source')
    const utmMedium   = params.get('utm_medium')
    const utmCampaign = params.get('utm_campaign')

    const fromReferrer = classifyReferrer(document.referrer)

    const source   = redirectSource ?? utmSource   ?? fromReferrer.source
    const medium   = utmMedium   ?? fromReferrer.medium
    const campaign = utmCampaign ?? '(none)'

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'portfolio_visit', { source, medium, campaign })
    }
  }, [])
}
