import { Button, Select , Form as FormAntd, Input, Radio } from 'antd';
import { Col, Row } from 'antd';
interface FormProps {
    setFilter ?: (filter: string) => void;
}

export const Form = ({setFilter} : FormProps ) => {

        const onFinish = (values: any) => {
            console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
        };
        const {Option} = Select

    return(
        
            
            <FormAntd
            name="form"
            style={{  display: 'flex', justifyContent: 'space-between' }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Row gutter={24} style={{width:'100%', margin:'0px 15px'}} >
                <Col span={6}>
                <FormAntd.Item
                    label="Nome do Personagem"
                    name="name"
                    
                    >
                    <Input placeholder='Fill with a character to filter'/>
                </FormAntd.Item>
                </Col>
                <Col span={6}>
                <FormAntd.Item
                    label="Espécie"
                    name="species"
                    
                    >
                    <Select placeholder='Select a specie to filter'>
                        <Option value="Human">Human</Option>
                        <Option value="Alien">Alien</Option>
                        <Option value="Humanoid">Humanoid</Option>
                        <Option value="unknown">Unknown</Option>
                        <Option value="Poopybutthole">Poopybutthole</Option>
                        <Option value="Mythological Creature">Mythological Creature</Option>
                        <Option value="Animal">Animal</Option>
                        <Option value="Robot">Robot</Option>
                        <Option value="Cronenberg">Cronenberg</Option>
                        <Option value="Disease">Disease</Option>
                        
                    </Select>
                </FormAntd.Item>
                </Col>
                <Col span={4}>
                    <FormAntd.Item
                        label="Status"
                        name="status"
                        
                        >
                        <Radio.Group style={{display: 'flex', gap:'.3rem'}} buttonStyle='solid'>
                                <Radio.Button value="Alive">Alive</Radio.Button>
                                <Radio.Button value="Dead">Dead</Radio.Button>
                                <Radio.Button value="unknown">Unknown</Radio.Button>
                            </Radio.Group>
                    </FormAntd.Item>
                </Col>
                <Col span={4}>
                    <FormAntd.Item
                        label="Gênero"
                        name="gender"
                        
                        >
                            <Radio.Group style={{display: 'flex', gap:'.3rem'}} buttonStyle='solid'>
                                <Radio.Button value="Male">Male</Radio.Button>
                                <Radio.Button value="Female">Female</Radio.Button>
                                <Radio.Button value="Unknown">Unknown</Radio.Button>
                            </Radio.Group>
                        
                    </FormAntd.Item>
                </Col>
                <Col span={24}>
                    <FormAntd.Item>
                        <Button type="primary" htmlType='submit'>Filtrar</Button>
                    </FormAntd.Item>
                </Col>
            </Row>
        </FormAntd>
        
    )
}