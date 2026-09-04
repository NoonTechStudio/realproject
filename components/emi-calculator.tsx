"use client";

import { useId, useMemo, useState, type CSSProperties } from "react";
import { calcEmi, compactINR, formatINR } from "@/lib/finance";
import { project } from "@/lib/project";
import { IconArrow } from "./icons";
import { Heading, Section } from "./primitives";
import { Reveal } from "./reveal";

function SliderField({
  label,
  value,
  valueLabel,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  valueLabel: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  const id = useId();
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium text-ink">
          {label}
        </label>
        <span className="font-display text-base font-semibold text-brand">
          {valueLabel}
        </span>
      </div>
      <input
        id={id}
        type="range"
        className="emi-slider mt-3"
        style={{ "--fill": `${pct}%` } as CSSProperties}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

export function EmiCalculator() {
  const { units, emiDefaults } = project;
  const [unitIdx, setUnitIdx] = useState(0);
  const [price, setPrice] = useState(units[0].priceValue);
  const [downPaymentPct, setDownPaymentPct] = useState(emiDefaults.downPaymentPct);
  const [rate, setRate] = useState(emiDefaults.interestRate);
  const [tenure, setTenure] = useState(emiDefaults.tenureYears);

  const selectUnit = (i: number) => {
    setUnitIdx(i);
    setPrice(units[i].priceValue);
  };
  const onPriceChange = (v: number) => {
    setPrice(v);
    setUnitIdx(-1);
  };

  const downPayment = (price * downPaymentPct) / 100;
  const loanAmount = price - downPayment;

  const { monthlyPayment, totalPayment, totalInterest, interestShare } = useMemo(
    () => calcEmi({ principal: loanAmount, annualRatePct: rate, tenureYears: tenure }),
    [loanAmount, rate, tenure],
  );

  const r = 58;
  const circumference = 2 * Math.PI * r;
  const interestLen = circumference * interestShare;

  return (
    <Section id="emi-calculator" className="py-16 sm:py-24">
      <Reveal>
        <Heading
          kicker="Plan your budget"
          title="EMI Calculator"
          intro="See the monthly number before you visit — start from a unit price or set your own, then adjust down payment, rate and tenure."
        />
      </Reveal>

      <Reveal className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-stretch">
        {/* controls */}
        <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card sm:p-8">
          <div className="flex flex-wrap gap-2">
            {units.map((u, i) => (
              <button
                key={u.type}
                type="button"
                onClick={() => selectUnit(i)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                  unitIdx === i
                    ? "border-brand bg-brand text-white"
                    : "border-brand-100 text-muted hover:border-brand-400 hover:text-brand"
                }`}
              >
                {u.type.split(" — ")[0]} · {compactINR(u.priceValue)}
              </button>
            ))}
            <span
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold sm:text-sm ${
                unitIdx === -1
                  ? "border-brand bg-brand text-white"
                  : "border-dashed border-brand-100 text-muted/60"
              }`}
            >
              Custom
            </span>
          </div>

          <div className="mt-7 space-y-7">
            <SliderField
              label="Property price"
              value={price}
              valueLabel={compactINR(price)}
              min={emiDefaults.minPrice}
              max={emiDefaults.maxPrice}
              step={50_000}
              onChange={onPriceChange}
            />
            <SliderField
              label="Down payment"
              value={downPaymentPct}
              valueLabel={`${downPaymentPct}% · ${compactINR(downPayment)}`}
              min={10}
              max={60}
              step={5}
              onChange={setDownPaymentPct}
            />
            <SliderField
              label="Interest rate"
              value={rate}
              valueLabel={`${rate.toFixed(2)}% p.a.`}
              min={6}
              max={12}
              step={0.05}
              onChange={setRate}
            />
            <SliderField
              label="Loan tenure"
              value={tenure}
              valueLabel={`${tenure} ${tenure === 1 ? "year" : "years"}`}
              min={5}
              max={30}
              step={1}
              onChange={setTenure}
            />
          </div>

          <p className="mt-7 border-t border-brand-100 pt-5 text-xs text-muted">
            Loan amount <span className="font-medium text-ink">{formatINR(loanAmount)}</span> at{" "}
            {rate.toFixed(2)}% for {tenure} {tenure === 1 ? "year" : "years"}. Standard reducing-balance
            EMI, monthly compounding.
          </p>
        </div>

        {/* result */}
        <div className="flex flex-col rounded-2xl bg-brand p-6 text-white sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
            Estimated EMI
          </p>
          <p className="mt-1 font-display text-4xl font-semibold sm:text-5xl">
            {formatINR(monthlyPayment)}
            <span className="ml-1.5 align-middle text-base font-normal text-white/60">/mo</span>
          </p>

          <div className="mt-7 flex items-center gap-6">
            <div className="relative h-[132px] w-[132px] shrink-0">
              <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
                <circle
                  cx="70"
                  cy="70"
                  r={r}
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="14"
                />
                <circle
                  cx="70"
                  cy="70"
                  r={r}
                  fill="none"
                  stroke="var(--color-gold-500)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={`${interestLen} ${circumference - interestLen}`}
                  style={{ transition: "stroke-dasharray 0.5s ease" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-xl font-semibold">
                  {Math.round(interestShare * 100)}%
                </span>
                <span className="text-[10px] uppercase tracking-wide text-white/60">interest</span>
              </div>
            </div>
            <ul className="flex-1 space-y-3 text-sm">
              <li className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-white/75">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white/25" />
                  Principal
                </span>
                <span className="font-medium">{formatINR(loanAmount)}</span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-white/75">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold-500" />
                  Interest
                </span>
                <span className="font-medium">{formatINR(totalInterest)}</span>
              </li>
            </ul>
          </div>

          <dl className="mt-7 space-y-2 border-t border-white/15 pt-5 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-white/70">Down payment ({downPaymentPct}%)</dt>
              <dd className="font-medium">{formatINR(downPayment)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-white/70">Total interest</dt>
              <dd className="font-medium">{formatINR(totalInterest)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-white/70">Total payment</dt>
              <dd className="font-medium">{formatINR(totalPayment)}</dd>
            </div>
          </dl>

          <a
            href="#enquire"
            className="mt-7 inline-flex items-center justify-center gap-1.5 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-gold-400"
          >
            Talk to our home-loan desk
            <IconArrow className="h-4 w-4" />
          </a>
          <p className="mt-3 text-center text-[11px] text-white/60">
            Indicative only — actual EMI depends on the lender, your credit profile and processing
            fees.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
