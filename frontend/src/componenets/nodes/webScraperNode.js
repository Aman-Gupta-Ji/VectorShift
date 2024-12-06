// webScraperNode.js
import { BaseNode } from './baseNode';
import PropTypes from 'prop-types';

export const WebScraperNode = ({ id, data = {} }) => {
    const initialState = {
        selector: data?.selector || '',
        dataType: data?.dataType || 'text',
        pagination: data?.pagination || false
    };

    return (
        <BaseNode
            id={id}
            data={data}
            label="Web Scraper"
            initialState={initialState}
            inputs={[{ id: 'url' }]}
            outputs={[{ id: 'data' }]}
            height={180}
        >
            {({ state, handleChange }) => (
                <div className="flex flex-col gap-2">
                    <label className="flex flex-col">
                        CSS Selector:
                        <input 
                            type="text"
                            value={state.selector}
                            onChange={handleChange('selector')}
                            className="border rounded p-1"
                            placeholder=".class-name or #id"
                        />
                    </label>
                    <label className="flex flex-col">
                        Data Type:
                        <select 
                            value={state.dataType}
                            onChange={handleChange('dataType')}
                            className="border rounded p-1"
                        >
                            <option value="text">Text</option>
                            <option value="html">HTML</option>
                            <option value="attribute">Attribute</option>
                            <option value="table">Table</option>
                        </select>
                    </label>
                    <label className="flex items-center gap-2">
                        <input 
                            type="checkbox"
                            checked={state.pagination}
                            onChange={(e) => handleChange('pagination')(
                                { target: { value: e.target.checked } }
                            )}
                        />
                        Enable Pagination
                    </label>
                </div>
            )}
        </BaseNode>
    );
};