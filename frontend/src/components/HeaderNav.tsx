import React from "react";

export default function HeaderNav() {
  return (
    <div className="sticky top-0 z-10 flex justify-center w-screen overflow-hidden">
      <div className="flex w-full pt-2 pb-1 bg-white HeaderNav">
        <p className="pl-2 text-3xl text-left HeaderNavTitle">똑켓</p>
        <p className="pt-3 pl-2 text-left waviy">
          <span
            style={
              {
                "--i": 1,
              } as React.CSSProperties
            }
          >
            N
          </span>
          <span
            style={
              {
                "--i": 2,
              } as React.CSSProperties
            }
          >
            o
          </span>
          <span
            style={
              {
                "--i": 3,
              } as React.CSSProperties
            }
          >
            .
          </span>
          <span
            style={
              {
                "--i": 4,
              } as React.CSSProperties
            }
          >
            1
          </span>
          <span
            style={
              {
                "--i": 5,
              } as React.CSSProperties
            }
          >
            &nbsp;{" "}
          </span>
          <span
            style={
              {
                "--i": 6,
              } as React.CSSProperties
            }
          >
            티
          </span>
          <span
            style={
              {
                "--i": 7,
              } as React.CSSProperties
            }
          >
            켓
          </span>
          <span
            style={
              {
                "--i": 8,
              } as React.CSSProperties
            }
          >
            &nbsp;
          </span>
          <span
            style={
              {
                "--i": 9,
              } as React.CSSProperties
            }
          >
            플
          </span>
          <span
            style={
              {
                "--i": 10,
              } as React.CSSProperties
            }
          >
            랫
          </span>
          <span
            style={
              {
                "--i": 11,
              } as React.CSSProperties
            }
          >
            폼
          </span>
        </p>
      </div>
    </div>
  );
}
