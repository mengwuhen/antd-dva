import React from 'react'
import {Button,Form,Input,Select} from 'antd'
import { connect } from 'react-redux'

const FormItem = Form.Item
const Option = Select.Option





export default connect(null, null)((Form.create({ }))(class __ extends React.Component {
    render() {
        const {
                props: {
                    form: {
                        getFieldDecorator
                    },
                 
                   
                }
            } = this

        return (
            <div>
                <Form layout="inline" >

                    <FormItem>
                        {getFieldDecorator('queryContent')(
                            <Input
                            style={{ width: 220 }}
                            placeholder="请输入账号名/UID/ID"
                        />
                        )}
                    </FormItem>

                    <FormItem label='平台'>
                        {getFieldDecorator('mediaType')(
                            <Select  allowClear={true}  style={{width:120}}>
                                    <Option key={1} value={'2'}>微博</Option>
                                    <Option key={2} value={'1'}>微信</Option>
                                    <Option key={3} value={'3'}>头条</Option>
                            </Select>
                        )}
                    </FormItem>

                    <FormItem label='标签'>
                        {getFieldDecorator('industry')(
                            <Select allowClear showSearch placeholder="请选择" style={{width:120}}>
                            {industrys.map((item, idx) => (
                                <Option key={item} value={item}>{item}</Option>
                            ))}
                        </Select>
                        )}
                    </FormItem>

                    <FormItem label='账号等级'>
                        {getFieldDecorator('accountLevel')(
                            <Select  allowClear={true}  style={{width:120}}>
                                    <Option key={2} value={'1'}>顶级</Option>
                                    <Option key={3} value={'2'}>一级</Option>
                                    <Option key={4} value={'3'}>二级</Option>
                                    <Option key={5} value={'4'}>三级</Option>
                            </Select>
                        )}
                    </FormItem>

                    <FormItem label='推荐等级'>
                        {getFieldDecorator('recommendLevel')(
                            <Select  allowClear={true}  style={{width:120}}>
                                    <Option key={1} value={'A'}>A</Option>
                                    <Option key={2} value={'B'}>B</Option>
                                    <Option key={3} value={'C'}>C</Option>
                                    <Option key={4} value={'D'}>D</Option>
                                    <Option key={5} value={'S'}>S</Option>
                            </Select>
                        )}
                    </FormItem>

                    <FormItem>
                        <Button type="primary" htmlType="submit">搜索</Button>
                    </FormItem>

                    <FormItem>
                        <Button type="primary" onClick={onResetBtnClick.bind(this)}>重置</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}))



