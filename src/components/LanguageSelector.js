import React from 'react';
import LanguageContext from './context/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;
    
    render() {
        return (
            <div>
                Select a language:
                <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
                <i className="flag israel" onClick={() => this.context.onLanguageChange('hebrew')} />
            </div>
        );
    }
}

export default LanguageSelector;

// <i className="flag us" onClick={() => this.props.onLanguageChange('english')} />
// <i className="flag israel" onClick={() => this.props.onLanguageChange('hebrew')} />