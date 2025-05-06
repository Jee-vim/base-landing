"use client";
import { cn } from "@/lib/utils";
import React, { createContext, useContext, useState } from "react";

type ToggleContextType = {
  on: boolean;
  toggle: () => void;
};

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

const Root = ({ children }: { children: React.ReactNode }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      <div className="toggle-root">{children}</div>
    </ToggleContext.Provider>
  );
};

const On = ({ children }: { children: React.ReactNode }) => {
  const { on } = useToggle();
  return (
    <div
      className={cn("bg-red-300 transition-all duration-700", {
        "scale-0": !on,
        "scale-100": on,
      })}
    >
      {children}
    </div>
  );
};

const Off = ({ children }: { children: React.ReactNode }) => {
  const { on } = useToggle();
  return !on ? <>{children}</> : null;
};

const Button = () => {
  const { on, toggle } = useToggle();
  return <button onClick={toggle}>{on ? "Turn off" : "Turn on"}</button>;
};

const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("Toggle components must be used within Toggle.Root");
  }
  return context;
};

export const Toggle = {
  Root,
  On,
  Off,
  Button,
};
