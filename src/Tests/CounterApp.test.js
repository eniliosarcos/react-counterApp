import { shallow } from "enzyme";
import CounterApp from "../Components/CounterApp";

describe('Prueba en componente CounterApp', () => {

    let wrapper = shallow(<CounterApp value={5}></CounterApp>);
    
    beforeEach(() => {
        wrapper = shallow(<CounterApp value={5}></CounterApp>);
    })

    test('Debe de mostrar CounterApp correctamente ', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el valor por defecto de 100', () => {

        const wrapper = shallow(<CounterApp value={100}></CounterApp>);
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100')
    });
    
    test('Debe de incrementar con el boton +1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('6');

    });

    test('Debe de decrementar con el boton -1', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('4');

    });
    
    test('Debe de resetear con el boton Reset', () => {
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('5');

    });
    
})
