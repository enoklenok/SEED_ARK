import ScrollVelocity from '@components/ScrollVelocity';

const Section2 = () => {
  return (
    <section className="h-[calc(100dvh-5rem)] flex flex-col items-center justify-center w-full overflow-hidden">
      <div className="mb-20">
        <ScrollVelocity
          texts={['SEED ARK', 'WHO AM I']}
          // velocity={velocity}
          className="custom-scroll-text"
        />
      </div>
      <ScrollVelocity
        texts={['SEEK SEEK', 'FIND SEED']}
        // velocity={velocity}
        className="custom-scroll-text"
      />
    </section>
  );
};

export default Section2;
