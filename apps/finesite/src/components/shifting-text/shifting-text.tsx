
import { useRef, useEffect } from 'react';
import styles from './shifting-text.module.scss';

export type ShiftingTextProps = {
  rows: number;
};

export function ShiftingText(props: ShiftingTextProps) {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  let text = 'tefinesitefinesitefinesitefinesitefinesitefinesitefinesite';
  
  const shiftText = (text: string): string => {
    return text.slice(2) + text.slice(0, 2);
  };

  useEffect(() => {
    if (refs === null || refs.current.length === 0) return;
    const textElement: (HTMLSpanElement | null)[] = refs.current;

    textElement.forEach(element => {
      let content = element?.textContent?.replace(/\s+/g, '');

      const shiftAtRandomInterval = () => {
        content = (content ?? '').slice(2) + (content ?? '').slice(0, 2);
        if (element) {
          element.textContent = content;
        }
        const randomInterval = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(shiftAtRandomInterval, randomInterval);
      }

      shiftAtRandomInterval();
    })
  }, []);

  return (
    <div className={styles['shifting-text']}>
      {Array.from({ length: props.rows }, (_, index) => {
        console.log(`Row ${index + 1}: ${text}`);
        text = shiftText(text);
        return (
          <span ref={element => { refs.current[index] = element; }} key={index} className={styles['shifting-text-row']}>
            {text}
          </span>
        );
      })}
    </div>
  );
}

export default ShiftingText;



