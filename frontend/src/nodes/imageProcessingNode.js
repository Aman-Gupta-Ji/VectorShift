// imageProcessingNode.js
import { BaseNode } from './baseNode';
import PropTypes from 'prop-types';

export const ImageProcessingNode = ({ id, data = {} }) => {
    const initialState = {
        operation: data?.operation || 'resize',
        quality: data?.quality || 100,
        format: data?.format || 'jpeg'
    };

    return (
        <BaseNode
            id={id}
            data={data}
            label="Image Processing"
            initialState={initialState}
            inputs={[{ id: 'image' }]}
            outputs={[{ id: 'processed' }]}
            height={180}
        >
            {({ state, handleChange }) => (
                <div className="flex flex-col gap-2">
                    <label className="flex flex-col">
                        Operation:
                        <select 
                            value={state.operation}
                            onChange={handleChange('operation')}
                            className="border rounded p-1"
                        >
                            <option value="resize">Resize</option>
                            <option value="crop">Crop</option>
                            <option value="rotate">Rotate</option>
                            <option value="filter">Filter</option>
                        </select>
                    </label>
                    <label className="flex flex-col">
                        Quality:
                        <input 
                            type="range"
                            min="1"
                            max="100"
                            value={state.quality}
                            onChange={handleChange('quality')}
                            className="w-full"
                        />
                        <span className="text-sm text-gray-600">{state.quality}%</span>
                    </label>
                    <label className="flex flex-col">
                        Format:
                        <select 
                            value={state.format}
                            onChange={handleChange('format')}
                            className="border rounded p-1"
                        >
                            <option value="jpeg">JPEG</option>
                            <option value="png">PNG</option>
                            <option value="webp">WebP</option>
                            <option value="gif">GIF</option>
                        </select>
                    </label>
                </div>
            )}
        </BaseNode>
    );
};