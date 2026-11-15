import Reveal from "../Reveal";

const sizes = [
  { size: "XS", chest: "34 / 86", waist: "28 / 71", hip: "36 / 91" },
  { size: "S", chest: "36 / 91", waist: "30 / 76", hip: "38 / 97" },
  { size: "M", chest: "38 / 97", waist: "32 / 81", hip: "40 / 102" },
  { size: "L", chest: "40 / 102", waist: "34 / 86", hip: "42 / 107" },
  { size: "XL", chest: "42 / 107", waist: "36 / 91", hip: "44 / 112" },
];

export default function SizeGuide() {
  return (
    <section className="relative w-full bg-bg-primary px-6 py-16 md:px-16 md:py-24">
      <Reveal className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs tracking-[0.2em] uppercase text-text-secondary">
          05 — Find Your Fit
        </p>
        <h2 className="max-w-[620px] font-display text-[36px] leading-[0.95] text-text-primary sm:text-[48px] md:text-[60px]">
          Made to fit, <em className="italic">made to last.</em>
        </h2>

        <div className="mt-10 overflow-x-auto border-y border-border-subtle">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <caption className="sr-only">
              ARDOR apparel size guide in inches and centimeters
            </caption>
            <thead>
              <tr className="border-b border-border-subtle text-xs tracking-[0.15em] uppercase text-text-secondary">
                <th scope="col" className="px-4 py-4 font-normal sm:px-6">
                  Size
                </th>
                <th scope="col" className="px-4 py-4 font-normal sm:px-6">
                  Chest
                  <span className="mt-1 block text-[10px] tracking-normal normal-case">
                    in / cm
                  </span>
                </th>
                <th scope="col" className="px-4 py-4 font-normal sm:px-6">
                  Waist
                  <span className="mt-1 block text-[10px] tracking-normal normal-case">
                    in / cm
                  </span>
                </th>
                <th scope="col" className="px-4 py-4 font-normal sm:px-6">
                  Hip
                  <span className="mt-1 block text-[10px] tracking-normal normal-case">
                    in / cm
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((item, index) => (
                <tr
                  key={item.size}
                  className={`border-b border-border-subtle last:border-b-0 ${
                    index % 2 === 0 ? "bg-bg-surface" : "bg-bg-primary"
                  }`}
                >
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-text-primary sm:px-6"
                  >
                    {item.size}
                  </th>
                  <td className="px-4 py-4 text-text-secondary sm:px-6">
                    {item.chest}
                  </td>
                  <td className="px-4 py-4 text-text-secondary sm:px-6">
                    {item.waist}
                  </td>
                  <td className="px-4 py-4 text-text-secondary sm:px-6">
                    {item.hip}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-text-secondary">
          Measurements are in inches / centimeters. If you are between sizes,
          we recommend sizing up.
        </p>
      </Reveal>
    </section>
  );
}
