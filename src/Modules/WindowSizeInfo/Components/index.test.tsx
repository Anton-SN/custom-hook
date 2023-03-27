import { render } from '@testing-library/react'
import { WindowSizeInfo } from './index';
import { WindowSizeContextProvider } from '../Context';


describe('Window size info', () => {
  test('Component exist', () => {
    const { container } = render(<WindowSizeContextProvider><WindowSizeInfo /></WindowSizeContextProvider>)
    expect(container).not.toBeNull();
  })

  test('Component contains two elements', () => {
    const { container } = render(<WindowSizeContextProvider><WindowSizeInfo /></WindowSizeContextProvider>)
    const countOfElement = (container.getElementsByClassName('text') as HTMLCollection).length;
    expect(countOfElement).toBe(2)
  })

  test('Text contain information about width and height window', () => {
    const { container } = render(<WindowSizeContextProvider><WindowSizeInfo /></WindowSizeContextProvider>)
    const elements = container.getElementsByClassName('text') as HTMLCollection;
    const widthInfo = elements[0].innerHTML
    const heightInfo = elements[1].innerHTML
    expect(widthInfo).toBe(`Window width: ${window.innerWidth} px`)
    expect(heightInfo).toBe(`Window height: ${window.innerHeight} px`)
  })
})
