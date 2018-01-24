import React from 'react'
import {
    Form, Icon, Input, Button, Checkbox, Row, Dropdown, Menu,
} from 'antd'
import { Link, hashHistory } from 'dva/router'
import { connect } from 'react-redux'

import SearchForm from './SearchForm'
import ShowTable from './ShowTable'

const FormItem = Form.Item;
const mapStateToProps = ({
}) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(class __ extends React.Component {


    render() {
        return (
            <div id='admin_mediasourde_yet_online'>
                <Row>
                    <SearchForm  />
                </Row>
                <Row className="mt">
                    <ShowTable   />
                </Row>
            </div>
        )

    }
})
