import React, { Component } from 'react';
import './part.scss';
import icon from '../static/images/master_yes.png';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Part extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkItemList: []
        }
        this.jumpToDetail = this.jumpToDetail.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        
    }

    jumpToDetail() {
        this.props.history.push('/detail');
    }
    handleClick(color) {
        if(this.props.onSwitchColor) {
            this.props.onSwitchColor(color);
        }
    }

    render() {
        if(!this.props.currentList) {
            return <Redirect to='/home'></Redirect>
        } else {
            return (
                <div className='box'>
                    {/* <button onClick={ () => this.handleClick('blue') }>blue</button>
                    <button onClick={ () => this.handleClick('black') }>black</button> */}
                    {/* { this.props.themeColor } */}
                    <div className="parts">
                        {
                            this.props.currentList && this.props.currentList.map((item, idx) => {
                                return (
                                    <div className="part" key={idx}>
                                        <p>{ item.name }{ this.props.dbosData && this.props.dbosData[0].typeName }</p>
                                        <div className="circle">
                                            <div className="circleOut"></div>
                                            <div className="circleIn">
                                                <img src={icon} alt="" />
                                            </div>
                                            <span className='target' onClick={ () => this.jumpToDetail}>{ item.errorNum }</span>
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
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        themeColor: state.themeColor,
        currentList: state.currentList
    }
}
const mapDispathToProps = (dispath) => {
    return {
        onSwitchColor: (color) => {
            dispath({
                type: 'CHANGE_COLOR',
                themeColor: color
            })
        }
    }
}
Part = connect(mapStateToProps, mapDispathToProps)(Part);

export default Part