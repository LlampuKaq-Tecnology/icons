import { Icons } from "@/icons";
import ScrollComponents from "@/icons/BlockIcons";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(false);
  console.log(value);
  return (
    <div className=" bg-zinc-900 flex h-screen">
      {/* <ScrollComponents
        onSelect={(s) => {
          console.log(s);
        }}
      /> */}
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
