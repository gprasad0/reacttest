import {render,screen} from "@testing-library/react"
import {Greet} from './Greet';
test('Greet renders correctly',()=>{
    render(<Greet />)
    let textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()

})