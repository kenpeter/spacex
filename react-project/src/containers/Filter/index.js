/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-default */
import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { connect } from 'react-redux';
import { launchPadFullNames } from '../../api/launchPadFullNames';
import { launchYears } from '../../api/launchYears';
import InputComponent from '../../components/InputComponent';
import DropdownComponent from '../../components/DropdownComponent';

class Filter extends Component {
  componentDidMount() {
    /*
    const { launchPadFullNamesProps, launchYearsProps } = this.props;
    launchPadFullNamesProps();
    launchYearsProps();
    */
  }

  render() {
    //test
    //console.log(this.props.launchPadFullNameData, this.props.launchYearsData);


    return (
      <Element name="scrollDestination" className="element">
        <div className="filter">
          <InputComponent
            labelText={"Keywords"}
            placeHolderText={"eg Falcon"}
            onChange={() => {
              console.log('input');
            }}
          />

          <DropdownComponent
            labelText={"Launch Pad"}
            data={{}}
            onChange={() => {
              console.log('launch pad');
            }}
          />

          <DropdownComponent
            labelText={"Min Year"}
            data={{}}
            onChange={() => {
              console.log('min year');
            }}
          />

          <DropdownComponent
            labelText={"Max Year"}
            data={{}}
            onChange={() => {
              console.log('max year');
            }}
          />
        </div>
      </Element>
    );
  }
}

const mapStateToProps = state => {
  return {
    launchPadFullNameData: state.launchPadFullNamesReducer.data,
    launchYearsData: state.launchYearsReducer.data,
  };
};

const mapDispatchToProps = dispatch => ({
  launchPadFullNamesProps: () => dispatch(launchPadFullNames()),
  launchYearsProps: () => dispatch(launchYears())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);