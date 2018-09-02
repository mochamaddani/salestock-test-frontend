import React from 'react'
import { shallow, render } from 'enzyme'

import SizeDetail from './SizeDetail'

const items = {
        name: "S",
        lingkarDada: 90,
        lebarBahu: 36,
        panjangLengan: 44,
        panjang: 90,
        lingkarPinggang: 78,
        lingkarPinggul: 88,
    }

test('renders without crashing', () => {
	shallow(<SizeDetail {...items} />)
})
