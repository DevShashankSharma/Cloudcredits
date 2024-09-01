import React, { useRef, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";

const componentTypes = ["text", "image", "button", "video", "section"];

function EditableComponent({
    component,
    onClick,
    onDropIntoSection,
    styles,
    children, 
}) {
    const ref = useRef(null);  

    // Always call the hooks regardless of component validity
    const [, drag] = useDrag({
        type: component ? component.type : null,
        item: component ? { ...component, parentId: component.id } : {},
    });

    const [, drop] = useDrop({
        accept: componentTypes,
        drop: (item, monitor) => {
            if (component && component.type === "section" && item.id !== component.id) {
                onDropIntoSection(item, monitor, component.id);
            }
        },
        canDrop: (item) => component ? component.type === "section" : false,
    });

    useEffect(() => {
        if (ref.current && component) {
            drag(drop(ref.current)); // Combine the drag and drop refs
        }
    }, [drag, drop, component]);

    // Safeguard: Render nothing if component is undefined
    if (!component) {
        return null;
    }

    return (
        <>
            {component.type === "text" && (
                <textarea
                    className="relative cursor-move w-30px h-10px border"
                    value={styles.content || ""}
                    placeholder="Enter text here..."
                    onChange={(e) => onClick({ ...component, content: e.target.value })}
                    ref={ref}
                    onClick={onClick}
                    style={styles}
                />
            )}
            {component.type === "button" && (
                <button
                    className="relative cursor-move px-4 py-2 rounded border border-gray-300"
                    ref={ref}
                    onClick={onClick}
                    style={styles}
                >
                    {styles.content || "Button"}
                </button>
            )}
            {component.type === "image" && (
                <img
                    src={styles.content || "https://via.placeholder.com/150"}
                    alt="Placeholder"
                    ref={ref}
                    onClick={onClick}
                    style={styles}
                    className="relative cursor-move"
                />
            )}
            {component.type === "video" && (
                <video controls ref={ref}
                    onClick={onClick}
                    className="relative cursor-move"
                    style={styles}>
                    <source
                        src={
                            styles.content || "https://www.w3schools.com/html/mov_bbb.mp4"
                        }
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            )}
            {component.type === "section" && (
                <div
                    className={`relative cursor-move w-full h-[200px] border-dashed border-2 border-gray-300 p-2`}
                    ref={ref}
                    onClick={onClick}
                    style={styles}
                >
                    {children && React.Children.map(children, (child) =>
                        React.cloneElement(child, { 
                            onClick, 
                            styles, 
                        })
                    )}
                </div>
            )}
        </>
    );
}

export default EditableComponent;
