import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function HeaderNav() {
  const location = useLocation();
  const [headerText, setHeaderText] = useState<string>("똑켓");
  useEffect(() => {
    const path = location.pathname.split('/')[1];
    if(path === 'home'){
      setHeaderText("나의 티켓")
    }
    else if(path === 'box'){
      setHeaderText("보관함")
    }
    else if(path === 'perform'){
      setHeaderText("공연 예매")
    }
  }, [location])
  return (
    <div className="sticky top-0 z-10 flex justify-center w-screen overflow-hidden">
      <div className="flex items-end justify-center w-full h-12 pt-2 pb-1 HeaderNav">
        <p className="font-bold">{headerText}</p>
      </div>
    </div>
  );
}
