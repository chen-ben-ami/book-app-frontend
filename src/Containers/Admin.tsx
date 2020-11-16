import React from "react"
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Admin: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();
    const history = useHistory();

    return (
        <div style={{ width: '100%', height: '80%' }}>
            HEY
        </div>
    );
}

export default React.memo(Admin);