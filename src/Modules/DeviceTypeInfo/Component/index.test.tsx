import { render, screen } from '@testing-library/react'
import { DeviceTypeInfo } from './index';

describe('Device type info', () => {
  test('Element exist and contain userAgent info', () => {
    render(<DeviceTypeInfo />)
    const container = screen.getByTestId('device_type')
    const text = container.querySelector('p') as HTMLParagraphElement
    expect(text.innerHTML).toBe('Device type: ' + window.navigator.userAgent);
  })
})
