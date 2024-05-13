import React from "react";
import { createPortal } from "react-dom";

const SideDrawer: React.FC<{ children: React.ReactNode }> = (props) => {
  const content = (
    <aside className="fixed inset-0 z-50 flex items-center justify-start bg-white shadow-md w-3/4">
      {props.children}
    </aside>
  );

  return createPortal(content, document.getElementById("drawer-hook")!);
};

export default SideDrawer;
