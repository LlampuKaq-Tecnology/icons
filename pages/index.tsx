import { Icons } from "@/icons";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(false);
  return (
    <div className=" bg-zinc-900 flex h-screen hover:text-yellow-500 stroke-slate-500">
      <Icons className="stroke-white" stroke={1} size={40} icon="Icon123" />
      <Icons className="" size={30} icon="Icon123" />
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        Change state
      </button>
    </div>
  );
}
