import Earth from '@/components/ui/globe';

export default function CobeGlobe() {
  return (
    <div className="-z-10 flex flex-col justify-center items-center mb-10 sm:mb-0">
      <Earth
        baseColor={[1, 0, 0.3]}
        markerColor={[1, 0, 0.33]}
        glowColor={[1, 0, 0.3]}
        className='w-110'
      />
      <h3 className='w-4/6 text-center mt-5'>
        Ready to engage with international opportunities requiring VISA sponsorship.
      </h3>
    </div>
  );
}
