import React from 'react';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import { useDispatch } from 'react-redux';

import {SWITCH_VIEW} from '../store/Actions';
import {VIEW_SIDE_PANEL, VIEW_SECONDARY_MODAL} from '../codes';

const PrimaryModal = (props) => {
  const dispatch = useDispatch();
  const linkStye = {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
    marginTop: '10px'
  }

  return(
    <Frame id = "primary-modal">
      <FrameContextConsumer>
        {
          ({document, window}) => {
            return (
              <div>
                <div>
                  This is Primary Modal.
                </div>
                <div onClick={() => dispatch({type: SWITCH_VIEW,viewId: VIEW_SIDE_PANEL})} style={linkStye}>
                    Show Side Panel
                </div>
                <div onClick={() => dispatch({type: SWITCH_VIEW, viewId: VIEW_SECONDARY_MODAL})} style={linkStye}>
                    Show Secondary Modal
                </div>
              </div>
            )
          }
        }
      </FrameContextConsumer>
   </Frame>
  );
}

export default PrimaryModal;
