import { Download } from 'lucide-react';
import Link from "next/link";

export function Resume() {
  return (
     <div className='relative p-4'>
      <Link href={'https://raw.githubusercontent.com/17anirudh/media/refs/heads/main/resume.pdf'} download
      className='relative inline-flex items-center gap-1 rounded-md bg-zinc-950 px-2.5 py-1.5 text-2xl text-zinc-50 outline-1 outline-[#fff2f21f]'>
        Resume <Download className='h4 w-4 m-1' />
      </Link>
    </div>
  );
}
