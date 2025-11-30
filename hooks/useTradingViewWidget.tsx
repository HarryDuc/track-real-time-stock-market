import { useEffect, useRef } from "react";

const useTradingViewWidget = (
  scriptUrl: string,
  config: Record<string, unknown>,
  height = 600
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    // Nếu đã load rồi thì không load lại
    if (containerRef.current.dataset.loaded === "true") return;

    // Tìm widget container để append script vào
    const widgetContainer = containerRef.current.querySelector('.tradingview-widget-container__widget');
    if (!widgetContainer) return;

    // Tạo script element
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.innerHTML = JSON.stringify(config);
    script.type = "text/javascript";

    // Append script vào widget container
    widgetContainer.appendChild(script);
    containerRef.current.dataset.loaded = "true";

    return () => {
      if (containerRef.current) {
        const widgetContainer = containerRef.current.querySelector('.tradingview-widget-container__widget');
        if (widgetContainer) {
          widgetContainer.innerHTML = "";
        }
        delete containerRef.current.dataset.loaded;
      }
    };
  }, [scriptUrl, config, height]);
  return containerRef;
};

export default useTradingViewWidget;
