import React from "react";
import styles from './tags.module.scss';

export type TagsProps = {

}

export function Tags(props: React.PropsWithChildren<TagsProps>) {
    const getSlot = (children: React.ReactNode, slotName: string) => {
        return React.Children.toArray(children).filter(
            (child) => React.isValidElement(child) && (child.props as { slot: string })?.slot === slotName
        );
    };

    const tags = getSlot(props.children, 'tag');

    return (
        <span className={styles.container}>
            {tags?.map((tag, index) => {
                if (React.isValidElement(tag)) {
                    return <span className={styles.tag} key={index}>{tag}</span>
                }

                return null;
            })}
        </span>
    )
}

export default Tags;