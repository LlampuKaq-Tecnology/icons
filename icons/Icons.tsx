import { nanoid } from "nanoid";
import React, { useCallback, useEffect, useState } from "react";
import { IconsProps, useIcons } from ".";
function calculateSVGHash(svgText: any) {
  let hash = 0;
  if (svgText.length === 0) return hash;
  for (let i = 0; i < svgText.length; i++) {
    const char = svgText.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return hash;
}

function Icons({ size = 24, color, icon, className }: IconsProps) {
  const icons = useIcons();
  const [svg, setSvg] = useState<any>();
  const [svgHash, setSvgHash] = useState(0);

  const uniqueId = nanoid();

  const svgUrl = `https://icons.llampukaq.com/${icon}.svg`;
  const res = useCallback(async () => {
    try {
      const response = await fetch(svgUrl);
      const svgText = await response.text();
      const newSvgHash = calculateSVGHash(svgText);
      if (newSvgHash !== svgHash) {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
        const svgElement = svgDoc.querySelector(".icon");
        if (svgElement) {
          svgElement.setAttribute("width", size.toString());
          svgElement.setAttribute("height", size.toString());
          setSvg(svgElement.outerHTML);
          setSvgHash(newSvgHash);
        }
      }
    } catch (error) {}
  }, [size, color, icon]);
  useEffect(() => {
    res();
  }, [icon, color, size]);
  return (
    <div
      style={{ width: size }}
      id={`${uniqueId}`}
      className={`${className ?? icons?.className}`}
      dangerouslySetInnerHTML={{ __html: svg || "" }}
    />
  );
}

export default Icons;
