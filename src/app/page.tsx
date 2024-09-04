import Image from "next/image";
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import TincarLogo from "./ui/tincar-logo";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-red-400 p-4 md:h-52">
         <TincarLogo /> 
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <div/>
          <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Bienvenido a Tincar.</strong> El lugar donde encontrar tu proximo vehiculo.
          </p>
          <Link
            href="/main"
            className="flex items-center gap-5 self-start rounded-lg bg-red-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-300 md:text-base"
          >
            <span>Ingresar</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center md:w-3/5">
          <Image
            src="/images/tincarapp.jpg"
            width={1000}
            height={760}
            className='hidden md:block rounded-lg'
            alt="Captura de uso de app desktop" />

          <Image
            src="/images/tincarapp.jpg"
            width={560}
            height={620}
            className='block md:hidden rounded-lg'
            alt="Captura para telefono" />
        </div>
      </div>
    </main>
  );
}
