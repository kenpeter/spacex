/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-default */
import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { connect } from 'react-redux';
import { getLaunchPadFullNamesAPI } from '../../reducers/launchPadFullNames';
import { getLaunchYearsAPI } from '../../reducers/launchYears';
import InputComponent from '../../components/InputComponent';
import DropdownComponent from '../../components/DropdownComponent';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      launchpadId: '',
      minYear: '',
      maxYear: ''
    };
  }

  componentDidMount() {
    const { getLaunchPadFullNamesAPIProps, getLaunchYearsAPIProps } = this.props;
    getLaunchPadFullNamesAPIProps();
    getLaunchYearsAPIProps();
  }

  onChangeKeyword = () => {

  }

  render() {
    const { fullNameData, yearsData } = this.props;

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
            data={{fullNameData}}
            onChange={() => {
              console.log('launch pad');
            }}
          />

          <DropdownComponent
            labelText={"Min Year"}
            data={{yearsData}}
            onChange={() => {
              console.log('min year');
            }}
          />

          <DropdownComponent
            labelText={"Max Year"}
            data={{yearsData}}
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
    fullNameData: state.launchPadFullNamesReducer.data,
    yearsData: state.launchYearsReducer.data,
  };
};

const mapDispatchToProps = dispatch => ({
  getLaunchPadFullNamesAPIProps: () => dispatch(getLaunchPadFullNamesAPI()),
  getLaunchYearsAPIProps: () => dispatch(getLaunchYearsAPI())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);