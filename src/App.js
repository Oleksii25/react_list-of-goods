import React from 'react';
import { OrderList } from './components/OrderList';
import './App.css';
import Button from './components/Button';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    listIsVisible: false,
    goodsList: goodsFromServer,
    sortBy: 'null',
    isReverse: false,
  }

  reverseList = () => this.setState(state => ({
    isReverse: !state.isReverse,
  }
  ));

  listVisibility = () => this.setState(
    prevState => ({ listIsVisible: !prevState.listIsVisible }),
  );

  resetList = () => this.setState({
    goodsList: goodsFromServer,
    isReverse: false,
    sortBy: 'null',
  })

  sortByName = () => this.setState({
    sortBy: 'name',
  })

  sortByLength = () => this.setState({
    sortBy: 'length',
  })

  render() {
    return (
      <>
        {this.state.listIsVisible
          ? (
            <OrderList
              allGoods={this.state.goodsList}
              reverse={this.reverseList}
              reset={this.resetList}
              sortByName={this.sortByName}
              sortByLength={this.sortByLength}
              isReverse={this.state.isReverse}
              sortBy={this.state.sortBy}
            />
          )
          : (
            <Button
              action={this.listVisibility}
              text="start"
            />
          )
        }
      </>
    );
  }
}

export default App;
