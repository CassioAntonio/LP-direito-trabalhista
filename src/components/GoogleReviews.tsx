import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

/**
 * Dados reais do perfil oficial do Google (Google Places API) —
 * "Rafael Ferreira Advogados", Jabaquara/SP. Nenhum conteúdo fictício.
 */
export const GOOGLE_PROFILE_URL =
  "https://maps.google.com/?cid=2554494996752554049";

export const googleRating = 5;
export const googleRatingCount = 39;

type Review = {
  author: string;
  rating: number;
  date: string;
  text: string;
};

const reviews: Review[] = [
  {
    author: "Denise Oliveira",
    rating: 5,
    date: "Setembro de 2024",
    text: "Atuamos com Dr Rafael mais de 7 anos, um ótimo e atencioso advogado, nos auxilia como PF e como PJ em nossa empresa. Esclarecedor e super atencioso, super hiper recomendamos. Indicamos de olhos fechados, esteve em vários momentos da minha vida, as vezes achamos que nunca vamos precisar de um advogado, mas é muito bom ter um que possamos contar.",
  },
  {
    author: "Rosana Caixeta",
    rating: 5,
    date: "Outubro de 2025",
    text: "Profissionais muito competentes, de alto nível. Agradeço muito o Dr. Rafael por todo o suporte no meu processo.",
  },
  {
    author: "Franciele Santos",
    rating: 5,
    date: "Outubro de 2025",
    text: "Advogado maravilhoso, saiu rápido meu acerto, recomendo ele para todos, nota 1000 pra ele e sua equipe. Agradeço de todo meu coração por tudo que ele me fez, super de confiança.",
  },
  {
    author: "vilmar Silva",
    rating: 5,
    date: "Novembro de 2025",
    text: "Excelente profissional, eu super recomendo. Só tenho a agradecer tudo que fizeram por mim.",
  },
  {
    author: "Nando Goes",
    rating: 5,
    date: "Abril de 2026",
    text: "Muito Bom, Um Excelente Trabalho! Recomendo",
  },
];

function Stars({ value, className = "" }: { value: number; className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`} aria-label={`${value} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.round(value) ? "fill-gold text-gold" : "text-border"}`}
          strokeWidth={1.4}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function GoogleMark() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.5 5.5 0 0 1-2.39 3.6v3h3.86c2.26-2.08 3.58-5.15 3.58-8.79Z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.87-3a7.2 7.2 0 0 1-10.73-3.79H1.35v3.09A12 12 0 0 0 12 24Z"
        />
        <path
          fill="#FBBC05"
          d="M5.35 14.3a7.2 7.2 0 0 1 0-4.6V6.61H1.35a12 12 0 0 0 0 10.78l4-3.09Z"
        />
        <path
          fill="#EA4335"
          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43C17.95 1.18 15.24 0 12 0A12 12 0 0 0 1.35 6.61l4 3.09A7.2 7.2 0 0 1 12 4.75Z"
        />
      </svg>
      Google
    </span>
  );
}

export function GoogleReviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (dir: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : track.clientWidth;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : 1;
    setIndex(Math.round(track.scrollLeft / step));
  };

  return (
    <section
      aria-labelledby="avaliacoes-google"
      className="border-y border-border bg-secondary/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <p className="text-[0.7rem] font-semibold tracking-[0.3em] text-navy-soft uppercase">
              Avaliações do Google
            </p>
            <h2
              id="avaliacoes-google"
              className="mt-5 max-w-2xl text-3xl leading-tight text-foreground md:text-[2.5rem]"
            >
              A experiência de quem já confiou em nosso trabalho
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Confira algumas das avaliações deixadas por clientes no Google.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="card-premium flex items-center gap-6 p-7">
              <div>
                <GoogleMark />
                <p className="mt-3 font-display text-4xl leading-none text-foreground">
                  {googleRating.toFixed(1).replace(".", ",")}
                </p>
                <Stars value={googleRating} className="mt-3" />
              </div>
              <div className="h-14 w-px bg-border" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                {googleRatingCount} avaliações
                <br />
                no perfil oficial do Google
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 flex items-center justify-between gap-6">
          <div className="hairline hidden w-32 sm:block" aria-hidden="true" />
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={() => scrollTo(-1)}
              aria-label="Ver avaliações anteriores"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[4px] border border-border text-foreground/70 transition-colors duration-300 hover:border-gold/60 hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo(1)}
              aria-label="Ver próximas avaliações"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[4px] border border-border text-foreground/70 transition-colors duration-300 hover:border-gold/60 hover:text-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((r) => (
            <article
              key={r.author + r.date}
              className="card-premium flex w-[85%] shrink-0 snap-start flex-col bg-card p-7 sm:w-[48%] lg:w-[calc((100%-2.5rem)/3)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-lg leading-snug text-foreground">{r.author}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{r.date}</p>
                </div>
                <GoogleMark />
              </div>
              <Stars value={r.rating} className="mt-5" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-1.5 sm:hidden" aria-hidden="true">
          {reviews.map((r, i) => (
            <span
              key={r.author + i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-gold" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-[4px] bg-gold px-7 py-4 text-[0.78rem] font-semibold tracking-[0.16em] text-navy-deep uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft"
          >
            Ver avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
