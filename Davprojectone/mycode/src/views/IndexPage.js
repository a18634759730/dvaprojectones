import { connect } from 'dva';

import React, { Component } from 'react';

import {Icon} from 'antd'

import styles from './scss/IndexPage.css';

import Ordersubmit from './../components/Ordersubmit/Ordersubmit';

class IndexPage extends Component {
  constructor(props){
    super(props)
    this.state ={
      titleArr:[
        {
          title:'订单提交'
        },
        {
          title:'填写收货地址'
        },
        {
          title:'正在办理'
        },
        {
          title:'办理完成'
        }
      ],
      insd:0,
    }
  }
  render() {
    return (
      <div className={styles.container}>
          <div className={styles.container_header}>
            <p><Icon type="left"/></p>
            <p>补换驾照</p>
            <p><Icon type="ellipsis"/></p>
          </div>
          <div className={styles.container_nav}>
            <ul>
              {
                this.state.titleArr.map((item,ind)=>{
                  return <li className={this.state.insd === ind?styles.currentli: ''} key={ind}>{item.title}</li>
                })
              }
            </ul>
          </div>
          <Ordersubmit></Ordersubmit>
      </div>
    )
  }
}
IndexPage.propTypes = {
};

export default connect()(IndexPage);











