import { Paper, Tab, Tabs } from '@material-ui/core';
import React, { Component } from 'react'
import Investments from './components/investments';
import Payment from './components/payment';
import Expenditure from './components/expenditure';

const tabs = [
    {
        'label': 'Payment'
    },
    {
        'label': 'Expenditure'
    },
    {
        'label': 'Investments'
    }
]

export default class Accounts extends Component {

    state = {
        activeIndex: 1
    }

    handleChange = (ev, newIndex) => {
        console.log('ev', ev);
        this.setState({ activeIndex: newIndex })
    }

    renderSwitch() {
        const { activeIndex } = this.state;

        switch (activeIndex) {
            case 0:
                return <Payment />;
            case 1:
                return <Expenditure />;
            case 2:
                return <Investments />;
            default:
                return;
        }
    }

    render() {
        const { activeIndex } = this.state;

        return (
            <React.Fragment>
                <Paper square>
                    <Tabs
                        value={activeIndex}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={this.handleChange}
                    >
                        {tabs.map(tab => {
                            return <Tab label={tab.label} />
                        })}
                    </Tabs>
                </Paper>
                { this.renderSwitch()}
            </React.Fragment>
        )
    }
}
