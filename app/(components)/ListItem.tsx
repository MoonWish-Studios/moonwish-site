import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export default function ListItem({
  heading,
  description,
  index,
}: {
  heading: string;
  description: string;
  index: number;
}) {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const props = useSpring({
    to: {
      opacity: 1,
      x: 0,
      // y: -30,
    },
    from: {
      opacity: 0,
      x: -10,
      y: 0,
    },
    config: {
      frequency: 1,
      damping: 2,
      tension: 180,
    },
    delay: 100,
    pause: !inView,
  });

  return (
    <animated.div ref={ref} style={props} className="list-item">
      <p className="list-number">{index}/</p>
      <h3>{heading}</h3>
      <p className="list-description">{description}</p>
    </animated.div>
  );
}
