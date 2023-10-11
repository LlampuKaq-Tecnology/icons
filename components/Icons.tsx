import React, { useCallback, useEffect, useState } from "react";

import { customAlphabet } from "nanoid";
import { Icons } from "./I";

interface IconsProps {
  icon: Icons;
  size?: number;
  color?: string;
}
const Icons = ({ size = 24, color, icon }: IconsProps) => {
  const [svg, setSvg] = useState<any>();
  const nanoid = customAlphabet("1234567890", 10);
  const uniqueId = nanoid();
  const namesvg = icon;
  const svgUrl = `https://icons.llampukaq.com/${namesvg}.svg`;
  const className = `icon-tabler-${namesvg}`;
  const res = useCallback(async () => {
    fetch(svgUrl)
      .then((response) => response.text())
      .then((svgText) => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
        const svgElement = svgDoc.querySelector(`.${className}`);
        if (svgElement) {
          svgElement.setAttribute("width", size.toString());
          svgElement.setAttribute("height", size.toString());

          setSvg(svgElement.outerHTML);
        }
      })
      .catch(() => {});
  }, [size, color, icon]);
  useEffect(() => {
    res();
  }, [icon, color, size]);
  return (
    <div
      id={`svg-container-${uniqueId}`}
      style={{ width: size }}
      dangerouslySetInnerHTML={{ __html: svg || "" }}
    />
  );
};

export default React.memo(Icons);
