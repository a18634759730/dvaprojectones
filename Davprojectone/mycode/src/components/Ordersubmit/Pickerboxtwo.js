import {Icon} from 'antd';

import React from 'react';

import { Picker, List } from 'antd-mobile';

import { district } from 'antd-mobile-demo-data';

const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', paddingLeft: 15 }}
  >
    <div className="test" style={{ display: 'flex' }}>
      <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
      <div style={{ textAlign: 'right', color: '#000', marginRight: 0 }}>{props.extra}</div>
    </div>
  </div>
);
class LussingCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      district: [],
      drivingLicense: {
        type: '换驾照',
        data:
          [
            {
              label: '换驾照',
              value: 1,
            },
            {
              label: '补驾照',
              value: 2,
            },
          ],

      }
    }
    this.changeType = this.changeType.bind(this)
  }
  changeType(v) {
    let index = v[0] * 1 - 1;
    let type = this.state.drivingLicense.data[index].label
    let { drivingLicense } = this.state
    drivingLicense.type = type
    this.setState({
      drivingLicense
    })
  }
  render() {
    return (
          <>
            <div>
              <p>服务类型</p>
                  <Picker
                    title='服务类型'
                    data={this.state.drivingLicense.data}
                    cols='1'
                    value={this.state.drivingLicense.asyncValue}
                    onOk={(v) => this.changeType(v)}
                  >
                  <span>{this.state.drivingLicense.type}<Icon type="right" /></span>
                  </Picker>
            </div>
            <div>
                <p>当前驾照签发城市</p>
                <Picker
                  title="请选择签发地"
                  extra="请选择签发地"
                  cols='2'
                  data={district}
                  value={this.state.pickerValue}
                  onOk={v => this.setState({ pickerValue: v })}
                >
                  <CustomChildren></CustomChildren>
                </Picker>
            </div>
            <div>
              <p>可补换驾照签发城市</p>
              <Picker
                title="请选择补换地"
                extra="请选择补换地"
                data={district}
                value={this.state.pickerValue1}
                onOk={v => this.setState({ pickerValue1: v })}
                cols="2"
              >
                <CustomChildren></CustomChildren>
              </Picker>
            </div>
          </>
    )
  }
}

export default LussingCity;
