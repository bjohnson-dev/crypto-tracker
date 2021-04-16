// react
import React from 'react';
import { Component } from 'react';

class AppHeader extends Component {
    render() {
        return (
            <header>
                <div>
                    <div><h1>cryptoTracker</h1></div>
                    <div>
                        <span className="total-valuation">
                            <span>tv:</span>
                            <span>valuation:</span>
                            <span>total valuation:</span> 
                            { (this.props.portfolioTotalValuation).toFixed(2) }
                        </span>
                        <span className="total-investment">
                            <span>ti:</span>
                            <span>investment:</span>
                            <span>total investment:</span> 
                            { (this.props.portfolioTotalInvestment).toFixed(2) }
                        </span>
                        <span className="total-profit">
                            <span>tp:</span>
                            <span>profit:</span>
                            <span>total profit:</span>
                            { (this.props.portfolioTotalProfit).toFixed(2) }
                        </span>
                    </div>
                </div>
            </header>
        );
    }
}
export default AppHeader;