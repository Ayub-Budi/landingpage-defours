"use client";
import Card from "../partial/Card";

export default function AboutUs() {
  return (
    <>
      <Card>
        <div className="flex gap-3 flex-col md:flex-row-reverse  max-w-[1000px] mx-auto items-center">
          <div className="flex-1 flex justify-center items-center overflow-hidden max-h-[250px] border">
            <img src="/logo.png" alt="" className="w-full h-full max-w-[500px]" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="p-2 rounded-md bg-gray-200 w-fit">
              <p className="text-sm font-bold">
                About Us
              </p>
            </div>
            <p className="text-xs font-bold">
              Penjelasan tentang Dfours
            </p>
            <p>
              Dfours adalah sebuah software house kreatif yang berakar pada empat pilar utama: Digital, dream, dynamic, dan development. 
              Kami hadir untuk membantu individu, umkm, company, dan lain - lain
            </p>
          </div>
          
        </div>
      </Card>
    </>
  );
}
