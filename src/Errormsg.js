import React from 'react';

const Errormsg = (props) => {
    return (
        <div className="ui active dimmer">
            <div class="ui message">
                <div class="header">
                    {props.error}
                </div>
            </div>
        </div>
    );
};

export default Errormsg;

