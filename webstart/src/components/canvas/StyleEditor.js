import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

function StyleEditor({ onStyleChange, onClose, item, isDarkMode }) {
    const [styles, setStyles] = useState({});
    const [display, setDisplay] = useState('block');

    useEffect(() => {
        const styleObject = {};
        for (let i = 0; i < item.style.length; i++) {
            const styleName = item.style[i];
            styleObject[styleName] = item.style.getPropertyValue(styleName);
        }
        setStyles(styleObject);
    }, [item]);  

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedStyles = { ...styles, [name]: value };
        console.log("updated: " + JSON.stringify(updatedStyles),styles)
        setStyles(updatedStyles);
        onStyleChange(updatedStyles);
    };

    const handleDisplayChange = (e) => {
        const newDisplay = e.target.value;
        setDisplay(newDisplay);
        const updatedStyles = { ...styles, display: newDisplay };
        if (newDisplay === 'flex') {
            updatedStyles.flex = updatedStyles.flex || '0 1 auto';
        } else {
            delete updatedStyles.flex;
        }
        setStyles(updatedStyles);
        onStyleChange(updatedStyles);
    };

    const handleDelete = () => {
        item.remove();
        onClose();
    };

    function TextrgbToHex(color = "rgb(0, 0, 0)") {
        // Check if the color is already in hex format
        if (/^#[0-9A-Fa-f]{6}$/i.test(color)) {
            return color;  
        }

        // Remove whitespace and match the RGB values
        const rgb = color.replace(/\s+/g, '').match(/^rgb\((\d+),(\d+),(\d+)\)$/i);

        if (!rgb) {
            throw new Error("Invalid color format");
        }

        // Convert each of the RGB components to a two-digit hexadecimal number
        const hex = rgb.slice(1).map(x => {
            const hexValue = parseInt(x).toString(16);
            return hexValue.length === 1 ? "0" + hexValue : hexValue;
        }).join('');

        return `#${hex}`;
    }

    function BgrgbToHex(color = "rgb(255, 255, 255)") {
        // Check if the color is already in hex format
        if (/^#[0-9A-Fa-f]{6}$/i.test(color)) {
            return color;  
        }

        // Remove whitespace and match the RGB values
        const rgb = color.replace(/\s+/g, '').match(/^rgb\((\d+),(\d+),(\d+)\)$/i);

        if (!rgb) {
            throw new Error("Invalid color format");
        }

        // Convert each of the RGB components to a two-digit hexadecimal number
        const hex = rgb.slice(1).map(x => {
            const hexValue = parseInt(x).toString(16);
            return hexValue.length === 1 ? "0" + hexValue : hexValue;
        }).join('');

        return `#${hex}`;
    }

    return (
        <Draggable>
            <div className={`fixed top-0 right-0 p-4 shadow-lg border rounded z-50 w-[400px] h-[80vh] overflow-y-auto ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
                <h3 className={`text-lg font-bold mb-2 `}>Style Editor</h3>
                <div className="space-y-4">
                    {/* Content selection */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="--content"
                            onChange={handleChange}
                            value={styles['--content'] || ''}
                            className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                            placeholder="Enter text here..."
                        />
                    </div>

                    {/* Display Selection */}
                    <div className="mb-4">
                        <label className="block mb-2">
                            Display:
                            <select
                                value={styles.display || display}
                                onChange={handleDisplayChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                            >
                                <option value="block">Block</option>
                                <option value="inline">Inline</option>
                                <option value="flex">Flex</option>
                                <option value="grid">Grid</option>
                                <option value="inline-flex">Inline Flex</option>
                                <option value="inline-grid">Inline Grid</option>
                            </select>
                        </label>
                    </div>

                    {/* Width and Height */}
                    <div className="grid grid-cols-2 gap-4">
                        <label className="block mb-2">
                            Width:
                            <input
                                type="text"
                                name="width"
                                value={styles.width || ''}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                placeholder="e.g., 100px or 50%"
                            />
                        </label>
                        <label className="block mb-2">
                            Height:
                            <input
                                type="text"
                                name="height"
                                value={styles.height || ''}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                placeholder="e.g., 100px or 50%"
                            />
                        </label>
                    </div>

                    {/* Text Color */}
                    <div className="grid grid-cols-2 gap-4">
                        <label className="block mb-2">
                            Text Color:
                            <input
                                type="color"
                                name="color"
                                value={TextrgbToHex(styles.color)}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                            />
                        </label>

                        {/* Background Color */}
                        <label className="block mb-2">
                            Background Color:
                            <input
                                type="color"
                                name="background-color"
                                value={BgrgbToHex(styles['background-color'])}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                            />
                        </label>

                        {/* Font Size */}
                        <label className="block mb-2">
                            Font Size:
                            <input
                                type="text"
                                name="fontSize"
                                value={styles.fontSize || ''}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                placeholder="e.g., 16px or 1em"
                            />
                        </label>

                        {/* Font Family */}
                        <label className="block mb-2">
                            Font Family:
                            <input
                                type="text"
                                name="fontFamily"
                                value={styles.fontFamily || ''}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                placeholder="e.g., Arial, sans-serif"
                            />
                        </label>

                        {/* Font Weight */}
                        <label className="block mb-2">
                            Font Weight:
                            <input
                                type="text"
                                name="fontWeight"
                                value={styles.fontWeight || ''}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                placeholder="e.g., bold, 700"
                            />
                        </label>

                        {/* Line Height */}
                        <label className="block mb-2">
                            Line Height:
                            <input
                                type="text"
                                name="lineHeight"
                                value={styles.lineHeight || ''}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                placeholder="e.g., 1.5"
                            />
                        </label>

                        {/* Text Align */}
                        <label className="block mb-2">
                            Text Align:
                            <select
                                name="textAlign"
                                value={styles.textAlign || 'left'}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                            >
                                <option value="left">Left</option>
                                <option value="center">Center</option>
                                <option value="right">Right</option>
                                <option value="justify">Justify</option>
                            </select>
                        </label>

                        {/* Text Transform */}
                        <label className="block mb-2">
                            Text Transform:
                            <select
                                name="textTransform"
                                value={styles.textTransform || 'none'}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                            >
                                <option value="none">None</option>
                                <option value="capitalize">Capitalize</option>
                                <option value="uppercase">Uppercase</option>
                                <option value="lowercase">Lowercase</option>
                            </select>
                        </label>

                        {/* Letter Spacing */}
                        <label className="block mb-2">
                            Letter Spacing:
                            <input
                                type="text"
                                name="letterSpacing"
                                value={styles.letterSpacing || ''}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                placeholder="e.g., 0.1em"
                            />
                        </label>
                    </div>

                    {/* Border, Padding, and Margin */}
                    <div className="grid grid-cols-2 gap-4">
                        <label className="block mb-2">
                            Border:
                            <input
                                type="text"
                                name="border"
                                value={styles.border || ''}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                placeholder="e.g., 1px solid #000"
                            />
                        </label>
                        <label className="block mb-2">
                            Border Radius:
                            <input
                                type="text"
                                name="borderRadius"
                                value={styles.borderRadius || ''}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                placeholder="e.g., 8px"
                            />
                        </label>
                        <label className="block mb-2">
                            Border Color:
                            <input
                                type="color"
                                name="borderColor"
                                value={styles.borderColor || '#000000'}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                            />
                        </label>
                        <label className="block mb-2">
                            Border Width:
                            <input
                                type="text"
                                name="borderWidth"
                                value={styles.borderWidth || ''}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                placeholder="e.g., 1px"
                            />
                        </label>
                        <label className="block mb-2">
                            Border Style:
                            <select
                                name="borderStyle"
                                value={styles.borderStyle || 'solid'}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                            >
                                <option value="none">None</option>
                                <option value="solid">Solid</option>
                                <option value="dashed">Dashed</option>
                                <option value="dotted">Dotted</option>
                                <option value="double">Double</option>
                                <option value="groove">Groove</option>
                                <option value="ridge">Ridge</option>
                                <option value="inset">Inset</option>
                                <option value="outset">Outset</option>
                            </select>
                        </label>

                        <label className="block mb-2">
                            Margin:
                            <input
                                type="text"
                                name="margin"
                                value={styles.margin || ''}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                placeholder="e.g., 10px"
                            />
                        </label>
                        <label className="block mb-2">
                            Padding:
                            <input
                                type="text"
                                name="padding"
                                value={styles.padding || ''}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                placeholder="e.g., 10px"
                            />
                        </label>
                    </div>

                    {/* Box Shadow */}
                    <div className="mb-4">
                        <label className="block mb-2">
                            Box Shadow:
                            <input
                                type="text"
                                name="boxShadow"
                                value={styles.boxShadow || ''}
                                onChange={handleChange}
                                className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                placeholder="e.g., 0px 4px 6px rgba(0, 0, 0, 0.1)"
                            />
                        </label>
                    </div>

                    {/* Flexbox Properties */}
                    {display === 'flex' && (
                        <div className="space-y-4">
                            <label className="block mb-2">
                                Flex Direction:
                                <select
                                    name="flexDirection"
                                    value={styles.flexDirection || 'row'}
                                    onChange={handleChange}
                                    className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                >
                                    <option value="row">Row</option>
                                    <option value="column">Column</option>
                                    <option value="row-reverse">Row Reverse</option>
                                    <option value="column-reverse">Column Reverse</option>
                                </select>
                            </label>
                            <label className="block mb-2">
                                Justify Content:
                                <select
                                    name="justifyContent"
                                    value={styles.justifyContent || 'flex-start'}
                                    onChange={handleChange}
                                    className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                >
                                    <option value="flex-start">Flex Start</option>
                                    <option value="center">Center</option>
                                    <option value="flex-end">Flex End</option>
                                    <option value="space-between">Space Between</option>
                                    <option value="space-around">Space Around</option>
                                    <option value="space-evenly">Space Evenly</option>
                                </select>
                            </label>
                            <label className="block mb-2">
                                Align Items:
                                <select
                                    name="alignItems"
                                    value={styles.alignItems || 'stretch'}
                                    onChange={handleChange}
                                    className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                >
                                    <option value="stretch">Stretch</option>
                                    <option value="flex-start">Flex Start</option>
                                    <option value="center">Center</option>
                                    <option value="flex-end">Flex End</option>
                                    <option value="baseline">Baseline</option>
                                </select>
                            </label>
                            <label className="block mb-2">
                                Align Content:
                                <select
                                    name="alignContent"
                                    value={styles.alignContent || 'stretch'}
                                    onChange={handleChange}
                                    className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                >
                                    <option value="stretch">Stretch</option>
                                    <option value="flex-start">Flex Start</option>
                                    <option value="center">Center</option>
                                    <option value="flex-end">Flex End</option>
                                    <option value="space-between">Space Between</option>
                                    <option value="space-around">Space Around</option>
                                </select>
                            </label>
                            <label className="block mb-2">
                                Flex Grow:
                                <input
                                    type="text"
                                    name="flexGrow"
                                    value={styles.flexGrow || '0'}
                                    onChange={handleChange}
                                    className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                />
                            </label>
                            <label className="block mb-2">
                                Flex Shrink:
                                <input
                                    type="text"
                                    name="flexShrink"
                                    value={styles.flexShrink || '1'}
                                    onChange={handleChange}
                                    className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                />
                            </label>
                            <label className="block mb-2">
                                Flex Basis:
                                <input
                                    type="text"
                                    name="flexBasis"
                                    value={styles.flexBasis || 'auto'}
                                    onChange={handleChange}
                                    className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                />
                            </label>
                            <label className="block mb-2">
                                Gap:
                                <input
                                    type="text"
                                    name="gap"
                                    value={styles.gap || ''}
                                    onChange={handleChange}
                                    className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                    placeholder="e.g., 10px"
                                />
                            </label>
                        </div>
                    )}

                    {/* Grid Properties */}
                    {display === 'grid' && (
                        <div className="space-y-4">
                            <label className="block mb-2">
                                Grid Template Columns:
                                <input
                                    type="text"
                                    name="gridTemplateColumns"
                                    value={styles.gridTemplateColumns || ''}
                                    onChange={handleChange}
                                    className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                    placeholder="e.g., repeat(3, 1fr)"
                                />
                            </label>
                            <label className="block mb-2">
                                Grid Template Rows:
                                <input
                                    type="text"
                                    name="gridTemplateRows"
                                    value={styles.gridTemplateRows || ''}
                                    onChange={handleChange}
                                    className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                    placeholder="e.g., repeat(2, 1fr)"
                                />
                            </label>
                            <label className="block mb-2">
                                Grid Column:
                                <input
                                    type="text"
                                    name="gridColumn"
                                    value={styles.gridColumn || ''}
                                    onChange={handleChange}
                                    className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                    placeholder="e.g., 1 / 3"
                                />
                            </label>
                            <label className="block mb-2">
                                Grid Row:
                                <input
                                    type="text"
                                    name="gridRow"
                                    value={styles.gridRow || ''}
                                    onChange={handleChange}
                                    className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                    placeholder="e.g., 1 / 2"
                                />
                            </label>
                            <label className="block mb-2">
                                Grid Gap:
                                <input
                                    type="text"
                                    name="gridGap"
                                    value={styles.gridGap || ''}
                                    onChange={handleChange}
                                    className={`w-full p-1 border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                                    placeholder="e.g., 10px"
                                />
                            </label>
                        </div>
                    )}
                </div>
                <button onClick={onClose} className="mt-4 w-full bg-red-500 text-white p-2 rounded">Close</button>
                <button onClick={handleDelete} className="mt-4 w-full bg-red-500 text-white p-2 rounded">Delete item</button>
            </div>
        </Draggable>
    );
}

export default StyleEditor;