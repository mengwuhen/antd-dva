import React from 'react'
import {
    Form, Icon, Input, Button, Table, Avatar, Tag, Popconfirm, Modal, Notification,
     Dropdown, Menu,Row, Col
} from 'antd'
import { Link, hashHistory } from 'dva/router'
import {connect} from 'react-redux'


const FormItem = Form.Item;
const warn = Modal.warn;


const mapDispatchToProps = (dispatch, props) => {
  
    return {
      
    }
}

export default connect(null, mapDispatchToProps)(class __ extends React.Component {
  
    render() {
   

        const {
            props: {
          
            }
        } = this
        const columnFun = () => {
           
            return [{
                title: '账号',
                dataIndex: 'orderNo',
                width: 220,
                fixed: 'left',
               
            }, {
                title: '基本属性',
                dataIndex: 'customerName1',
                width: 200,
               
            }, {
                title: '数据指标',
                dataIndex: 'customerName2',
               
            }, {
                title: '运营信息',
                dataIndex: 'customerName3',
               
            }, {
                title: '原创信息',
                dataIndex: 'customerName4',
                width: 120,
               
            }, {
                title: '信息更新时间',
                dataIndex: 'customerName5',
               
            }, {
                title: '操作',
                dataIndex: 'time2',
                fixed: 'right',
                width: 250,
            }]
        }
        let operatorFlag = false
        _.map(this.props.Authority, (item) =>{
            if(item.id === 111){
                operatorFlag = true
            }
        })
        return (
            <div>
                <Table
                    rowKey={record => record.mediaBindPriceId}
                    onChange={onTableChange.bind(this)}
                    pagination={{
                        ...pagination,
                        showSizeChanger: true,
                        showQuickJumper: true,
                        showTotal: total => `共 ${total} 项`,
                    }}
                    loading={loading}
                    scroll={{ x: 1200 }}
                    columns={columnFun()}
                    dataSource={data}
                >
                </Table>
            </div>
        )
    }
})
