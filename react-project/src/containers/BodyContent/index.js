/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-default */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadLaunchesAPI } from '../../reducers/launches';
import { getDate, getTime } from '../../helper/helper';

class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { 
      loadLaunchesAPIProps
    } = this.props;

    const obj = {
      keyword: '',
      launchpadId: '',
      minYear: '',
      maxYear: ''
    }
    loadLaunchesAPIProps(obj);
  }

  buildList = (data) => {
    return (
      <div className="bodyContentWrap">
        <div className="resultCount">
          Showing {data.length} missions
        </div>
        <div className="resultList">
          {data.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div className="itemImg">
                  <img src={item.links.mission_patch} alt="" />
                </div>

                <div className="itemContent">
                  <div className="itemTitle">
                    {item.rocket.rocket_name}
                    {' - ' + item.payloads[0].payload_id}
                    {item.launch_success === false || item.land_success === false ?
                      <span> - <span className="missionErrors">Failed Mission</span></span>
                      :
                      ''
                    }
                  </div>

                  <div className="itemDesc">
                    Launched {getDate(item.launch_date_local)} at {getTime(item.launch_date_local)} from xxxx
                  </div>

                  <div className="itemTags">
                  </div>
                </div>

                <div className="itemNum">

                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    console.log(this.props.launchesData);
    const { launchesData } = this.props;

    return (
      <div className="bodyContent">
        {launchesData.length <= 0 ? 
          <p>loading....</p>
          :
          this.buildList(launchesData)
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    launchesData: state.launchesReducer.data
  };
};

const mapDispatchToProps = dispatch => ({
  loadLaunchesAPIProps: (item) => dispatch(loadLaunchesAPI(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyContent);

