const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** "₹62,50,000" */
export function formatINR(value: number): string {
  return inr.format(Math.round(value));
}

/** "₹62.5 L" / "₹1.24 Cr" — for slider badges and compact labels. */
export function compactINR(value: number): string {
  const abs = Math.abs(value);
  if (abs >= 1_00_00_000) {
    return `₹${trimZero((value / 1_00_00_000).toFixed(2))} Cr`;
  }
  if (abs >= 1_000) {
    return `₹${trimZero((value / 1_00_000).toFixed(2))} L`;
  }
  return `₹${value.toLocaleString("en-IN")}`;
}

function trimZero(s: string) {
  return s.replace(/\.0+$/, "").replace(/(\.\d*[1-9])0+$/, "$1");
}

export type EmiInput = {
  principal: number;
  annualRatePct: number;
  tenureYears: number;
};

export type EmiResult = {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  interestShare: number; // 0..1, share of totalPayment that is interest
};

/** Standard reducing-balance EMI: P * r * (1+r)^n / ((1+r)^n - 1). */
export function calcEmi({ principal, annualRatePct, tenureYears }: EmiInput): EmiResult {
  const months = Math.max(1, Math.round(tenureYears * 12));
  const monthlyRate = annualRatePct / 12 / 100;

  const monthlyPayment =
    monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate * (1 + monthlyRate) ** months) /
        ((1 + monthlyRate) ** months - 1);

  const totalPayment = monthlyPayment * months;
  const totalInterest = Math.max(0, totalPayment - principal);

  return {
    monthlyPayment,
    totalPayment,
    totalInterest,
    interestShare: totalPayment > 0 ? totalInterest / totalPayment : 0,
  };
}
