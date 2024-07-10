import { Component } from 'react';
import { Person } from '../../util/interfaces';
import './ResultCard.css';

interface ComponentProps {
  id: number;
  cardParams: Person;
}

const classList: { [key: string]: string } = {
  card: 'card',
  fullName: 'fullName',
  cardList: 'cardList',
  cardItem: 'cardItem',
  title: 'optionTitle',
  value: 'optionValue',
};

export default class ResultCard extends Component<ComponentProps> {
  render() {
    return (
      <div className={classList.card} key={this.props.id}>
        <div className={classList.fullName}>{this.props.cardParams.name}</div>
        <ul className={classList.cardList}>
          <li className={classList.cardItem}>
            <span className={classList.title}>Year of birth: </span>
            <span className={classList.value}>{this.props.cardParams.birth_year}</span>
          </li>
          <li className={classList.cardItem}>
            <span className={classList.title}>Weight: </span>
            <span className={classList.value}>{this.props.cardParams.mass}</span>
          </li>
          <li className={classList.cardItem}>
            <span className={classList.title}>Height: </span>
            <span className={classList.value}>{this.props.cardParams.height}</span>
          </li>
          <li className={classList.cardItem}>
            <span className={classList.title}>Gender: </span>
            <span className={classList.value}>{this.props.cardParams.gender}</span>
          </li>
        </ul>
      </div>
    );
  }
}
