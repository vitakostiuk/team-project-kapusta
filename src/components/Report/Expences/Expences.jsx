import React from 'react';
import * as Styled from './Expences.styled';
import Arrow from '../Arrow';
import products from '../../../images/products.svg';
import hobbies from '../../../images/sports-hobbies.svg';
import entertainment from '../../../images/entertainment.svg';
import health from '../../../images/hands-holding-heart.svg';
import alcohol from '../../../images/cocktail.svg';
import communal from '../../../images/communal.svg';
import car from '../../../images/car.svg';
import education from '../../../images/book.svg';
import technique from '../../../images/tools.svg';
import housing from '../../../images/couch.svg';
import other from '../../../images/other.svg';

const Expences = () => {
  return (
    <Styled.Container>
      <Styled.Title>
        <Arrow />
        <Styled.Text>EXPENSES</Styled.Text>
        <Arrow rotate="true" />
      </Styled.Title>
      <Styled.Categories>
        <Styled.Category>
          <Styled.Sum>3 000.00</Styled.Sum>
          <Styled.Picture src={products} />
          <Styled.NameOfCategory>PRODUCTS</Styled.NameOfCategory>
        </Styled.Category>
        <Styled.Category>
          <Styled.Sum>5 000.00</Styled.Sum>
          <Styled.Picture src={hobbies} />
          <Styled.NameOfCategory>SPORTS and HOBBIES</Styled.NameOfCategory>
        </Styled.Category>
        <Styled.Category>
          <Styled.Sum>3 000.00</Styled.Sum>
          <Styled.Picture src={entertainment} />
          <Styled.NameOfCategory>PRODUCTS</Styled.NameOfCategory>
        </Styled.Category>
        <Styled.Category>
          <Styled.Sum>3 000.00</Styled.Sum>
          <Styled.Picture src={health} />
          <Styled.NameOfCategory>PRODUCTS</Styled.NameOfCategory>
        </Styled.Category>
        <Styled.Category>
          <Styled.Sum>3 000.00</Styled.Sum>
          <Styled.Picture src={alcohol} />
          <Styled.NameOfCategory>PRODUCTS</Styled.NameOfCategory>
        </Styled.Category>
        <Styled.Category>
          <Styled.Sum>3 000.00</Styled.Sum>
          <Styled.Picture src={communal} />
          <Styled.NameOfCategory>PRODUCTS</Styled.NameOfCategory>
        </Styled.Category>
        <Styled.Category>
          <Styled.Sum>3 000.00</Styled.Sum>
          <Styled.Picture src={car} />
          <Styled.NameOfCategory>PRODUCTS</Styled.NameOfCategory>
        </Styled.Category>
        <Styled.Category>
          <Styled.Sum>3 000.00</Styled.Sum>
          <Styled.Picture src={education} />
          <Styled.NameOfCategory>PRODUCTS</Styled.NameOfCategory>
        </Styled.Category>
        <Styled.Category>
          <Styled.Sum>3 000.00</Styled.Sum>
          <Styled.Picture src={technique} />
          <Styled.NameOfCategory>PRODUCTS</Styled.NameOfCategory>
        </Styled.Category>
        <Styled.Category>
          <Styled.Sum>3 000.00</Styled.Sum>
          <Styled.Picture src={housing} />
          <Styled.NameOfCategory>PRODUCTS</Styled.NameOfCategory>
        </Styled.Category>
        <Styled.Category>
          <Styled.Sum>3 000.00</Styled.Sum>
          <Styled.Picture src={other} />
          <Styled.NameOfCategory>PRODUCTS</Styled.NameOfCategory>
        </Styled.Category>
      </Styled.Categories>
    </Styled.Container>
  );
};

export default Expences;
