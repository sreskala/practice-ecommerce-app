import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import PreviewCollection from '../preview-collection/PreviewCollection';

import { selectShopItems } from '../../redux/shop/shop.selectors';

//styles
import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({
            id,
            ...otherCollectionProps
        }) => (<PreviewCollection key={id} {...otherCollectionProps}/>))
}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
});

export default connect(mapStateToProps)(CollectionsOverview);