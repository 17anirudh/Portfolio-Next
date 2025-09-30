import { Cursor } from '@/components/motion-primitives/cursor';
import Image from 'next/image';

export function Cursor3() {
  return (
    <div>
      <div className='pb-4 pt-4'>
        <Cursor
          attachToParent
          variants={{
            initial: { height: 0, opacity: 0, scale: 0.3 },
            animate: { height: 'auto', opacity: 1, scale: 1 },
            exit: { height: 0, opacity: 0, scale: 0.3 },
          }}
          transition={{
            type: 'spring',
            duration: 0.3,
            bounce: 0.1,
          }}
          className='overflow-hidden'
          springConfig={{
            bounce: 0.01,
          }}
        >
        <Image
          src="https://i.ytimg.com/vi/zGVFVK10oDs/maxresdefault.jpg"
          alt="Dr Lankapalli Bullayya College of Engineering"
          height={252}
          width={448.68}
        />
        </Cursor>
        <p className='font-inherit'><span className='underline text-amber-400'>Dr Lankapalli Bullayya College of Engineering 	&#40;DLBCE&#41;</span> student</p>
      </div>
    </div>
  );
}
