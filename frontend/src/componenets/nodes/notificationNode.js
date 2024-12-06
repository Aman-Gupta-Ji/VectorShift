// notificationNode.js
import { BaseNode } from './baseNode';
import PropTypes from 'prop-types';

export const NotificationNode = ({ id, data = {} }) => {
    const initialState = {
        template: data?.template || 'default',
        priority: data?.priority || 'normal',
        title: data?.title || ''
    };

    return (
        <BaseNode
            id={id}
            data={data}
            label="Notification"
            initialState={initialState}
            inputs={[{ id: 'content' }]}
            outputs={[{ id: 'sent' }]}
            height={160}
        >
            {({ state, handleChange }) => (
                <div className="flex flex-col gap-2">
                    <label className="flex flex-col">
                        Template:
                        <select 
                            value={state.template}
                            onChange={handleChange('template')}
                            className="border rounded p-1"
                        >
                            <option value="default">Default</option>
                            <option value="success">Success</option>
                            <option value="warning">Warning</option>
                            <option value="error">Error</option>
                        </select>
                    </label>
                    <label className="flex flex-col">
                        Priority:
                        <select 
                            value={state.priority}
                            onChange={handleChange('priority')}
                            className="border rounded p-1"
                        >
                            <option value="low">Low</option>
                            <option value="normal">Normal</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                        </select>
                    </label>
                    <label className="flex flex-col">
                        Title:
                        <input 
                            type="text"
                            value={state.title}
                            onChange={handleChange('title')}
                            className="border rounded p-1"
                            placeholder="Notification title"
                        />
                    </label>
                </div>
            )}
        </BaseNode>
    );
};