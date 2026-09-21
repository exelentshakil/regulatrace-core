'use client';

import React, { useState, useEffect } from 'react';
import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip } from 'recharts';

interface BackboneStat {
  value: string;
  label: string;
  color: string;
  domain?: [number, number];
  sparkline: { t: string; v: number }[];
}

const STATS: BackboneStat[] = [
  {
    value: '100.0%',
    label: 'statutory rule traceability for all calculated regulatory answers',
    color: '#533AFD',
    sparkline: [
      { t: 'W1', v: 98.4 },
      { t: 'W2', v: 99.1 },
      { t: 'W3', v: 99.5 },
      { t: 'W4', v: 99.8 },
      { t: 'W5', v: 100.0 },
      { t: 'W6', v: 100.0 },
    ],
  },
  {
    value: '14.2ms',
    label: 'P99 PostGIS query latency across multi-gigabyte spatial boundary layers',
    color: '#057A55',
    sparkline: [
      { t: 'Run 1', v: 28.5 },
      { t: 'Run 2', v: 22.1 },
      { t: 'Run 3', v: 18.4 },
      { t: 'Run 4', v: 16.2 },
      { t: 'Run 5', v: 14.8 },
      { t: 'Run 6', v: 14.2 },
    ],
  },
  {
    value: '100% Zero',
    label: 'unverified guesses — open legal and data questions flagged explicitly',
    color: '#D97706',
    domain: [0, 10],
    sparkline: [
      { t: 'W1', v: 0 },
      { t: 'W2', v: 0 },
      { t: 'W3', v: 0 },
      { t: 'W4', v: 0 },
      { t: 'W5', v: 0 },
      { t: 'W6', v: 0 },
    ],
  },
  {
    value: '42ms',
    label: 'deterministic RPC roundtrip to Python calculation engine with zero core modifications',
    color: '#0d9488',
    domain: [0, 60],
    sparkline: [
      { t: 'T1', v: 54.0 },
      { t: 'T2', v: 48.5 },
      { t: 'T3', v: 45.1 },
      { t: 'T4', v: 43.8 },
      { t: 'T5', v: 42.5 },
      { t: 'T6', v: 42.0 },
    ],
  },
];

export function BackboneStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-12 sm:py-16 border-t border-[var(--color-border)] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered H2 Title with Stripe Opacity Hierarchy */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)]">
            The backbone of defensible regulatory &amp; spatial intelligence
          </h2>
          <p className="mt-2 text-base text-[#2E3C4E] dark:text-slate-300 leading-relaxed">
            Engineered for professionals whose reputation depends on being right — every number traces back to statutory citations with zero unverified guesses.
          </p>
        </div>

        {/* 4-Column Stat Strip with Dope Wavy Sparklines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6 border-t border-[var(--color-border)]">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col justify-between space-y-2">
              <div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  {stat.value}
                </div>
                <p className="text-sm sm:text-[14.5px] text-[var(--color-text-secondary)] mt-1.5 leading-normal">
                  {stat.label}
                </p>
              </div>

              {/* Distinct Dope Wavy Sparkline */}
              <div className="h-10 w-full pt-2">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={stat.sparkline} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id={`bbGrad_${idx}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={stat.color} stopOpacity={0.35} />
                          <stop offset="100%" stopColor={stat.color} stopOpacity={0.0} />
                        </linearGradient>
                      </defs>
                      {stat.domain && <YAxis hide domain={stat.domain} />}
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-0.5 text-xs font-semibold shadow-xs text-[var(--color-text-primary)]">
                                {payload[0].value}
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="v"
                        stroke={stat.color}
                        strokeWidth={2}
                        fill={`url(#bbGrad_${idx})`}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
