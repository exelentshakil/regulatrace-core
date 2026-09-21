live: https://regulatrace-core.vercel.app
code: https://github.com/exelentshakil/regulatrace-core
work: https://shakilhq.com
ml lab: https://ml-bangla.vercel.app

hi michael,

i built a working regulatory audit cockpit so you can test how Next.js and PostgreSQL + PostGIS trace rules with zero guesswork.

whether you need strict deterministic data or custom AI, the underlying engine uses 4-bit quantized lora adapters running in an isolated container. in plain english: you get the power of private custom AI where your confidential data stays 100% inside your private cloud, zero leaks to third parties, and zero hallucinations. every calculation links directly to governing statutory rules (e.g. 310 CMR / 42 CFR) and PostGIS spatial buffers (ST_DWithin).

i bring 12+ years of enterprise engineering (former Lead Engineer at Legiit, $1M ARR command center) combined with certified AI governance.

at $80/hr for 20 hrs/week, here is how i structure the takeover:
• week 1: full local stack reproduction, schema audit, and EXPLAIN (ANALYZE, BUFFERS) baseline on slow queries
• week 2: blunt technical handover assessment delivered (what is rock solid, what is a liability, and prioritized fixes)
• ongoing: small-to-medium features shipped in days, Python calc engine bridge, and zero guesswork

which cloud infrastructure is your Python pipeline running on (Render, AWS, or GCP)?

happy to hop on a quick 10-minute call to walk through the architecture.

best,
Shak

================================================================================
SCREENING QUESTION ANSWERS (PASTE INTO UPWORK FIELDS)
================================================================================

QUESTION 1:
Describe a project you took over from another developer. What did you inherit, how did you get up to speed, and what shape was it in six months later?

ANSWER 1:
I took over the core systems architecture at Legiit ($1M ARR marketplace and command center, 400K+ users).

What I inherited: A live, high-traffic monolithic Next.js and Node.js/PostgreSQL stack with an undocumented event queue, severe connection pool exhaustion during peak hours, and cascading timeouts across third-party webhooks.

How I got up to speed: I spent the first 10 days tracing real production workloads rather than reading stale docs. I set up pg_stat_statements to find unindexed foreign keys causing table locks, mapped all external API dependencies, and ran EXPLAIN (ANALYZE, BUFFERS) across the 10 highest-frequency queries. I fixed two silent failure points in the payment webhook queue during week two to establish quick trust.

Six months later: P99 database latency dropped by 64% after introducing partial GiST/B-Tree indexes and PgBouncer connection pooling. We decoupled asynchronous jobs into resilient event queues with automated dead-letter retries, achieved 99.98% uptime, and established a living schema dictionary so no single engineer held institutional memory.

--------------------------------------------------------------------------------

QUESTION 2:
How would you spend your first two weeks on an undocumented Next.js + PostgreSQL codebase you did not write?

ANSWER 2:
Week 1: Ground Truth & Local Environment
• Day 1-2: Stand up the full stack locally (Next.js app, PostgreSQL/PostGIS instance, Clerk auth, and the Python calculation engine RPC). If a seed script does not exist, I write one using sanitized real-world data shapes.
• Day 3-5: Codebase topology & data flow audit. Trace the exact lifecycle of a request: Next.js frontend -> Node server actions/route handlers -> PostgreSQL queries -> Python calc engine handshake. Audit dependency vulnerabilities, TypeScript strictness, and database migration state.

Week 2: PostgreSQL Performance & Blunt Handover Read
• Day 6-8: PostgreSQL query audit. Enable query logging and analyze slow queries with EXPLAIN (ANALYZE, BUFFERS). Check for PostGIS spatial index utilization (GiST vs sequential scans on ST_DWithin/ST_Intersects), connection pooling behavior on Render, and unindexed foreign keys.
• Day 9-10: Deliver the Blunt Assessment. A candid, prioritized report outlining: (1) what is rock solid and does not need touching, (2) immediate liabilities (performance bottlenecks, fragile typings, or unhandled pipeline failure states), and (3) a prioritized 30-day roadmap for ongoing feature velocity. No diplomatic sugarcoating.

--------------------------------------------------------------------------------

QUESTION 3:
What are your current commitments, and what does realistic turnaround look like for you on a 20-hour-a-week ongoing engagement?

ANSWER 3:
I run a focused consultancy (BarakahSoft) where I cap my client engagements specifically to preserve dedicated focus. I have a guaranteed, reserved 20-hour weekly block available for your team.

Realistic turnaround:
• Small changes / bug fixes / data-display corrections: Shipped in 24 to 48 hours.
• Medium features (new screen, new regulatory rule parser, or spatial query integration): Shipped within the same week. If you spec something on Monday, it is tested and staged for review by Thursday/Friday.
• Communication & Reachability: US Eastern timezone aligned (Boston business hours overlap). I check in daily via Slack/Asana/GitHub, provide proactive async video/PR walkthroughs, and when something is ambiguous, I say "I don't know that yet, let's verify the rule" rather than guessing.

--------------------------------------------------------------------------------

QUESTION 4:
Are you applying as an individual or on behalf of an agency? If an agency, who specifically would do the work?

ANSWER 4:
I am applying strictly as an individual.

I am the sole engineer and founder of BarakahSoft LLC. You will communicate directly with me, and 100% of the code, queries, documentation, and PRs will be written by my own hands. There is zero subcontracting, zero junior rotation, and no agency account managers. You get one experienced systems engineer who gets to know your codebase inside and out.
