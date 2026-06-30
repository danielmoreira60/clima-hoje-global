import React from 'react';
import { Lightbulb, AlertTriangle, Quote as QuoteIcon, CheckCircle2, Info } from 'lucide-react';

export const Lead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xl leading-relaxed text-slate-700 font-medium border-l-4 border-primary pl-5 my-6 italic">
    {children}
  </p>
);

export const H2: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => (
  <h2 id={id} className="text-3xl md:text-4xl font-bold text-slate-900 mt-12 mb-5 tracking-tight scroll-mt-24">
    {children}
  </h2>
);

export const H3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">{children}</h3>
);

export const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-base md:text-lg leading-[1.85] text-slate-700 mb-5">{children}</p>
);

export const Highlight: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="my-8 rounded-xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 shadow-sm">
    <div className="flex items-start gap-3">
      <div className="rounded-lg bg-amber-500 p-2 shrink-0">
        <Lightbulb className="h-5 w-5 text-white" />
      </div>
      <div>
        {title && <h4 className="font-bold text-amber-900 text-lg mb-1">{title}</h4>}
        <div className="text-amber-900/90 leading-relaxed">{children}</div>
      </div>
    </div>
  </div>
);

export const Warning: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="my-8 rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-rose-50 p-6 shadow-sm">
    <div className="flex items-start gap-3">
      <div className="rounded-lg bg-red-600 p-2 shrink-0">
        <AlertTriangle className="h-5 w-5 text-white" />
      </div>
      <div>
        {title && <h4 className="font-bold text-red-900 text-lg mb-1">{title}</h4>}
        <div className="text-red-900/90 leading-relaxed">{children}</div>
      </div>
    </div>
  </div>
);

export const InfoBox: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="my-8 rounded-xl border-2 border-sky-200 bg-gradient-to-br from-sky-50 to-blue-50 p-6 shadow-sm">
    <div className="flex items-start gap-3">
      <div className="rounded-lg bg-sky-600 p-2 shrink-0">
        <Info className="h-5 w-5 text-white" />
      </div>
      <div>
        {title && <h4 className="font-bold text-sky-900 text-lg mb-1">{title}</h4>}
        <div className="text-sky-900/90 leading-relaxed">{children}</div>
      </div>
    </div>
  </div>
);

export const PullQuote: React.FC<{ author?: string; children: React.ReactNode }> = ({ author, children }) => (
  <blockquote className="my-10 relative px-8 py-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl shadow-xl">
    <QuoteIcon className="absolute top-4 left-4 h-8 w-8 text-primary/50" />
    <p className="text-xl md:text-2xl font-medium leading-relaxed italic pl-8">{children}</p>
    {author && <footer className="mt-4 text-sm text-slate-300 pl-8">— {author}</footer>}
  </blockquote>
);

export const Checklist: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="my-6 space-y-3 bg-emerald-50/50 border-l-4 border-emerald-500 rounded-r-xl p-5">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-slate-800">
        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
        <span className="leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

export const DataTable: React.FC<{
  headers: string[];
  rows: (string | number)[][];
  caption?: string;
}> = ({ headers, rows, caption }) => (
  <div className="my-8 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
    <table className="w-full text-sm">
      <thead className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <tr>
          {headers.map((h) => (
            <th key={h} className="px-4 py-3 text-left font-semibold">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white">
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}>
            {row.map((c, j) => (
              <td key={j} className="px-4 py-3 text-slate-700 border-t border-slate-100">
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    {caption && <p className="text-xs text-slate-500 mt-2 text-center italic">{caption}</p>}
  </div>
);

export const ExternalLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary font-semibold underline decoration-2 underline-offset-2 hover:text-primary/80 transition-colors"
  >
    {children}
  </a>
);

export const FAQ: React.FC<{ items: { q: string; a: React.ReactNode }[] }> = ({ items }) => (
  <div className="my-10 space-y-4">
    {items.map((item, i) => (
      <details
        key={i}
        className="group rounded-xl border-2 border-slate-200 bg-white p-5 shadow-sm hover:border-primary/40 transition-colors"
      >
        <summary className="cursor-pointer font-bold text-lg text-slate-900 list-none flex items-start justify-between gap-3">
          <span className="flex-1">{item.q}</span>
          <span className="text-primary text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
        </summary>
        <div className="mt-3 pt-3 border-t border-slate-100 text-slate-700 leading-relaxed">{item.a}</div>
      </details>
    ))}
  </div>
);
