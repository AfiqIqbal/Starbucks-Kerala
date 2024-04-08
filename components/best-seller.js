import React from 'react'

import PropTypes from 'prop-types'

const BestSeller = (props) => {
  return (
    <>
      <div className={`best-seller-category-card ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.categoryImg}
          className="best-seller-image"
        />
        <span className="best-seller-text">{props.name}</span>
      </div>
      <style jsx>
        {`
          .best-seller-category-card {
            flex: 0 0 auto;
            cursor: pointer;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
          }
          .best-seller-category-card:hover {
            color: var(--dl-color-pallet-yellow);
            transform: scale(1.2);
          }
          .best-seller-image {
            width: 120px;
            height: 120px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
            object-position: bottom;
          }
          .best-seller-text {
            line-height: 14px;
          }

          @media (max-width: 767px) {
            .best-seller-category-card {
              width: 48%;
            }
            .best-seller-image {
              width: 100%;
              height: 250px;
            }
          }
          @media (max-width: 479px) {
            .best-seller-category-card {
              width: 100%;
            }
            .best-seller-root-class-name {
              width: auto;
            }
            .best-seller-root-class-name1 {
              width: auto;
            }
            .best-seller-root-class-name2 {
              width: auto;
            }
            .best-seller-root-class-name3 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

BestSeller.defaultProps = {
  rootClassName: '',
  categoryImg: '/1000111356-1500w.png',
  imageAlt: 'image',
  name: 'AVIL MILK SP',
}

BestSeller.propTypes = {
  rootClassName: PropTypes.string,
  categoryImg: PropTypes.string,
  imageAlt: PropTypes.string,
  name: PropTypes.string,
}

export default BestSeller
