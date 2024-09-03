import React, { useRef, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";

const componentTypes = ["text", "image", "button", "video", "section", "input", "select", "link"];

function EditableComponent({
    component,
    onClick,
    onDropIntoSection,
    styles,
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

    const componentStyle = styles || {};

    return (
        <>
            {component.type === "text" && (
                <textarea
                    className="relative cursor-move border"
                    value={component.content || ""}
                    placeholder="Enter text here..."
                    onChange={(e) => onClick({ ...component, content: e.target.value })}
                    ref={ref}
                    style={componentStyle}
                />
            )}
            {component.type === "button" && (
                <button
                    className="relative cursor-move px-4 py-2 rounded border border-gray-300"
                    ref={ref}
                    onClick={onClick}
                    style={componentStyle}
                >
                    {component.content || "Button"}
                </button>
            )}
            {component.type === "image" && (
                <img
                    src={component.content || "https://via.placeholder.com/150"}
                    alt="Placeholder"
                    ref={ref}
                    onClick={onClick}
                    style={componentStyle}
                    className="relative cursor-move"
                />
            )}
            {component.type === "video" && (
                <video controls
                    ref={ref}
                    onClick={onClick}
                    style={componentStyle}
                    className="relative cursor-move"
                >
                    <source
                        src={component.content || "https://www.w3schools.com/html/mov_bbb.mp4"}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            )}
            {component.type === "section" && (
                <div
                    className="relative cursor-move w-full h-[200px] border-dashed border-2 border-gray-300 p-2"
                    ref={ref}
                    onClick={onClick}
                    style={componentStyle}
                >
                    {children && React.Children.map(children, (child) =>
                        React.cloneElement(child, {
                            onClick,
                            styles: componentStyle, // Pass the same styles to children
                        })
                    )}
                </div>
            )}
            {component.type === "input" && (
                <input
                    type="text"
                    value={component.content || ""}
                    placeholder="Enter text here..."
                    onChange={(e) => onClick({ ...component, content: e.target.value })}
                    ref={ref}
                    style={componentStyle}
                    className="relative cursor-move border p-2"
                />
            )}
            {component.type === "select" && (
                <select
                    value={component.content || ""}
                    onChange={(e) => onClick({ ...component, content: e.target.value })}
                    ref={ref}
                    style={componentStyle}
                    className="relative cursor-move border p-2"
                >
                    {component.options && component.options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            )}
            {component.type === "link" && (
                <a
                    href={component.content || "#"}
                    ref={ref}
                    onClick={onClick}
                    style={componentStyle}
                    className="relative cursor-move text-blue-500 underline"
                >
                    {component.text || "Link"}
                </a>
            )}
        </>
    );
}

export default EditableComponent;
