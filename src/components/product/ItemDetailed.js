import React, { Component } from 'react';
import { Table } from 'reactstrap'

import PropTypes from 'prop-types'

import SizeDetail from './SizeDetail'

const propTypes = {
    sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired
}

class ItemDetailed extends Component {

    _renderDetailedColor(){
        const detailedColor = (
            <div>
                <p><b>Warna:</b> {this.props.colors.join(', ')}</p>
            </div>
        )
        return detailedColor;
    }

    _renderDetailedSize(){
        const detailedSize = this.props.sizes.map((item, i) => {
            return(
                <div key={i}>
                    <p style={{fontSize: '1.0rem', fontWeight: 'bold'}}>{`Size ${item.name}`}</p>
                        <SizeDetail {...item} />
                    <hr />
                </div>
            );
        })
        return detailedSize;
    }

    render(){
        return(
            <div>
                {this._renderDetailedColor()}
                {this._renderDetailedSize()}
                <p>* Ukuran Berdasarkan Standar Sale Stock</p>
                <hr />
            </div>
        );
        
    }
}

ItemDetailed.propTypes = propTypes;
export default ItemDetailed