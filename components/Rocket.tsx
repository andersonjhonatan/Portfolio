import React from 'react';
import { useSpring, to, animated, config } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import { scale } from 'vec-la';

type Props = {};

const Rocket = (props: Props) => {
  const [{ pos }, api] = useSpring(() => ({ pos: [0, 0] }));
  const [{ angle }, angleApi] = useSpring(() => ({
    angle: 0,
    config: config.wobbly,
  }));

  const bind = useDrag(
    ({ xy, previous, down, movement: pos, velocity, direction }) => {
      api.start({
        pos,
        immediate: down,
        config: { velocity: scale(direction, velocity), decay: true },
      });
      const distBetweenPoints = Math.sqrt(
        (xy[0] - previous[0]) ** 2 + (xy[1] - previous[1]) ** 2
      );

      if (distBetweenPoints > 10 || !down)
        angleApi.start({ angle: Math.atan2(direction[0], -direction[1]) });
    },
    { initial: () => pos.get() }
  );
  return (
    <div className='absolute z-50 block'>
      <animated.div
        className='rocket w-[50px] h-[50px] max-iphone:w-[30px] max-iphone:h-[30px] max-ipad:ml-10'
        {...bind()}
        style={{
          transform: to(
            [pos, angle],
            // @ts-ignore
            ([x, y], a) => `translate3d(${x}px,${y}px,0) rotate(${a}rad)`
          ),
        }}
      />
    </div>
  );
};

export default Rocket;
