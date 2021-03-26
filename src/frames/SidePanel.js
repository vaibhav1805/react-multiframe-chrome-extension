import React from 'react';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import './../App.css';
import { useDispatch, connect } from 'react-redux';

import {SWITCH_VIEW} from '../store/Actions';
import {VIEW_PRIMARY_MODAL, VIEW_SECONDARY_MODAL} from '../codes';

const SidePanel = (props) => {
  const dispatch = useDispatch();
  const linkStlye = {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
    marginTop: '10px'
  }

  return(
    <Frame id = "side-panel">
      <FrameContextConsumer>
        {
          ({document, window}) => {
            return (
              <div onClick={props.onClick}>
                <div>
                  This is Side Panel.
                </div>
                <div onClick={() => dispatch({type: SWITCH_VIEW,viewId: VIEW_PRIMARY_MODAL})} style={linkStlye}>
                    Show Primary Modal
                </div>
                <div onClick={() => dispatch({type: SWITCH_VIEW, viewId: VIEW_SECONDARY_MODAL})} style={linkStlye}>
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

const mapStateToProps = (state) => ({
  sidePanel: state.sidePanel
});

export default connect(mapStateToProps, {})(SidePanel);
