"use client";

export default function AadsAdaptive() {
  return (
    <div className="w-full flex flex-col items-center my-8 px-4 bg-secondary/5 rounded-lg border border-border/40 overflow-hidden">
      <div className="w-full max-w-182 aspect-auto min-h-12.5">
        <iframe
          data-aa="2424870"
          src="//acceptable.a-ads.com/2424870/?size=Adaptive"
          style={{
            border: "0",
            padding: "0",
            width: "100%",
            height: "100%",
            minHeight: "50px",
            display: "block",
          }}
          title="AADS Adaptive Ad"
        />
      </div>
    </div>
  );
}
