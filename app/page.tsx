'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

const portfolioSlides = [
  {
    word: 'ARCH.',
    badge: 'Architecture\n& Design',
    name: 'Archform Studio',
    tag: 'Site Vitrine · 2024',
  },
  {
    word: 'KIN.',
    badge: 'E-commerce\nMode',
    name: 'Kinfolk Paris',
    tag: 'E-commerce · 2024',
  },
  {
    word: 'NOV.',
    badge: 'SaaS\nB2B',
    name: 'Novare Labs',
    tag: 'Landing Page · 2024',
  },
  {
    word: 'LUX.',
    badge: 'Hôtellerie\nLuxe',
    name: 'Lux Maison',
    tag: 'Site Vitrine · 2023',
  },
  {
    word: 'ORB.',
    badge: 'Startup\nFintech',
    name: 'Orbis Finance',
    tag: 'Landing Page · 2023',
  },
] as const

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)
  const [loaderOut, setLoaderOut] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const [cursor, setCursor] = useState({ x: 0, y: 0, expand: false })
  const [portfolioIndex, setPortfolioIndex] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const outerRef = useRef<HTMLDivElement>(null)
  const firstSlideRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('z-theme')
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('z-theme', theme)
  }, [theme])

  useEffect(() => {
    const startLoader = window.setTimeout(() => {
      setLoaderOut(true)
      window.setTimeout(() => setShowLoader(false), 800)
    }, 2100)

    return () => {
      window.clearTimeout(startLoader)
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      return
    }

    const onMove = (event: MouseEvent) => {
      setCursor((prev) => ({ ...prev, x: event.clientX, y: event.clientY }))
    }

    const onOver = (event: Event) => {
      const target = event.target as HTMLElement | null
      if (target?.closest('a,button,.p-slide,.s-card,.pr-step,.n-toggle')) {
        setCursor((prev) => ({ ...prev, expand: true }))
      }
    }

    const onOut = () => {
      setCursor((prev) => ({ ...prev, expand: false }))
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )

    document.querySelectorAll('.rev').forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [mounted])

  useEffect(() => {
    const update = () => {
      if (firstSlideRef.current) {
        setSlideWidth(firstSlideRef.current.getBoundingClientRect().width)
      }
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setPortfolioIndex((prev) => (prev + 1) % portfolioSlides.length)
      }

      if (event.key === 'ArrowLeft') {
        setPortfolioIndex((prev) => (prev - 1 + portfolioSlides.length) % portfolioSlides.length)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  const portfolioCount = useMemo(
    () => `${String(portfolioIndex + 1).padStart(2, '0')} / ${String(portfolioSlides.length).padStart(2, '0')}`,
    [portfolioIndex],
  )

  const portfolioProgress = useMemo(
    () => `${((portfolioIndex + 1) / portfolioSlides.length) * 100}%`,
    [portfolioIndex],
  )

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    startX.current = event.clientX
  }

  const onMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
    const diff = startX.current - event.clientX
    if (Math.abs(diff) > 60) {
      setPortfolioIndex((prev) => (diff > 0 ? (prev + 1) % portfolioSlides.length : (prev - 1 + portfolioSlides.length) % portfolioSlides.length))
    }
  }

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    startX.current = event.touches[0].clientX
  }

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const diff = startX.current - event.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      setPortfolioIndex((prev) => (diff > 0 ? (prev + 1) % portfolioSlides.length : (prev - 1 + portfolioSlides.length) % portfolioSlides.length))
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      <div
        id="cur"
        className={cursor.expand ? 'expand' : ''}
        style={{
          left: `${cursor.x}px`,
          top: `${cursor.y}px`,
        }}
      />

      {showLoader && (
        <div id="loader" className={loaderOut ? 'out' : ''}>
          <div className="l-bar" />
          <div className="l-ring">
            <span className="l-z">z.</span>
          </div>
        </div>
      )}

      <nav>
        <a href="#" className="n-logo">
          <div className="n-dot">
            <span>z.</span>
          </div>
          <span className="n-wordmark">ZENIX.</span>
        </a>
        <ul className="n-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#processus">Processus</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="n-right">
          <button
            type="button"
            className="n-toggle"
            id="themeToggle"
            onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
            aria-label="Basculer le theme"
          />
          <a href="#contact" className="btn-primary">
            Devis gratuit
          </a>
        </div>
      </nav>

      <section id="hero">
        <div className="hero-left">
          <div className="hero-circle">
            <div className="orbit-text">
              <svg viewBox="0 0 226 226" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path id="c" d="M113,113 m-95,0 a95,95 0 1,1 190,0 a95,95 0 1,1 -190,0" />
                </defs>
                <text>
                  <textPath href="#c">WEB STUDIO · PARIS · DESIGN · PERFORMANCE · SEO · WEB STUDIO · PARIS · </textPath>
                </text>
              </svg>
            </div>
            <span className="hero-circle-z">z.</span>
          </div>
          <div className="dot-grid" id="dotGrid">
            {Array.from({ length: 25 }).map((_, index) => (
              <span key={`dot-${index}`} />
            ))}
          </div>
        </div>

        <div className="hero-right">
          <p className="hero-tag">Web Studio — Paris, France · Since 2022</p>
          <h1 className="hero-h1">
            <span className="row">
              <em>Des sites web</em>
            </span>
            <span className="row">
              <em>qui convertissent</em>
            </span>
            <span className="row">
              <em>vraiment.</em>
            </span>
          </h1>
          <div className="hero-foot">
            <a href="#contact" className="btn-primary">
              Démarrer un projet →
            </a>
            <a href="#portfolio" className="btn-ghost">
              Voir le portfolio
            </a>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-inner">
          <span>
            <b>Design</b> sur-mesure
          </span>
          <span>
            <b>SEO</b> optimisé
          </span>
          <span>
            <b>Performance</b> maximale
          </span>
          <span>
            <b>Responsive</b> mobile-first
          </span>
          <span>
            <b>Conversion</b> orientée résultats
          </span>
          <span>
            <b>Code</b> propre & scalable
          </span>
          <span>
            <b>Design</b> sur-mesure
          </span>
          <span>
            <b>SEO</b> optimisé
          </span>
          <span>
            <b>Performance</b> maximale
          </span>
          <span>
            <b>Responsive</b> mobile-first
          </span>
          <span>
            <b>Conversion</b> orientée résultats
          </span>
          <span>
            <b>Code</b> propre & scalable
          </span>
        </div>
      </div>

      <section id="services">
        <div className="s-sticky rev">
          <span className="s-num">— 01</span>
          <h2 className="s-title">
            Ce que
            <br />
            nous
            <br />
            faisons.
          </h2>
          <div className="s-circle">
            <span>z.</span>
          </div>
        </div>
        <div className="s-cards">
          <div className="s-card rev">
            <span className="s-card-num">001</span>
            <div>
              <h3>Site Vitrine</h3>
              <p>Une présence en ligne impactante qui reflète votre identité. Design sur-mesure, expérience soignée de bout en bout.</p>
            </div>
            <span className="s-card-arrow">→</span>
          </div>
          <div className="s-card rev">
            <span className="s-card-num">002</span>
            <div>
              <h3>Landing Page</h3>
              <p>Pages conçues pour convertir. Copywriting, hiérarchie visuelle et appels à l&apos;action optimisés pour vos objectifs.</p>
            </div>
            <span className="s-card-arrow">→</span>
          </div>
          <div className="s-card rev">
            <span className="s-card-num">003</span>
            <div>
              <h3>E-commerce</h3>
              <p>Boutiques performantes, expériences d&apos;achat fluides, paiements sécurisés. De la maquette au lancement.</p>
            </div>
            <span className="s-card-arrow">→</span>
          </div>
          <div className="s-card rev">
            <span className="s-card-num">004</span>
            <div>
              <h3>Refonte Web</h3>
              <p>Audit, restructuration et modernisation. Donnez un second souffle à votre site pour booster vos performances.</p>
            </div>
            <span className="s-card-arrow">→</span>
          </div>
          <div className="s-card rev">
            <span className="s-card-num">005</span>
            <div>
              <h3>SEO & Performance</h3>
              <p>Optimisation technique, Core Web Vitals, strategie de contenu pour un positionnement durable sur Google.</p>
            </div>
            <span className="s-card-arrow">→</span>
          </div>
          <div className="s-card rev">
            <span className="s-card-num">006</span>
            <div>
              <h3>Maintenance</h3>
              <p>Suivi technique, mises à jour, sauvegardes et support continu. Votre site entre de bonnes mains.</p>
            </div>
            <span className="s-card-arrow">→</span>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="p-header rev">
          <h2 className="p-title">Réalisations.</h2>
          <div className="p-controls">
            <span className="p-count" id="pCount">
              {portfolioCount}
            </span>
            <button className="p-btn" id="pPrev" onClick={() => setPortfolioIndex((prev) => (prev - 1 + portfolioSlides.length) % portfolioSlides.length)}>
              ←
            </button>
            <button className="p-btn" id="pNext" onClick={() => setPortfolioIndex((prev) => (prev + 1) % portfolioSlides.length)}>
              →
            </button>
          </div>
        </div>

        <div
          className="p-track-outer"
          id="pOuter"
          ref={outerRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="p-track"
            id="pTrack"
            style={{ transform: `translateX(-${portfolioIndex * (slideWidth || 0)}px)` }}
          >
            {portfolioSlides.map((slide, index) => (
              <div className="p-slide" key={slide.name} ref={index === 0 ? firstSlideRef : undefined}>
                <div className="p-slide-bg">
                  <span className="p-slide-word">{slide.word}</span>
                </div>
                <div className="p-slide-badge">
                  {slide.badge.split('\n').map((line) => (
                    <span key={`${slide.name}-${line}`}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
                <div className="p-slide-info">
                  <div>
                    <p className="p-slide-name">{slide.name}</p>
                    <p className="p-slide-tag">{slide.tag}</p>
                  </div>
                  <span className="p-slide-yr">↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-progress">
          <div className="p-progress-fill" id="pFill" style={{ width: portfolioProgress }} />
        </div>
      </section>

      <section id="processus">
        <div className="pr-top rev">
          <span className="pr-mini">— 03</span>
          <h2 className="pr-title">
            Comment
            <br />
            on travaille.
          </h2>
        </div>
        <div className="pr-steps rev">
          <div className="pr-step">
            <div className="pr-step-n">01</div>
            <div className="pr-step-body">
              <h3>Découverte</h3>
              <p>Brief complet, analyse concurrentielle, définition des objectifs et de l&apos;audience cible.</p>
            </div>
            <span className="pr-step-tag">1–2 jours</span>
          </div>
          <div className="pr-step">
            <div className="pr-step-n">02</div>
            <div className="pr-step-body">
              <h3>Conception</h3>
              <p>Wireframes, maquettes et prototype interactif. Validation à chaque étape avant de coder.</p>
            </div>
            <span className="pr-step-tag">3–5 jours</span>
          </div>
          <div className="pr-step">
            <div className="pr-step-n">03</div>
            <div className="pr-step-body">
              <h3>Développement</h3>
              <p>Code propre, rapide et scalable. Intégrations CMS, animations et optimisations techniques.</p>
            </div>
            <span className="pr-step-tag">7–14 jours</span>
          </div>
          <div className="pr-step">
            <div className="pr-step-n">04</div>
            <div className="pr-step-body">
              <h3>Lancement</h3>
              <p>Tests cross-browser, déploiement, formation et suivi post-lancement. On vous accompagne.</p>
            </div>
            <span className="pr-step-tag">1–2 jours</span>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="c-left rev">
          <div>
            <span className="c-mini">— 04 / Contact</span>
            <h2 className="c-big">
              Parlons de
              <br />
              votre
              <br />
              projet.
            </h2>
            <p className="c-sub">Prêt à transformer votre présence en ligne ? Discutons de votre vision et voyons comment vous atteindre vos objectifs.</p>
            <a href="mailto:hello@zenixweb.fr" className="c-mail">
              hello@zenixweb.fr
            </a>
            <div className="c-badge">
              <div className="c-badge-dot" />
              Disponible pour de nouvelles missions
            </div>
          </div>
          <div className="c-brand">
            <div className="c-brand-circle">
              <span>z.</span>
            </div>
            <div className="c-brand-copy">
              ZENIX Web Studio
              <br />
              Paris, France
            </div>
          </div>
        </div>
        <div className="c-right rev">
          <form className="c-form">
            <div className="c-field">
              <label>Nom complet</label>
              <input type="text" placeholder="Jean Dupont" />
            </div>
            <div className="c-field">
              <label>Email</label>
              <input type="email" placeholder="jean@entreprise.fr" />
            </div>
            <div className="c-field">
              <label>Type de projet</label>
              <select defaultValue="">
                <option value="">Sélectionner...</option>
                <option>Site vitrine</option>
                <option>Landing page</option>
                <option>E-commerce</option>
                <option>Refonte web</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="c-field">
              <label>Budget</label>
              <select defaultValue="">
                <option value="">Sélectionner...</option>
                <option>Moins de 1 500€</option>
                <option>1 500€ — 3 000€</option>
                <option>3 000€ — 6 000€</option>
                <option>6 000€ +</option>
              </select>
            </div>
            <div className="c-field">
              <label>Message</label>
              <textarea rows={4} placeholder="Décrivez votre projet..." />
            </div>
            <button className="c-submit" type="button">
              <span>Envoyer le message</span>
              <div className="c-submit-circle">→</div>
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="f-logo">
          <div className="f-dot">
            <span>z.</span>
          </div>
          <span className="f-name">ZENIX.</span>
        </div>
        <p className="f-copy">© 2025 ZENIX Web Studio</p>
        <div className="f-links">
          <a href="https://www.instagram.com/web_zenixx/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@zenixweb" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="#">LinkedIn</a>
          <a href="#">Mentions légales</a>
        </div>
      </footer>
    </>
  )
}
