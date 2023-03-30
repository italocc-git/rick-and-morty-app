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
                <Col span={8}>
                <FormAntd.Item
                    label="Nome do Personagem"
                    name="name"
                    
                    >
                    <Input />
                </FormAntd.Item>
                </Col>
                <Col span={8}>
                <FormAntd.Item
                    label="Espécie"
                    name="species"
                    
                    >
                    <Select >
                        <Option value="Human">Humano</Option>
                        <Option value="Alien">Alienígena</Option>
                        <Option value="Humanoid">Humanoid</Option>
                        <Option value="unknown">Desconhecido</Option>
                        <Option value="Poopybutthole">Poopybutthole</Option>
                        <Option value="Mythological Creature">Criatura Mitológica</Option>
                        <Option value="Animal">Animal</Option>
                        <Option value="Robot">Robot</Option>
                        <Option value="Cronenberg">Cronenberg</Option>
                        <Option value="Disease">Disease</Option>
                        
                    </Select>
                </FormAntd.Item>
                </Col>
                <Col span={2}>
                    <FormAntd.Item
                        label="Status"
                        name="status"
                        
                        >
                        <Radio />
                    </FormAntd.Item>
                </Col>
                <Col span={2}>
                    <FormAntd.Item
                        label="Gênero"
                        name="gender"
                        
                        >
                        <Radio />
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