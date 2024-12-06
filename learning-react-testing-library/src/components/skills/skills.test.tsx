import {render,screen} from '@testing-library/react';
import {Skills} from "./skills";

describe("Skills component",()=>{
  const skills=['Html','Css','Js']

  test('render correctly',()=>{
    render(<Skills skills={skills}/>)
    const listElement=screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  })

  test('renders a list of skills',()=>{
    render(<Skills skills={skills}/>)
    const listItemElement = screen.getAllByRole('listitem');
    expect(listItemElement).toHaveLength(skills.length);
  })
})