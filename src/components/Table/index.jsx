import { Container } from "./styles";

import Select, {components } from 'react-select'
import { CustomStyles } from "../../styles/global";

export function Table({isBtn, ...rest}){
    const orders = [
      {
        code: "0004",
        date: "20/05 às 18h00",
        details: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
        status: "pendente"
      },
      {
        code: "0005",
        date: "24/05 às 18h00",
        details: "1 x Salada Radish, 1 x Torradas de Parma",
        status: "preparando"
      },
      {
        code: "0006",
        date: "30/05 às 13h00",
        details: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
        status: "entregue"
      }
    ]

    return (
        <Container>
            <div className="row" id="table-header">
                <div className="code header-cel">Código</div>
                <div className="date-time header-cel">Data e Hora</div>
                <div className="details header-cel">Detalhamento</div>
                <div className="status header-cel">Status</div>
            </div>
            
            {
            isBtn ?
            orders.map((order) => (
                <div className="row" key={order.code}>
                    <div className="cel code">{order.code}</div>
                    <div className="cel date-time">{order.date}</div>
                    <div className="cel details">{order.details}</div>
                    <div className="cel status">
                        <Select 
                            defaultValue={order.status === "" ? options[0] : options.find(option => option.value === order.status)}
                            options={options} 
                            components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
                            styles={CustomStyles}
                        />
                    </div>
                </div>
            ))

            :

            orders.map((order) => (
              <div className="row client-table" key={order.code}>
                  <div className="cel code">{order.code}</div>
                  <div className="cel date-time">{order.date}</div>
                  <div className="cel details">{order.details}</div>
                  <div className="cel status">
                    <Dot color={options.find(option => option.value === order.status).color} /> {order.status}
                  </div>
              </div>
          ))
          
          }

        </Container>
    )
}


const options = [
  { value: 'pendente', label: 'Pendente', color: '#FF0000' }, 
  { value: 'preparando', label: 'Preparando', color: '#FFFF00' },
  { value: 'entregue', label: 'Entregue', color: '#008000' } 
];

const Dot = (props) => (
  <span style={{
    height: '10px',
    width: '10px',
    backgroundColor: props.color,
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: '10px',
  }}></span>
);

const CustomOption = (props) => (
  <components.Option {...props}>
      <Dot color={props.data.color} />
      {props.data.label}
  </components.Option>
);

const CustomSingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>
      <Dot color={props.data.color} />
      {children}
  </components.SingleValue>
);