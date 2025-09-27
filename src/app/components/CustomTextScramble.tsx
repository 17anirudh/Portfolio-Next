'use client';
import { TextScramble } from '@/components/motion-primitives/text-scramble';
import { useState } from 'react';

interface propType {
  text: string
}

export function CustomTextScramble(props: propType) {
  const [isTrigger, setIsTrigger] = useState(false);

  return (
    <p>
      <TextScramble
        as='span'
        speed={0.02}
        trigger={isTrigger}
        onHoverStart={() => setIsTrigger(true)}
        onScrambleComplete={() => setIsTrigger(false)}
    >
        {props.text}
      </TextScramble>
    </p>
  );
}
