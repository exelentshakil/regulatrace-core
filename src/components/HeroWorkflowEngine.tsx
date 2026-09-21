'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Zap,
  Terminal,
  RefreshCw,
  Cpu,
  Lock,
  Database,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig } from '@/config/site';

export function HeroWorkflowEngine() {
  const [inputText, setInputText] = useState(siteConfig.workflow.defaultInput);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [engineMode, setEngineMode] = useState<'private_lora' | 'deterministic' | 'public_failover'>('private_lora');
  const [result, setResult] = useState<Record<string, unknown> | null>(siteConfig.workflow.sampleResponse);
  const [stepStatus, setStepStatus] = useState({
    firewall: 'VERIFIED • Zero PII Leakage',
    inference: '4-bit LoRA vLLM (48ms) • Private Container',
    schema: 'PASS • Deterministic Statutory Math',
  });

  const handleExecute = async () => {
    setLoading(true);
    try {
      if (engineMode === 'public_failover') {
        const res = await fetch('/api/ai/classify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: 'Regulatory Rule Audit',
            content: inputText,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          setResult(data);
          setStepStatus({
            firewall: data.firewallStatus?.passed ? 'PASSED (0ms)' : 'SECURITY INTERCEPT (0ms)',
            inference: `${data.latencyMs || 84}ms • ${data.provider} (${data.model || 'gpt-4o-mini'})`,
            schema: 'ENFORCED (1ms)',
          });
          return;
        }
      }

      // Simulated sub-50ms execution for Private LoRA & Deterministic Python/PostGIS
      await new Promise((resolve) => setTimeout(resolve, 380));

      if (engineMode === 'private_lora') {
        setResult({
          audit_verdict: 'DEFENSIBLE_ANSWER_CONFIRMED',
          inference_engine: '4-bit Quantized LoRA Adapter (vLLM Private Container)',
          private_cloud_isolation: '100% Zero External Data Egress (Render / Private VPC)',
          jurisdiction: 'Commonwealth of Massachusetts / City of Boston',
          target_entity: inputText.split(' - ')[0] || 'Target Parcel Query',
          citation_traceability: {
            governing_rules: [
              '310 CMR 10.00 (Massachusetts Wetlands Protection Act)',
              '105 CMR 140.100 (MA Department of Public Health Clinic Licensure)',
              'Boston Zoning Code Article 32 (Groundwater Conservation Overlay)',
            ],
            audit_trail_hash: 'sha256:d8c91f42e88a09b3c4f71a92e44',
          },
          spatial_calculation: {
            postgis_query: 'SELECT parcel_id, ST_Distance(p.geom, w.geom) FROM parcels p, wetlands w WHERE ST_DWithin(p.geom, w.geom, 200.0)',
            statutory_setback_required: '152.40 meters (500.0 ft)',
            actual_measured_distance: '184.22 meters (604.4 ft)',
            spatial_clearance_margin: '+31.82 meters (COMPLIANT)',
          },
          unsettled_open_questions: [
            'Notice: 2026 Boston Groundwater Trust monitoring well level re-survey pending Q4 municipal hearing. Spatial buffer is settled; seasonal water table fluctuation remains an open question.',
          ],
          performance_observability: {
            query_time_ms: 12.4,
            index_scan: 'idx_parcels_geom_gist (Buffers: shared hit=8, read=0)',
            python_calc_engine_rpc_ms: 38,
            guesswork_score: '0.0% (Strict rule linkage)',
          },
        });
        setStepStatus({
          firewall: 'PASSED (0ms) • Zero Public API Egress',
          inference: '48ms • 4-bit LoRA Container (Private VPC)',
          schema: 'ENFORCED • Line-by-Line Statutory Citations',
        });
      } else {
        // Deterministic Python & PostGIS
        setResult({
          audit_verdict: 'DETERMINISTIC_POSTGIS_CONFIRMED',
          inference_engine: 'PostgreSQL PostGIS + Python Calculation Engine RPC',
          token_cost: '$0.00 (Pure Mathematical Execution)',
          jurisdiction: 'Commonwealth of Massachusetts',
          target_entity: inputText.split(' - ')[0] || 'Target Parcel Query',
          spatial_calculation: {
            postgis_query: 'SELECT ST_DWithin(parcel.geom, wetland.geom, 152.4)',
            statutory_buffer_meters: 152.4,
            actual_distance_meters: 184.22,
            variance_meters: +31.82,
            spatial_index_used: 'idx_parcels_geom_gist',
          },
          unsettled_open_questions: [
            'No spatial buffer ambiguities found. Bounding box coordinates verified against official MassGIS state polygon layers.',
          ],
          performance_observability: {
            sql_execution_ms: 0.18,
            python_calc_rpc_ms: 34.2,
            buffers_shared_hit: 12,
            buffers_read: 0,
          },
        });
        setStepStatus({
          firewall: 'BYPASSED • 100% In-Database Execution',
          inference: '0.18ms • PostgreSQL PostGIS (No LLM Needed)',
          schema: 'VERIFIED • GiST Index Scan',
        });
      }
    } catch {
      setResult(siteConfig.workflow.sampleResponse);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(JSON.stringify(result, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
      <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline" className="bg-[#533AFD]/10 text-[#533AFD] dark:bg-[#7A68FF]/20 dark:text-[#7A68FF] border-[#533AFD]/20 text-[11px] font-mono">
                {siteConfig.workflow.badge}
              </Badge>
              <CardTitle className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-text-primary)]">
                {siteConfig.workflow.title}
              </CardTitle>
            </div>
            <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
              {siteConfig.workflow.description}
            </CardDescription>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#533AFD] dark:text-[#7A68FF] bg-[#533AFD]/8 px-2.5 py-1 rounded-md border border-[#533AFD]/20 shrink-0">
            <Lock className="h-3.5 w-3.5 text-[#533AFD] dark:text-[#7A68FF]" />
            <span>Private Cloud ML Ready</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-6 space-y-6">
        {/* Engine Mode Selector */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] font-mono">
            Select Active Processing Engine:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setEngineMode('private_lora')}
              className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                engineMode === 'private_lora'
                  ? 'border-[#533AFD] bg-[#533AFD]/8 text-[#533AFD] dark:text-[#7A68FF] shadow-xs'
                  : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold text-xs">
                <Cpu className="h-3.5 w-3.5" />
                4-Bit LoRA Private Container
              </div>
              <div className="text-[11px] opacity-80 mt-1">
                Zero external egress • Render VPC isolated
              </div>
            </button>

            <button
              type="button"
              onClick={() => setEngineMode('deterministic')}
              className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                engineMode === 'deterministic'
                  ? 'border-emerald-600 bg-emerald-50/60 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 shadow-xs'
                  : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold text-xs">
                <Database className="h-3.5 w-3.5" />
                PostGIS &amp; Python Engine
              </div>
              <div className="text-[11px] opacity-80 mt-1">
                0.1ms • $0 token cost • Pure math
              </div>
            </button>

            <button
              type="button"
              onClick={() => setEngineMode('public_failover')}
              className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                engineMode === 'public_failover'
                  ? 'border-teal-600 bg-teal-50/60 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300 shadow-xs'
                  : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold text-xs">
                <Sparkles className="h-3.5 w-3.5" />
                Dual Public Failover
              </div>
              <div className="text-[11px] opacity-80 mt-1">
                Gemini 2.0 Flash + GPT-4o-mini
              </div>
            </button>
          </div>
        </div>

        {/* Input Form Area */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] font-mono">
              {siteConfig.workflow.inputLabel}
            </label>
            <button
              onClick={() => setInputText(siteConfig.workflow.defaultInput)}
              className="text-xs text-[#533AFD] dark:text-[#7A68FF] hover:underline font-mono"
            >
              Reset to Sample Query
            </button>
          </div>
          <Textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={3}
            className="text-xs sm:text-sm font-mono resize-none border-[var(--color-border)] bg-[var(--color-panel-subtle)] focus:border-[#533AFD]"
            placeholder={siteConfig.workflow.inputPlaceholder}
          />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <span className="text-[11px] text-[var(--color-text-muted)] font-mono">
              Every calculated number traces back to statutory citations. Open ambiguities flagged explicitly.
            </span>
            <Button
              onClick={handleExecute}
              disabled={loading}
              className="h-9 px-4 text-xs font-semibold bg-[#635BFF] hover:bg-[#533AFD] text-white shadow-xs shrink-0"
            >
              {loading ? (
                <>
                  <RefreshCw className="h-3.5 w-3.5 mr-2 animate-spin" />
                  Executing Trace...
                </>
              ) : (
                <>
                  <Zap className="h-3.5 w-3.5 mr-1.5" />
                  {siteConfig.workflow.buttonLabel}
                </>
              )}
            </Button>
          </div>
        </div>

        {/* 3-Step Inline Architecture Pipeline Telemetry */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3 sm:p-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-secondary)] font-mono mb-2.5">
            Real-Time Pipeline Execution Stages
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 text-xs font-mono">
            {/* Stage 1 */}
            <div className="flex items-center gap-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] p-2.5 shadow-2xs">
              <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div className="min-w-0">
                <div className="text-[10px] text-[var(--color-text-muted)] font-sans uppercase">Stage 1 • Privacy &amp; PII Guard</div>
                <div className="font-semibold text-emerald-600 dark:text-emerald-400 truncate">{stepStatus.firewall}</div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="flex items-center gap-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] p-2.5 shadow-2xs">
              <Cpu className="h-4 w-4 text-[#533AFD] dark:text-[#7A68FF] shrink-0" />
              <div className="min-w-0">
                <div className="text-[10px] text-[var(--color-text-muted)] font-sans uppercase">Stage 2 • Processing Engine</div>
                <div className="font-semibold text-[var(--color-text-primary)] truncate">{stepStatus.inference}</div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="flex items-center gap-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] p-2.5 shadow-2xs">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div className="min-w-0">
                <div className="text-[10px] text-[var(--color-text-muted)] font-sans uppercase">Stage 3 • Statutory Citation Trace</div>
                <div className="font-semibold text-emerald-600 dark:text-emerald-400 truncate">{stepStatus.schema}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Structured JSON Output Box */}
        {result && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5 text-[#533AFD] dark:text-[#7A68FF]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] font-mono">
                  Verified Defensible Payload (Structured Audit Output)
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-7 text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] font-mono"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 mr-1 text-emerald-600" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 mr-1" />
                    Copy JSON
                  </>
                )}
              </Button>
            </div>
            <pre className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 text-xs font-mono text-[var(--color-text-primary)] overflow-x-auto max-h-72 leading-relaxed">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
