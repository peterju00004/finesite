
import React from 'react';
import styles from './project-display.module.scss';

export type ProjectDisplayProps = {
  title: string;
};

export function ProjectDisplay(props: React.PropsWithChildren<ProjectDisplayProps>) {
  const getSlot = (children: React.ReactNode, slotName: string) => {
    return React.Children.toArray(children).filter(
      (child) => React.isValidElement(child) && (child.props as { slot: string })?.slot === slotName
    );
  };

  const subsections = getSlot(props.children, 'subsection');


  return (
    <div className={styles['projects']}>
      <h3 className={styles['projects-title']}>{props.title}</h3>
      {subsections?.map((subsection, index) => {
        if (React.isValidElement(subsection)) {
          const title = getSlot((subsection.props as { children: React.ReactNode }).children, 'title');
          const defaultContent = React.Children.toArray((subsection.props as { children: React.ReactNode }).children).filter(
            (child) => {
              if (!React.isValidElement(child)) return true;
              const slot = (child.props as { slot?: string })?.slot;
              return slot === undefined;
            }
          );

          return (
            <div key={index} className={styles['projects-subsection']}>
              <span className={styles['projects-subsection-title']}>{title}</span>
              <br />
              {defaultContent}
            </div>
          )
        }

        return null;
      })}
      
    </div>
  );
}

export default ProjectDisplay;



