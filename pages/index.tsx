import { Icons } from "@/icons";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(false);
  console.log(value);
  return (
    <div className=" bg-zinc-900 flex h-screen">
      <Icons icon="Icon123" className="text-white" />
      {value && (
        <>
          <Icons icon="IconAB2" className="text-blue-400" />
          <Icons icon="Icon123" className="text-blue-400" />
          <Icons icon="Icon360" className="text-blue-400" />
        </>
      )}

      <button
        onClick={() => {
          setValue(!value);
        }}
      >
        si
      </button>
    </div>
  );
}
