/**
 * Million-Dollar Demo Cockpit Configuration Hub
 * Central Schema & Data Provider for Light-Speed Customization.
 *
 * Tailored for: RegulaTrace - Next.js 15 & PostgreSQL + PostGIS Regulatory Audit Engine
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
  subtext: string;
  badge: string;
}

export interface TableRow {
  id: string;
  entityName: string;
  category: string;
  status: 'active' | 'verified' | 'queued' | 'flagged';
  latency: string;
  provider: string;
  updatedAt: string;
  payload: Record<string, unknown>;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: 'stripe' | 'linear' | 'notion' | 'lovable' | 'bloomberg' | 'apple';
  primaryNav: NavItem[];
  hud?: {
    title: string;
    statusBadge: string;
    subsystems: {
      label: string;
      value: string;
      metric: string;
      subtext: string;
    }[];
  };
  metrics: MetricItem[];
  workflow: {
    badge: string;
    title: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    defaultInput: string;
    buttonLabel: string;
    sampleResponse: Record<string, unknown>;
  };
  table: {
    badge: string;
    title: string;
    description: string;
    columns: { key: string; label: string }[];
    rows: TableRow[];
  };
}

export const siteConfig: SiteConfig = {
  slug: 'regulatrace-core',
  name: 'RegulaTrace',
  badge: 'NEXT.JS 15 • POSTGRESQL + POSTGIS • AUDIT ENGINE',
  tagline: 'Deterministic Rule Tracing & Geospatial Regulatory Compliance',
  description: 'Turn dense public datasets and statutory rules into structured, defensible answers for professional users. Every displayed number traces directly back to the governing rule with zero guesswork.',
  archetype: 'stripe',
  primaryNav: [
    { id: 'cockpit', label: 'Operations Cockpit' },
    { id: 'pipeline', label: 'Regulatory Audit Engine' },
    { id: 'records', label: 'Defensible Data Grid' },
  ],
  hud: {
    title: 'PostgreSQL + PostGIS Engine',
    statusBadge: 'Sub-50ms Spatial P99',
    subsystems: [
      {
        label: 'STATUTORY RULE TRACEABILITY',
        value: 'Line-by-Line Statutory Citations',
        metric: '100% Traced',
        subtext: 'Zero unverified guesses',
      },
      {
        label: 'POSTGIS SPATIAL BUFFER JOIN',
        value: 'ST_DWithin & Boundary Polygons',
        metric: '14.2ms P99',
        subtext: 'GiST spatial index accelerated',
      },
      {
        label: 'PYTHON CALCULATION RPC',
        value: 'Calculation Engine Handshake',
        metric: '42ms Roundtrip',
        subtext: 'Unmodified upstream execution',
      },
    ],
  },
  metrics: [
    {
      id: 'traceability',
      title: 'Statutory Rule Traceability',
      value: '100.0%',
      change: 'Zero Hallucinations',
      trend: 'up',
      subtext: 'Every calculation links to underlying statute & rule ID',
      badge: 'DEFENSIBLE',
    },
    {
      id: 'postgis',
      title: 'PostgreSQL Spatial P99',
      value: '14.2ms',
      change: '-68% via GiST Indexes',
      trend: 'up',
      subtext: 'ST_DWithin boundary queries optimized via EXPLAIN BUFFERS',
      badge: 'POSTGIS',
    },
    {
      id: 'python_engine',
      title: 'Python Calc Engine RPC',
      value: '42ms Avg',
      change: 'Deterministic Bridge',
      trend: 'neutral',
      subtext: 'Clean Next.js API client wiring with zero upstream core edits',
      badge: 'WIRED',
    },
    {
      id: 'ambiguity',
      title: 'Ambiguity & Gap Handling',
      value: 'Explicit Flags',
      change: 'Zero Guesswork',
      trend: 'up',
      subtext: 'Unsettled legal & survey gaps surfaced directly to professionals',
      badge: 'TRANSPARENT',
    },
  ],
  workflow: {
    badge: 'Step 1 • Defensible Regulatory Audit',
    title: 'Simulate Regulatory Rule Tracing & PostGIS Spatial Audit',
    description: 'Test Next.js 15 API route execution: queries public municipal GIS layers, calculates exact statutory setback buffers, traces citations, and surfaces open regulatory questions without guessing.',
    inputLabel: 'Target Entity, Parcel GIS Identifier, or Statutory Citation:',
    inputPlaceholder: 'e.g. Suffolk County Health Center - 310 CMR 10.00 Wetlands & DPH clinic buffer...',
    defaultInput: 'Suffolk County Health Center (Parcel #082-411, Boston MA) - Verify 500ft wetland setback under 310 CMR 10.00 & DPH Clinic licensing rules (105 CMR 140.000)',
    buttonLabel: 'Execute Defensible Rule Audit',
    sampleResponse: {
      audit_verdict: 'DEFENSIBLE_ANSWER_CONFIRMED',
      jurisdiction: 'Commonwealth of Massachusetts / City of Boston',
      target_entity: 'Suffolk County Health Center (Parcel #082-411)',
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
        index_scan: 'idx_parcels_geom_gist (Buffers: shared hit=8)',
        python_calculation_handshake_ms: 38,
        guesswork_score: '0.0% (Strict rule linkage)',
      },
    },
  },
  table: {
    badge: 'Defensible Audit Register',
    title: 'Public Dataset & Regulatory Rule Audit Queue',
    description: 'High-density inspection grid with deterministic state tracking, rule traceability citations, and 1-tap raw JSON inspection drawer.',
    columns: [
      { key: 'id', label: 'Audit ID' },
      { key: 'entityName', label: 'Entity / Parcel' },
      { key: 'category', label: 'Regulatory Scope' },
      { key: 'status', label: 'Defensibility Status' },
      { key: 'latency', label: 'PostgreSQL P99' },
      { key: 'action', label: 'Rule Trace' },
    ],
    rows: [
      {
        id: 'REG-8841',
        entityName: 'Suffolk County Health Facility (Parcel 082)',
        category: 'Wetlands Setback & DPH Clinic Buffer',
        status: 'verified',
        latency: '12ms',
        provider: 'PostGIS ST_DWithin (GiST Scan)',
        updatedAt: '2 mins ago',
        payload: {
          parcel_gis_id: 'MA-BOS-SUFFOLK-082411',
          governing_statute: '310 CMR 10.00 & 105 CMR 140.100',
          statutory_buffer_meters: '152.4m (500.0ft required)',
          actual_measured_distance: '184.2m',
          variance_margin: '+31.8m (COMPLIANT)',
          defensibility_verdict: 'DEFENSIBLE • Exact statutory formula verified',
          unsettled_questions: 'None on boundary setback. Water table seasonal survey flagged for Q4.',
          query_plan: 'Index Scan using idx_parcels_geom_gist (Buffers: shared hit=8, read=0)',
        },
      },
      {
        id: 'REG-8842',
        entityName: 'Chesapeake Bay Maritime Commercial Dock',
        category: 'Public Waters & Clean Water Act § 404',
        status: 'flagged',
        latency: '24ms',
        provider: 'PostGIS + Python Calc Engine',
        updatedAt: '5 mins ago',
        payload: {
          parcel_gis_id: 'MD-AA-WTR-20419',
          governing_statute: '33 U.S.C. § 1344 (CWA § 404) & COMAR 26.17.04',
          statutory_buffer_meters: '30.0m Riparian Buffer',
          actual_measured_distance: '28.4m',
          variance_margin: '-1.6m (DEFICIENCY FLAGGED)',
          defensibility_verdict: 'OPEN VARIANCE • 1.6m setback shortfall',
          unsettled_questions: 'Mean high-water mark delineation contested in 2024 municipal re-survey. Surfaced explicitly to user.',
          query_plan: 'ST_Intersects spatial join with EPA Waters Layer (Buffers: hit=14)',
        },
      },
      {
        id: 'REG-8843',
        entityName: 'BioTech Cleanroom Manufacturing Boston',
        category: 'OSHA & Toxic Air Contaminant Permitting',
        status: 'verified',
        latency: '9ms',
        provider: 'Deterministic Rule Engine',
        updatedAt: '9 mins ago',
        payload: {
          facility_id: 'BOS-BIO-0982',
          governing_statute: '29 CFR § 1910.1000 Table Z-1 & MassDEP 310 CMR 7.00',
          air_exchange_rate: '18.5 ACH (Required: >= 15 ACH)',
          filtration_standard: 'HEPA 99.97% @ 0.3 micron',
          defensibility_verdict: 'COMPLIANT • Statutory formula certified',
          unsettled_questions: 'None • Sensor telemetry validated against ASHRAE 62.1 benchmarks',
          query_plan: 'B-Tree scan on idx_permits_facility_date (Execution: 0.14ms)',
        },
      },
      {
        id: 'REG-8844',
        entityName: 'Midwest Energy Substation Expansion',
        category: 'FERC Reliability & Right-of-Way Buffer',
        status: 'active',
        latency: '18ms',
        provider: 'PostgreSQL PostGIS Spatial Join',
        updatedAt: '15 mins ago',
        payload: {
          parcel_gis_id: 'OH-CUY-NERC-1102',
          governing_statute: 'FERC Order 888 / NERC FAC-003-4',
          clearance_measured: '48.2ft (Min: 45.0ft)',
          defensibility_verdict: 'UNDER ACTIVE CALCULATION',
          unsettled_questions: 'LiDAR re-scan scheduled for high-temperature conductor sag under peak load',
          query_plan: 'ST_DWithin bounding box query (Buffers: shared hit=8)',
        },
      },
      {
        id: 'REG-8845',
        entityName: 'Tri-County Municipal Solar Farm Array',
        category: 'Agricultural Prime Soil Conservation',
        status: 'queued',
        latency: '15ms',
        provider: 'Python Calc Engine RPC',
        updatedAt: '22 mins ago',
        payload: {
          parcel_gis_id: 'IL-CHAM-AG-771',
          governing_statute: '7 CFR § 657 & Farmland Protection Policy Act',
          prime_soil_fraction: '0.28 (Statutory Threshold: < 0.35)',
          defensibility_verdict: 'QUEUED FOR DETERMINISTIC AUDIT',
          unsettled_questions: 'Soil conservation district parcel update pending Q3 audit',
          query_plan: 'ST_Contains spatial overlap with USDA Soil SSURGO polygon layer',
        },
      },
    ],
  },
};
