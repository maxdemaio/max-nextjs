import Image from "next/image";
import DateComp from '@/components/DateComp';

export default function VidDisplayListItem({ vid }) {
    return (
        <div className="grid grid-cols-3 my-4 gap-4">
            <div className="hidden sm:flex relative col-span-1 rounded-md">
        
            </div>
            <div className="col-span-3 sm:col-span-2">
                <h2 className="text-xl text-white">{vid.snippet.title}</h2>
                <p className="text-gray-300"><DateComp dateString={vid.snippet.publishedAt} /></p>
            </div>
        </div>
    );
}