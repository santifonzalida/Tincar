import Image from "next/image";
import { Cog6ToothIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/16/solid";
import { HeartIcon, InformationCircleIcon} from '@heroicons/react/24/solid';;

export default function Page() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="tbg mx-auto my-0 mt-3 bg-white border border-gray-400">
        <div className="theader flex justify-between bg-gray-200 border-b border-gray-400">
          <div className="flex items-center text-gray-500 text-center px-5">
            <Cog6ToothIcon className="w-8 h-8" />
          </div>
          <div className="flex items-center text-center">
            <div className="tlogo w-full relative mx-0 my-auto p-2">
              <p className="font-bold text-red-500 text-2xl">TinCar </p>
            </div>
          </div>
          <div className="flex items-center text-gray-500 text-center px-5">
            <ChatBubbleLeftRightIcon className="w-8 h-8"/>
          </div>
        </div>
        <div className="p-3 flex flex-col items-center">
          <div className="tphoto rounded-lg border border-gray-400 shadow-lg">
            <Image
              className="w-full user-image"
              src="/images/fiat-147.jpeg" 
              alt="photo tincar"
              priority
              width={355}
              height={500}
            />
      
            <div className="flex justify-between">
              <div className="text-xl text-slate-600 float-left p-4">Fiat 147, <span className="font-light">1998</span></div>
              <div className="tinfo text-lg float-right text-gray-500 p-4">
                <div className="pl-4 text-gray-400">
                  <span>A 3 km</span>
                </div>
              </div>
          </div>
          </div>
          <div className="flex items-center justify-center w-full h-full pt-6">
            <div className="bg-white rounded-full relative text-6xl tno p-6">
              <svg xmlns="http://www.w3.org/2000/svg" color="#ff695b" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="ti rounded-full relative px-0.5 pt-0.5">
              <InformationCircleIcon className="w-6 h-6" color="#398beb"/>
            </div>
            <div className="bg-white rounded-full relative text-6xl tyes p-6">
              <HeartIcon className="size-14" color="#5de19c"/>
            </div>
          </div>
        </div>
      </div>
    </main>
    )
}