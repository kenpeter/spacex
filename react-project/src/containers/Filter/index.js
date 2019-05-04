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

  onChangeKeyword = (e) => {
    this.setState({ keyword: e.target.value });
  }

  onChangeLaunchpadId = (e) => {
    this.setState({ launchpadId: e.target.value });
  }

  onChangeMinYear = (e) => {
    this.setState({ minYear: e.target.value });
  }

  onChangeMaxYear = (e) => {
    this.setState({ maxYear: e.target.value });
  }

  render() {
    const { fullNameData, yearsData } = this.props;
    const { launchpadId, minYear, maxYear} = this.state;

    console.log(this.state);

    return (
      <Element name="scrollDestination" className="element">
        <div className="filter">
          <InputComponent
            labelText={"Keywords"}
            placeHolderText={"eg Falcon"}
            onChange={this.onChangeKeyword}
          />

          <DropdownComponent
            labelText={"Launch Pad"}
            data={fullNameData}
            value={launchpadId}
            onChange={this.onChangeLaunchpadId}
          />

          <DropdownComponent
            labelText={"Min Year"}
            data={yearsData}
            value={minYear}
            onChange={this.onChangeMinYear}
          />

          <DropdownComponent
            labelText={"Max Year"}
            data={yearsData}
            value={maxYear}
            onChange={this.onChangeMaxYear}
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