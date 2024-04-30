import Image from "next/image";
import React from 'react';
import VideoComponent from '../components/video';
import FormComponent from '../components/form';

export default function Home() {
  const images: string[] = [
    "emporio-casa-porto.png",
    "baracai.png",
    "VTV-SBT.png",
    "petland.png",
    "emporio_carolina.png",
    "recordtv.png",
    "avante.png",
    "girafas.png",
  ];
  return (
    <main className="min-h-screen justify-between bg-gradient-to-r from-[#8A2BE2] via-[#9B00FF] to-[#1E5A7A]">
      <div className="grid md:grid-cols-4 gap-1">
        <section className="md:col-span-3 md:pt-24 text-center justify-center">
          <div className="grid grid-rows-2">
            <VideoComponent/>
            <div className="justify-self-center">
              {/* Primeira row */}
              <div className="text-center">
                <p className="text-xl font-bold mt-4">
                  VEJA QUEM JÁ COMEÇOU A ECONOMIZAR NA CONTA DE ENERGIA
                </p>
              </div>

              {/* Segunda row */}
              <div className="flex flex-wrap justify-between mt-4">
                {images.map((img, i) => (
                  <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/10 h-10vh md:max-h-16 m-4 text-center">
                    <Image
                    src={`/media/clientes/${img}`}
                    alt={img}
                    width={200}
                    height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white w-full min-h-screen">
          <FormComponent />
        </section>
      </div>
    </main>
  );
}
