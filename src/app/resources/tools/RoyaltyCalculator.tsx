// src/app/resources/tools/RoyaltyCalculator.tsx
"use client";

import { useMemo, useState } from "react";
import { Disclaimer, Field, NumberInput, Panel, Select, Stat, money2, money, num } from "../ui";

// Placeholder channel shares. Real terms vary by retailer and distributor and change over time.
const CHANNELS = [
  { value: "direct", label: "Direct sale (you sell it yourself)", share: 0 },
  { value: "online", label: "Online retailer (about 40% share)", share: 40 },
  { value: "store", label: "Bookstore through a distributor (about 55% share)", share: 55 },
  { value: "custom", label: "Custom share", share: 0 },
] as const;
type Channel = (typeof CHANNELS)[number]["value"];

export default function RoyaltyCalculator() {
  const [price, setPrice] = useState(24.99);
  const [printCost, setPrintCost] = useState(6.5);
  const [channel, setChannel] = useState<Channel>("online");
  const [customShare, setCustomShare] = useState(45);
  const [copies, setCopies] = useState(500);
  const [upfront, setUpfront] = useState(3000);

  const r = useMemo(() => {
    const share = channel === "custom" ? customShare : CHANNELS.find((c) => c.value === channel)!.share;
    const retailerCut = (price * share) / 100;
    const perCopy = price - retailerCut - printCost;
    const total = perCopy * copies;
    const net = total - upfront;
    const breakEven = perCopy > 0 ? Math.ceil(upfront / perCopy) : null;
    return { share, retailerCut, perCopy, total, net, breakEven };
  }, [price, printCost, channel, customShare, copies, upfront]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <Panel>
        <h2 className="mb-6 text-xl font-bold text-gray-900">Your numbers</h2>
        <div className="space-y-5">
          <Field label="Selling price per copy">
            <NumberInput value={price} onChange={setPrice} step={0.5} prefix="$" />
          </Field>
          <Field label="Printing cost per copy">
            <NumberInput value={printCost} onChange={setPrintCost} step={0.25} prefix="$" />
          </Field>
          <Field label="How the copy is sold">
            <Select value={channel} onChange={setChannel} options={CHANNELS.map((c) => ({ value: c.value, label: c.label }))} />
          </Field>
          {channel === "custom" && (
            <Field label="Retailer or distributor share (%)">
              <NumberInput value={customShare} onChange={(v) => setCustomShare(Math.min(100, v))} step={1} />
            </Field>
          )}
          <Field label="Copies you expect to sell">
            <NumberInput value={copies} onChange={setCopies} step={50} />
          </Field>
          <Field label="Your upfront publishing costs" hint="Editing, cover, design and anything else you paid for before selling a copy.">
            <NumberInput value={upfront} onChange={setUpfront} step={100} prefix="$" />
          </Field>
        </div>
      </Panel>

      <div className="space-y-6">
        <Panel>
          <h2 className="mb-5 text-xl font-bold text-gray-900">Your estimate</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Stat label="Earnings per copy" value={money2(r.perCopy)} sub={r.perCopy <= 0 ? "Price is too low to cover costs" : undefined} />
            <Stat label="Total earnings" value={money(r.total)} sub={`${num(copies)} copies`} />
            <Stat label="After upfront costs" value={money(r.net)} sub={r.net < 0 ? "Not yet in profit" : "Profit"} />
            <Stat label="Break-even" value={r.breakEven === null ? "n/a" : `${num(r.breakEven)} copies`} />
          </div>
          <ul className="mt-6 divide-y divide-gray-100 text-sm">
            <li className="flex justify-between py-3"><span className="text-gray-700">Selling price</span><span className="font-semibold">{money2(price)}</span></li>
            <li className="flex justify-between py-3"><span className="text-gray-700">Retailer or distributor share ({r.share}%)</span><span className="font-semibold">−{money2(r.retailerCut)}</span></li>
            <li className="flex justify-between py-3"><span className="text-gray-700">Printing cost</span><span className="font-semibold">−{money2(printCost)}</span></li>
            <li className="flex justify-between py-3"><span className="font-semibold text-gray-900">You keep</span><span className="font-bold text-[#8d171c]">{money2(r.perCopy)}</span></li>
          </ul>
          <Disclaimer>
            Estimates only. Retailer shares, printing costs, returns, shipping and taxes differ by platform and change over
            time, so check the current terms of the platform you plan to use.
          </Disclaimer>
        </Panel>
      </div>
    </div>
  );
}
