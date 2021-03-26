import React from 'react';
import {connect } from 'react-redux';

import SecondaryModal from './frames/SecondaryModal';
import PrimaryModal from './frames/PrimaryModal';
import SidePanel from './frames/SidePanel';

import './App.css';

import {VIEW_SIDE_PANEL, VIEW_PRIMARY_MODAL, VIEW_SECONDARY_MODAL} from './codes';

const Root = (props) => {
  const {viewId} = props.root;
  return(
    <div>
      {viewId === VIEW_SIDE_PANEL && <SidePanel/>}
      {viewId === VIEW_PRIMARY_MODAL && <PrimaryModal/>}
      {viewId === VIEW_SECONDARY_MODAL && <SecondaryModal/>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  root: state.root
});

export default connect(mapStateToProps, {})(Root);
