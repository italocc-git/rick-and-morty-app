import { IFilterTypes } from '@/types'
import { Button, Select, Form as FormAntd, Input, Radio, Col, Row } from 'antd'

interface FormProps {
  setFilter: (filter: IFilterTypes) => void
  /* setPage: (page: (prevState: TablePagination) => TablePagination) => void */
}

export const Form = ({ setFilter }: FormProps) => {
  const [form] = FormAntd.useForm()

  const filterInitialValues = {
    name: '',
    gender: '',
    species: '',
    status: '',
  } as IFilterTypes

  const onFinish = (values: IFilterTypes) => {
    const { name, species, status, gender } = values

    setFilter({
      name: name ?? '',
      species: species ?? '',
      status: status ?? '',
      gender: gender ?? '',
    })
  }

  const onReset = () => {
    form.resetFields()
    form.submit()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const { Option } = Select

  return (
    <FormAntd
      name="form"
      form={form}
      style={{ display: 'flex', justifyContent: 'space-around' }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
      initialValues={filterInitialValues}
    >
      <Row gutter={32} style={{ width: '100vw' }}>
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <FormAntd.Item
            label="Character Name"
            name="name"
            rules={[{ message: 'Only 8 letters', max: 8 }]}
          >
            <Input placeholder="Fill with a character name to filter" />
          </FormAntd.Item>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <FormAntd.Item label="Specie" name="species">
            <Select placeholder="Select a specie to filter" allowClear>
              <Option value="">All</Option>
              <Option value="Human">Human</Option>
              <Option value="Alien">Alien</Option>
              <Option value="Humanoid">Humanoid</Option>
              <Option value="unknown">Unknown</Option>
              <Option value="Poopybutthole">Poopybutthole</Option>
              <Option value="Mythological Creature">
                Mythological Creature
              </Option>
              <Option value="Animal">Animal</Option>
              <Option value="Robot">Robot</Option>
              <Option value="Cronenberg">Cronenberg</Option>
              <Option value="Disease">Disease</Option>
            </Select>
          </FormAntd.Item>
        </Col>
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <FormAntd.Item label="Status" name="status">
            <Radio.Group
              style={{ display: 'flex', gap: '.1rem' }}
              buttonStyle="solid"
            >
              <Radio.Button value="Alive">Alive</Radio.Button>
              <Radio.Button value="Dead">Dead</Radio.Button>
              <Radio.Button value="unknown">Unknown</Radio.Button>
            </Radio.Group>
          </FormAntd.Item>
        </Col>
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <FormAntd.Item label="Gender" name="gender">
            <Radio.Group
              style={{ display: 'flex', gap: '.1rem' }}
              buttonStyle="solid"
            >
              <Radio.Button value="Male">Male</Radio.Button>
              <Radio.Button value="Female">Female</Radio.Button>
              <Radio.Button value="Unknown">Unknown</Radio.Button>
            </Radio.Group>
          </FormAntd.Item>
        </Col>
        <Col xxl={8} xl={8} lg={0} md={0} sm={0} xs={0}></Col>
        <Col xxl={2} xl={2} lg={2} md={3} sm={4} xs={5}>
          <FormAntd.Item>
            <Button
              type="default"
              style={{ width: '100%' }}
              onClick={onReset}
              htmlType="button"
            >
              Reset
            </Button>
          </FormAntd.Item>
        </Col>
        <Col xxl={2} xl={2} lg={2} md={3} sm={4} xs={5}>
          <FormAntd.Item>
            <Button type="primary" style={{ width: '100%' }} htmlType="submit">
              Filter
            </Button>
          </FormAntd.Item>
        </Col>
      </Row>
    </FormAntd>
  )
}
