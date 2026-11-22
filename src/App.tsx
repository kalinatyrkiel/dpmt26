import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import tweetImage from './assets/joanna-maciejewska-tweet.png'
import coIntelligenceCover from './assets/co-intelligence-book-cover.png'
import bookCover from './assets/reverse-centaur-book-cover.png'
import exampleInpostLockers from './assets/example-inpost-lockers.png'
import exampleCoffeedeskDiscount from './assets/example-coffeedesk-discount.png'
import zendeskAiPrompts from './assets/zendesk-ai-prompts.png'
import zendeskAutoAssist from './assets/zendesk-auto-assist.png'
import zendeskWhySuggestion from './assets/zendesk-why-suggestion.png'
import modeScreens from './assets/mode-screens.png'
import modeDialogue from './assets/mode-dialogue.png'
import modePrompts from './assets/mode-prompts.png'
import exampleBielikDisclaimer from './assets/example-bielik-disclaimer.png'
import exampleDisclaimerSuggestionVerify from './assets/example-disclaimer-suggestion-verify.png'
import linkedinQr from './assets/linkedin-qr.jpg'
import thesisChatbot from './assets/thesis-chatbot.png'
import logoDesignPractice from './assets/logo-design-practice.svg'
import logoMobileTrends from './assets/logo-mobile-trends.svg'
import exampleVisibilitySystemState from './assets/example-visibility-system-state.png'
import exampleControlFeedback from './assets/example-control-feedback.png'
import exampleControlModelPicker from './assets/example-control-model-picker.png'
import exampleControlMemory from './assets/example-control-memory.png'
import aiWritingSigns from './assets/signs-of-ai-writing.png'
import keepThinking from './assets/keep-thinking.png'
import './App.css'

function CentaurIcon() {
  return (
    <svg className="mode-icon" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="29" width="30" height="14" rx="7" fill="currentColor" />
      <path
        d="M38 35 45.5 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M46 18 55 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path d="M44 15.5 43 8l6 5.5Z" fill="currentColor" />
      <path
        d="M15 43.5 14 56M23 44.5 22 56M31 44.5 32.5 56M38 43.5 40 56"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      <path
        d="M10.5 32C6 34 4 39 4.5 45"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CyborgIcon() {
  return (
    <svg className="mode-icon" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="7" r="3" fill="currentColor" />
      <path
        d="M32 10v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <rect
        x="14"
        y="16"
        width="36"
        height="28"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
      />
      <circle cx="25" cy="27" r="3.2" fill="currentColor" />
      <circle cx="39" cy="27" r="3.2" fill="currentColor" />
      <path
        d="M25 36h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M22 50h20M22 50v6M42 50v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type PromptModeId = 'screens' | 'dialogue' | 'prompts' | 'disclaimers'

function ModesDisclaimersPreview() {
  return (
    <div className="modes-preview modes-preview-disclaimers">
      <figure className="modes-disclaimer-shot">
        <img
          src={exampleBielikDisclaimer}
          alt="Pole czatu Bielik z zastrzeżeniem pod polem: Bielik czasami popełnia błędy (jak każdy). Sprawdzaj ważne informacje!"
        />
      </figure>
      <figure className="modes-disclaimer-shot">
        <img
          src={exampleDisclaimerSuggestionVerify}
          alt="Odpowiedź AI z wersją uproszczoną komunikatu i zastrzeżeniem: To tylko sugestia. Zweryfikuj."
        />
      </figure>
    </div>
  )
}

function PromptModesExplore({
  activeId,
  title,
}: {
  activeId: PromptModeId
  title?: ReactNode
}) {
  const modes: {
    id: PromptModeId
    label: string
    detail: string
    image?: string
    alt?: string
  }[] = [
    {
      id: 'screens',
      label: 'Ekrany',
      detail: 'Przyciski, etykiety, ustalone ścieżki',
      image: modeScreens,
      alt: 'Select model menu showing Default, GPT-5.6 Terra, and GPT-5.6 Luna options.',
    },
    {
      id: 'dialogue',
      label: 'Dialog',
      detail: 'Wymiana zdań, pomoc w kontekście',
      image: modeDialogue,
      alt: 'Gdańsk dialogue options: check flight times versus Warsaw, or build a 48-hour weekend itinerary.',
    },
    {
      id: 'prompts',
      label: 'Prompty',
      detail: 'Intencja — sugerowana lub wpisana swobodnie',
      image: modePrompts,
      alt: 'Tatra prompt suggestions for hiking apps, packing, mountain huts, via ferrata, and avalanche safety.',
    },
    {
      id: 'disclaimers',
      label: 'Zastrzeżenia',
      detail: 'Disclaimery — oczekiwania i weryfikacja',
    },
  ]

  const preview = modes.find((mode) => mode.id === activeId) ?? modes[0]

  return (
    <div className="modes-explore">
      <h2 className="slide-title wide-title modes-explore-title">
        {title ?? (
          <>
            Microcopy w <span className="green">narzędziach AI</span>
          </>
        )}
      </h2>
      <div className="modes-explore-body">
        <div className="modes-menu">
          {modes.map((mode) => (
            <div
              key={mode.id}
              className={`modes-menu-item${activeId === mode.id ? ' is-active' : ''}`}
            >
              <span className="modes-menu-item-copy">
                <strong>{mode.label}</strong>
                <small>{mode.detail}</small>
              </span>
              {activeId === mode.id && (
                <span className="modes-check" aria-hidden="true">
                  ✓
                </span>
              )}
            </div>
          ))}
        </div>
        {activeId === 'disclaimers' ? (
          <ModesDisclaimersPreview />
        ) : (
          <div className={`modes-preview has-image modes-preview-${preview.id}`}>
            <img src={preview.image} alt={preview.alt ?? ''} />
          </div>
        )}
      </div>
    </div>
  )
}

function SystemPromptMock({ showSuggestion }: { showSuggestion: boolean }) {
  return (
    <div className="prompt-mock">
      <div className="prompt-mock-copy">
        <h2 className="prompt-mock-heading">
          {showSuggestion ? (
            'Wpływ na instrukcje'
          ) : (
            <>
              Stary dobry <span className="green">prosty język</span>
            </>
          )}
        </h2>
        <p className="body-copy">
          {showSuggestion
            ? 'Wytyczne dla treści żyją teraz w plikach .md'
            : 'Ważne, czyli jakie? UX writerzy znają się na precyzji.'}
        </p>
      </div>
      <div className="prompt-mock-panel">
        <div className="prompt-mock-chrome">
          <span>system.md</span>
        </div>
        <pre className="prompt-mock-code">
          <code>
            <span className="prompt-line">Jesteś asystentem wsparcia.</span>
            {'\n'}
            <span className="prompt-line">Pisz jasno i zwięźle.</span>
            {'\n'}
            <span
              className={`prompt-line is-hot${showSuggestion ? ' is-on' : ''}`}
            >
              {showSuggestion
                ? 'Krótkie akapity. Listy przy 3+ krokach. Pogrubiaj tylko etykiety lub krytyczne ostrzeżenia, nigdy całe zdania.'
                : 'Pogrubiaj ważne słowa.'}
            </span>
            {'\n'}
            <span className="prompt-line">Odpowiedzi mają być krótkie.</span>
          </code>
        </pre>
      </div>
    </div>
  )
}

function EvalFailIcon() {
  return (
    <svg viewBox="0 0 20 20" width="1em" height="1em" focusable="false">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.2" />
      <path
        d="M6.5 6.5 13.5 13.5M13.5 6.5 6.5 13.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function EvalPassIcon() {
  return (
    <svg viewBox="0 0 20 20" width="1em" height="1em" focusable="false">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.2" />
      <path
        d="M5.5 10.5 8.5 13.5 14.5 6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TrustVisibilitySlide() {
  return (
    <div className="trust-visibility-slide">
      <h2 className="slide-title wide-title trust-slide-title">
        <span className="green">Widoczność</span>
      </h2>
      <article className="trust-visibility-card trust-visibility-card-single">
        <h3>Źródła i stan systemu</h3>
        <figure className="trust-visibility-shot is-system">
          <img
            src={exampleVisibilitySystemState}
            alt="ChatGPT: Working for 29s, plan działania i Searching 16 websites z listą domen."
          />
        </figure>
      </article>
    </div>
  )
}

function TrustControlSlide() {
  return (
    <div className="trust-pillar-example-slide">
      <h2 className="slide-title wide-title trust-slide-title">
        <span className="green">Kontrola</span>
      </h2>
      <div className="trust-control-layout">
        <article className="trust-visibility-card trust-control-feedback">
          <h3>Feedback</h3>
          <figure className="trust-visibility-shot is-feedback">
            <img
              src={exampleControlFeedback}
              alt="Good response / Bad response — menu oceny odpowiedzi."
            />
          </figure>
        </article>
        <article className="trust-visibility-card trust-control-model">
          <h3>Wybór modelu</h3>
          <figure className="trust-visibility-shot is-model">
            <img
              src={exampleControlModelPicker}
              alt="Lista modeli z opisem i wersją, np. Claude Sonnet 5.5 High."
            />
          </figure>
        </article>
        <article className="trust-visibility-card trust-control-memory">
          <h3>Pamięć (Memory)</h3>
          <figure className="trust-visibility-shot is-memory">
            <img
              src={exampleControlMemory}
              alt="Memory summary — podsumowanie zapisanej pamięci o użytkowniku."
            />
          </figure>
        </article>
      </div>
    </div>
  )
}

function TrustApprovalSlide() {
  return (
    <div className="trust-pillar-example-slide">
      <h2 className="slide-title wide-title trust-slide-title">
        <span className="green">Zatwierdzenie</span>
      </h2>
      <p className="body-copy trust-pillar-lede">
        AI proponuje odpowiedź. Agent-człowiek czyta, poprawia i zatwierdza. Ma
        pełną kontrolę.
      </p>
      <article className="trust-visibility-card trust-visibility-card-single">
        <figure className="trust-visibility-shot is-zendesk">
          <img
            src={zendeskAutoAssist}
            alt="Zendesk Auto assist: szkic odpowiedzi i przycisk Approve przed wysyłką."
          />
        </figure>
      </article>
    </div>
  )
}

function TrustVerificationSlide() {
  return (
    <div className="trust-pillar-example-slide">
      <h2 className="slide-title wide-title trust-slide-title">
        <span className="green">Weryfikacja</span>
      </h2>
      <p className="body-copy trust-pillar-lede">
        Widać, skąd pochodzi sugestia AI. Agent obsługi klienta weryfikuje
        źródła.
      </p>
      <article className="trust-visibility-card trust-visibility-card-single">
        <figure className="trust-visibility-shot is-zendesk">
          <img
            src={zendeskWhySuggestion}
            alt="Zendesk: skąd ta sugestia — źródła i uzasadnienie odpowiedzi AI."
          />
        </figure>
      </article>
    </div>
  )
}

function TrustWorkplaceShift() {
  return (
    <div className="trust-work-slide">
      <h2 className="display statement-display">
        AI <span className="pink">podważa domyślne zaufanie</span> w pracy
      </h2>
      <p className="body-copy trust-lede">
        Generujemy propozycje z AI i nawet ich nie sprawdzamy. Znormalizujmy
        mówienie: „eksplorowałam to z AI”.
        <br />
        <span className="green">
          (I sprawdź, co w ogóle wrzucasz, serio.)
        </span>
      </p>
      <cite className="research-cite">
        <span className="research-title">
          AI Is Breaking This Thing We Call Trust
        </span>
        <span className="research-meta">Terrible Software · 2026</span>
      </cite>
    </div>
  )
}

type Slide = {
  className?: string
  builds?: number
  footerAffiliation?: string
  footerExamples?: string
  content: ReactNode | ((build: number) => ReactNode)
}

const slides: Slide[] = [
  {
    content: (
      <>
        <p className="hero-event">
          <img
            src={logoDesignPractice}
            alt="Design Practice"
          />
          <span aria-hidden="true">×</span>
          <img
            className="logo-mobile-trends"
            src={logoMobileTrends}
            alt="Mobile Trends"
          />
        </p>
        <h1 className="hero-title">
          Prompty i nie tylko:
          <br />
          <span className="green">
            jak projektować
            <br />
            interakcje z AI
          </span>
        </h1>
        <p className="lede">Kalina Tyrkiel-Szymańska</p>
      </>
    ),
    className: 'hero-slide',
  },
  {
    footerAffiliation: 'Zendesk',
    content: (
      <div className="intro-grid">
        <div className="intro-identity">
          <div>
            <h2>Kalina Tyrkiel-Szymańska</h2>
            <p className="role">
              Content Designer, trenerka UX writingu, wykładowczyni, psycholożka
            </p>
          </div>
        </div>
        <div className="intro-stack">
          <div className="intro-statement is-light">
            <p>
              Projektuję narzędzia AI.
              <br />
              Projektuję <span className="green">z użyciem AI</span>.
            </p>
          </div>
          <div className="intro-statement">
            <p>
              Kiedyś uczyłam głównie pisania.{' '}
              <span className="green">Teraz uczę, jak pracować z AI.</span>
            </p>
          </div>
        </div>
      </div>
    ),
    className: 'intro-slide',
  },
  {
    content: (
      <div className="psych-bio-layout">
        <div className="psych-bio-copy">
          <h2 className="slide-title wide-title">
            Ten temat towarzyszy mi od dłuższego czasu…
          </h2>
        </div>
        <figure className="psych-bio-frame">
          <img
            src={thesisChatbot}
            alt="Thesis record: Factors influencing satisfaction of interactions with chatbots, by Kalina Tyrkiel, Master’s in applied psychology, diploma exam 19 October 2020."
          />
        </figure>
      </div>
    ),
    className: 'psych-bio-slide',
  },
  {
    content: (
      <div className="stat-slide">
        <p className="stat-figure">
          Z <span className="green">54%</span> do <span className="green">91%</span> w rok
        </p>
        <p className="stat-note">
          Prawie każdy designer używa AI minimum raz w tygodniu.{' '}
          <span className="green">75% używa AI codziennie.</span>
        </p>
        <p className="stat-source">Źródło: stateofaidesign.com</p>
      </div>
    ),
    className: 'statement-slide',
  },
  {
    content: (
      <div className="stat-slide">
        <h2 className="stat-heading">Do czego designerzy używają AI</h2>
        <div className="stat-bars" aria-label="Użycie AI w 2026">
          <div className="stat-bar">
            <span>Ideacja</span>
            <span className="stat-bar-track">
              <span className="stat-bar-fill" style={{ width: '76%' }} />
            </span>
            <strong>76%</strong>
          </div>
          <div className="stat-bar">
            <span>Prototypy</span>
            <span className="stat-bar-track">
              <span className="stat-bar-fill" style={{ width: '74%' }} />
            </span>
            <strong>74%</strong>
          </div>
          <div className="stat-bar is-hot">
            <span>
              Tekst w UI <small>(+18% w skali roku)</small>
            </span>
            <span className="stat-bar-track">
              <span className="stat-bar-fill" style={{ width: '70%' }} />
            </span>
            <strong>70%</strong>
          </div>
        </div>
        <p className="stat-source">Źródło: stateofaidesign.com</p>
      </div>
    ),
    className: 'statement-slide',
  },
  {
    content: (
      <div className="era-layout">
        <article className="era-card">
          <h2>Stałe teksty w stałych miejscach</h2>
          <p>
            Przyciski, etykiety, komunikaty błędu: napisane raz, zawsze brzmią
            tak samo.
          </p>
        </article>
        <div className="era-examples era-examples-ui">
          <figure className="example-frame example-frame-light">
            <img
              src={exampleInpostLockers}
              alt="InPost: Z których skrytek wygodniej wyciągniesz przesyłkę? — wybór Dowolnie, Wolę wyżej, Wolę niżej."
            />
          </figure>
          <figure className="example-frame example-frame-light example-frame-error">
            <img
              src={exampleCoffeedeskDiscount}
              alt="Coffeedesk: kod rabatowy — komunikat błędu „Kod rabatowy nie został rozpoznany”."
            />
          </figure>
        </div>
      </div>
    ),
    className: 'era-slide',
    footerExamples: 'przykłady: Allegro, Coffeedesk',
  },
  {
    content: <PromptModesExplore activeId="screens" />,
    className: 'modes-slide',
  },
  {
    content: <PromptModesExplore activeId="dialogue" />,
    className: 'modes-slide',
  },
  {
    content: <PromptModesExplore activeId="prompts" />,
    className: 'modes-slide',
  },
  {
    content: <PromptModesExplore activeId="disclaimers" />,
    className: 'modes-slide',
  },
  {
    content: (
      <h2 className="display statement-display language-quote language-quote-italic">
        You can’t take the <span className="green">language</span>
        <br />
        out of the <span className="green">large language model</span>
      </h2>
    ),
    className: 'statement-slide',
  },
  {
    content: (
      <div className="stat-slide">
        <h2 className="stat-heading">
          Content używa agentic AI <span className="green">najrzadziej</span>
        </h2>
        <div className="stat-bars" aria-label="Użycie agentic AI według roli, n = 521">
          {[
            ['Operations', '83%'],
            ['Product management', '81%'],
            ['Design', '71%'],
            ['Engineering', '71%'],
            ['Research', '57%'],
            ['Content', '35%'],
          ].map(([label, value]) => (
            <div
              className={`stat-bar${label === 'Content' ? ' is-hot' : ''}`}
              key={label}
            >
              <span>{label}</span>
              <span className="stat-bar-track">
                <span className="stat-bar-fill" style={{ width: value }} />
              </span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <p className="stat-source">Źródło: NNGroup, 2026. n = 521.</p>
      </div>
    ),
    className: 'statement-slide',
  },
  {
    content: (
      <div className="stat-slide">
        <h2 className="stat-heading">Co nas wstrzymuje</h2>
        <div className="stat-trio">
          <article>
            <p className="stat-figure">54%</p>
            <p>Jakość outputu. Obawy o jakość wyników.</p>
          </article>
          <article>
            <p className="stat-figure">50%</p>
            <p>Bezpieczeństwo. Dane i prywatność.</p>
          </article>
          <article>
            <p className="stat-figure">34%</p>
            <p>Etyka albo wpływ na środowisko.</p>
          </article>
        </div>
        <p className="stat-source">Źródło: NNGroup, 2026. AI in UX Survey.</p>
      </div>
    ),
    className: 'statement-slide',
  },
  {
    content: (
      <h2 className="display statement-display">
        Za bardzo <span className="green">ufamy</span> sztucznej{'\u00A0'}inteligencji,
        <br />
        przez{'\u00A0'}co <span className="green">niszczymy zaufanie</span> do{'\u00A0'}
        nas.
      </h2>
    ),
    className: 'statement-slide',
  },
  {
    content: (
      <h2 className="display statement-display">
        Generujemy{' '}
        <span className="statement-keep">dokumenty z{'\u00A0'}AI</span>.
        <br />
        <span className="green">
          Dokumenty, które czyta tylko{'\u00A0'}AI.
        </span>
      </h2>
    ),
    className: 'statement-slide',
  },
  {
    content: <TrustWorkplaceShift />,
    className: 'trust-work-slide-wrap statement-slide',
  },
  {
    content: (
      <>
        <h2 className="display statement-display statement-display-trust">
          Z AI za szybko ufamy, że coś jest prawie gotowe.
        </h2>
        <p className="body-copy trust-lede">
          Z tą prezentacją miałam ten sam problem.
        </p>
      </>
    ),
    className: 'statement-slide',
  },
  {
    content: (
      <div className="adversarial-slide">
        <div className="adversarial-slide-copy">
          <h2 className="slide-title wide-title">
            Twoje AI potrzebuje krytyka.
          </h2>
          <p className="body-copy adversarial-slide-lede">
            Zaangażuj <span className="term-italic">adversarial agent</span>.
          </p>
          <cite className="research-cite">
            <span className="research-title">
              When Your AI Needs an Enemy: The Case for Adversarial Agents
            </span>
            <span className="research-meta">Jatin Mishra · Medium</span>
          </cite>
        </div>
        <div className="prompt-mock-panel adversarial-prompt">
          <div className="prompt-mock-chrome">
            <span>Agent-adwersarz</span>
          </div>
          <pre className="prompt-mock-code adversarial-prompt-code">
            <code>
              Szukaj błędów, luk, słabych miejsc w narracji. Znajdź miejsca,
              gdzie słuchacz traci uwagę lub zaufanie. Nie poprawiaj, atakuj.
            </code>
          </pre>
        </div>
      </div>
    ),
    className: 'adversarial-slide-wrap statement-slide',
  },
  {
    content: (
      <>
        <h2 className="display statement-display">
          Kontrola i <span className="pink">krytycyzm</span>
        </h2>
        <p className="body-copy">Dobre praktyki w interfejsach</p>
      </>
    ),
    className: 'statement-slide',
  },
  {
    content: (
      <h2 className="display statement-display">
        Wszystko, co generuje AI może być{' '}
        <span className="green">halucynacją</span>
      </h2>
    ),
    className: 'statement-slide',
  },
  {
    content: <TrustVisibilitySlide />,
    className: 'trust-visibility-wrap',
  },
  {
    content: <TrustControlSlide />,
    className: 'trust-control-wrap',
  },
  {
    content: <TrustApprovalSlide />,
    className: 'trust-approval-wrap',
    footerExamples: 'przykład: Zendesk',
  },
  {
    content: <TrustVerificationSlide />,
    className: 'trust-verification-wrap',
    footerExamples: 'przykład: Zendesk',
  },
  {
    content: (
      <div className="zendesk-example">
        <div className="zendesk-copy">
          <h2>
            Microcopy:{' '}
            <span className="green">AI w edytorze wiadomości</span>
          </h2>
          <p className="body-copy">
            Pokazujemy, co AI potrafi. Agent-człowiek wie, jak może go użyć. Ma
            kontrolę nad tym, co zostanie wysłane.
          </p>
        </div>
        <div className="zendesk-frames zendesk-frames-single">
          <figure className="example-frame zendesk-frame">
            <img
              src={zendeskAiPrompts}
              alt="Zendesk AI writing menu with options: Expand, Simplify, Rewrite in your tone, Make more friendly, Make more formal, plus a custom prompt field."
            />
          </figure>
        </div>
      </div>
    ),
    className: 'era-slide',
    footerExamples: 'przykład: Zendesk',
  },
  {
    content: (
      <>
        <h2 className="display statement-display">
          <span className="pink">Poza UI:</span> jak wpływamy na{' '}
          <span className="green">odpowiedzi AI</span>?
        </h2>
      </>
    ),
    className: 'statement-slide',
  },
  {
    content: <SystemPromptMock showSuggestion={false} />,
    className: 'prompt-mock-slide',
  },
  {
    content: <SystemPromptMock showSuggestion={true} />,
    className: 'prompt-mock-slide',
  },
  {
    content: (
      <div className="brevity-slide">
        <h2 className="display statement-display">
          UX writerka na straży{' '}
          <span className="green">zwięzłości</span>
        </h2>
        <div className="brevity-copy">
          <cite className="brevity-citation">
            <span className="brevity-paper-title">
              Brevity is the soul of sustainability: Characterizing LLM response
              lengths
            </span>
            <span className="brevity-authors">
              Soham Poddar, Paramita Koley, Janardan Misra i in. (IIT Kharagpur,
              ISI Kolkata, Accenture Labs)
            </span>
          </cite>
          <p className="body-copy brevity-finding">
            „W prawie wszystkich przypadkach odpowiedzi LLM są znacząco dłuższe
            niż docelowa długość (na wszystkich zbiorach danych).”
          </p>
          <p className="brevity-takeaway">
            <strong className="green">
              UX writerzy walczą o zwięzłość odpowiedzi LLMów (oj, walczą...)
            </strong>
          </p>
        </div>
      </div>
    ),
    className: 'statement-slide',
  },
  {
    content: (
      <>
        <h2 className="display statement-display">
          Słowa używane przez <span className="green">AI</span> kształtują ludzki
          odbiór
        </h2>
        <p className="body-copy">
          Porozmawiajmy o ograniczeniach poznawczych
        </p>
      </>
    ),
    className: 'statement-slide',
  },
  {
    content: (
      <figure className="media-frame">
        <img
          src={aiWritingSigns}
          alt="Wikipedia: Signs of AI writing. Lista oznak tekstu typowego dla czatbotów."
        />
      </figure>
    ),
    className: 'media-slide',
    footerExamples: 'Wikipedia: Signs of AI writing',
  },
  {
    content: (
      <div className="anthro-slide">
        <h2 className="slide-title wide-title">Emocjonalny język</h2>
        <div className="anthro-pair">
          <article className="anthro-avoid">
            <span className="anthro-label">
              <EvalFailIcon />
              Unikaj
            </span>
            <div className="agent-output">
              <span className="agent-output-meta">Agent</span>
              <p>
                Bardzo mi przykro, że przez to przechodzisz. Doskonale rozumiem,
                jak frustrujące to musi być.
              </p>
            </div>
          </article>
          <article className="anthro-instead">
            <span className="anthro-label">
              <EvalPassIcon />
              Zamiast tego
            </span>
            <div className="agent-output">
              <span className="agent-output-meta">Agent</span>
              <p>
                Nie widzę tego zamówienia. Sprawdź numer na mailu z potwierdzeniem albo podaj e-mail użyty przy zakupie.
              </p>
            </div>
          </article>
        </div>
        <cite className="research-cite">
          <span className="research-title">
            Mirages. On Anthropomorphism in Dialogue Systems
          </span>
          <span className="research-meta">
            Abercrombie, Cercas Curry, Dinkar, Rieser, Talat · EMNLP 2023
          </span>
          <span className="research-finding">
            Pseudoempatia i język emocji wzmacniają personifikację i nadmierne poleganie na systemie — szczególnie w kontekstach
            wysokiego ryzyka.
          </span>
        </cite>
      </div>
    ),
  },
  {
    content: (
      <div className="anthro-slide">
        <h2 className="slide-title wide-title">
          Agent nie jest <span className="green">w Twoim zespole</span>
        </h2>
        <div className="anthro-pair">
          <article className="anthro-avoid">
            <span className="anthro-label">
              <EvalFailIcon />
              Unikaj
            </span>
            <div className="agent-output">
              <span className="agent-output-meta">Agent</span>
              <p>
                Cześć! Jako Twój asystent tworzę za Ciebie copy do interfejsu.
              </p>
            </div>
          </article>
          <article className="anthro-instead">
            <span className="anthro-label">
              <EvalPassIcon />
              Zamiast tego
            </span>
            <div className="agent-output">
              <span className="agent-output-meta">Agent</span>
              <p>
                Oto 3 propozycje. Zdecyduj, która pasuje najlepiej.
              </p>
            </div>
          </article>
        </div>
        <cite className="research-cite">
          <span className="research-title">
            Believing Anthropomorphism: Cues on Trust in LLMs
          </span>
          <span className="research-meta">
            Cohn, Chang i in. · CHI 2024 · n = 2 165
          </span>
          <span className="research-finding">
            „Ja” w odpowiedziach agenta często podnosiło ocenę trafności — nawet
            gdy treść była taka sama.
          </span>
        </cite>
      </div>
    ),
  },
  {
    content: (
      <div className="anthro-slide">
        <h2 className="slide-title wide-title">Pewny ton</h2>
        <div className="anthro-pair">
          <article className="anthro-avoid">
            <span className="anthro-label">
              <EvalFailIcon />
              Unikaj
            </span>
            <div className="agent-output">
              <span className="agent-output-meta">Agent</span>
              <p>
                Użyj modala. To najlepszy sposób na potwierdzenie.
              </p>
            </div>
          </article>
          <article className="anthro-instead">
            <span className="anthro-label">
              <EvalPassIcon />
              Zamiast tego
            </span>
            <div className="agent-output">
              <span className="agent-output-meta">Agent</span>
              <p>
                Modal ma sens przy działaniach nieodwracalnych. Przy częstych
                zadaniach rozważ też komunikat błędu przy polu tekstowym.
              </p>
            </div>
          </article>
        </div>
        <cite className="research-cite">
          <span className="research-title">
            Humans and Automation: Use, Misuse, Disuse, Abuse
          </span>
          <span className="research-meta">
            Parasuraman &amp; Riley · Human Factors, 1997 · automation bias
          </span>
          <span className="research-finding">
            Gdy system brzmi autorytatywnie, ludzie zbyt mocno na nim polegają
            i pomijają własną weryfikację — nawet gdy output jest błędny.
          </span>
        </cite>
      </div>
    ),
  },
  {
    content: (
      <h2 className="display statement-display language-quote">
        Projektujemy narzędzia AI…
        <br />
        a jak <span className="green underlined">projektować z AI</span>?
      </h2>
    ),
    className: 'statement-slide',
  },
  {
    content: (
      <figure className="media-frame tweet-frame">
        <img
          src={tweetImage}
          alt="Tweet by Joanna Maciejewska: the biggest problem with pushing all-things-AI is the wrong direction. She wants AI to do laundry and dishes so she can do art and writing, not the reverse."
        />
      </figure>
    ),
    className: 'media-slide',
  },
  {
    content: (
      <figure className="media-frame">
        <img
          src={coIntelligenceCover}
          alt="Book cover: Co-Intelligence: Living and Working with AI by Ethan Mollick."
        />
      </figure>
    ),
    className: 'media-slide',
  },
  {
    content: (
      <div className="metaphor-layout">
        <div>
          <h2>
            Centaur ma <span className="underlined">wyraźną</span> granicę między
            człowiekiem i maszyną.
            <br />
            U cyborga jest ona <span className="blurred">zatarta</span>.
          </h2>
        </div>
        <div className="mode-cards">
          <article>
            <div className="card-head">
              <CentaurIcon />
              <span className="card-label">Centaur</span>
            </div>
            <p>AI szkicuje komunikaty błędów. Ty decydujesz, co wychodzi na świat.</p>
          </article>
          <article className="featured-card">
            <div className="card-head">
              <CyborgIcon />
              <span className="card-label">Cyborg</span>
            </div>
            <p>
              Proponujesz coś, AI krytykuje. Zmieniasz, AI znowu daje opinię.
              Robicie to wspólnie. Odpowiedzialność zostaje Twoja.
            </p>
          </article>
        </div>
      </div>
    ),
  },
  {
    content: (
      <figure className="media-frame">
        <img
          src={bookCover}
          alt="Book cover: The Reverse Centaur’s Guide to Life After AI by Cory Doctorow."
        />
      </figure>
    ),
    className: 'media-slide',
  },
  {
    content: (
      <div className="metaphor-layout">
        <div>
          <h2>
            Maszyna decyduje.
            <br />
            <span className="green">Człowiek bierze winę na siebie.</span>
          </h2>
        </div>
        <div className="mode-cards">
          <article>
            <div className="card-head">
              <CentaurIcon />
              <span className="card-label">Centaur</span>
            </div>
            <p>AI szkicuje komunikaty błędów. Ty decydujesz, co wychodzi na świat.</p>
          </article>
          <article className="reverse-card">
            <div className="card-head">
              <span className="reverse-icon">
                <CentaurIcon />
              </span>
              <span className="card-label green">Reverse centaur</span>
            </div>
            <p>
              Ktoś promptuje bez kontekstu i wypuszcza copy. Ty poprawiasz to, co
              wychodzi — i odpowiadasz za skutki.
            </p>
          </article>
        </div>
      </div>
    ),
    className: 'pink-wash',
  },
  {
    content: (
      <>
        <blockquote>Jakie jest Twoje zadanie centaura?</blockquote>
        <p className="small-instruction">
          Prosisz o nową perspektywę? Szkicujesz warianty?
        </p>
      </>
    ),
    className: 'question-slide question-green',
  },
  {
    content: (
      <>
        <blockquote>Jaki jest Twój odwrócony centaur?</blockquote>
        <p className="small-instruction">
          Gdzie AI pogarsza sprawę – i zrzuca winę na Ciebie?
        </p>
      </>
    ),
    className: 'question-slide question-pink',
  },
  {
    content: (
      <div className="summary-slide">
        <h2 className="slide-title wide-title">Zabierz ze sobą</h2>
        <div className="summary-grid">
          <article className="featured-card">
            <h3>Człowiek zawsze w pętli</h3>
            <p>
              Wszystko może być halucynacją.{' '}
              <span className="green">
                Widoczność, kontrola, zatwierdzenie, weryfikacja
              </span>
              {': to podstawy.'}
            </p>
          </article>
          <article>
            <h3>Poza UI: instrukcje i ewaluacja</h3>
            <p>
              UX writerzy pracują nie tylko nad UI, ale też kształtują odpowiedzi
              AI. <span className="green">Unikaj nadmiernego uczłowieczania.</span>
            </p>
          </article>
          <article>
            <h3>Centaur, nie odwrócony centaur</h3>
            <p>
              AI może rozszerzać horyzonty, jeśli{' '}
              <span className="green">korzystamy mądrze</span>. Nie podpisuj się
              pod slopem.
            </p>
          </article>
        </div>
      </div>
    ),
  },
  {
    content: (
      <figure className="media-frame">
        <img src={keepThinking} alt="Keep thinking." />
      </figure>
    ),
    className: 'media-slide keep-thinking-slide',
  },
  {
    content: (
      <div className="closing-layout">
        <div>
          <h2>
            Sięgaj dalej z AI
            <br />
            <span className="green">Myślenie i decyzje zostaw sobie</span>
          </h2>
        </div>
        <div className="closing-meta">
          <figure className="closing-qr">
            <img
              src={linkedinQr}
              alt="Kod QR do profilu LinkedIn Kaliny Tyrkiel-Szymańskiej"
            />
            <figcaption>Kalina na LinkedIn</figcaption>
          </figure>
        </div>
      </div>
    ),
    className: 'hero-slide closing-slide',
  },
]

function App() {
  const initialSlide = useMemo(() => {
    const hash = Number(window.location.hash.replace('#', ''))
    return hash >= 1 && hash <= slides.length ? hash - 1 : 0
  }, [])
  const [current, setCurrent] = useState(initialSlide)
  const [build, setBuild] = useState(0)
  const slide = slides[current]
  const maxBuild = slide.builds ?? 0
  const content = typeof slide.content === 'function' ? slide.content(build) : slide.content
  const footerAffiliation = slide.footerAffiliation
  const footerExamples = slide.footerExamples

  const goTo = useCallback((index: number) => {
    const next = Math.min(Math.max(index, 0), slides.length - 1)
    setCurrent(next)
    setBuild(0)
    window.history.replaceState(null, '', `#${next + 1}`)
  }, [])

  const advance = useCallback(() => {
    if (build < maxBuild) {
      setBuild((value) => value + 1)
      return
    }
    goTo(current + 1)
  }, [build, maxBuild, current, goTo])

  const retreat = useCallback(() => {
    if (build > 0) {
      setBuild((value) => value - 1)
      return
    }
    const previous = Math.max(current - 1, 0)
    setBuild(slides[previous].builds ?? 0)
    setCurrent(previous)
    window.history.replaceState(null, '', `#${previous + 1}`)
  }, [build, current])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      if (target.tagName === 'BUTTON') return
      if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(event.key)) {
        event.preventDefault()
        advance()
      }
      if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) {
        event.preventDefault()
        retreat()
      }
      if (event.key === 'Home') goTo(0)
      if (event.key === 'End') goTo(slides.length - 1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [advance, retreat, goTo])

  return (
    <main className="deck">
      <section
        className={`slide ${slide.className ?? ''}`}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest('button, a')) return
          advance()
        }}
      >
        <div className="ambient-shape shape-one" />
        <div className="ambient-shape shape-two" />
        <div className="slide-content">{content}</div>
        <footer className="slide-footer">
          <div className="slide-footer-leading">
            <span className="slide-footer-name">Kalina Tyrkiel-Szymańska</span>
            {footerAffiliation && (
              <span className="slide-footer-affiliation">{footerAffiliation}</span>
            )}
            {footerExamples && (
              <span className="slide-footer-examples">{footerExamples}</span>
            )}
          </div>
          <div className="slide-nav">
            <button
              type="button"
              onClick={() => retreat()}
              disabled={current === 0 && build === 0}
              aria-label="Poprzedni slajd"
            >
              ←
            </button>
            <span>
              {current + 1} / {slides.length}
            </span>
            <button
              type="button"
              onClick={() => advance()}
              disabled={current === slides.length - 1 && build >= maxBuild}
              aria-label="Następny slajd"
            >
              →
            </button>
          </div>
        </footer>
        <div className="progress-track" aria-hidden="true">
          <div
            className="progress-fill"
            style={{ width: `${((current + 1) / slides.length) * 100}%` }}
          />
        </div>
      </section>
    </main>
  )
}

export default App
