import { Icons } from "@/icons";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(false);
  return (
    <div className="h-screen bg-zinc-900 ">
      <Icons icon="Icon123" className="text-white" />
      <a href="">
        <Icons icon="Icon123" />
      </a>
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
