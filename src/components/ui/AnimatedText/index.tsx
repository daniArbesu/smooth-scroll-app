import styles from './style.module.css';

type Props = {
  children: JSX.Element;
};

const AnimatedText: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default AnimatedText;
