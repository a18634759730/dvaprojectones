import {Icon} from 'antd';

import React, { Component } from 'react';

import Uploadimg  from './Uploadimg';

import OrderStyle from './scss/Ordersubmit.css';

// import Pickerbox from './Pickerbox'

import Pickerboxtwo from './Pickerboxtwo'

export class Ordersubmit extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className={OrderStyle.Ordersubmit}>
        <div className={OrderStyle.Ordersubmit_center}>
          <div className={OrderStyle.Ordersubmit_center_top}>
            <img src={require('../../assets/a4.jpg')}/>
          </div>
          <ul className={OrderStyle.Ordersubmit_center_ulsa}>
            <li><Uploadimg></Uploadimg><p><span>身份证</span><span>正面</span></p></li>
            <li><Uploadimg></Uploadimg><p><span>身份证</span><span>反面</span></p></li>
            <li><Uploadimg></Uploadimg><p><span>驾驶证</span><span>正页</span></p></li>
            <li><Uploadimg></Uploadimg><p><span>驾驶证</span><span>副页</span></p></li>
            <li><Uploadimg></Uploadimg><p><span>白底半</span><span>身照</span></p></li>
          </ul>
          <div className={OrderStyle.Ordersubmit_center_divs}>
            <Pickerboxtwo></Pickerboxtwo>
            {/* <li><p>服务类型:</p><Pickerboxtwo type = "0"></Pickerboxtwo></li>
            <li><p>当前驾照签发城市</p><Pickerboxtwo type = "1"></Pickerboxtwo></li>
            <li><p>可补换的签发城市</p><Pickerboxtwo type = "2"></Pickerboxtwo></li>
            <li><p>服务费</p><p>￥399</p></li> */}
          </div>
          <div className={OrderStyle.Ordersubmit_center_Offer}>
              <p>优惠</p>
              <p>登录后查看优惠卷<Icon type="right"/></p>
          </div>
          <div className={OrderStyle.Ordersubmit_center_link}>
              <a href='javascript:;'>常见问题</a>
          </div>
        </div>
        <div className={OrderStyle.Ordersubmit_footer}>
            <div className={OrderStyle.Ordersubmit_footer_conten}>
              <p>
                <span>实付:</span>
                <span>￥399</span>
              </p>
            </div>
            <div className={OrderStyle.Ordersubmit_footer_button}>
              <button>立即支付</button>
            </div>
        </div>
      </div>
    )
  }
}

export default Ordersubmit
