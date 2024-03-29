import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarsRating from '../../features/StarsRating/StarsRating';
import { useDispatch, useSelector } from 'react-redux';
import { getCompareProducts, toggleCompare } from '../../../redux/productsRedux';

import { toggleFavourite } from '../../../redux/productsRedux';

import { useTranslation } from 'react-i18next';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  image,
  oldPrice,
  favorite,
  compare,
  userStars,
  id,
  promoted,
}) => {
  const { t } = useTranslation();

  const [compareValue, setCompareValue] = useState(compare);

  const compareProducts = useSelector(state => getCompareProducts(state));
  const dispatch = useDispatch();
  const toggleCompareValue = e => {
    e.preventDefault();
    setCompareValue(!compareValue);

    const productToCompare = compareProducts.find(p => p.id === id);

    if (productToCompare && productToCompare.isCompare) {
      dispatch(toggleCompare(id));
    } else if (!productToCompare && compareProducts.length < 4) {
      dispatch(toggleCompare(id));
    } else {
      return;
    }
  };

  const handleAddToFavButton = e => {
    e.preventDefault();
    dispatch(toggleFavourite(id));
  };
  return (
    <div className={styles.root}>
      <div className={`${styles.photo} ${promoted ? styles.photoPromoted : ''}`}>
        {!promoted && promo && <div className={styles.sale}>{promo}</div>}
        <img
          className={`${styles.image} ${promoted ? styles.imagePromoted : ''}`}
          src={image}
          alt={name}
        />
        {promoted && (
          <div>
            <Button className={styles.btnBasket} noHover variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}>ShoppingBasket</FontAwesomeIcon>
              <span> {t('productBox.cart')}</span>
            </Button>
            <div className={styles.counter}>
              <div className={styles.number}>
                <h3>25</h3>
                <p>{t('productBox.days')}</p>
              </div>
              <div className={styles.number}>
                <h3>10</h3>
                <p>{t('productBox.hours')}</p>
              </div>
              <div className={styles.number}>
                <h3>45</h3>
                <p>{t('productBox.minutes')}</p>
              </div>
              <div className={styles.number}>
                <h3>30</h3>
                <p>{t('productBox.seconds')}</p>
              </div>
            </div>
          </div>
        )}
        {!promoted && (
          <div className={styles.buttoncontainer}>
            <Button variant='small' className={styles.buttons}>
              {t('productBox.view')}
            </Button>
            <Button variant='small' className={styles.buttons}>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
              {t('productBox.cart')}
            </Button>
          </div>
        )}
      </div>
      <div className={`${styles.content} ${promoted ? styles.contentPromoted : ''}`}>
        <h5>{name}</h5>
        <StarsRating stars={stars} userStars={userStars} id={id}></StarsRating>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          {promoted && (
            <Button variant='outline'>
              <FontAwesomeIcon icon={faEye}>{t('productBox.watch')}</FontAwesomeIcon>
            </Button>
          )}
          <Button
            className={favorite ? styles.favoriteActive : ''}
            onClick={handleAddToFavButton}
            variant='outline'
          >
            <FontAwesomeIcon icon={faHeart}>{t('productBox.favorite')}</FontAwesomeIcon>
          </Button>
          <Button
            className={compare ? styles.compareActive : ''}
            onClick={toggleCompareValue}
            variant='outline'
          >
            <FontAwesomeIcon icon={faExchangeAlt}>
              {t('productBox.compare')}
            </FontAwesomeIcon>
          </Button>
        </div>
        {oldPrice && (
          <div>
            <span className={styles.oldPrice}>$ {oldPrice}</span>
          </div>
        )}
        <div className={styles.price}>
          <Button className={styles.btnprice} noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  userStars: PropTypes.number,
  id: PropTypes.string,
  oldPrice: PropTypes.number,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  promoted: PropTypes.bool,
};

export default ProductBox;
