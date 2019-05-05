/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-default */
import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { connect } from 'react-redux';
import { getLaunchPadFullNamesAPI } from '../../reducers/launchPadFullNames';
import { getLaunchYearsAPI } from '../../reducers/launchYears';
import { loadLaunchesAPI } from '../../reducers/launches';
import InputComponent from '../../components/InputComponent';
import DropdownComponent from '../../components/DropdownComponent';
import ApplyButton from '../../components/ApplyButton';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      launchpadId: '',
      minYear: '',
      maxYear: '',
      isError: false,
      errors: ''
    };
  }

  componentDidMount() {
    const { 
      getLaunchPadFullNamesAPIProps, 
      getLaunchYearsAPIProps
    } = this.props;

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

  onApply = () => {
    const { keyword, launchpadId, minYear, maxYear } = this.state;
    const { loadLaunchesAPIProps } = this.props;

    if(minYear !== '' && maxYear !== '' && minYear > maxYear) {
      this.setState({
        isError: true,
        errors: 'minYear should less than maxYear'
      });
    } else {
      // reset any error
      this.setState({
        isError: false,
        errors: ''
      }, () => {
        // submit
        loadLaunchesAPIProps(this.state);
      });
    }
  }

  render() {
    const { fullNameData, yearsData } = this.props;
    const { launchpadId, minYear, maxYear, isError, errors } = this.state;

    return (
      <Element name="scrollDestination" className="element">
        <div className="filter">
          <InputComponent
            mainClass={"keywordMain"}
            labelText={"Keywords"}
            placeHolderText={"eg Falcon"}
            onChange={this.onChangeKeyword}
          />

          <DropdownComponent
            mainClass={"launchpadMain"}
            labelText={"Launch Pad"}
            data={fullNameData}
            value={launchpadId}
            onChange={this.onChangeLaunchpadId}
          />

          <DropdownComponent
            mainClass={"minYearMain"}
            labelText={"Min Year"}
            data={yearsData}
            value={minYear}
            onChange={this.onChangeMinYear}
            isError={isError}
            errors={errors}
          />

          <DropdownComponent
            mainClass={"maxYearMain"}
            labelText={"Max Year"}
            data={yearsData}
            value={maxYear}
            onChange={this.onChangeMaxYear}
          />

          <ApplyButton
            mainClass={"applyButtonMain"} 
            onApply={this.onApply} 
          />
        </div>
      </Element>
    );
  }
}

const mapStateToProps = state => {
  return {
    fullNameData: state.launchPadFullNamesReducer.data,
    yearsData: state.launchYearsReducer.data
  };
};

const mapDispatchToProps = dispatch => ({
  getLaunchPadFullNamesAPIProps: () => dispatch(getLaunchPadFullNamesAPI()),
  getLaunchYearsAPIProps: () => dispatch(getLaunchYearsAPI()),
  loadLaunchesAPIProps: (item) => dispatch(loadLaunchesAPI(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);