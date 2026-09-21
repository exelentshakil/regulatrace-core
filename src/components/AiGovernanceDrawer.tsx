'use client';

import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import {
  ShieldCheck,
  Award,
  Lock,
  Cpu,
  Server,
  Database,
  CheckCircle2,
  ExternalLink,
  Code2,
  Brain,
  FileCheck,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface AiGovernanceDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AiGovernanceDrawer({ open, onOpenChange }: AiGovernanceDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto bg-[var(--color-surface)] border-l border-[var(--color-border)] p-6 text-[var(--color-text-primary)]">
        <SheetHeader className="border-b border-[var(--color-border)] pb-4 mb-4">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              NIST AI RMF 100-1 &amp; OWASP LLM Top 10
            </span>
            <Badge variant="outline" className="text-xs font-mono">
              Securiti Certified
            </Badge>
          </div>
          <SheetTitle className="text-lg font-bold">
            Private Cloud ML &amp; AI Security Governance
          </SheetTitle>
          <SheetDescription className="text-xs text-[var(--color-text-secondary)]">
            Production-grade private container inference, zero third-party data leaks, and deterministic regulatory verification.
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-5 text-xs font-sans">
          {/* Masterstroke: 4-Bit LoRA Private Container Card */}
          <div className="rounded-xl border border-[#533AFD]/30 bg-[#533AFD]/5 dark:bg-[#7A68FF]/10 p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#533AFD] dark:text-[#7A68FF]">
                <Cpu className="h-4 w-4" />
                The Private ML Architecture
              </span>
              <span className="rounded-[4px] bg-[#533AFD]/15 text-[#533AFD] dark:text-[#7A68FF] px-2 py-0.5 text-[10px] font-mono font-bold">
                100% Zero Egress
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-primary)] font-medium leading-relaxed">
              &ldquo;The underlying engine uses 4-bit quantized LoRA adapters running in an isolated container. Your confidential regulatory data stays 100% inside your private cloud.&rdquo;
            </p>
            <div className="pt-2 border-t border-[#533AFD]/20 grid grid-cols-2 gap-2 text-[11px] font-mono text-[var(--color-text-secondary)]">
              <div>• 4-Bit QLoRA / vLLM</div>
              <div>• Apple Silicon MLX &amp; CUDA</div>
              <div>• Zero Public API Leaks</div>
              <div>• Isolated Docker on Render</div>
            </div>
          </div>

          {/* Certification Card */}
          <div className="rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/30 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shrink-0 shadow-xs">
                <Award className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-sm text-emerald-950 dark:text-emerald-200">
                  <span>Securiti Certified AI Architect</span>
                </div>
                <p className="text-xs text-emerald-800 dark:text-emerald-300 font-mono">
                  Cert ID: 14B411BCE-14B411A3D-1451CFE76
                </p>
                <p className="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">
                  Specializing in Gartner AI TRiSM (Trust, Risk &amp; Security Management), inline LLM firewalls, bound hallucination containment, and PII anonymization for professional compliance.
                </p>
              </div>
            </div>
          </div>

          {/* ML Research Lab Pointer */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[var(--color-text-primary)] flex items-center gap-1.5">
                <Brain className="h-4 w-4 text-[#533AFD] dark:text-[#7A68FF]" />
                ML &amp; Systems Research Authority
              </span>
              <a
                href="https://ml-bangla.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#533AFD] dark:text-[#7A68FF] hover:underline flex items-center gap-1"
              >
                <span>Live Lab</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Author of enterprise ML engineering cookbooks: 8-stage pipelines, local Apple Silicon MLX tuning, XGBoost tabular optimization (0.1ms, $0 token cost), and private vLLM production runners.
            </p>
          </div>

          {/* 3-Tier Execution Topology */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-mono">
              3-Tier Regulatory Processing Topology
            </h4>

            <div className="space-y-2.5">
              <div className="rounded-lg border border-[var(--color-border)] p-3 bg-[var(--color-panel-subtle)]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-[var(--color-text-primary)]">
                    Tier 1: Deterministic PostgreSQL + PostGIS
                  </span>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                    0.1ms • $0
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Spatial joins, ST_DWithin buffer calculations, and explicit rule lookups executed in database with GiST indexes. 100% deterministic math without LLM hallucinations.
                </p>
              </div>

              <div className="rounded-lg border border-[var(--color-border)] p-3 bg-[var(--color-panel-subtle)]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-[var(--color-text-primary)]">
                    Tier 2: Python Calc Engine Handshake
                  </span>
                  <span className="text-xs font-mono text-[#533AFD] dark:text-[#7A68FF] font-semibold">
                    42ms RPC
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Next.js Node route handlers interface with your existing Python calculation services via typed RPC clients. Upstream calculation engine remains completely untouched.
                </p>
              </div>

              <div className="rounded-lg border border-[var(--color-border)] p-3 bg-[var(--color-panel-subtle)]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-[var(--color-text-primary)]">
                    Tier 3: 4-Bit LoRA Isolated Container
                  </span>
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
                    Private VPC
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Semantic regulation parsing and open-ambiguity detection run on private 4-bit LoRA models inside Render private networking. Zero customer PII or confidential numbers exposed to external APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
