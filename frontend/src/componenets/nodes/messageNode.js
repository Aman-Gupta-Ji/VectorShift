// messageNode.js
import { BaseNode } from './baseNode';
import PropTypes from 'prop-types';

export const MessageNode = ({ id, data = {} }) => {
    const initialState = {
        platform: data?.platform || 'email',
        template: data?.template || '',
        recipients: data?.recipients || []
    };

    return (
        <BaseNode
            id={id}
            data={data}
            label="Message"
            initialState={initialState}
            inputs={[
                { id: 'content' },
                { id: 'recipients' }
            ]}
            outputs={[{ id: 'sent' }]}
            height={160}
        >
            {({ state, handleChange }) => (
                <div className="flex flex-col gap-2">
                    <label className="flex flex-col">
                        Platform:
                        <select 
                            value={state.platform}
                            onChange={handleChange('platform')}
                            className="border rounded p-1"
                        >
                            <option value="email">Email</option>
                            <option value="slack">Slack</option>
                            <option value="teams">Teams</option>
                            <option value="sms">SMS</option>
                        </select>
                    </label>
                    <label className="flex flex-col">
                        Template:
                        <input 
                            type="text"
                            value={state.template}
                            onChange={handleChange('template')}
                            className="border rounded p-1"
                            placeholder="Template name"
                        />
                    </label>
                </div>
            )}
        </BaseNode>
    );
};