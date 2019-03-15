import React, { Component } from 'react';
import './detail.scss'

class Detail extends Component{
    render() {
        return (
            <div className='detail'>
                <div className='info'>
                    <p>
                        <em>主机名：</em>
                        <span>10.112.5.145</span>
                    </p>
                    <p>
                        <em>诊断时间：</em>
                        <span>10.112.5.145</span>
                    </p>
                    <p>
                        <em>诊断结果：</em>
                        <span>10.112.5.145</span>
                    </p>
                    <p>
                        <em>告警时间：</em>
                        <span>10.112.5.145</span>
                    </p>
                    <p>
                        <em>告警详情：</em>
                        <span>10.112.5.145</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Detail;