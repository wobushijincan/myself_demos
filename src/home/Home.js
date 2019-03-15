import React, { Component } from 'react';
import './home.scss';
import axios from 'axios';
import masterIcon from '../static/images/master_yes.png';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res: null,
            overallStatusList: []
        }
        this.jumpTo = this.jumpTo.bind(this);
    }
    

    componentDidMount() {
        axios.post('/amp_sc/orchestrationGroup/getLastTask', {
            "params":{
                "orchestrationGroupCode":"REALTIME_CHECK"
            }
        }).then((result) => {
            if(result.data.msgCode === 200) {
                let data = result.data.data;
                let { overallStatusList } = {...data};
                this.setState({
                    res: data
                });
                let newArr = Array(4).fill(overallStatusList[0]);
                console.log(newArr);

                this.setState({overallStatusList: newArr});
                if(this.props.getLastTask) {
                    this.props.getLastTask(newArr)
                }
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    jumpTo(idx) {
        // console.log(this.props);
        console.log(idx);
        let { checkStatusList } = {...this.state.res};
        console.log(checkStatusList)
        if(this.props.getCheckList && checkStatusList) {
            checkStatusList[idx].checkItemList && this.props.getCheckList(checkStatusList[idx].checkItemList);
            console.log(this.state.res, checkStatusList, 1);
        }
        this.props.history.push('/part')
    }


    render() {
        return (
            <div>
                <div className="home">
                    {
                        this.state.overallStatusList.map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    <div>
                                        <img alt="" src={ masterIcon } />
                                    </div>
                                    <div>
                                        <h5>主机检查</h5>
                                        <p>检查问题<em onClick={() => this.jumpTo(index)}>{ item.projectNum }</em></p>
                                    </div>
                                    <div>
                                        存在问题 <em onClick={() => this.jumpTo(index)}>{ item.problemNum }</em>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateProps = (state) => {
    console.log(state);
    return {
        themeColor: state.themeColor,
        dbosData: state.dbosData,
        currentList: state.currentList
    }
}
const mapDispathToProps = (dispath) => {
    return {
        getLastTask: (data) => {
            console.log(data);
            dispath({
                type: 'GET_LASTtASK',
                dbosData: data
            })
        },
        getCheckList: (list) => {
            console.log(list);
            dispath({
                type: 'GET_CHECKLIST',
                currentList: list
            })
        }
    }
}

Home = connect(mapStateProps, mapDispathToProps)(Home);

export default Home;