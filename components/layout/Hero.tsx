"use client";
import Card from "../partial/Card";

export default function Hero() {
  return (
    <>
      <Card>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Bersama, Kita Transformasi Digital.
          </h1>
          <div className="bg-[url('/bg.jpg')] bg-cover bg-center w-full max-w-[900px] h-[200px] md:h-[300px] rounded-tl-[90px] rounded-br-[90px] flex justify-center items-center">
            <p className="text-[40px] md:text-[60px] font-bold text-white">
              DFOURS
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}
