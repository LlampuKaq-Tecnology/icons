import React, { useCallback, useEffect, useState } from "react";
import { IconsProps, useIcons } from ".";

function Icons({ size = 24, color, icon, className, stroke = 2 }: IconsProps) {
  const icons = useIcons();
  const [svg, setSvg] = useState<any>();
  const svgUrl = `https://icons.llampukaq.com/${icon}.svg`;
  const res = useCallback(async () => {
    try {
      const response = await fetch(svgUrl);
      const iconContent = await response.text();
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(iconContent, "image/svg+xml");
      const svgElement = svgDoc.querySelector(".icon");
      if (svgElement) {
        svgElement.setAttribute("width", size.toString());
        svgElement.setAttribute("height", size.toString());
        svgElement.setAttribute("stroke-width", stroke.toString());
        svgElement.removeAttribute("stroke");
        setSvg(svgElement.outerHTML);
      }
    } catch (error) {
      console.error("Error fetching icon:", error);
    }
  }, [size, color, icon]);

  useEffect(() => {
    res();
  }, []);
  return (
    <div
      style={{ width: size }}
      className={`${className ?? icons?.className ?? ""}`}
      dangerouslySetInnerHTML={{ __html: svg || "" }}
    />
  );
}
export default React.memo(Icons);
