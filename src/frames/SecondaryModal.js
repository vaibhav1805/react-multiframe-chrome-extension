import React from 'react';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import { useDispatch } from 'react-redux';

import {SWITCH_VIEW} from '../store/Actions';
import {VIEW_SIDE_PANEL, VIEW_PRIMARY_MODAL} from '../codes';

const SecondaryModal = (props) => {
  const dispatch = useDispatch();
  const linkStlye = {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
    marginTop: '10px'
  }

  return(
    <Frame id = "secondary-modal">
      <FrameContextConsumer>
        {
          ({document, window}) => {
            return (
              <div>
                <div>
                  This is Secondary Modal.
                </div>
                <div onClick={() => dispatch({type: SWITCH_VIEW,viewId: VIEW_SIDE_PANEL})} style={linkStlye}>
                    Show Side Panel
                </div>
                <div onClick={() => dispatch({type: SWITCH_VIEW, viewId: VIEW_PRIMARY_MODAL})} style={linkStlye}>
                    Show Primary Modal
                </div>
              </div>
            )
          }
        }
      </FrameContextConsumer>
   </Frame>
  );
}

export default SecondaryModal;
