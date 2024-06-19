import { Link } from "react-router-dom";

export type LinkButtonProps = {
  content: string;
  icon?: string;
  to: string;
};
export const LinkButton = ({ content, icon, to }: LinkButtonProps) => {
  return (
    <>
      <>
        <Link to={to} className="btn btn-dark rounded-5">
          {icon && <i className={icon}></i>}
          {content}
        </Link>
      </>
    </>
  );
};
