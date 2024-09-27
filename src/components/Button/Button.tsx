import { ReactSVG } from 'react-svg';
interface Props {
  href: string;
  name: string;
  image: string;
}

const Button = ({ href, name, image }: Props) => {
  return (
    <a href={href} target="blank" className="btn-primary-color">
      <ReactSVG src={image}></ReactSVG>
      {name}
    </a>
  );
};

export default Button;
