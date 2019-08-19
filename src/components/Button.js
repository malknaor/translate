import React from 'react';
import LanguageContext from './context/LanguageContext';
import ColorContext from './context/ColorContext';

class Button extends React.Component {
    static contextType = ColorContext;
    
    renderSubmit(language) {
        return language === 'english'? 'Submit' : 'הגש';
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => {
                    console.log(color);
                
                    return (
                        <button className={`ui button ${color}`}>
                            <LanguageContext.Consumer>
                                {({ language }) => this.renderSubmit(language) }
                            </LanguageContext.Consumer>
                        </button>
                    );
                }}
            </ColorContext.Consumer>
        );
    }
}

export default Button;