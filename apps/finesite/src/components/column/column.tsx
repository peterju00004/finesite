import React from 'react';
import styles from './column.module.scss';

interface ColumnItemProps {
  slot?: string;
  className?: string;
  to?: string;
}

export function Column(props: React.PropsWithChildren<{}>) {
  const getSlot = (slot: string) => {
    return props.children && React.Children.map(props.children, (child) => {
      if (React.isValidElement(child) && (child.props as ColumnItemProps)?.slot === slot) {
        return React.cloneElement(child as React.ReactElement<ColumnItemProps>, {
          className: `${(child.props as ColumnItemProps).className || ''} ${styles['column-link']}`
        });
      }
      return null;
    });
  }

  const items = getSlot('item');

  return (
    <div className={styles['column']}>
      <nav className={styles['column-nav']}>
        <ul className={`${styles['column-list']} ${styles['column-list-no-decoration']}`}>
          {items && React.Children.map(items, (item) => {
            if (React.isValidElement(item)) {
              return (
                <li key={item.key} className={styles['column-item']}>
                  {item}
                </li>
              );
            }
            return null;
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Column;