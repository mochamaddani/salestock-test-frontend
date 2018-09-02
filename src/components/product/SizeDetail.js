import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    lingkarDada: PropTypes.number,
    lebarBahu: PropTypes.number, 
    panjangLengan: PropTypes.number,
    lingkarLengan: PropTypes.number,
    panjang: PropTypes.number,
    lingkarPinggang: PropTypes.number,
    lingkarPinggul: PropTypes.number,
}

const defaultProps = {
    lingkarDada: null,
    lebarBahu: null, 
    panjangLengan: null,
    lingkarLengan: null,
    Panjang: null,
    lingkarPinggang: null,
    lingkarPinggul: null,
}

class SizeDetail extends Component {

    _renderDetailSize(){
        const detailSizes = [];
        if (this.props.lingkarDada!==null) {
            detailSizes.push(
                <div key={0} style={{padding: '10px', height: '80px', flexDirection: 'column', alignItems: 'center', display: 'flex'}}>
                    <p>Lingkar Dada</p>
                    <p>{`${this.props.lingkarDada} cm`}</p>
                </div>
            )
        }

        if (this.props.lebarBahu!==null) {
            detailSizes.push(
                <div key={1} style={{padding: '10px', height: '80px', flexDirection: 'column', alignItems: 'center', display: 'flex'}}>
                    <p>Lebar Bahu</p>
                    <p>{`${this.props.lebarBahu} cm`}</p>
                </div>
            )
        }

        if (this.props.panjangLengan!==null) {
            detailSizes.push(
                <div key={2} style={{padding: '10px', height: '80px', flexDirection: 'column', alignItems: 'center', display: 'flex'}}>
                    <p>Panjang Lengan</p>
                    <p>{`${this.props.panjangLengan} cm`}</p>
                </div>
            )
        }

        if (this.props.panjang!==null) {
            detailSizes.push(
                <div key={3} style={{padding: '10px', height: '80px', flexDirection: 'column', alignItems: 'center', display: 'flex'}}>
                    <p>Panjang</p>
                    <p>{`${this.props.panjang} cm`}</p>
                </div>
            )
        }

        if (this.props.lingkarPinggang!==null) {
            detailSizes.push(
                <div key={4} style={{padding: '10px', height: '80px', flexDirection: 'column', alignItems: 'center', display: 'flex'}}>
                    <p>Lingkar Pinggang</p>
                    <p>{`${this.props.lingkarPinggang} cm`}</p>
                </div>
            )
        }

        if (this.props.lingkarPinggul!==null) {
            detailSizes.push(
                <div key={5} style={{padding: '10px', height: '80px', flexDirection: 'column', alignItems: 'center', display: 'flex'}}>
                    <p>Lingkar Pinggul</p>
                    <p>{`${this.props.lingkarPinggul} cm`}</p>
                </div>
            )
        }
        
        return detailSizes
    }

    render(){
        return(
            <div style={{width: '100%', display: 'flex', flexWrap: 'wrap'}}>
                {this._renderDetailSize()}
            </div>
        );
    }
}

SizeDetail.propTypes = propTypes;
SizeDetail.defaultProps = defaultProps

export default SizeDetail;