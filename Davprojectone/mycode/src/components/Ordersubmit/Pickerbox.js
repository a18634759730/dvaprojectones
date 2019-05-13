import '../Ordersubmit/scss/Ordersubmit.css';
import React, { Component } from "react";
import { Picker, List } from "antd-mobile";
import { createForm } from "rc-form";
import arrayTreeFilter from "array-tree-filter";
import { Icon } from 'antd-mobile';
import { district } from "antd-mobile-demo-data";

class Pickerbox extends Component {
  state = {
    data: [],
    pickerValue: ["换驾照"],
    datas: [
      {
        value: "hjz",
        label: "换驾照"
      },
      {
        value: "bzj",
        label: "补驾照"
      }
    ]
  };
  getSel() {
    const value = this.state.pickerValue;
    if (!value) {
      return '';
    }
    const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
    return treeChildren.map(v => v.label).join(',');
  }

  render() {
    return (
      <Picker
        title={
          this.props.type === "0"
            ? "服务类型"
            : this.props.type === "1"
            ? "当前签发城市"
            : "可补换城市"
        }
        extra={
          this.props.type === "0"
            ? this.state.pickerValue[0]
            : this.props.type === "1"
            ? "签发地"
            : "补换地"
        }
        data={
          this.props.type === "0"
            ? this.state.datas
            : this.props.type === "1"
            ? district
            : district
        }
        value={this.state.pickerValue}
        onChange={v => this.setState({ pickerValue: v })}
        onOk={v => this.setState({ pickerValue: v })}
        cols={this.props.type === "0" ? 1 : 2}
        format={
          this.state.pickerValue === "string"
            ? pickerValue => pickerValue
            : pickerValue => pickerValue.join(" ")
        }
      >
       <List.Item extra={this.getSel()} onClick={() => this.setState({ visible: true })}>

          </List.Item>
      </Picker>

    );
  }


}
const TestWrapper = createForm()(Pickerbox);

export default TestWrapper;
