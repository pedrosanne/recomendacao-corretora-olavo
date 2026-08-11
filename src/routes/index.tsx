import { createFileRoute } from "@tanstack/react-router";
import mesa from "@/assets/mesa.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Olavo Abravanel - A corretora que eu uso e indico" },
      {
        name: "description",
        content:
          "A corretora de confiança do Olavo Abravanel: execução rápida, saque no mesmo dia e suporte em português. Abra sua conta pelo link de indicação.",
      },
      { property: "og:title", content: "A corretora que eu uso e indico - Olavo Abravanel" },
      {
        property: "og:description",
        content:
          "Por que eu escolhi essa corretora para operar todos os dias, e como abrir sua conta pelo meu link.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const LINK = "https://trade.polariumbroker.com/register?aff=796747&aff_model=revenue&afftrack=paginadeindicacao-olavo";

const razoes = [
  {
    n: "01",
    t: "Execução sem atraso",
    d: "Ordem enviada, ordem preenchida. Em dia de notícia é onde a maioria das corretoras trava - e foi exatamente aí que essa passou no meu teste.",
  },
  {
    n: "02",
    t: "Saque no mesmo dia",
    d: "Solicitei em horário comercial e caiu em poucas horas. Dinheiro que sai fácil é o primeiro sinal de casa séria.",
  },
  {
    n: "03",
    t: "Custo que cabe no giro",
    d: "Spread e taxas baixas o suficiente para quem faz muitas operações por semana. No fim do mês isso é o que sobra.",
  },
  {
    n: "04",
    t: "Suporte que responde",
    d: "Atendimento em português, gente que entende de mesa e não só de script pronto.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Cabeçalho */}
      <header className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <span className="label-mono">Indicação pessoal</span>
        <a
          href="https://www.instagram.com/olavoabravanel"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          @olavoabravanel
        </a>
      </header>

      {/* Hero */}
      <section className="border-y border-ink-line bg-paper grain">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:items-end">
          <div className="min-w-0">
            <p className="label-mono">Olavo Abravanel · Advogado &amp; Investidor</p>
            <h1 className="mt-5 font-display text-[2.6rem] leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              A corretora que eu
              <br />
              uso todo dia - e a<br />
              <span className="italic">única</span> que eu indico.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Testei mesa por mesa antes de colocar meu nome em alguma. Essa aqui aguentou volume,
              notícia, saque grande e pressão. É onde meu capital fica.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={LINK} className="btn-ink w-full sm:w-auto">
                Abrir minha conta
                <span aria-hidden="true">→</span>
              </a>
              <span className="label-mono">Leva ~3 minutos</span>
            </div>
          </div>

          <figure className="min-w-0">
            <img
              src={mesa}
              alt="Mesa de operações com gráfico de candles em um notebook"
              width={1280}
              height={960}
              className="w-full border border-ink-line object-cover"
            />
            <figcaption className="mt-3 font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
              MINHA MESA / SAO PAULO
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Números */}
      <section className="mx-auto max-w-5xl px-5 sm:px-8">
        <dl className="grid grid-cols-2 divide-ink-line border-b border-ink-line sm:grid-cols-4 sm:divide-x">
          {[
            ["12k", "recorde de gerenciamento"],
            ["3.843", "acompanham no Instagram"],
            ["#1", "Best Seller: Segredos do Trade"],
            ["24h", "prazo médio de saque"],
          ].map(([v, l]) => (
            <div key={l} className="border-r border-ink-line px-4 py-7 last:border-r-0 sm:border-r-0">
              <dt className="font-display text-3xl sm:text-4xl">{v}</dt>
              <dd className="mt-2 text-xs leading-snug text-muted-foreground">{l}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Razões */}
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl">Por que essa e não outra</h2>
        <ol className="mt-10 grid gap-px bg-ink-line sm:grid-cols-2">
          {razoes.map((r) => (
            <li key={r.n} className="bg-background p-6 sm:p-8">
              <span className="font-mono text-xs text-accent">{r.n}</span>
              <h3 className="mt-3 font-display text-2xl">{r.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Citação */}
      <section className="border-y border-ink-line bg-paper">
        <blockquote className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <p className="font-display text-2xl leading-snug sm:text-4xl">
            “Trader bom com corretora ruim continua perdendo dinheiro. A escolha da casa faz parte
            do gerenciamento.”
          </p>
          <footer className="label-mono mt-6">Olavo Abravanel</footer>
        </blockquote>
      </section>

      {/* Passos */}
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl">Como abrir pelo meu link</h2>
        <div className="mt-10 space-y-px bg-ink-line">
          {[
            ["Clique no botão", "Você é levado direto para o cadastro da corretora."],
            ["Cadastro e verificação", "Documento com foto e selfie. Aprovação costuma sair no mesmo dia."],
            ["Deposite e comece", "Comece pequeno. Gerenciamento antes de tamanho, sempre."],
          ].map(([t, d], i) => (
            <div
              key={t}
              className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-5 bg-background py-6"
            >
              <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
              <div className="min-w-0">
                <h3 className="font-display text-2xl">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-ink-line bg-paper grain">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="max-w-2xl font-display text-4xl leading-[1.02] sm:text-6xl">
            Opere onde eu opero.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Mesmo link que eu compartilho no Instagram. Sem custo extra para você.
          </p>
          <a href={LINK} className="btn-ink mt-9 w-full sm:w-auto">
            Quero abrir minha conta
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <footer className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Conteúdo educacional e opinião pessoal. Esta página contém link de indicação. Operar no
          mercado financeiro envolve risco de perda; resultados passados não garantem resultados
          futuros.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono">© {new Date().getFullYear()} Olavo Abravanel</p>
          <a
            href="https://www.instagram.com/olavoabravanel"
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono text-foreground transition-colors hover:text-accent"
          >
            instagram.com/olavoabravanel
          </a>
        </div>
      </footer>
    </main>
  );
}
