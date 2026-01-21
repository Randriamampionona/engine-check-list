"use client";

export default function AadsAdaptive() {
  const adUnitId = "2424870";

  return (
    <div className="w-full flex flex-col items-center my-8 px-4">
      {/* Container matching the AADS relative positioning */}
      <div
        className="relative w-full max-w-250 flex flex-col items-center"
        style={{ zIndex: 99998 }}
      >
        {/* The Iframe */}
        <iframe
          data-aa={adUnitId}
          // Fixed the variable name below from adId to adUnitId
          src={`//acceptable.a-ads.com/${adUnitId}/?size=Adaptive`}
          style={{
            border: "0",
            padding: "0",
            width: "100%", // Adapts to the container width
            height: "90px", // Standard adaptive height
            overflow: "hidden",
            display: "block",
            margin: "0 auto",
          }}
          title="AADS Adaptive Ad"
        />

        {/* The "Advertise here" badge positioned exactly like the original snippet */}
        <div className="w-full flex justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://aads.com/campaigns/new/?source_id=${adUnitId}&source_type=ad_unit&partner=${adUnitId}`}
            style={{
              display: "inline-block",
              fontSize: "13px",
              color: "#263238",
              padding: "4px 10px",
              background: "#F8F8F9",
              textDecoration: "none",
              borderRadius: "0 0 4px 4px",
              fontFamily: "sans-serif",
            }}
          >
            Advertise here
          </a>
        </div>
      </div>
    </div>
  );
}
