import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scale,
  ShieldAlert,
  Clock4,
  HeartPulse,
  MessageSquareWarning,
  FileSignature,
  Baby,
  Gavel,
  Check,
  ChevronDown,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import rafael from "@/assets/rafael-ferreira.jpg.asset.json";
import rafaelSobre from "@/assets/rafael-sobre.jpg.asset.json";
import logoHeader from "@/assets/logo-header.png.asset.json";
import logoFooter from "@/assets/logo-footer.png.asset.json";

const WA_MSG =
  "Olá, gostaria de falar com o Dr. Rafael Ferreira sobre uma questão trabalhista e receber orientação sobre o meu caso. Poderiam me auxiliar?";
const WA = `https://wa.me/5511975856717?text=${encodeURIComponent(WA_MSG)}`;

const DESC =
  "Dr. Rafael Ferreira, advogado inscrito na OAB/SP nº 319.590, com atuação em Direito Trabalhista: rescisão indireta, horas extras, insalubridade, assédio moral, vínculo de emprego e justa causa.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dr. Rafael Ferreira | Advogado Trabalhista" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Dr. Rafael Ferreira | Advogado Trabalhista" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Attorney",
          name: "Dr. Rafael Ferreira",
          description: DESC,
          areaServed: "Brasil",
          knowsAbout: "Direito Trabalhista",
          telephone: "+55 11 97585-6717",
        }),
      },
    ],
  }),
});

function CTA({
  children,
  variant = "solid",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "solid" | "light" | "outline";
  className?: string;
}) {
  const base =
    "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-[4px] px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 will-change-transform hover:-translate-y-0.5";
  const styles = {
    solid:
      "bg-gold text-navy-deep shadow-[0_10px_30px_-14px_rgba(10,25,60,0.75)] hover:bg-gold-soft hover:shadow-[0_16px_34px_-16px_rgba(10,25,60,0.6)]",
    light:
      "bg-navy text-primary-foreground hover:bg-navy-deep hover:shadow-[0_14px_30px_-18px_rgba(10,25,60,0.7)]",
    outline:
      "border border-gold/45 text-primary-foreground hover:border-gold hover:bg-gold/10",
  }[variant];
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

const situacoes = [
  "Foi demitido e tem dúvidas sobre seus direitos?",
  "Trabalhou além da jornada e não recebeu corretamente?",
  "Trabalha em ambiente insalubre ou perigoso?",
  "Sofreu acidente ou doença relacionada ao trabalho?",
  "Está enfrentando assédio no ambiente profissional?",
  "Foi contratado como PJ, mas trabalhava como empregado?",
  "Foi demitido por justa causa e acredita que a decisão foi indevida?",
  "Está grávida e enfrenta problemas relacionados ao emprego?",
];

const areas = [
  {
    icon: FileSignature,
    title: "Rescisão Indireta",
    text: "Quando o empregador descumpre obrigações relevantes do contrato de trabalho, o trabalhador pode buscar judicialmente o reconhecimento da rescisão indireta.",
  },
  {
    icon: ShieldAlert,
    title: "Insalubridade e Periculosidade",
    text: "Orientação e atuação em situações envolvendo exposição a agentes insalubres ou atividades perigosas.",
  },
  {
    icon: Clock4,
    title: "Horas Extras",
    text: "Análise de jornadas, horas extraordinárias, intervalos e possíveis diferenças trabalhistas.",
  },
  {
    icon: HeartPulse,
    title: "Acidente do Trabalho",
    text: "Atuação em situações relacionadas a acidentes e doenças ocupacionais, incluindo análise das possíveis consequências jurídicas.",
  },
  {
    icon: MessageSquareWarning,
    title: "Assédio Moral",
    text: "Orientação jurídica em situações de humilhação, constrangimento, perseguição ou outras condutas abusivas no ambiente de trabalho.",
  },
  {
    icon: Scale,
    title: "Vínculo de Emprego",
    text: "Análise de situações em que a relação de trabalho pode apresentar características de vínculo empregatício, inclusive contratações como PJ ou autônomo.",
  },
  {
    icon: Baby,
    title: "Gestante",
    text: "Orientação sobre direitos trabalhistas relacionados à gestação, estabilidade e situações de desligamento.",
  },
  {
    icon: Gavel,
    title: "Justa Causa",
    text: "Análise da legalidade da dispensa por justa causa e das circunstâncias que envolvem a rescisão do contrato.",
  },
];

const diferenciais = [
  {
    title: "Análise individualizada",
    text: "Cada relação de trabalho tem documentos, prazos e detalhes próprios. O caso é examinado a partir do seu contexto real.",
  },
  {
    title: "Atendimento próximo",
    text: "Comunicação direta e linguagem clara, para que você compreenda cada etapa do que está sendo discutido.",
  },
  {
    title: "Estratégia jurídica",
    text: "Definição dos caminhos possíveis a partir das provas disponíveis e das particularidades da sua situação.",
  },
  {
    title: "Atuação trabalhista",
    text: "Trabalho concentrado em Direito Trabalhista e na defesa dos direitos do trabalhador.",
  },
];

const etapas = [
  {
    n: "01",
    title: "Entre em contato",
    text: "Fale diretamente pelo WhatsApp e apresente brevemente sua situação.",
  },
  {
    n: "02",
    title: "Análise do caso",
    text: "As informações apresentadas serão avaliadas para compreender o contexto jurídico.",
  },
  {
    n: "03",
    title: "Orientação",
    text: "Você receberá orientação sobre os próximos passos possíveis para o seu caso.",
  },
];

const faq = [
  {
    q: "O que é rescisão indireta?",
    a: "É o rompimento do contrato de trabalho por iniciativa do empregado quando o empregador comete falta grave, como descumprimento de obrigações contratuais, atraso reiterado de salários ou exigências abusivas. O reconhecimento depende de análise das provas e de decisão judicial.",
  },
  {
    q: "Posso questionar uma demissão por justa causa?",
    a: "Sim. A justa causa exige previsão legal, proporcionalidade e comprovação por parte do empregador. Havendo indícios de aplicação indevida, é possível discutir judicialmente a validade da dispensa.",
  },
  {
    q: "Quando posso ter direito a horas extras?",
    a: "De modo geral, quando há trabalho além da jornada contratada ou legal, supressão de intervalos ou ausência de pagamento correto dos adicionais. A verificação depende de controles de jornada, contrato e demais provas.",
  },
  {
    q: "Quem trabalha em ambiente perigoso pode receber adicional de periculosidade?",
    a: "O adicional é devido em atividades legalmente classificadas como perigosas, conforme normas regulamentadoras. A caracterização normalmente depende de perícia técnica no processo.",
  },
  {
    q: "O que caracteriza assédio moral no trabalho?",
    a: "Condutas abusivas e repetitivas que expõem o trabalhador a situações humilhantes ou constrangedoras, afetando sua dignidade. A análise considera o contexto, a frequência e as provas disponíveis.",
  },
  {
    q: "Fui contratado como PJ, mas trabalhava como funcionário. Posso buscar o reconhecimento do vínculo?",
    a: "É possível discutir o reconhecimento do vínculo quando estão presentes elementos como pessoalidade, habitualidade, onerosidade e subordinação, independentemente da forma do contrato assinado.",
  },
  {
    q: "Sofri um acidente no trabalho. O que devo fazer?",
    a: "Busque atendimento médico, guarde documentos e atestados e verifique a emissão da CAT (Comunicação de Acidente de Trabalho). Esses registros são relevantes para a análise jurídica posterior.",
  },
  {
    q: "A gestante possui estabilidade no emprego?",
    a: "A legislação prevê estabilidade provisória à gestante desde a confirmação da gravidez até determinado período após o parto. A aplicação concreta depende do tipo de contrato e das circunstâncias do desligamento.",
  },
];

function Index() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <header className="navy-surface relative overflow-hidden">
        <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />

        <div className="relative border-b border-gold/15">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 md:py-6">
            <a href="#top" className="flex shrink-0 items-center" aria-label="Rafael Ferreira Advogados">
              <img
                src={logoHeader.url}
                alt="Rafael Ferreira Advogados"
                className="h-8 w-auto object-contain sm:h-9 md:h-11"
              />
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden cursor-pointer items-center gap-2 rounded-[4px] border border-gold/45 px-5 py-2.5 text-[0.7rem] font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-colors duration-300 hover:border-gold hover:bg-gold/10 sm:inline-flex"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-12 pb-14 md:pt-16 md:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gold/80">
              Direito Trabalhista
            </p>
            <div className="hairline mt-5 w-24" aria-hidden="true" />
            <h1 className="mt-6 text-[2.1rem] leading-[1.12] text-primary-foreground sm:text-5xl lg:text-[3.35rem]">
              Problemas trabalhistas exigem orientação estratégica.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/70">
              Atuação jurídica especializada na defesa dos direitos do trabalhador, com análise
              cuidadosa de cada caso.
            </p>

            <div className="mt-8 border-l border-gold/25 pl-5">
              <p className="font-display text-lg text-primary-foreground">Dr. Rafael Ferreira</p>
              <p className="text-sm tracking-wide text-primary-foreground/60">OAB/SP nº 319.590</p>
            </div>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CTA>Falar com o Dr. Rafael Ferreira</CTA>
              <span className="text-sm text-primary-foreground/55">
                Atendimento jurídico personalizado.
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              className="absolute -inset-3 rounded-sm border border-gold/20"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-sm border border-gold/25 bg-navy">
              <img
                src={rafael.url}
                alt="Rafael Ferreira, advogado trabalhista inscrito na OAB/SP nº 319.590"
                width={1280}
                height={1920}
                className="h-[420px] w-full object-cover object-top sm:h-[520px] lg:h-[600px]"
              />
            </div>
          </div>
        </div>
      </header>

      {/* DOR */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="max-w-2xl text-3xl leading-tight text-foreground md:text-[2.5rem]">
            Você está enfrentando uma situação trabalhista?
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Situações comuns que merecem uma leitura jurídica antes de qualquer decisão:
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-x-10 gap-y-1 sm:grid-cols-2">
          {situacoes.map((s, i) => (
            <li key={s}>
              <Reveal delay={i * 45}>
                <div className="flex items-start gap-4 border-b border-border py-5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy-soft" />
                  <span className="text-[0.98rem] leading-relaxed text-foreground/85">{s}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-12">
          <CTA variant="light">Falar sobre meu caso</CTA>
        </Reveal>
      </section>

      {/* ÁREAS */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-navy-soft">
              Áreas de atuação
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl leading-tight text-foreground md:text-[2.5rem]">
              Atuação especializada em Direito Trabalhista
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 70}>
                <article className="group h-full bg-card p-7 transition-colors duration-300 hover:bg-accent/50">
                  <a.icon
                    className="h-5 w-5 text-navy-soft transition-transform duration-300 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-6 text-lg leading-snug text-foreground">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="text-3xl leading-tight text-foreground md:text-[2.5rem]">
              Por que procurar orientação jurídica?
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Cada situação trabalhista possui particularidades: documentos, prazos, forma de
              contratação e o modo como o trabalho era executado no dia a dia. Uma análise
              profissional ajuda o trabalhador a compreender seus direitos e os caminhos jurídicos
              possíveis antes de tomar qualquer decisão.
            </p>
          </Reveal>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            {diferenciais.map((d, i) => (
              <Reveal key={d.title} delay={i * 70}>
                <div className="h-full bg-background p-7">
                  <div className="hairline w-10" aria-hidden="true" />
                  <h3 className="mt-5 text-lg text-foreground">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="navy-surface relative overflow-hidden py-20 md:py-28">
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-2 rounded-sm border border-gold/20" aria-hidden="true" />
              <img
                src={rafael.url}
                alt="Retrato do advogado Rafael Ferreira"
                loading="lazy"
                className="relative h-[380px] w-full rounded-sm border border-gold/25 object-cover object-top sm:h-[460px]"
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold/80">
              Sobre
            </p>
            <h2 className="mt-5 text-3xl leading-tight text-primary-foreground md:text-[2.4rem]">
              Atuação jurídica com estratégia, técnica e proximidade.
            </h2>
            <div className="mt-7 space-y-5 text-primary-foreground/70">
              <p className="leading-relaxed">
                Rafael Ferreira é advogado inscrito na OAB/SP sob nº 319.590, com atuação voltada ao
                Direito Trabalhista e à defesa dos direitos de trabalhadores em diferentes
                situações.
              </p>
              <p className="leading-relaxed">
                O trabalho começa pela compreensão do caso concreto: como a relação de trabalho
                acontecia, quais documentos existem e o que pode ser demonstrado. A partir disso, é
                definida a estratégia jurídica adequada, sempre com comunicação direta e explicação
                clara de cada etapa.
              </p>
            </div>
            <div className="mt-9">
              <CTA>Falar com Rafael Ferreira</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ATENDIMENTO */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="text-3xl leading-tight text-foreground md:text-[2.5rem]">
            Como funciona o atendimento
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {etapas.map((e, i) => (
            <Reveal key={e.n} delay={i * 90}>
              <div className="border-t border-border pt-6">
                <span className="font-display text-4xl text-accent-foreground/25">{e.n}</span>
                <h3 className="mt-4 text-xl text-foreground">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <CTA variant="light">Quero falar com um advogado</CTA>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="text-3xl leading-tight text-foreground md:text-[2.5rem]">
              Perguntas frequentes
            </h2>
          </Reveal>

          <div className="mt-12 border-t border-border">
            {faq.map((item, i) => (
              <div key={item.q} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-navy-soft"
                >
                  <span className="font-display text-[1.05rem] leading-snug text-foreground">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-400 ease-out"
                  style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pr-10 pb-6 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="navy-surface relative overflow-hidden py-24 md:py-32">
        <div className="grid-lines absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <div className="hairline mx-auto w-20" aria-hidden="true" />
            <h2 className="mt-8 text-3xl leading-tight text-primary-foreground md:text-[2.6rem]">
              Precisa de orientação sobre uma questão trabalhista?
            </h2>
            <p className="mt-5 text-primary-foreground/70">
              Fale diretamente com Rafael Ferreira e apresente sua situação para uma análise
              inicial.
            </p>
            <div className="mt-10 flex justify-center">
              <CTA>Falar pelo WhatsApp</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-navy-deep py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-8 sm:flex-row">
            <div>
              <p className="font-display text-lg text-primary-foreground">Rafael Ferreira</p>
              <p className="text-sm text-primary-foreground/60">Advogado</p>
              <p className="text-sm text-primary-foreground/60">OAB/SP nº 319.590</p>
            </div>
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold/70">
                WhatsApp
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-lg text-primary-foreground transition-colors hover:text-gold"
              >
                (11) 97585-6717
              </a>
            </div>
          </div>
          <div className="mt-10 border-t border-gold/15 pt-6">
            <p className="text-xs leading-relaxed text-primary-foreground/45">
              Este site possui caráter informativo e não substitui uma consulta jurídica
              individualizada.
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Rafael Ferreira pelo WhatsApp"
        className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whats text-primary-foreground shadow-[0_12px_30px_-8px_rgba(10,25,60,0.55)] transition-transform duration-300 hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={1.8} />
      </a>
    </div>
  );
}
