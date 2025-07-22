import CountUp from '@components/CountUp';
import GradientText from '@components/GradientText';

const Section3 = () => {
  return (
    <section className="snap-start h-[calc(100dvh-10rem)] flex flex-col items-center justify-center">
      <GradientText
        colors={[
          '#059669', // emerald-600
          '#047857', // emerald-700
          '#064e3b', // emerald-900
          '#047857',
          '#059669',
        ]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        <span className="font-bold mb-2 mr-2 text-4xl">Since</span>

        <CountUp
          from={0}
          to={2012}
          // separator=","
          direction="up"
          duration={1}
          className="count-up-text text-9xl font-bold"
        />
        <div className="text-9xl">.</div>
        <CountUp
          from={0}
          to={12}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text text-9xl font-bold"
        />
        <div className="text-9xl">.</div>
        <CountUp
          from={0}
          to={21}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text text-9xl font-bold"
        />
      </GradientText>
    </section>
  );
};

export default Section3;
