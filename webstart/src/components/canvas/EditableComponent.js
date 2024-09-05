import React, { useRef, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";

const componentTypes = ["text", "image", "button", "video", "section", "input", "link"];

function EditableComponent({
    component,
    onClick,
    onDropIntoSection,
    children,
}) {
    const ref = useRef(null);

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

    if (!component) {
        return null;
    }

    return (
        <>
            {component.type === "text" && (
                <textarea
                    name="text"
                    className="relative cursor-move border"
                    placeholder="Enter text here..."
                    onClick={onClick}
                    ref={ref}
                />
            )}
            {component.type === "button" && (
                <button
                    className="relative cursor-move px-1 py-2 rounded border border-gray-300"
                    ref={ref}
                    onClick={onClick}
                    name="button"
                >
                    btn name
                </button>
            )}
            {component.type === "image" && (
                <img
                    name="image"
                    src="https://via.placeholder.com/150"
                    alt="Placeholder"
                    ref={ref}
                    onClick={onClick}
                    className="relative cursor-move"
                />
            )}
            {component.type === "video" && (
                <video controls
                    name="video"
                    ref={ref}
                    onClick={onClick}
                    className="relative cursor-move"
                >
                    <source
                        src={"https://www.w3schools.com/html/mov_bbb.mp4"}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            )}
            {component.type === "section" && (
                <div
                    className="relative cursor-move w-full min-h-[200px] border-dashed border-2 border-gray-300 p-2"
                    ref={ref}
                    onClick={onClick}
                >
                    {children && React.Children.map(children, (child) =>
                        React.cloneElement(child, {
                            onClick,
                        })
                    )}
                </div>
            )}
            {component.type === "input" && (
                <input
                    name="input"
                    type="text"
                    placeholder="Enter text here..."
                    onClick={onClick}
                    ref={ref}
                    className="relative cursor-move border p-2"
                />
            )}
            {component.type === "link" && (
                <a
                    name="link"
                    href="#i"
                    ref={ref}
                    onClick={onClick}
                    className="relative p-2 cursor-move text-blue-500 underline"
                >
                    {component.text || "Link"}
                </a>
            )}
        </>
    );
}

export default EditableComponent;
