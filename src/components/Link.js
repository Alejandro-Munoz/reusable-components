import classNames from 'classnames'
import useNavigation from '../hooks/useNavigation';

export default function Link({ to, children }) {
  const { navigate } = useNavigation();

  const classes = classNames('text-blue-400', 'mb-2')

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
}
