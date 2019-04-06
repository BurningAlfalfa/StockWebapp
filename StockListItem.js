import react from "react";    
import'. /StockListItem.css';

const StockListItem = (stock, props) => {

    return (
        <li className="StockListItem">
            <div className="StockListItem-Symbol"><span>Stock: </span>{stock.price}</div>
            <div className="StockListItem-Price"><span>Price:</span>${parseInt(stock.price).toFixed(2)}</div>
            <div className="StockList-Volume"><span>Vol:</span>{ stock.volume}</div>
            <div className="StockListItem"><span>Time: </span>{stock.timestamp}</div>
            {/*<div>  */}
        </li>
    )

}