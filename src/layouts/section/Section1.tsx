import FuzzyText from '@components/FuzzyText';

const Section1 = () => {
  return (
    <section className="snap-start h-[calc(100dvh-5rem)] flex flex-col items-center justify-center">
      <div className="mb-2">
        <FuzzyText baseIntensity={0.2}>Welcome To</FuzzyText>
      </div>
      <FuzzyText baseIntensity={0.2} color="#047857">
        SEED ARK
      </FuzzyText>
    </section>
  );
};

export default Section1;
