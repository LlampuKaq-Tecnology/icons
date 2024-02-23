import { Icons } from "@/icons";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div className=" bg-zinc-900 flex h-screen hover:text-yellow-500 stroke-slate-500">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        show
      </button>
      {show && (
        <>
          <Icons
            className="stroke-white"
            stroke={1}
            size={40}
            icon="Icon123"
          />
          <Icons size={30} icon="Icon123" />
        </>
      )}
    </div>
  );
}
