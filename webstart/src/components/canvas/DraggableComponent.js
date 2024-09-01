import React from 'react';
import { useDrag } from 'react-dnd';

function DraggableComponent({ component }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: component.type,
        item: { ...component, id: Date.now() }, // Ensure unique IDs for drag items
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const getIcon = () => {
        switch (component.type) {
            case 'text':
                return (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isDragging ? "#ccc" : "#000"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-text"
                    >
                        <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="16">T</text>
                    </svg>
                );
            case 'image':
                return (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isDragging ? "#ccc" : "#000"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-image"
                    >
                        <rect x="2" y="2" width="20" height="14" fill="none" stroke="currentColor" />
                        <circle cx="16" cy="8" r="2" fill="currentColor" />
                    </svg>
                );
            case 'button':
                return (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isDragging ? "#ccc" : "#000"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-button"
                    >
                        <rect x="2" y="4" width="20" height="16" rx="2" ry="2" fill="none" stroke="currentColor" />
                    </svg>
                );
            case 'video':
                return (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isDragging ? "#ccc" : "#000"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-video"
                    >
                        <rect x="2" y="4" width="20" height="14" fill="none" stroke="currentColor" />
                        <polygon points="10,8 16,12 10,16" fill="currentColor" />
                    </svg>
                );
            case 'section':
                return (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isDragging ? "#ccc" : "#000"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-section"
                    >
                        <rect x="2" y="2" width="20" height="20" fill="none" stroke="currentColor" />
                    </svg>
                );
            case 'form':
                return (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isDragging ? "#ccc" : "#000"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-form"
                    >
                        <rect x="2" y="2" width="20" height="20" fill="none" stroke="currentColor" />
                        <line x1="2" y1="6" x2="22" y2="6" stroke="currentColor" />
                        <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" />
                        <line x1="2" y1="14" x2="22" y2="14" stroke="currentColor" />
                        <line x1="2" y1="18" x2="22" y2="18" stroke="currentColor" />
                    </svg>
                );
            case 'audio':
                return (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isDragging ? "#ccc" : "#000"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-audio"
                    >
                        <rect x="4" y="5" width="16" height="14" fill="none" stroke="currentColor" />
                        <line x1="9" y1="8" x2="9" y2="16" stroke="currentColor" />
                        <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" />
                        <line x1="15" y1="8" x2="15" y2="16" stroke="currentColor" />
                    </svg>
                );
            case 'chart':
                return (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isDragging ? "#ccc" : "#000"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chart"
                    >
                        <line x1="3" y1="17" x2="3" y2="3" stroke="currentColor" />
                        <line x1="8" y1="17" x2="8" y2="7" stroke="currentColor" />
                        <line x1="13" y1="17" x2="13" y2="12" stroke="currentColor" />
                        <line x1="18" y1="17" x2="18" y2="5" stroke="currentColor" />
                        <line x1="2" y1="20" x2="20" y2="20" stroke="currentColor" />
                    </svg>
                );
            default:
                return (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isDragging ? "#ccc" : "#000"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-default"
                    >
                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" />
                    </svg>
                );
        }
    };

    return (
        <div
            ref={drag}
            className={`flex items-center p-2 m-2 rounded bg-gray-100 hover:bg-gray-200 transition duration-300 ${isDragging ? 'opacity-50' : 'opacity-100'} cursor-move`}
            draggable
            onDragStart={(e) => e.dataTransfer.setData('text/plain', JSON.stringify(component))}
        >
            {getIcon()}
            <span className="ml-2 text-sm font-medium">{component.name}</span>
        </div>
    );
}

export default DraggableComponent;
