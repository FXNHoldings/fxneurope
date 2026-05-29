"use client";

import { useEffect, useRef } from "react";

/**
 * Renders /public/lottie/online-identity.json via lottie-web.
 * lottie-web is imported dynamically (client-only) so it never runs during
 * the static export/prerender. The JSON is fetched at runtime from /lottie/.
 */
export default function OnlineIdentityLottie({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let anim: any;
    (async () => {
      const lottie = (await import("lottie-web")).default;
      const res = await fetch("/lottie/online-identity.json");
      const data = await res.json();
      if (cancelled || !ref.current) return;
      anim = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: data,
      });
    })();
    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, []);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="FXN Europe — building online identity and digital commerce"
      className={className}
    />
  );
}
