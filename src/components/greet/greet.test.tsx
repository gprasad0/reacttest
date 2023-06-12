import {render,screen} from "@testing-library/react"
import {Greet} from './Greet';
test('Greet renders correctly',()=>{
    render(<Greet />)
    let textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()

})


test('Greet rencers name',()=>{
    render(<Greet name={'Guru'} />)
    let textElement = screen.getByText('Hello Guru')
    expect(textElement).toBeInTheDocument()
})