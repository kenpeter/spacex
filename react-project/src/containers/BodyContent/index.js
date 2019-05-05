/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-default */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadLaunchesAPI } from '../../reducers/launches';
import { getDate, getTime, translateLinkName } from '../../helper/helper';

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

  buildTags = (obj) => {
    let out = [];
    for (let key in obj) {
      let link = obj[key];

      if(key === 'mission_patch')
        continue;

      if(link === null)
        continue;

      out.push(
        <div className="tag" key={key}>
          <a href={link} target="_blank">{translateLinkName(key)}</a>
        </div>
      )
    }
    return out;
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
                    Launched <span className="hightlight">{getDate(item.launch_date_local)}</span> at <span className="hightlight">{getTime(item.launch_date_local)}</span> from <span className="hightlight">{item.launchpad.full_name}</span>
                  </div>

                  <div className="itemTags">
                    {this.buildTags(item.links)}
                  </div>
                </div>

                <div className="itemNum">
                  <div className="itemNumWrap">
                    <div className="itemNumActual">
                      #{item.flight_number}
                    </div>
                    <div className="itemNumText">
                      Flight Number
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    const { launchesData, loading } = this.props;

    return (
      <div className="bodyContent">
        {loading ? 
          <p className="loading">Loading....</p>
          :
          ''
        }

        {launchesData.length <= 0 ? 
          <p className="noResult">No result</p>
          :
          this.buildList(launchesData)
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    launchesData: state.launchesReducer.data,
    loading: state.launchesReducer.loading
  };
};

const mapDispatchToProps = dispatch => ({
  loadLaunchesAPIProps: (item) => dispatch(loadLaunchesAPI(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyContent);

