import classNames from 'classnames'
import useNavigation from '../hooks/useNavigation';

export default function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  )

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
